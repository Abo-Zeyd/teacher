"use client";

// تأكد من أن الكود يعمل في المتصفح فقط
// import { styles } from "./styles";
import { usePrintContext } from "../printContext";
import { useDistributionMonthlyContext } from "@/contexes/distributionMonthlyContex";
import { rotateColumn } from "@/utils/mergCells";
import { useEffect, useState } from "react";

function TableContent() {
  const { distMonthly, processedData, useSubjects, numberCollumns,  } =
    useDistributionMonthlyContext();
  const { bodyStyle, styleType } = usePrintContext();
  const [rotatedCells, setRotatedCells] = useState<
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
      className={`w-full overflow-x-auto  ${styleType.tableStyle[bodyStyle]}`}
    >
      {/* <div className="test">توزيع شهري</div> */}
      <table   dir="rtl" className="w-full border-collapse table-auto ">
        <thead className={styleType.tableThedStyle[bodyStyle]}>
          <tr>
            {useSubjects?.map((key, index) => (
              <th
                key={index}
                scope="col"
                className={`${styleType.tableCellStyle[bodyStyle]} text-center align-middle font-semibold  `}
              >
                {key}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className={styleType.tableBodyStyle[bodyStyle]}>
          {distMonthly.map((item, index) => (
            <tr
              key={index}
              className="hover:bg-gray-50 transition-colors duration-150"
            >
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
                        className={`
    ${styleType.tableCellStyle[bodyStyle]}
    text-center align-middle transition-all duration-300 transform origin-center 
    ${
      processedData.colSpanMap[index][valueIndex] < 2 &&
                        (rotatedCells[`${index}-${valueIndex}`] === "vertical"
                          ? "writing-mode:vertical-rl text-orientation:mixed rotate-180"
                          : rotatedCells[`${index}-${valueIndex}`] ===
                            "horizontal"
                          ? ""
        : rotateColumn(
            useSubjects[valueIndex],
            processedData.rowSpanMap[index][valueIndex]
          ))
    }
  `}
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
      
    </div>
  );
}

export default TableContent;
