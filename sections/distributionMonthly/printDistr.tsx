"use client";

// import PrintableComponent from "@/components/distrubtionMonthlyComp/printDistrubtion/inputComponent";
// import { PrintContextContext } from "@/components/distrubtionMonthlyComp/printDistrubtion/printContext";
// import PrintTolsBar from "@/components/distrubtionMonthlyComp/printDistrubtion/printTolsBar";
import {
  HeaderBar,
  InputComponent,
} from "@/components/distrubtionMonthlyComp/printDistrubtion/index";
// import { PrintContextContext } from "@/components/distrubtionMonthlyComp/printDistrubtion/printContext";
import { useDistributionMonthlyContext } from "@/contexes/distributionMonthlyContex";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { useEffect, useRef } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { useReactToPrint } from "react-to-print";

// filepath: e:\supabaseApi\teacher\sections\distributionMonthly\printDistr.tsx

const PrintComponent = () => {
  const componentRef = useRef<HTMLInputElement>(null);

  const {
    shouldShowdevPrintDistrubtion,
    setShouldShowdevPrintDistrubtion,
    fontName,
    setFormValues,
  } = useDistributionMonthlyContext();

  useEffect(() => {
    const storedValues = localStorage.getItem("formValues");
    if (storedValues) {
      const parsedValues = JSON.parse(storedValues);
      // setLocalFormValues(parsedValues);
      setFormValues(parsedValues); // تحديث القيم في السياق أيضًا
    }
  }, [setFormValues]);
  const handlePrint = useReactToPrint({
    // المرجع للمكون المراد طباعته
    contentRef: componentRef,
    documentTitle: `توزيع`,

    onPrintError: (errorLocation, error) => {
      alert(
        `❌ خطأ في ${errorLocation}: ${error.message} حدث خطأ أثناء الطباعة. يرجى المحاولة مرة أخرى!`
      );
    },
    onBeforePrint: async () => {
      const styles = document.createElement("style");
      styles.innerHTML = `
        @media print {
          * {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          body {
              font-family: '${fontName}', sans-serif !important;
              margin-top: 20mm !important; /* Add margin to the top of the page */
          }
          thead {
  display: table-row-group !important;
}

          tbody {
            display: table-row-group !important;
          }
          table {
            page-break-inside: auto !important;
          }
          tr {
            page-break-inside: avoid !important; /* تجنب تقسيم الصفوف */
            page-break-after: auto !important;
          }
          }
      `;
      document.head.appendChild(styles);
    },
  });

  // الكود المعدل لتوليد PDF كنص بدلاً من صورة
  const savePdf = () => {
    const element = document.getElementById("printableArea");
    if (!element) {
      alert("العنصر المطلوب غير موجود");
      return;
    }

    try {
      // إنشاء كائن jsPDF جديد
      const pdf = new jsPDF("p", "mm", "a4");

      // استخدام خط يدعم العربية أو الخط الافتراضي
      // jsPDF لا يدعم العربية بشكل افتراضي، لذا سنستخدم html2canvas كبديل
      console.log("تحويل إلى صورة بسبب عدم دعم العربية في jsPDF");

      // استخدام html2canvas لحفظ النص العربي بشكل صحيح
      html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
        // إعدادات لضمان عرض النصوص العربية بشكل صحيح
        onclone: (clonedDoc) => {
          // التأكد من أن الخط العربي محمل في المستند المستنسخ
          const style = clonedDoc.createElement("style");
          style.textContent = `
                    * {
                        font-family: '${fontName}', 'Arial', sans-serif !important;
                        direction: rtl !important;
                        text-align: right !important;
                    }
                    /* إصلاح النصوص العمودية المقلوبة */
                    .vertical-text, [style*="writing-mode: vertical"], [style*="transform: rotate"] {
                        writing-mode: vertical-rl !important;
                        text-orientation: mixed !important;
                        transform: none !important;
                        direction: rtl !important;
                    }
                    /* إصلاح النصوص التي تستخدم CSS transform للدوران */
                    [style*="transform: rotate(90deg)"], [style*="transform: rotate(-90deg)"] {
                        writing-mode: vertical-rl !important;
                        text-orientation: upright !important;
                        transform: none !important;
                    }
                    /* إصلاح الجداول مع النصوص العمودية */
                    table td, table th {
                        vertical-align: middle !important;
                    }
                    /* إصلاح العناصر التي تحتوي على نصوص عمودية */
                    .rotated-text, .vertical-cell {
                        writing-mode: vertical-rl !important;
                        text-orientation: upright !important;
                        transform: none !important;
                        direction: rtl !important;
                    }
                    @media print {
                        * {
                            -webkit-print-color-adjust: exact;
                            print-color-adjust: exact;
                        }
                    }
                `;
          clonedDoc.head.appendChild(style);

          // إصلاح إضافي للنصوص العمودية باستخدام JavaScript
          const verticalElements = clonedDoc.querySelectorAll(
            '[style*="transform: rotate"], .vertical-text, [style*="writing-mode: vertical"]'
          );
          verticalElements.forEach((el) => {
            // إزالة أي تحويلات CSS قد تسبب المشكلة
            if (el instanceof HTMLElement) {
              el.style.transform = "none";
              el.style.writingMode = "vertical-rl";
              el.style.textOrientation = "upright";
              el.style.direction = "rtl";
            }
          });
        },
      })
        .then((canvas) => {
          // تحويل الصورة إلى PDF
          const imgData = canvas.toDataURL("image/png");
          const pdf = new jsPDF("p", "mm", "a4");

          // حساب أبعاد الصورة لتتناسب مع صفحة A4
          const imgProps = pdf.getImageProperties(imgData);
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

          // إضافة الصورة إلى PDF
          pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

          // حفظ ملف PDF
          pdf.save("distribution.pdf");
        })
        .catch((error) => {
          console.error("خطأ في إنشاء PDF:", error);
          alert("حدث خطأ أثناء إنشاء ملف PDF. يرجى المحاولة مرة أخرى.");
        });

      return; // إنهاء الدالة هنا لتجنب تنفيذ الكود القديم
    } catch (error) {
      console.error("خطأ في إنشاء PDF:", error);
      alert("حدث خطأ أثناء إنشاء ملف PDF. يرجى المحاولة مرة أخرى.");
    }
  };

  // دالة لحفظ الملف كملف Word متوافق مع Microsoft Word
  const saveWord = () => {
    const element = document.getElementById("printableArea");
    if (!element) {
      alert("العنصر المطلوب غير موجود");
      return;
    }

    try {
      // إنشاء محتوى HTML متوافق مع Microsoft Word
      const htmlContent = `
          <html xmlns:o="urn:schemas-microsoft-com:office:office"
                xmlns:w="urn:schemas-microsoft-com:office:word"
                xmlns="http://www.w3.org/TR/REC-html40">
          <head>
              <meta charset="UTF-8">
              <meta name="ProgId" content="Word.Document">
              <meta name="Generator" content="Microsoft Word 15">
              <meta name="Originator" content="Microsoft Word 15">
               <title>تقرير التوزيع الشهري</title>
               <!--[if gte mso 9]>
              <xml>
              <w:WordDocument>
                <w:View>Print</w:View>
                <w:Zoom>100</w:Zoom>
                <w:DoNotOptimizeForBrowser/>
                <w:Orientation>Landscape</w:Orientation>
              </w:WordDocument>
              </xml>
              <![endif]-->

              <style>
                   @page Section1 {
      size: 29.7cm 21cm; /* A4 landscape */
      margin: 1cm;
      mso-page-orientation: landscape;
  }

  div.Section1 { page: Section1; }

  body {
      font-family: 'Sakkal Majalla', sans-serif;
      direction: rtl;
      text-align: right;
      margin: 0;
      padding: 10px;
      line-height: 1;
      background: white;
  }
                  
                          /* تنسيق جدول رأس التقرير (جدول ثلاثي مخفي) */
                  .header-table {
                      width: 100%;
                      margin-bottom: 50px; 
                      
                      border: none;
                      mso-border-alt: none;
                  }
                          .header-row {
                            display: flex;
                            justify-content: space-between;
                          }
                          .header-left, .header-center, .header-right {
                            width: 33.33%;
                            padding: 0px;
                            border: none;
                            text-align: right;
                      font-size: 12px; 
                  }
                          .header-left p {
                            margin: 2px 0;
                          }

                  /* تنسيق العنوان الرئيسي - تم إلغاء الحدود والخلفية */
                  .title-container {
                      text-align: center;
                      /* تقليل الحشو لتقريب العنوان من المحتوى */
                      padding: 5px 0 5px 0; 
                  }
                  .title {
                      font-size: 18px;
                      font-weight: bold;
                      
                      margin: 0;
                      display: inline-block; 
                      /* إلغاء الحدود والخلفية */
                      border: none; 
                      background-color: transparent; 
                      padding: 0; 
                  }
                  
                  .content-area {
                      margin-top: 30px; 
                  }

                  
                  .header-table-info {
                      width:33%; 
                      vertical-align: top; 
                      text-align:right; 
                      line-height:1; 
                      margin:0px 0px;
                      font-size:14px; 
                      border: none;
                      }
                     .content-area {
  display: inline-block;
  vertical-align: middle;
  margin: 0 10px; /* مسافة بسيطة من الجانبين */
}

      table {
  border-collapse: collapse;
  width: 100%;
  table-layout: auto;
  word-wrap: break-word;        /* لتفعيل التفاف النص */
  overflow-wrap: break-word;    /* دعم إضافي للتفاف النص */
  margin-bottom: 10px;          /* مسافة صغيرة بين الجداول */
}


                 
              </style>
          </head>
          <body>
              <div class="Section1">
                      
                          <div class="content-area ">
                              ${element.innerHTML}
                          </div>
                      <br/>
                      <br/>

                          

                      </div>
          </body>
          </html>
      `;

      // بقية دالة حفظ الملف كما هي...
      const blob = new Blob([htmlContent], {
        type: "application/msword",
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "distribution.doc";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      console.log("تم إنشاء ملف Word متوافق مع Microsoft Word");
    } catch (error) {
      console.error("خطأ في إنشاء ملف Word:", error);
      alert("حدث خطأ أثناء إنشاء ملف Word. يرجى المحاولة مرة أخرى.");
    }
  };
  const handleDownloadDocx = async () => {
    // توجيه المتصفح إلى نقطة نهاية API
    window.location.href = "/api/generate-report";
  };
  // **ملاحظة:** إذا لم تنجح عملية AutoTable بتحويل الترويسات العلوية (خارج الجدول)،
  // يمكنك استخدام 'pdf.text' مع الخط المضاف لكتابتها يدوياً.

  return (
    <>
      {shouldShowdevPrintDistrubtion && (
        // <PrintContextContext>
        <div className="fixed inset-0 z-auto flex flex-row bg-black/50 overflow-auto">
          <div>
            <div className="absolute flex flex-col text-lg text-accent bg-zinc-600 p-2 rounded border-solid border-2 border-text shadow-md resize-none w-fit z-50 min-h-screen">
              <div className="flex justify-end p-1">
                <IoMdCloseCircle
                  className="cursor-pointer text-secondary text-4xl"
                  onClick={() => setShouldShowdevPrintDistrubtion(false)}
                  color="white"
                />
              </div>
              <HeaderBar
                handlePrint={handlePrint}
                sevePdf={savePdf}
                saveWord={saveWord}
              />
              {/* <PrintTolsBar handlePrint={handlePrint} /> */}

              <InputComponent ref={componentRef} />
            </div>
          </div>
        </div>
        // </PrintContextContext>
      )}
    </>
  );
};

export default PrintComponent;
