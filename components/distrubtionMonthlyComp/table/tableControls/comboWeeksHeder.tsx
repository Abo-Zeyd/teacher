"use client";

import ComWeeks from "@/components/ui/comboWeeks";
import { useDistributionMonthlyContext } from "@/contexes/distributionMonthlyContex";
import { arabicCourseNames } from "@/utils/useArrays";

//قائمة منسدلة تظهر في عناوين الجدول وظيفتها تغيير ابوع البداة للمادة
function CmboWeeks({ indexcol }: { indexcol: number }) {
  const { creatMonthlyDistrubtion, distMonthly, data } = useDistributionMonthlyContext();

  return (
    <div>
      <div>
        <div>
          <ComWeeks
            compoTitle=""
            handleChange={(e) => {
              const keys = Object.keys(data[0]);
              
              const courseName = keys[indexcol];
              const courseIndex = keys.indexOf(courseName);
              let weekTarget = Number(e.target.value);
              const UpdateMonth = [...distMonthly];
              if (courseName === "Units") {
                for (const item of arabicCourseNames) {
                  let w_target = weekTarget
                 const courseIndex =keys.indexOf(item);
                  for (let i = 0; i < UpdateMonth.length; i++) {
                    UpdateMonth[i][courseIndex] = data[w_target-1][item];
                    w_target++;
                  }
                  
                }
              } else {
                for (let i = 0; i < UpdateMonth.length; i++) {
                  UpdateMonth[i][courseIndex] = data[weekTarget-1][courseName];
                  weekTarget++;
                }
              }
              creatMonthlyDistrubtion(UpdateMonth);
              
              
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CmboWeeks;

