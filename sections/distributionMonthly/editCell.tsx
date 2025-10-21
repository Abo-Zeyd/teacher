"use client";

// import React, { useState } from 'react'
import {
  SaveButton,
  CloseButton,
  ComboWeeks,
  LessonsCompo,
  TexArea,
} from "@/components/distrubtionMonthlyComp/editCellForm/index";
import { useDistributionMonthlyContext } from "@/contexes/distributionMonthlyContex";

function EditCell() {
  const { shouldShowdevEditCell, cellColIndex } = useDistributionMonthlyContext();

  return (
    <div>
      {shouldShowdevEditCell && (
       
        <div className="fixed inset-0 z-30 w-full h-full flex items-center justify-center bg-black/50">
          <div
            className="absolute flex flex-col  text-lg text-slate-950 bg-accent p-2 rounded 
            border-solid border-2 border-text 
            shadow-md resize-none w-fit z-50"
          >
            {/* button command edit cell */}
            <div className="flex flex-row justify-end  mb-2 ">
              <SaveButton />

              <CloseButton />
            </div>

            {/* list of weeks */}
            <div className="text-lg text-black ">
             {cellColIndex  !== 0 && (
                <>
                  <ComboWeeks />
                  <LessonsCompo />
                </>
              )}
            </div>
            <TexArea />
          </div>
        </div>
        // }
        // />
      )}
    </div>
  );
}

export default EditCell;
