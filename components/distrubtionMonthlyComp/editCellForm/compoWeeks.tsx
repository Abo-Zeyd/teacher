import ComWeeks from "@/components/ui/comboWeeks";
import { useDistributionMonthlyContext } from "@/contexes/distributionMonthlyContex";

function CompoWeeks() {
  const { data, setCellValue, setNewCellValue, cellColIndex } =
    useDistributionMonthlyContext();

  return (
    <div>
      <ComWeeks
        compoTitle="تغيير الأسبوع"
        handleChange={(event) => {
          if (event && event.target) {
            const colName = Object.keys(data[0])[cellColIndex];
            const newVal = data[Number(event.target.value)-1][colName];
            setCellValue(newVal);
            setNewCellValue(newVal);
          }
        }}
      />
    </div>
  );
}

export default CompoWeeks;
