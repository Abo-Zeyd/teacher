'use client'
import { useDistributionMonthlyContext } from "@/contexes/distributionMonthlyContex";
import { FaPlus } from 'react-icons/fa'
import { useEffect } from "react";

function PlusButton() {
  const { setEndtWeek, distMonthly } = useDistributionMonthlyContext();
  useEffect(() => {
    // يمكنك وضع أي منطق هنا عند تغيير distMonthly
    // مثال: طباعة البيانات الجديدة
   
  }, [distMonthly]);
  return (
    <div>
        <FaPlus
            className="cursor-pointer text-1xl "
            onClick={async () => {

                
                  if (window.confirm("إذا كنت أجريت تعديلات سيتم الغاؤها ")) {
                    setEndtWeek(prevEndtWeek => prevEndtWeek + 1);
                  }
                
               
            }}
          />
    </div>
  )
}

export default PlusButton