import { useDistributionMonthlyContext } from "@/contexes/distributionMonthlyContex";
import { mergCellprocessMatrix } from "@/utils/mergCells";
// import { useState } from "react";

// interface ProcessedData {
//   matrix: any[][];
//   rowSpanMap: number[][];
//   colSpanMap: number[][];
//   keys: string[];
// }

export function TableData() {
  const { setData, setProcessedData, startWeek, endtWeek, distSelectionType } = useDistributionMonthlyContext();



  async function fetchData() {
    let Getdata: unknown[][] = [];
    const result = mergCellprocessMatrix(await dataObject as unknown as Record<string, string | number>[]);
    if (distSelectionType === "monthly") {
      Getdata = (await result).matrix.slice(startWeek, endtWeek);
      // console.log(Getdata);
    } else if (distSelectionType === "annual") {
      Getdata = (await result).matrix;
    }

    setProcessedData(await result);
    setData(Getdata);
  }

  fetchData();

  return null;
}

interface Data {
  Weeks: number;
  Units: string;
  Methods: string;
  Grammar: string;
  MorphologiSpelling: string;
  Vocabulary: string;
  Recitations: string;
  Mathematics: string;
  Islamic: string;
  Science: string;
  Civic: string;
  History: string;
  Geography: string;
  Art: string;
  sport: string;
  id: number;
  class: number;
}

const dataObject: Data[] = [
  {
    Weeks: 1,
    Units: "مع عصاي في المدرسة",
    Methods: "ألفاظ النسبة",
    Grammar: "-أنواع الكلمة",
    MorphologiSpelling: "الضمائر المنفصلة",
    Vocabulary: "الرصيد الخاص بأعمال الخير",
    Recitations: "الأمل الممكن\nصحوة بخيل",
    Mathematics: "الاعداد الأصغر من 100000\nالجمع والطرح\nمشكلات جمعية",
    Islamic: "سورة العلق",
    Science: "مسلك الهواء في الجهاز التنفسي",
    Civic: "تراثنا كنز ثمين",
    History: "التاريخ الميلادي",
    Geography: "شكل الأرض",
    Art: "الأشكال",
    sport: "الجري السريع",
    id: 2,
    class: 4,
  },
  {
    Weeks: 2,
    Units: "ماسح الزجاج",
    Methods: "ظروف الزمان",
    Grammar: "-الفعل الماضي",
    MorphologiSpelling: "التاء المفتوحة في الأفعال",
    Vocabulary: "الرصيد الخاص بألعاب الأطفال",
    Recitations: "الأمل الممكن\nصحوة بخيل",
    Mathematics: "جداول ومخططات\nالتنقل على مرصوفة\nالاستقامة\n",
    Islamic: "طلب العلم",
    Science: "التنفس وتغير تركيب الهواء",
    Civic: "المعالم الثرية في وطني",
    History: "التاريخ الهجري",
    Geography: "الخريطة",
    Art: "المتداخلة",
    sport: "الجري السريع",
    id: 3,
    class: 4,
  },
];
