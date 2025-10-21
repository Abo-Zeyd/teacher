import html2canvas from "html2canvas";
import jsPDF from "jspdf";

/**
 * أسماء المواد الدراسية باللغة الإنجليزية
 * تستخدم في التعامل مع البيانات في النظام
 */
export const arabicCourseNames = [
    "section",
    "Units",
    "Methods",
    "Grammar",
    "MorphologiSpelling",
    "Vocabulary",
    "Recitations",
    "Composition",
    "Projects",
  ] as const;

/**
 * أسماء المواد الدراسية باللغة العربية
 * تستخدم في عرض البيانات للمستخدم
 */
export const subjects = [
    "الأسابيع",
    "المحور",
    "الوحدات",
    "الأساليب",
    "التراكيب النحوية",
    "صرف وإملاء",
    "الرصيد اللغوي",
    "المحفوظات",
    "التعبير الكتابي",
    "المشاريع",
    "التربية الإسلامية",
    "الرياضيات",
    "التربية العلمية",
    "التربية المدنية",
    "التاريخ",
    "الجغرافيا",
    "التربية الفنية",
] as const;

/**
 * نوع البيانات للمواد الدراسية
 */
export type CourseName = typeof arabicCourseNames[number];
export type SubjectName = typeof subjects[number];

/**
 * التحقق من صحة اسم المادة
 * @param name اسم المادة المراد التحقق منها
 * @returns true إذا كان الاسم صحيحاً
 */
export function isValidCourseName(name: string): name is CourseName {
  return arabicCourseNames.includes(name as CourseName);
}

/**
 * التحقق من صحة اسم المادة العربية
 * @param name اسم المادة المراد التحقق منها
 * @returns true إذا كان الاسم صحيحاً
 */
export function isValidSubjectName(name: string): name is SubjectName {
  return subjects.includes(name as SubjectName);
}

/**
 * تحويل اسم المادة الإنجليزية إلى العربية
 * @param courseName اسم المادة بالإنجليزية
 * @returns اسم المادة بالعربية
 */
export function getArabicName(courseName: CourseName): SubjectName {
  const index = arabicCourseNames.indexOf(courseName);
  return subjects[index];
}

/**
 * تحويل اسم المادة العربية إلى الإنجليزية
 * @param subjectName اسم المادة بالعربية
 * @returns اسم المادة بالإنجليزية
 */
export function getEnglishName(subjectName: SubjectName): CourseName {
  const index = subjects.indexOf(subjectName);
  return arabicCourseNames[index];
}

export function downloadPDF(targetElementId: string, fileName?: string) {
  const element = document.getElementById(targetElementId);
  if (!element) {
    alert("العنصر المطلوب غير موجود");
    return;
  }

  html2canvas(element, {
    scale: 2,
    useCORS: true,
  }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const imgWidth = 210;
    const pageHeight = 295;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;

    const pdf = new jsPDF("p", "mm", "a4");
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save(fileName || "document.pdf");
  });
}