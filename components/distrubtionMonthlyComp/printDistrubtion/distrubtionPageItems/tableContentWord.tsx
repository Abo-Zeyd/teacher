"use client";

// تأكد من أن الكود يعمل في المتصفح فقط
// import { styles } from "./styles";
import { useDistributionMonthlyContext } from "@/contexes/distributionMonthlyContex";
import { useEffect, useState } from "react";

function TableContent() {
  const { distMonthly, processedData, useSubjects, numberCollumns, formValues, distTitle } =
    useDistributionMonthlyContext();
// 
const pargraphStyle: React.CSSProperties = {
  margin: "0",
  paddingRight: "150px",
  textAlign: "right",
  direction: "rtl",
  fontSize: "16px",
  width: "fit-content",
};
  const [, setRotatedCells] = useState<
    Record<string, "vertical" | "horizontal">

  >({});
  useEffect(() => {
    const saved = localStorage.getItem("rotatedCells");
    if (saved) setRotatedCells(JSON.parse(saved));
  }, []);

  if (!distMonthly) {
    return (
      <div className="flex items-center justify-center p-4">
        <p className="text-gray-500">جاري التحميل...</p>
      </div>
    );
  }

  return (
    <div
      className={`w-full h-full overflow-x-auto  `}
    >

      <div id="printableArea" className="content-area">
        <table className="header-table" style={{ width: "100%", border: "none", color:"black"  }}>
          <tr>
            <td className="header-table-info" style={{ textAlign: "right", paddingLeft: "160px" , fontSize:"18px" }}>
              <p  style={pargraphStyle}><b>مديرية التربية:</b> {formValues.directorate}</p>
              <p  style={pargraphStyle}><b>المقاطعة:</b> {formValues.district}</p>
              <p  style={pargraphStyle}><b>المدرسة:</b> {formValues.school}</p>
            </td>

            <td style={{ width: "33%", verticalAlign: "center", textAlign: "center", fontSize: "24px", border: "none" }}>

              <p><b>{distTitle}</b></p>

            </td>
            <td className="header-table-info" >
              <div style={{ alignContent: "right",  fontSize:"18px" }}>
                <p style={pargraphStyle}><b>الأستاذ:</b> {formValues.teacher}</p>
                <p style={pargraphStyle}><b>الفوج:</b>  {formValues.group}</p>
                <p style={pargraphStyle}><b>السنة الدراسية:</b> {formValues.academicYear}</p>
              </div>
            </td>
          </tr>
        </table>
        <br />
        <br />
        <br />
        <table
          dir="rtl"
          style={{ borderCollapse: "collapse", width: "100%" }}
          className="data-table"

        >
          <thead >
            <tr style={{ background: "#e6e6e6" }}>
              {useSubjects?.map((key, index) => (
                <th key={index} scope="col" style={{ border: "1px solid black", 
                color: "black", textAlign: "center", fontSize:"18px"  }}>
                  {key}
                </th>
              ))}
            </tr>
          </thead>

          <tbody >
            {distMonthly.map((item, index) => (
              <tr key={index} >
                {Object.entries(item)
                  .slice(0, numberCollumns)
                  .map(([, value], valueIndex) => {
                    if (
                      value !== 0 &&
                      processedData.rowSpanMap[index][valueIndex] > 0 &&
                      processedData.colSpanMap[index][valueIndex] > 0
                    ) {
                      return (
                        <td
                          key={valueIndex}
                          rowSpan={processedData.rowSpanMap[index][valueIndex]}
                          colSpan={processedData.colSpanMap[index][valueIndex]}
                          style={{ border: "1px solid black",  color: "black", textAlign: "center", fontSize:"16px"  }}
                        >
                          {value}
                        </td>
                      );
                    }
                    return null;
                  })}
              </tr>
            ))}
          </tbody>
        </table>
        <table className="header-table" style={{color:"black", marginTop: "50px",  width: "100%", fontSize: "18px", }}>
          <tr>
            <td style={{ width: "40%", verticalAlign: "top", textAlign: "center", lineHeight: "1", margin: "0px 0px",
               border: "none" }}>
              <p>الأستاذ:</p>
            </td>
            <td style={{ width: "40%", verticalAlign: "top", textAlign: "center", border: "none" }}>
              <p>المدير:</p>
            </td>

          </tr>
        </table>
      </div>
    </div>
  );
}

export default TableContent;
