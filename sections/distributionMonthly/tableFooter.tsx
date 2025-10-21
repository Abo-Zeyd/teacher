
import React from "react";
import { PlusButton, MinusButton} from '@/components/distrubtionMonthlyComp/tableFooter/index'
function TabeFooter() {
  return (

    <div className="px-7">
      <div className="flex flex-row  bg-background  justify-end p-2 mb-1">
        <div className="bg-slate-200 p-1 border-solid border-2 rounded-full translate-x-1  hover:scale-120 hover:bg-slate-400 transition-transform duration-200 ">
          <PlusButton />
        </div>
        <div className="bg-slate-200 p-1 border-solid border-1 rounded-full translate-x-1  hover:scale-120 hover:bg-slate-400 transition-transform duration-200 ">
          <MinusButton />
        </div>
      </div>
      
    </div>
  );
}

export default TabeFooter;
