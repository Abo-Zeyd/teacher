import { usePrintContext } from "../printContext";
// import ComboStyles from "./comboStyles";
import { useDistributionMonthlyContext } from "@/contexes/distributionMonthlyContex";
import React, { useEffect } from "react";

export default function CmboStyles({
  setBodystyle,
}: {
  setBodystyle: (value: string) => void;
}) {
  // const styleNames: string[] = Object.keys(ComboStyles);
  const { setValue, bodyStyle } = usePrintContext();
  const { setFontName } = useDistributionMonthlyContext();

  // 🧠 نراقب التغيير في bodyStyle ونحدد الخط المناسب تلقائيًا
  useEffect(() => {
    switch (bodyStyle) {
      case "default":
        setFontName("cairo");
        break;
      case "dark":
        setFontName("tajawal");
        break;
      case "colorful":
        setFontName("almarai");
        break;
      case "modern":
        setFontName("changa");
        break;
      case "classic":
        setFontName("amiri");
        break;
      case "elegant":
        setFontName("harmattan");
        break;
      case "minimal":
        setFontName("ibm-plex-sans-arabic");
        break;
      case "professional":
        setFontName("noto-sans-arabic");
        break;
      case "vibrant":
        setFontName("rubik");
        break;
      case "corporate":
        setFontName("cairo");
        break;
      default:
        setFontName("cairo");
        break;
    }
  }, [bodyStyle, setFontName]); // 👈 نحدث الخط كلما تغير bodyStyle

  // ⚡ التغيير يحدث الآن فقط على النمط، والباقي يتم في useEffect
  const handleChange = (value: string) => {
    setBodystyle(value);
    setValue?.(value);
  };

  return (
    <div>
      <select
        className="p-1 h-12 border rounded-md bg-white text-gray-900 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={bodyStyle}
        onChange={(e) => {handleChange(e.target.value)
          
        }}
      >
        <option value="default">افتراضي</option>
        <option value="dark">مظلم</option>
        <option value="colorful">ملون</option>
        <option value="modern">حديث</option>
        <option value="classic">كلاسيكي</option>
        <option value="elegant">أنيق</option>
        <option value="minimal">بسيط</option>
        <option value="professional">احترافي</option>
        <option value="vibrant">حيوي</option>
        <option value="corporate">شركات</option>
      </select>
    </div>
  );
}
