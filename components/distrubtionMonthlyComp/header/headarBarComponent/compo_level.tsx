import ComboBox from "@/components/ui/ComboBox";
import { useDistributionMonthlyContext } from "@/contexes/distributionMonthlyContex";
import React from "react";

function CompoLevel() {
  const { setLevel } = useDistributionMonthlyContext();
  return (
    <div>
      <ComboBox
        data={classesName}
        labelTitle="المستوى"
        changeCompmEvent={(event: React.ChangeEvent<HTMLSelectElement>) => {
          const selectedValue = event.target.value;
          const level = getLevelValue(selectedValue);
          setLevel(level);
          // alert(`تم اختيار: ${selectedValue}، القيمة: ${level}`);
        }}
        id="month"
        style={{ width: "170px", backgroundColor: "white" }}
        labelStyle={{ marginLeft: "8px" }}
      />
    </div>
  );
}

export default CompoLevel;

const classesName: string[] = [
  "السنة الأولى",
  "السنة الثانية",
  "السنة الثالثة",
  "السنة الرابعة",
  "السنة الخامسة",
];
const getLevelValue = (levelName: string): number => {
  switch (levelName) {
    case "السنة الأولى":
      return 1;
    case "السنة الثانية":
      return 2;
    case "السنة الثالثة":
      return 3;
    case "السنة الرابعة":
      return 4;
    case "السنة الخامسة":
      return 5;
    default:
      return 1;
  }
};
