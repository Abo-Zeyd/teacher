"use client";

import {
  Rb_disMonth,
  Rb_disAnn,
  Compo_level,
  Compo_Months,
  Print_button,
} from "../../components/distrubtionMonthlyComp/header/headarBarComponent";

import { useDistributionMonthlyContext } from "@/contexes/distributionMonthlyContex";

function HeaderBar() {
  const { showeComboMonth } = useDistributionMonthlyContext();

  return (
    <div className="flex justify-center px-2 mt-8">
      <div className="flex flex-col w-5/6 overflow-auto lg:flex-row gap-4 bg-gray-100 text-white text-lg border-2 border-solid rounded-lg p-3 shadow shadow-white">
        
        {/* الجزء الأول: اختيار الشهر أو السنوي */}
        <div className="flex flex-col lg:flex-row gap-2">
          <Rb_disMonth />
          <Rb_disAnn />
        </div>

        {/* الجزء الثاني: المرحلة والشهر */}
        <div className="flex flex-col lg:flex-row gap-2">
          <Compo_level />
          {showeComboMonth && <Compo_Months />}
        </div>

        {/* الجزء الثالث: زر الطباعة */}
        <div className="flex justify-end items-end flex-1 mt-2 lg:mt-0">
          <Print_button />
        </div>
      </div>
    </div>
  );
}

export default HeaderBar;

