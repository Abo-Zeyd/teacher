"use client";

import LableInfo from "@/components/ui/lableInfo";
import Title from "@/components/ui/title";
import { useDistributionMonthlyContext } from "@/contexes/distributionMonthlyContex";
import { usePrintContext } from "../printContext";
import { styles } from "./styleTow";

/**
 * مكون معلومات الطباعة
 * يعرض معلومات التوزيع الشهري مثل العنوان والمعلومات الأساسية
 */
function InfoForm() {
  const { formValues, distTitle } = useDistributionMonthlyContext();
  const { bodyStyle } = usePrintContext();

  return (
    <div className="flex flex-col gap-2 mb-4 print:mb-2">
      {/* معلومات التوزيع */}
      <div className={`grid grid-cols-3 gap-4 w-full mx-auto p-4 rounded-lg ${styles.pageHeader[bodyStyle]} print:p-2 print:gap-2 print:rounded-none`}>
        {/* معلومات المدرسة */}
        <div className="col-span-1 space-y-2 print:space-y-1">
          <LableInfo
            lableName="مديرية التربية"
            textValue={formValues.directorate}
            className="print:text-lg hover:bg-gray-50 rounded-md  transition-colors duration-200"
          />
          <LableInfo 
            lableName="المقاطعة" 
            textValue={formValues.district}
            className="print:text-lg hover:bg-gray-50 rounded-md  transition-colors duration-200"
          />
          <LableInfo 
            lableName="المدرسة" 
            textValue={formValues.school}
            className="print:text-lg hover:bg-gray-50 rounded-md  transition-colors duration-200"
          />
        </div>

        {/* العنوان الرئيسي */}
        <div className="col-span-1 flex items-center justify-center">
          <Title
            className={`text-2xl font-bold px-4 py-2 rounded-md shadow-md shadow-slate-700 my-1 print:shadow-none ${styles.titleStyle[bodyStyle]} print:bg-white print:text-black print:border-2 print:border-gray-400`}
          >
            {distTitle}
          </Title>
        </div>

        {/* معلومات الأستاذ والفوج */}
        <div className="col-span-1 flex justify-end">
          <div className="space-y-2 print:space-y-1">
            <LableInfo 
              lableName="الأستاذ" 
              textValue={formValues.teacher}
              className="print:text-lg hover:bg-gray-50 rounded-md  transition-colors duration-200"
            />
            <LableInfo 
              lableName="الفوج" 
              textValue={formValues.group}
              className="print:text-lg hover:bg-gray-50 rounded-md  transition-colors duration-200"
            />
            <LableInfo
              lableName="السنة الدراسية"
              textValue={formValues.academicYear}
              className="print:text-lg hover:bg-gray-50 rounded-md  transition-colors duration-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoForm;
