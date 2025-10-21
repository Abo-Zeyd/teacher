import { RadioButton } from "@/components/ui/radioButton";
import { useDistributionMonthlyContext } from "@/contexes/distributionMonthlyContex";
import React from "react";

function Rb_Monthly() {
  const {
    setcheckRadioAnn,
    checkRadioMonth,
    setcheckRadioMonth,
    setshowComboMonths,
    setdistSelectionType  } = useDistributionMonthlyContext();

  return (
    <div>
      <RadioButton
        value="Month"
        handleChange={() => {
          setcheckRadioAnn(false);
          setcheckRadioMonth(true);
          setshowComboMonths(true);
          setdistSelectionType("monthly");
          // setDistTitle(" توزيع شهر:" + distTitleMonth);
         // changDistrubtionName();
        }}
        label="توزيع شهري"
        name="disMonth"
        checked={checkRadioMonth}
      />
    </div>
  );
}

export default Rb_Monthly;
