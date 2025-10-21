import ComboBox from "@/components/ui/ComboBox";
import { useDistributionMonthlyContext } from "@/contexes/distributionMonthlyContex";
import { useEffect } from "react";

function Compo_Months() {
  const { showComboMonths,distTitleMonth, setDistTitleMonth, setStartWeek, setEndtWeek, changDistrubtionName } =
    useDistributionMonthlyContext();
    useEffect(() => {
      if (distTitleMonth) {
        changDistrubtionName();
      }
    }, [changDistrubtionName, distTitleMonth]); 
  function createDistribtion(monthVal: string) {
    switch (monthVal) {
      case "سبتمبر":
        setStartWeek(0);
        setEndtWeek(2);
        break;
      case "أكتوبر":
        setStartWeek(2);
        setEndtWeek(6);
        break;
      case "نوفمبر":
        setStartWeek(6);
        setEndtWeek(10);
        break;

      case "ديسمبر":
        setStartWeek(10);
        setEndtWeek(13);
        break;
      case "جانفي":
        setStartWeek(13);
        setEndtWeek(17);
        break;
      case "فيفري":
        setStartWeek(17);
        setEndtWeek(21);
        break;
      case "مارس":
        setStartWeek(21);
        setEndtWeek(24);
        break;
      case "أفريل":
        setStartWeek(24);
        setEndtWeek(28);
        break;
      case "ماي":
        setStartWeek(28);
        setEndtWeek(32);
        break;

      default:
        break;
    }
  }
  return (
    <div>
      {showComboMonths && (
        <ComboBox
          data={months}
          labelTitle="الشهر"
          changeCompmEvent={(e) => {
            createDistribtion(e.target.value);
            setDistTitleMonth(e.target.value);
          }}
          id="month"
          style={{ width: "110px",  backgroundColor: "white" }}
          labelStyle={{ marginLeft: "8px" }}
        />
      )}
    </div>
  );
}

export default Compo_Months;

const months = [
  "سبتمبر",
  "أكتوبر",
  "نوفمبر",
  "ديسمبر",
  "جانفي",
  "فيفري",
  "مارس",
  "أفريل",
  "ماي",
];
