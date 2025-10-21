import { RadioButton } from "@/components/ui/radioButton";
import { useDistributionMonthlyContext } from "@/contexes/distributionMonthlyContex";

function Rb_disAnn() {
  const {
    setcheckRadioAnn,
    checkRadioAnn,
    setcheckRadioMonth,
    setshowComboMonths,
    setdistSelectionType,

  } = useDistributionMonthlyContext();

  return (
    <div>
      <RadioButton
        value="Course"
        handleChange={() => {
          setcheckRadioAnn(true);
          setcheckRadioMonth(false);
          setshowComboMonths(false);
          setdistSelectionType("annual");
          // setDistTitle("التوزيع سنوي");
         // changDistrubtionName();
        
        }}
        label="توزيع سنوي"
        name="disAnn"
        checked={checkRadioAnn}
      />
    </div>
  );
}

export default Rb_disAnn;
