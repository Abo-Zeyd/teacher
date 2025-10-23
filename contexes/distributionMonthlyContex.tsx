/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { mergCellprocessMatrix } from "@/utils/mergCells";
import { subjects } from "@/utils/useArrays";
import { arabicCourseNames } from "@/utils/useArrays";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

// 🔹 تعريف الواجهة لضمان عدم حدوث خطأ عند تمرير القيم
interface DistributionMonthlyContextData {
  showeInfoSection: boolean;
  showeComboMonth: boolean;
  checkRadioAnn: boolean;
  checkRadioMonth: boolean;
  showComboMonths: boolean;
  shouldShowdevEditCell: boolean;
  setShoweInfoSection: Dispatch<SetStateAction<boolean>>;
  setshoweComboMonth: Dispatch<SetStateAction<boolean>>;
  setcheckRadioAnn: Dispatch<SetStateAction<boolean>>;
  setcheckRadioMonth: Dispatch<SetStateAction<boolean>>;
  setshowComboMonths: Dispatch<SetStateAction<boolean>>;
  setShouldShowdevEditCell: Dispatch<SetStateAction<boolean>>;
  levle: number;
  setLevel: Dispatch<SetStateAction<number>>;
  shouldShowdevPrintDistrubtion: boolean;
  setShouldShowdevPrintDistrubtion: Dispatch<SetStateAction<boolean>>;
  cellValue: string;
  setCellValue: Dispatch<SetStateAction<string>>;
  distTitle: string;
  setDistTitle: Dispatch<SetStateAction<string>>;
  distTitleMonth: string;
  setDistTitleMonth: Dispatch<SetStateAction<string>>;
  newCellValue: string;
  setNewCellValue: Dispatch<SetStateAction<string>>;
  cellColIndex: number;
  setCellColIndex: Dispatch<SetStateAction<number>>;
  cellRowIndex: number;
  setCellRowIndex: Dispatch<SetStateAction<number>>;
  cellColName: string;
  setCellColName: Dispatch<SetStateAction<string>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: { [key: string]: any }[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setData: Dispatch<SetStateAction<{ [key: string]: any }[]>>;
  distMonthly: { [key: string]: any }[];
  setdistMonthly: Dispatch<SetStateAction<{ [key: string]: any }[]>>;
  distSelectionType: string;
  setdistSelectionType: Dispatch<SetStateAction<string>>;

  startWeek: number;
  setStartWeek: Dispatch<SetStateAction<number>>;
  endtWeek: number;
  setEndtWeek: Dispatch<SetStateAction<number>>;

  indexrwo: number;
  setIndexrwo: Dispatch<SetStateAction<number>>;
  processedData: ProcessedData;
  setProcessedData: Dispatch<SetStateAction<ProcessedData>>;
  creatMonthlyDistrubtion: (upDateData: any) => void;
  changDistrubtionName: () => void;
  formValues: formValues;
  setFormValues: Dispatch<SetStateAction<formValues>>;
  fontName: string;
  setFontName: Dispatch<SetStateAction<string>>;
  useSubjects: string[];
  numberCollumns: number;
  setUseSubjects: Dispatch<SetStateAction<string[]>>;
  setNumberCollumns: Dispatch<SetStateAction<number>>;
  arbicCoursesEdit: string[];
  setArbicCoursesEdit: Dispatch<SetStateAction<string[]>>;
  
}

// ✅ تعريف الـ Context مع القيمة الافتراضية `undefined`
const DistributionMonthlyContext = createContext<
  DistributionMonthlyContextData | undefined
>(undefined);

// ✅ تعريف الـ Provider واستقبال `children` بالشكل الصحيح
export const DistributionMonthlyContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  //حالة تتحكم في إظهار وإخفاء قسم المعلومات
  const [showeInfoSection, setShoweInfoSection] = useState<boolean>(false);
  //حالة تتحكم في إظهار وإخفاء قسم الفوج عند اختيار بين التوزيع السنوي والتوزيع الشهري
  const [showeComboMonth, setshoweComboMonth] = useState<boolean>(true);
  //حالة تتحكم في اختيار التوزيع السنوي
  const [checkRadioAnn, setcheckRadioAnn] = useState<boolean>(false);
  //حالة تتحكم في اختيار التوزيع الشهري
  const [checkRadioMonth, setcheckRadioMonth] = useState<boolean>(true);
  const [levle, setLevel] = useState<number>(1);
  //حالة لإظهار وإخفاء قائمة الأشهر
  const [showComboMonths, setshowComboMonths] = useState(true);
  //حالة لإخفاء وإظهار تحيرير الخلية
  const [shouldShowdevEditCell, setShouldShowdevEditCell] = useState(false);
  //حالة لإخفاء وإظهار طباعة التوزيع
  const [shouldShowdevPrintDistrubtion, setShouldShowdevPrintDistrubtion] =
    useState(false);
  //حالة لتخزين القيمة الجديدة للخلية وتحرير قيمتها
  const [cellValue, setCellValue] = useState("");
  const [newCellValue, setNewCellValue] = useState("");
  const [cellColIndex, setCellColIndex] = useState<number>(0);
  const [cellRowIndex, setCellRowIndex] = useState<number>(0);
  //متغيرات تخزين البيانات (الكائنات)
  const [distMonthly, setdistMonthly] = useState<{ [key: string]: any }[]>([]);
  const [data, setData] = useState<{ [key: string]: any }[]>([]);
  const [distSelectionType, setdistSelectionType] = useState("monthly");
  const [startWeek, setStartWeek] = useState(0);
  const [endtWeek, setEndtWeek] = useState(2);

  //حالة لجلب رقم الصف
  const [indexrwo, setIndexrwo] = useState(0);
  //حالة لجلب اسم العمود
  const [cellColName, setCellColName] = useState("");
  //حالة لتتبع مصفوفة دمج الخلايا
  const [processedData, setProcessedData] = useState<ProcessedData>({
    matrix: [],
    rowSpanMap: [],
    colSpanMap: [],
    keys: [],
  });
  //حالة لتخزين معلومات التوزيع
  const [formValues, setFormValues] = useState<formValues>({
    directorate: "",
    district: "",
    school: "",
    teacher: "",
    group: "",
    academicYear: "",
  });
  const creatMonthlyDistrubtion = async (upDateData: any) => {
    
    const Getdata = (await mergCellprocessMatrix(upDateData)).matrix;
    setProcessedData(await mergCellprocessMatrix(upDateData));
    setdistMonthly(Getdata);
    
  };
  //دالة تغيير اسم التوزيع
  const changDistrubtionName = () => {
    if (distSelectionType === "monthly") {
      setDistTitle("توزيع شهر " + distTitleMonth);
    } else {
      setDistTitle("التوزيع سنوي");
    }
  };
  //حالة عنوان التوزيع
  const [distTitle, setDistTitle] = useState("توزيع شهر سبتمبر");
  const [distTitleMonth, setDistTitleMonth] = useState("سبتمبر");
  // حالة لتغيير خط طباعة
  const [fontName, setFontName] = useState<string>("");
  //مصفوفة لتخزين عناوين الجدول
  const [useSubjects, setUseSubjects] = useState<string[]>([...subjects]);
  //حالة لتخزين عدد الأعمدة
  const [numberCollumns, setNumberCollumns] = useState(14);

  const [arbicCoursesEdit, setArbicCoursesEdit] = useState<string[]>([]);
  useEffect(() => {
    let courses: string[] = [];
    switch (levle) {
      case 1:
      case 2:
        courses = arabicCourseNames.slice(0, 8);
        break;
      case 4:
      case 5:
        courses = arabicCourseNames.slice(0, 9);
        break;
      default:
        courses = arabicCourseNames.slice(0, 8);
        break;
    }
    setArbicCoursesEdit(courses);
  }, [levle]);

  return (
    <DistributionMonthlyContext.Provider
      value={{
        showeInfoSection,
        setShoweInfoSection,
        showeComboMonth,
        setshoweComboMonth,
        checkRadioAnn: checkRadioAnn,
        setcheckRadioAnn: setcheckRadioAnn,
        checkRadioMonth: checkRadioMonth,
        setcheckRadioMonth: setcheckRadioMonth,
        showComboMonths: showComboMonths,
        setshowComboMonths: setshowComboMonths,
        shouldShowdevEditCell,
        setShouldShowdevEditCell,
        cellValue,
        setCellValue,
        newCellValue,
        setNewCellValue,
        cellColIndex,
        setCellColIndex,
        cellRowIndex,
        setCellRowIndex,
        data,
        setData,
        distMonthly,
        setdistMonthly,
        setdistSelectionType,
        distSelectionType,
        startWeek,
        setStartWeek,
        endtWeek,
        setEndtWeek,
        indexrwo,
        setIndexrwo,
        cellColName,
        setCellColName,
        processedData,
        setProcessedData,
        creatMonthlyDistrubtion,
        formValues,
        setFormValues,
        shouldShowdevPrintDistrubtion,
        setShouldShowdevPrintDistrubtion,
        distTitle,
        setDistTitle,
        distTitleMonth,
        setDistTitleMonth,
        changDistrubtionName,
        fontName,
        setFontName,
        levle,
        setLevel,
        useSubjects,
        numberCollumns,
        setUseSubjects,
        setNumberCollumns,
        arbicCoursesEdit,
        setArbicCoursesEdit,
        
      }}
    >
      {children}
    </DistributionMonthlyContext.Provider>
  );
};

// ✅ Hook مخصص لاستخدام الـ context داخل المكونات الأخرى
export const useDistributionMonthlyContext = () => {
  const context = useContext(DistributionMonthlyContext);
  if (!context) {
    throw new Error(
      "useDistributionMonthlyContext يجب أن يكون داخل DistributionMonthlyContextProvider"
    );
  }
  return context;
};

interface ProcessedData {
  matrix: any[][];
  rowSpanMap: number[][];
  colSpanMap: number[][];
  keys: string[];
}
interface formValues {
  directorate: string;
  district: string;
  school: string;
  teacher: string;
  group: string;
  academicYear: string;
}
