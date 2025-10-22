'use client';

import { useEffect } from "react";
import TextInfo from "@/components/ui/textInfo";
import { useDistributionMonthlyContext } from "@/contexes/distributionMonthlyContex";
// import Title from '@/components/ui/title';

function InfoForm() {
  const { showeInfoSection, formValues, setFormValues } = useDistributionMonthlyContext();

  // الحالة لتخزين القيم المدخلة
  // const [formValues, setLocalFormValues] = useState<Record<string, string>>({
  //   directorate: "",
  //   district: "",
  //   school: "",
  //   teacher: "",
  //   group: "",
  //   academicYear: "",
  // });

  // استرجاع القيم من localStorage عند تحميل الصفحة
  useEffect(() => {
    const storedValues = localStorage.getItem("formValues");
    if (storedValues) {
      const parsedValues = JSON.parse(storedValues);
     // setLocalFormValues(parsedValues);
      setFormValues(parsedValues); // تحديث القيم في السياق أيضًا
    }
  }, [setFormValues]);

  // تحديث القيم عند الإدخال وتخزينها في localStorage
  const handleValuesChange = (key: string, value: string) => {
    setFormValues((prevValues) => {
      const updatedValues = { ...prevValues, [key]: value };
      localStorage.setItem("formValues", JSON.stringify(updatedValues));
      //setFormValues(updatedValues); // تحديث القيم في السياق أيضًا
      return updatedValues;
    });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full mt-4">
      {showeInfoSection && (
       

          <div className="grid grid-cols-1 overflow-auto lg:w-4/5  md:grid-cols-2 gap-4 px-2   py-4 bg-accent rounded-lg border-solid border-2 border-secondary auto-rows-auto">

            <div className="flex flex-col  space-y-4 justify-self-center items-center text-right sm:text-left">
              <TextInfo
                lableName="مديرية التربية"
                placeholdertext="أدخل اسم مديرية التربية"
                textValue={formValues.directorate}
                onTextChange={(value) => handleValuesChange('directorate', value)}
              />
              <TextInfo
                lableName="المقاطعة"
                placeholdertext="أدخل اسم المقاطعة"
                textValue={formValues.district}
                onTextChange={(value) => handleValuesChange('district', value)}
              />
              <TextInfo
                lableName="المدرسة"
                placeholdertext="أدخل اسم المدرسة"
                textValue={formValues.school}
                onTextChange={(value) => handleValuesChange('school', value)}
              />
            </div>

            <div className="flex flex-col space-y-4 justify-self-center items-center text-right sm:text-left">
              <TextInfo
                lableName="الأستاذ"
                placeholdertext="أدخل اسم الأستاذ"
                textValue={formValues.teacher}
                onTextChange={(value) => handleValuesChange('teacher', value)}
              />
              <TextInfo
                lableName="الفوج"
                placeholdertext="اسم الفوج"
                textValue={formValues.group}
                onTextChange={(value) => handleValuesChange('group', value)}
              />
              <TextInfo
                lableName="السنة الدراسية"
                placeholdertext="السنة الدراسية"
                textValue={formValues.academicYear}
                onTextChange={(value) => handleValuesChange('academicYear', value)}
              />
            </div>
          </div>
        
      )}
    </div>
  );
}

export default InfoForm;


