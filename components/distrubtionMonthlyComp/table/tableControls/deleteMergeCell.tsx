import { useDistributionMonthlyContext } from "@/contexes/distributionMonthlyContex";
import React from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";

function DeleteMergeCell({
  rowSpan,
  columnSpan,
  rowindex,
  colIndex,
}: {
  rowSpan: number;
  columnSpan: number;
  rowindex: number;
  colIndex: number;
}) {
  const { processedData, setProcessedData } = useDistributionMonthlyContext();
  return (
    <div>
      <RiDeleteBack2Fill
        className="secondary"
        style = {{transform: 'rotate(270deg)' }} 
        onClick={() => {
          // إنشاء نسخة عميقة
         
          const ubdateMatrix = {
            ...processedData,
            colSpanMap: JSON.parse(JSON.stringify(processedData.colSpanMap)),
            rowSpanMap: JSON.parse(JSON.stringify(processedData.rowSpanMap)),
          };
          
          if (rowSpan > 1) {
            for (let i = 0; i < rowSpan; i++) {
              ubdateMatrix.rowSpanMap[rowindex + i][colIndex ] = 1;
            
              
            }
            setProcessedData(ubdateMatrix);
          }
         
          if (columnSpan > 1) {
            for (let i = 0; i < columnSpan; i++) {
              ubdateMatrix.colSpanMap[rowindex][colIndex + i] = 1;
            }
            setProcessedData(ubdateMatrix);
          }

         
         
        }}
      />
    </div>
  );
}

export default DeleteMergeCell;

// interface ubdateMatrix {
//   matrix: any[][];
//   rowSpanMap: number[][];
//   colSpanMap: number[][];
//   keys: string[];
// }
