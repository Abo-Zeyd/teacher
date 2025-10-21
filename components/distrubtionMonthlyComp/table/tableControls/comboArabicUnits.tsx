"use client";

import ComboBox from "@/components/ui/ComboBox";
import { useDistributionMonthlyContext } from "@/contexes/distributionMonthlyContex";
import { arabicCourseNames } from "@/utils/useArrays";
import { useEffect, useState } from "react";

function CmboWeeks({ rowindex, valueFist }: { rowindex: number, valueFist?:string }) {
  const { data, distMonthly, creatMonthlyDistrubtion } =
    useDistributionMonthlyContext();
  // const arabicUnits = data?.map(subArray => subArray[1]);
  const [arabicUnits, setArabicUnits] = useState<string[]>([]);

  useEffect(() => {
    if (data && data.length > 0) {
      const extractedUnits = data
        .filter((item) => item && item["Units"]) // تأكد من وجود القيم
        .map((item) => item["Units"]);
      setArabicUnits(extractedUnits);
    }

  }, [data, setArabicUnits]); // إعادة التنفيذ عند تغيير `data`

  return (
    <div>
      <div>
        <div
          className="absolute p-0  top-4   bg-primary border-2 border-gray-600 rounded-md hidden  group-hover:block 
                                  transition-opacity duration-200"
        >
          <ComboBox
            changeCompmEvent={async (e) => {
              console.log("valueFist", valueFist);
              const selected = e.target.selectedIndex;
              const upDateData = [...distMonthly];
              let i = 1;
              for (const item of arabicCourseNames) {
                upDateData[rowindex][i] = data[selected][item];

                i++;
              }
              creatMonthlyDistrubtion(upDateData);
            }}
            data={arabicUnits}
            labelTitle=""
          />
        </div>
      </div>
    </div>
  );
}

export default CmboWeeks;
