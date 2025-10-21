import ComboBox from "@/components/ui/ComboBox";
import { useDistributionMonthlyContext } from "@/contexes/distributionMonthlyContex";

function LessonsCompo() {
  const { data, cellValue, cellColIndex, setCellValue, setNewCellValue } =
    useDistributionMonthlyContext();
  const allLessons = data
    ?.flatMap((row) => {
      const keys = Object.keys(row); // استخراج أسماء الأعمدة
      const columnName = keys[cellColIndex]; // اسم العمود بناءً على الفهرس
      return columnName && row[columnName] ? row[columnName].split("\n") : []; // تقسيم النصوص
    })
    .filter((value) => value.trim() !== ""); // إزالة القيم الفارغة بعد التقسيم
    const uniqueLessons = [...new Set(allLessons)];
  return (
    <div>
      <ComboBox
        changeCompmEvent={(e) => {
          const val = cellValue + "\n" + e.target.value;
          setCellValue(val);
          setNewCellValue(val);
        }}
        data={uniqueLessons}
        labelTitle="إضافة درس "
        id="listCourses"
         style={{ maxWidth: 300, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
         
      />
    </div>
  );
}

export default LessonsCompo;
