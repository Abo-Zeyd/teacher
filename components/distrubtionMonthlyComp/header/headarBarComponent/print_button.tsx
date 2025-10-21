import { Button } from "@/components/ui/Button";
import { useDistributionMonthlyContext } from "@/contexes/distributionMonthlyContex";
import React from "react";
import { BsPrinter } from "react-icons/bs";

function PrintButton() {
  const { setShouldShowdevPrintDistrubtion, changDistrubtionName } = useDistributionMonthlyContext();
  return (
    <div>
      <Button
        id="creatdistMonth"
        handleChange={() => {
          changDistrubtionName();
          setShouldShowdevPrintDistrubtion(true);
        }}
      >
        {/* <div className="flex flex-row items-center"> */}
          <BsPrinter size={30} />
        
        {/* </div> */}
      </Button>
    </div>
  );
}

export default PrintButton;
