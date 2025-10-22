"use client";

import Arbic_Unit_List from "./tableControls/comboArabicUnits";
import ComboWeeksGenral from "./tableControls/comboWeeksGenral";
import ComboWeeksHeder from "./tableControls/comboWeeksHeder";
import DeleteMergeCell from "./tableControls/deleteMergeCell";
import Edit_cell_icon from "./tableControls/edit_cell_icon";
import { useDistributionMonthlyContext } from "@/contexes/distributionMonthlyContex";
import { DistributionData } from "@/lib/distributionData";
import { AiOutlineDeleteRow } from "react-icons/ai";
import {
  mergCellprocessMatrix,
  rotateColumn,
} from "@/utils/mergCells";
import { subjects } from "@/utils/useArrays";
import React, { useEffect, useRef, useState } from "react";
import { CgArrowsMergeAltV } from "react-icons/cg";
import { PiDeviceRotateFill } from "react-icons/pi";

function DataTable() {
  //-------------------------------
  // 🧩 منطق التحكم السريع في عرض الأعمدة (RTL + سحب سلس)
  const [columnWidths, setColumnWidths] = useState<number[]>([]);
  const resizingCol = useRef<number | null>(null);
  const startX = useRef(0);
  const startWidth = useRef(0);
  const [activeCol, setActiveCol] = useState<number | null>(null);

  const handleMouseDown = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    e.stopPropagation();

    resizingCol.current = index;
    startX.current = e.clientX;
    startWidth.current = columnWidths[index] || 150;
    setActiveCol(index);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (resizingCol.current === null) return;

    const diff = startX.current - e.clientX; // RTL
    const newWidth = Math.max(60, startWidth.current + diff);

    // ⚡️ تعديل DOM مباشرة بدون setState (أسرع بكثير)
    const th = document.querySelectorAll("th")[resizingCol.current];
    if (th) (th as HTMLElement).style.width = `${newWidth}px`;
  };

  const handleMouseUp = () => {
    if (resizingCol.current !== null) {
      const th = document.querySelectorAll("th")[resizingCol.current];
      if (th) {
        const width = parseFloat((th as HTMLElement).style.width);
        setColumnWidths((prev) => {
          const updated = [...prev];
          updated[resizingCol.current as number] = width;
          return updated;
        });
      }
    }

    resizingCol.current = null;
    setActiveCol(null);

    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  //-------------------------------

  const {
    setData,
    data,
    startWeek,
    endtWeek,
    distSelectionType,
    distMonthly,
    setdistMonthly,
    setProcessedData,
    processedData,
    levle,
    useSubjects,
    setUseSubjects,
    numberCollumns,
    setNumberCollumns,
    //  cellValue
  } = useDistributionMonthlyContext();
  const [rotatedCells, setRotatedCells] = useState<
    Record<string, "horizontal" | "vertical">
  >({});

  //عناوين الجدول المستخدمة بناءً على المستوى
  useEffect(() => {
    // if (levle === 3) {
    //   const filteredSubjects = subjects.filter(
    //     (subject) => subject !== "التربية المدنية" && subject !== "الجغرافيا"
    //   );
    //   setUseSubjects(filteredSubjects);
    //   setNumberCollumns(12);
    // }else {
    //   setUseSubjects([...subjects]);
    //   setNumberCollumns(14);
    // }
    switch (levle) {
      case 3: {
        const filteredSubjects = subjects.filter(
          (subject) => subject !== "التربية المدنية" && subject !== "الجغرافيا"
        );
        setUseSubjects(filteredSubjects);
        setNumberCollumns(17);
        break;
      }
      case 1:
      case 2: {
        const filteredSubjects = subjects.filter(
          (subject) =>
            subject !== "التربية المدنية" &&
            subject !== "الجغرافيا" &&
            subject !== "التربية العلمية" &&
            subject !== "التاريخ" &&
            subject !== "المشاريع"
        );

        // نحدد موقع "المحفوظات"
        const index = filteredSubjects.indexOf("المحفوظات");

        // نضيف "التعبير الكتابي" بعده مباشرة
        const updatedSubjects = [
          ...filteredSubjects.slice(0, index + 1),

          ...filteredSubjects.slice(index + 1),
        ];

        setUseSubjects(updatedSubjects);
        setNumberCollumns(12); // زدنا خانة جديدة
        break;
      }
      default: {
        setUseSubjects([...subjects]);
        setNumberCollumns(17);
        break;
      }
    }

    async function fetchData() {
      const fetchedData = await DistributionData(levle);
      if (fetchedData) {
        setData(fetchedData);
      }
    }
    fetchData();
  }, [levle, numberCollumns, setData, setNumberCollumns, setUseSubjects]);

  // إنشاء نسخة عميقة من البيانات ومعالجتها لدمج الخلايا
  const creatTableData = React.useCallback(
    async (dataArray: unknown, start: number, end: number) => {
      const deepCopyData = JSON.parse(JSON.stringify(dataArray));
      let Getdata: (string | number)[][] = [];

      if (distSelectionType === "monthly") {
        const slicedData = JSON.parse(
          JSON.stringify(deepCopyData.slice(start, end))
        );

        const processedMatrix = await mergCellprocessMatrix(slicedData);
        Getdata = processedMatrix.matrix;
        setProcessedData(processedMatrix);
        setdistMonthly(Getdata);
      } else if (distSelectionType === "annual") {
        const processedMatrix = await mergCellprocessMatrix(deepCopyData);
        Getdata = processedMatrix.matrix;
        setProcessedData(processedMatrix);
        setdistMonthly(Getdata);
      }
    },
    [distSelectionType, setProcessedData, setdistMonthly]
  );
  // معالجة البيانات عند تغيّر البيانات أو التحديد الزمني
  useEffect(() => {
    if (!data || data.length === 0) return;

    async function processData() {
      creatTableData(data, startWeek, endtWeek);
    }

    processData();
  }, [
    data,
    distSelectionType,
    startWeek,
    endtWeek,
    levle,
    setdistMonthly,
    setProcessedData,
    creatTableData,
  ]);
  useEffect(() => {}, [distMonthly]);
  // function rotateColumn(header: string, rowSpan: number) {
  //   switch (header) {
  //     case "المحور":
  //       if (rowSpan > 1) {
  //         return "[writing-mode:vertical-rl] [text-orientation:mixed] rotate-180 text-center";
  //       }
  //       break;

  //     case "الرياضيات":
  //       return "min-w-max";

  //     case "التربية العلمية":
  //     case "التاريخ":
  //     case "التربية المدنية":
  //     case "الأساليب":
  //     case "الوحدات":
  //     case "الجغرافيا":
  //       return "[writing-mode:vertical-rl] [text-orientation:mixed] rotate-180 text-center";

  //     default:
  //       return "";
  //   }

  //   return "";
  // }
  useEffect(() => {
    const initialRotations: Record<string, "horizontal" | "vertical"> = {};
    distMonthly.forEach((row, i) => {
      row.forEach((_: unknown, j:  number) => {
        // مثال: لو أسماء الأعمدة المعينة تكون عمودية
        if (useSubjects[j]?.includes("عمودي")) {
          initialRotations[`${i}-${j}`] = "vertical";
        }
      });
    });
    setRotatedCells(initialRotations);
  }, [distMonthly, useSubjects]);

  return (
    <div className="w-full">
      {distMonthly ? (
        <div>
          <table
            dir="rtl"
            className="w-full   text-left rtl:text-right text-gray-950 dark:text-blue-100 font-serif border-collapse table-auto"
          >
            <thead className=" text-white uppercase ">
              <tr className="sticky top-0  border-4 border-primary ">
                {useSubjects?.map((key, index) => (
                  <th
                    key={index}
                    scope="col"
                    style={{
                      width: columnWidths[index], // عرض العمود الحالي أو الافتراضي
                      position: "relative", // ضروري للمقبض
                    }}
                    className="px-1 text-center h-10 bg-primary text-[20px] font-bold border-l-2 border-accent group relative"
                  >
                    {/* القوائم التي كانت لديك */}
                    {index === 0 && (
                      <div className="absolute p-0 right-14 -top-3 bg-slate-400 border-2 border-gray-600 rounded-lg hidden group-hover:block transition-opacity duration-200">
                        <ComboWeeksGenral />
                      </div>
                    )}

                    {![
                      "الأسابيع",
                      "المحور",
                      "الأساليب",
                      "التراكيب النحوية",
                      "صرف وإملاء",
                      "الرصيد اللغوي",
                      "المحفوظات",
                      "التعبير الكتابي",
                      "المشاريع",
                    ].includes(key) && (
                      <div className="absolute p-0 bg-accent border-2 border-gray-600 rounded-lg hidden group-hover:block transition-opacity duration-200 -top-1 z-20">
                        <ComboWeeksHeder indexcol={index} />
                      </div>
                    )}

                    {key}

                    {/* مقبض السحب */}
                    <div
                      onMouseDown={(e) => handleMouseDown(e, index)}
                      className={`absolute top-0 left-0 w-1 h-full cursor-col-resize ${
                        activeCol === index
                          ? "bg-blue-500"
                          : "hover:bg-blue-400/40"
                      }`}
                      style={{
                        zIndex: 9999,
                        opacity: 1,
                      }}
                      title="اسحب لتغيير عرض العمود"
                    ></div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="border-solid boder-4 border-primary">
              {distMonthly.map((item, index) => (
                
                <tr key={index} className="bg-accent border-2  hover:bg-muted">
                  {Object.entries(item)
                    .slice(0, numberCollumns)
                    .map(([key, value], valueIndex) => {
                      const rowSpan =
                        processedData.rowSpanMap[index][valueIndex];
                      const colSpan =
                        processedData.colSpanMap[index][valueIndex];

                      return value !== 0 && rowSpan > 0 && colSpan > 0 ? (
                        <td
                          key={valueIndex}
                          rowSpan={rowSpan}
                          colSpan={colSpan}
                          className={`relative group px-2 py-2 h-30 text-center border border-white cursor-pointer break-words whitespace-normal transition-all duration-300 transform origin-center`}
                        >
                          {/*  */}
                          {key === "0" && processedData.matrix[index][0] ==="1/2"  && (
                            <div className="absolute flex-row items-center -right-8   text-gray-700 cursor-pointer hidden group-hover:flex">
                              <AiOutlineDeleteRow
                                size={30}
                                onClick={() => {
                                      const updatedData = [...distMonthly];
                                      updatedData.splice(index, 1);
                                      setdistMonthly(updatedData);
                                      creatTableData(
                                        updatedData,
                                        0,
                                        updatedData.length
                                      );
                                    }}
                                  />
                                
                            </div>
                            
                          )}
                          {/* قائمة تغيير أسابيع الشهر */}
                          {/* {key === "1" && index !== 0 && processedData.matrix[index -1][0] !=="1/2" && (
                            <div className="absolute flex-row items-center -right-8 -top-7 translate-y-1/4 m-1 text-gray-700 cursor-pointer hidden group-hover:flex">
                              <RiInsertColumnRight
                                size={30}
                                onClick={() => {
                                  const newData = addRowToTble(
                                    distMonthly,
                                    index,
                                    levle
                                  );
                                  creatTableData(newData, 0, newData.length);
                                }}
                              />
                            </div>
                          )} */}
                          
                          {key !== "0" && key !== "1" && index !== 0 && (
                            <div className="absolute flex-row items-center right-4 -top-6 translate-y-1/4 m-1 text-gray-700 cursor-pointer hidden group-hover:flex">
                              <CgArrowsMergeAltV
                                className="mx-3"
                                size={25}
                                color="secondary"
                                onClick={() => {
                                  if (
                                    processedData.colSpanMap[index - 1][
                                      valueIndex
                                    ] !== 0
                                  ) {
                                    distMonthly[index][valueIndex] =
                                      distMonthly[index - 1][valueIndex];
                                    setdistMonthly([...distMonthly]);
                                    creatTableData(
                                      distMonthly,
                                      0,
                                      distMonthly.length
                                    );
                                  }
                                }}
                              />
                            </div>
                          )}
                          {key !== "0" && (
                            <div className="absolute flex flex-row top-0 right-0 z-10">
                              <div className="  flex-col justify-center items-center  right-0 top-0 bg-primary border-2 border-gray-100 rounded-lg hidden group-hover:block transition-opacity duration-200 z-20">
                                {/* أيقونة تعديل الخلية */}
                                <div className="  p-1  opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                  <Edit_cell_icon
                                    index={index}
                                    cellKey={key}
                                    columnIndex={valueIndex}
                                    value={value as string}
                                  />
                                </div>

                                {/* أيقونة تدوير الخلية */}
                                <div className=" p-1   opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                  <PiDeviceRotateFill
                                    size={20}
                                    color="white"
                                    className="cursor-pointer"
                                    onClick={() => {
                                      setRotatedCells(
                                        (
                                          prev: Record<
                                            string,
                                            "horizontal" | "vertical"
                                          >
                                        ) => {
                                          const key = `${index}-${valueIndex}`;
                                          const current = prev[key];
                                          const isCurrentlyVertical =
                                            current === "vertical" ||
                                            (!current &&
                                              rotateColumn(
                                                useSubjects[valueIndex],
                                                rowSpan
                                              ).includes("writing-mode"));
                                          const next:
                                            | "horizontal"
                                            | "vertical" = isCurrentlyVertical
                                            ? "horizontal"
                                            : "vertical";

                                          // ✅ نحدد النوع بوضوح هنا
                                          const updated: Record<
                                            string,
                                            "horizontal" | "vertical"
                                          > = {
                                            ...prev,
                                            [key]: next,
                                          };

                                          localStorage.setItem(
                                            "rotatedCells",
                                            JSON.stringify(updated)
                                          );
                                          return updated;
                                        }
                                      );
                                    }}
                                  />
                                </div>
                              </div>

                              {/* قائمة الوحدات */}
                              {key === "2" && (
                                <div className=" p-0  bg-primary border-2 border-gray-200 rounded-lg hidden group-hover:block transition-opacity duration-200 w-full z-50">
                                  <Arbic_Unit_List rowindex={index}  />
                                </div>
                              )}
                            </div>
                          )}
                          {/* أيقونة إلغاء دمج الخلايا */}
                          {(colSpan > 1 || rowSpan > 1) && (
                            <div className="absolute bottom-2 left-2 transform -translate-x-1/2 p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                              <DeleteMergeCell
                                colIndex={valueIndex}
                                rowindex={index}
                                columnSpan={colSpan}
                                rowSpan={rowSpan}
                              />
                            </div>
                          )}

                          {/* عرض محتوى الخلية */}
                          <div className="flex justify-center items-center h-full w-full">
                            <div
                              className={`
                                ${colSpan < 2 && (rotatedCells[`${index}-${valueIndex}`] ===
                                "vertical"
                                  ? "[writing-mode:vertical-rl] [text-orientation:mixed] rotate-180"
                                  : rotatedCells[`${index}-${valueIndex}`] ===
                                    "horizontal"
                                  ? ""
                                  : rotateColumn(
                                      useSubjects[valueIndex],
                                      rowSpan
                                    ))}
                                            text-center
                                         `}
                            >
                              {String(value)
                                .split("\n")
                                .map((line, i) => (
                                  <span key={i} className="text-lg/6">
                                    {line} 
                                    <br />
                                  </span>
                                ))}
                            </div>
                          </div>
                        </td>
                      ) : null;
                    })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-500">جاري التحميل...</p>
      )}
    </div>
  );
}

export default DataTable;
