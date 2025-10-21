
/**
 * أنماط مختلفة للصفحة والعناصر
 * يمكن اختيار النمط المناسب من خلال تغيير القيمة الافتراضية
 */
export const styles = {
  // أنماط الخطوط
  fontStyles: {
    default: "Arial",
    dark: "Tajawal",
    colorful: "Almarai",
    modern: "Changa",
    classic: "Amiri ",
    elegant: "Harmattan",
    minimal: "IBMPlexSansArabic",
    professional: "NotoSansArabic",
    vibrant: "Rubik",
    corporate: "Arial",
  },

  // تعديل حجم الخط ليكون ثابتًا في جميع التنسيقات
  fontSize: "14px",

  // أنماط رأس الصفحة
  pageHeader: {
    default: "bg-white text-gray-900 shadow-sm rounded-lg border-2 border-gray-500 font-Arial print:bg-white print:text-black print:shadow-none print:border print:border-gray-300",
    dark: "bg-gray-100 text-gray-900 shadow-sm rounded-lg border-2 border-gray-700 font-Tajawal print:bg-white print:text-black print:shadow-none print:border print:border-gray-300",
    colorful: "bg-gradient-to-r from-blue-50 to-purple-50 text-gray-900 shadow-sm rounded-lg border-2 border-blue-500 font-Almarai print:bg-white print:text-black print:shadow-none print:border print:border-gray-300",
    modern: "bg-white text-gray-900 rounded-lg border-2 border-gray-300 font-Changa print:bg-white print:text-black print:shadow-none print:border print:border-gray-300",
    classic: "bg-gray-50 text-gray-900 rounded-lg border-2 border-gray-400 font-Amiri print:bg-white print:text-black print:shadow-none print:border print:border-gray-300",
    elegant: "bg-gradient-to-r from-emerald-50 to-teal-50 text-gray-900 shadow-sm rounded-lg border-2 border-emerald-500 font-Harmattan print:bg-white print:text-black print:shadow-none print:border print:border-gray-300",
    minimal: "bg-white text-gray-900 rounded-lg border-2 border-gray-200 font-IBMPlexSansArabic print:bg-white print:text-black print:shadow-none print:border print:border-gray-300",
    professional: "bg-slate-50 text-gray-900 shadow-sm rounded-lg border-2 border-slate-500 font-noto-sans-arabic print:bg-white print:text-black print:shadow-none print:border print:border-gray-300",
    vibrant: "bg-gradient-to-r from-orange-50 to-red-50 text-gray-900 shadow-sm rounded-lg border-2 border-orange-500 font-rubik print:bg-white print:text-black print:shadow-none print:border print:border-gray-300",
    corporate: "bg-blue-50 text-gray-900 shadow-sm rounded-lg border-2 border-blue-600 font-Arial print:bg-white print:text-black print:shadow-none print:border print:border-gray-300",
  },

  // أنماط تذييل الصفحة
  pageFooter: {
    default: "bg-white text-gray-900 rounded-lg border-2 border-gray-500 font-Arial print:bg-white print:text-black print:shadow-none print:border print:border-gray-300",
    dark: "bg-gray-50 text-gray-900 rounded-lg border-2 border-gray-700 font-tajawal print:bg-white print:text-black print:shadow-none print:border print:border-gray-300",
    colorful: "bg-gradient-to-r from-purple-50 to-pink-50 text-gray-900 rounded-lg border-2 border-blue-500 font-almarai print:bg-white print:text-black print:shadow-none print:border print:border-gray-300",
    modern: "bg-white text-gray-900 rounded-lg border-2 border-gray-300 font-changa print:bg-white print:text-black print:shadow-none print:border print:border-gray-300",
    classic: "bg-gray-50 text-gray-900 rounded-lg border-2 border-gray-400 font-amiri print:bg-white print:text-black print:shadow-none print:border print:border-gray-300",
    elegant: "bg-gradient-to-r from-teal-50 to-emerald-50 text-gray-900 rounded-lg border-2 border-emerald-500 font-harmattan print:bg-white print:text-black print:shadow-none print:border print:border-gray-300",
    minimal: "bg-white text-gray-900 rounded-lg border-2 border-gray-200 font-ibm-plex-sans-arabic print:bg-white print:text-black print:shadow-none print:border print:border-gray-300",
    professional: "bg-slate-50 text-gray-900 rounded-lg border-2 border-slate-500 font-noto-sans-arabic print:bg-white print:text-black print:shadow-none print:border print:border-gray-300",
    vibrant: "bg-gradient-to-r from-red-50 to-orange-50 text-gray-900 rounded-lg border-2 border-orange-500 font-rubik print:bg-white print:text-black print:shadow-none print:border print:border-gray-300",
    corporate: "bg-blue-50 text-gray-900 rounded-lg border-2 border-blue-600 font-Arial print:bg-white print:text-black print:shadow-none print:border print:border-gray-300",
  },

  // أنماط جسم الجدول
  tableBodyStyle: {
    default: "bg-white text-gray-900 font-Arial  print:bg-white print:text-black print:border print:border-gray-300",
    dark: "bg-white text-gray-900 font-tajawal print:bg-white print:text-black print:border print:border-gray-300",
    colorful: "bg-gradient-to-r from-blue-50 to-purple-50 text-gray-900 font-almarai print:bg-white print:text-black print:border print:border-gray-300",
    modern: "bg-white text-gray-900 shadow-sm font-changa print:bg-white print:text-black print:shadow-none print:border print:border-gray-300",
    classic: "bg-white text-gray-900 font-amiri print:bg-white print:text-black print:border print:border-gray-300",
    elegant: "bg-gradient-to-r from-emerald-50 to-teal-50 text-gray-900 font-harmattan print:bg-white print:text-black print:border print:border-gray-300",
    minimal: "bg-white text-gray-900 font-ibm-plex-sans-arabic print:bg-white print:text-black print:border print:border-gray-300",
    professional: "bg-white text-gray-900 font-noto-sans-arabic print:bg-white print:text-black print:border print:border-gray-300",
    vibrant: "bg-gradient-to-r from-orange-50 to-red-50 text-gray-900 font-rubik print:bg-white print:text-black print:border print:border-gray-300",
    corporate: "bg-white text-gray-900 font-Arial print:bg-white print:text-black print:border print:border-gray-300",
  },

  // أنماط رأس الجدول
  tableThedStyle: {
    default: "bg-gray-100 text-gray-900 font-Arial font-bold space-x-1 print:bg-gray-100 print:text-black",
    dark: "bg-gray-800 text-white font-tajawal font-bold space-x-1 print:bg-gray-800 print:text-white",
    colorful: "bg-gradient-to-r from-blue-600 to-purple-600 text-white font-almarai font-bold space-x-1 print:bg-gradient-to-r from-blue-600 to-purple-600 print:text-white",
    modern: "bg-gray-50 text-gray-900 font-changa font-bold space-x-1 print:bg-gray-50 print:text-gray-900",
    classic: "bg-gray-200 text-gray-900 font-amiri font-bold space-x-1 print:bg-gray-200 print:text-gray-900",
    elegant: "bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-harmattan font-bold space-x-1 print:bg-gradient-to-r from-emerald-600 to-teal-600 print:text-white",
    minimal: "bg-gray-50 text-gray-900 font-ibm-plex-sans-arabic font-bold space-x-1 print:bg-gray-50 print:text-gray-900",
    professional: "bg-slate-800 text-white font-noto-sans-arabic font-bold space-x-1 print:bg-slate-800 print:text-white",
    vibrant: "bg-gradient-to-r from-orange-500 to-red-500 text-white font-rubik font-bold space-x-1 print:bg-gradient-to-r from-orange-500 to-red-500 print:text-white",
    corporate: "bg-blue-800 text-white font-Arial font-bold space-x-1 print:bg-blue-800 print:text-white",
  },

  // أنماط خلايا الجدول
  tableCellStyle: {
    default: "p-2 rounded-lg font-Arial space-x-1 border border-gray-300 print:p-2 print:border print:border-gray-300",
    dark: "p-2 rounded-lg font-tajawal space-x-1 border border-gray-300 print:p-2 print:border print:border-gray-300",
    colorful: "p-2 rounded-lg font-almarai space-x-1 border border-gray-300 print:p-2 print:border print:border-gray-300",
    modern: "p-3 rounded-lg font-changa space-x-1 border border-gray-300 print:p-2 print:border print:border-gray-300",
    classic: "p-2 rounded-lg font-amiri space-x-1 border border-gray-300 print:p-2 print:border print:border-gray-300",
    elegant: "p-2 rounded-lg font-harmattan space-x-1 border border-gray-300 print:p-2 print:border print:border-gray-300",
    minimal: "p-2 rounded-lg font-ibm-plex-sans-arabic space-x-1 border border-gray-300 print:p-2 print:border print:border-gray-300",
    professional: "p-2 rounded-lg font-noto-sans-arabic space-x-1 border border-gray-300 print:p-2 print:border print:border-gray-300",
    vibrant: "p-2 rounded-lg font-rubik space-x-1 border border-gray-300 print:p-2 print:border print:border-gray-300",
    corporate: "p-2 rounded-lg font-Arial space-x-1 border border-gray-300 print:p-2 print:border print:border-gray-300",
  },

  // أنماط العنوان الرئيسي
  titleStyle: {
    default: "bg-white text-gray-900 font-Arial font-bold rounded-lg border-2 border-gray-600 print:bg-white print:text-black print:border print:border-gray-300",
    dark: "bg-gray-800 text-white font-tajawal font-bold rounded-lg border-2 border-gray-700 print:bg-white print:text-black print:border print:border-gray-300",
    colorful: "bg-gradient-to-r from-blue-50 to-purple-50 text-gray-900 font-almarai font-bold rounded-lg border-2 border-purple-500 print:bg-white print:text-black print:border print:border-gray-300",
    modern: "bg-white text-gray-900 font-changa font-bold rounded-lg border-2 border-gray-400 print:bg-white print:text-black print:border print:border-gray-300",
    classic: "bg-gray-50 text-gray-900 font-amiri font-bold rounded-lg border-2 border-gray-600 print:bg-white print:text-black print:border print:border-gray-300",
    elegant: "bg-gradient-to-r from-emerald-50 to-teal-50 text-gray-900 font-harmattan font-bold rounded-lg border-2 border-emerald-600 print:bg-white print:text-black print:border print:border-gray-300",
    minimal: "bg-white text-gray-900 font-ibm-plex-sans-arabic font-bold rounded-lg border-2 border-gray-500 print:bg-white print:text-black print:border print:border-gray-300",
    professional: "bg-slate-800 text-white font-noto-sans-arabic font-bold rounded-lg border-2 border-slate-600 print:bg-white print:text-black print:border print:border-gray-300",
    vibrant: "bg-gradient-to-r from-orange-50 to-red-50 text-gray-900 font-rubik font-bold rounded-lg border-2 border-orange-600 print:bg-white print:text-black print:border print:border-gray-300",
    corporate: "bg-blue-800 text-white font-Arial font-bold rounded-lg border-2 border-blue-700 print:bg-white print:text-black print:border print:border-gray-300",
  },

  // أنماط إضافية للطباعة
  printStyles: {
    default: "print:bg-white print:text-black print:shadow-none font-Arial print:border print:border-gray-300",
    dark: "print:bg-white print:text-black print:shadow-none font-tajawal print:border print:border-gray-300",
    colorful: "print:bg-white print:text-black print:shadow-none font-almarai print:border print:border-gray-300",
    modern: "print:bg-white print:text-black print:shadow-none font-changa print:border print:border-gray-300",
    classic: "print:bg-white print:text-black print:shadow-none font-amiri print:border print:border-gray-300",
    elegant: "print:bg-white print:text-black print:shadow-none font-harmattan print:border print:border-gray-300",
    minimal: "print:bg-white print:text-black print:shadow-none font-ibm-plex-sans-arabic print:border print:border-gray-300",
    professional: "print:bg-white print:text-black print:shadow-none font-noto-sans-arabic print:border print:border-gray-300",
    vibrant: "print:bg-white print:text-black print:shadow-none font-rubik print:border print:border-gray-300",
    corporate: "print:bg-white print:text-black print:shadow-none font-Arial print:border print:border-gray-300",
  },

  // أنماط للعناصر المحددة
  selectedStyle: {
    default: "bg-blue-50 font-Arial print:bg-gray-50 print:border print:border-gray-300",
    dark: "bg-gray-50 font-tajawal print:bg-gray-50 print:border print:border-gray-300",
    colorful: "bg-blue-50 font-almarai print:bg-gray-50 print:border print:border-gray-300",
    modern: "bg-gray-50 font-changa print:bg-gray-50 print:border print:border-gray-300",
    classic: "bg-gray-100 font-amiri print:bg-gray-50 print:border print:border-gray-300",
    elegant: "bg-emerald-50 font-harmattan print:bg-gray-50 print:border print:border-gray-300",
    minimal: "bg-gray-50 font-ibm-plex-sans-arabic print:bg-gray-50 print:border print:border-gray-300",
    professional: "bg-slate-50 font-noto-sans-arabic print:bg-gray-50 print:border print:border-gray-300",
    vibrant: "bg-orange-50 font-rubik print:bg-gray-50 print:border print:border-gray-300",
    corporate: "bg-blue-50 font-Arial print:bg-gray-50 print:border print:border-gray-300",
  },

  // أنماط إضافية للجدول
  tableStyle: {
    default: "rounded-lg border-2 border-gray-500 font-Arial print:border print:border-gray-300",
    dark: "rounded-lg border-2 border-gray-700 font-tajawal print:border print:border-gray-300",
    colorful: "rounded-lg border-2 border-blue-500 font-almarai print:border print:border-gray-300",
    modern: "rounded-lg border-2 border-gray-300 font-changa print:border print:border-gray-300",
    classic: "rounded-lg border-2 border-gray-400 font-amiri print:border print:border-gray-300",
    elegant: "rounded-lg border-2 border-emerald-500 font-harmattan print:border print:border-gray-300",
    minimal: "rounded-lg border-2 border-gray-200 font-ibm-plex-sans-arabic print:border print:border-gray-300",
    professional: "rounded-lg border-2 border-slate-500 font-noto-sans-arabic print:border print:border-gray-300",
    vibrant: "rounded-lg border-2 border-orange-500 font-rubik print:border print:border-gray-300",
    corporate: "rounded-lg border-2 border-blue-600 font-Arial print:border print:border-gray-300",
  },
} as const;

/**
 * نوع البيانات للأنماط المتاحة
 */
export type StyleTheme = keyof typeof styles.pageHeader;

/**
 * التحقق من صحة النمط المحدد
 * @param theme النمط المراد التحقق منه
 * @returns true إذا كان النمط صحيحاً
 */
export function isValidTheme(theme: string): theme is StyleTheme {
  return theme in styles.pageHeader;
}
