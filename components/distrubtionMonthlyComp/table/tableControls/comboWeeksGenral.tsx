"use client";

import ComWeeks from "@/components/ui/comboWeeks";
import { useDistributionMonthlyContext } from "@/contexes/distributionMonthlyContex";
//قائمة منسدلة تظهر في أول عمود من أول سطر الجدول وظيفتها تغيير أسبوع البداية لكل المواد
function CmboWeeks() {
  const { setStartWeek, setEndtWeek, distMonthly } = useDistributionMonthlyContext();
  return (
    <div>
      <div>
        <div
          className="absolute p-0 -left-1 top-2  bg-slate-400 border-2 border-gray-600 rounded-md hidden  group-hover:block 
                                transition-opacity duration-200"
        >
          <ComWeeks compoTitle="" handleChange={(e) => {
            setStartWeek(Number(e.target.value)-1);
            setEndtWeek(Number(e.target.value)+ (distMonthly.length-1));
          }} />
        </div>
      </div>
    </div>
  );
}

export default CmboWeeks;


  