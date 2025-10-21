"use client";

// تأكد من أن الكود يعمل في المتصفح فقط
// import { styles } from "./styles";
// import { usePrintContext } from "./printContext";
import PrintInformation from "./distrubtionPageItems/printInformation";
import { PageFooter } from "./index";
import { useDistributionMonthlyContext } from "@/contexes/distributionMonthlyContex";
// import { subjects } from "@/utils/useArrays";
import React, { forwardRef } from "react";
import TableContent from "./distrubtionPageItems/tableContent";
import TableContentWord from "./distrubtionPageItems/tableContentWord";
import { usePrintContext } from "./printContext";

const PrintableComponent = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  (props, ref) => {
    const { distMonthly } = useDistributionMonthlyContext();
    const { bodyStyle, styleType, wordDisplay } = usePrintContext();

    return (
      <div className="bg-white">
        {wordDisplay === false && ( <div
          // id="printableArea"
          dir="rtl"
          ref={ref}
          className={`${styleType.printStyles[bodyStyle]} ${styleType.fontStyles[bodyStyle]}`}
          style={{
            padding: "0px",
            textAlign: "center",
            margin: "8px",

            lineHeight: "0.5",
            direction: "rtl",
            boxSizing: "border-box",
          }}
        >
          {distMonthly ? (
            <div className={`${styleType.tableBodyStyle[bodyStyle]} p-6 text-lg`}  >
              <PrintInformation />

              <div>
                <TableContent />

              </div>



            </div>
          ) : null}
         
          <PageFooter />
        </div>)}

         <div className={` p-6 text-lg bg-white min-h-full`}>
            {wordDisplay === true && (
              <TableContentWord />
            )}  </div>
      </div>
    );
  }
);

PrintableComponent.displayName = "PrintableComponent";

export default PrintableComponent;
