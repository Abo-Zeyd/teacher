"use client";

import { useDistributionMonthlyContext } from "@/contexes/distributionMonthlyContex";
import { AiFillEdit } from "react-icons/ai";

function Edit_cell_icon({
  value,
  index: rowIndex,
  columnIndex, // استلام رقم العمود
}: {
  cellKey: string;
  value: string;
  index: number;
  columnIndex: number; // تعريف نوع رقم العمود
}) {
  const { setShouldShowdevEditCell, setCellValue, setCellColIndex, setCellRowIndex} = useDistributionMonthlyContext();

 
  return (
    <div>
      <AiFillEdit
        onClick={() => {
          // handleCellClick(key, value, index, e)
        
          setShouldShowdevEditCell(true);
          setCellValue(value);
          setCellColIndex(columnIndex);
          setCellRowIndex(rowIndex);
        }}
        className="text-text"
        color="white"
      />
    </div>
  );
}

export default Edit_cell_icon;
