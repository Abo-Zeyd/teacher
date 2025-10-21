'use client'
import { IoIosSave } from "react-icons/io";

import { useDistributionMonthlyContext } from "@/contexes/distributionMonthlyContex";
function SaveButton() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {distMonthly, data, newCellValue, cellColIndex, cellRowIndex, setData, setdistMonthly } = useDistributionMonthlyContext();

  const updateCellValue = () => {
    if (data && cellRowIndex !== null && cellColIndex !== null) {
      // إنشاء نسخة جديدة من البيانات لتجنب التعديل المباشر على state
      const updatedData = [...distMonthly];
  
      // الحصول على مفتاح العمود من خلال رقم العمود
      const columnKey = Object.keys(updatedData[cellRowIndex])[cellColIndex];
      
      if (columnKey) {
        // تحديث قيمة الخلية
        updatedData[cellRowIndex][columnKey] = newCellValue;
        // تحديث الحالة لضمان إعادة التصيير
        setdistMonthly(updatedData);
        
      }
    }
  };

  return (
    <div>
      <button id="changeCell" className="w-4 ml-1" onClick={() => {
         updateCellValue()
      }}>
        <IoIosSave />
      </button>
    </div>
  );
}

export default SaveButton;
