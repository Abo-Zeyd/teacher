import "./style.css"
export const styles = {
  // أنماط الخطوط
  fontStyles: {
    default: "Arial",
    dark: "Tajawal",
    colorful: "Almarai",
    modern: "Changa",
    classic: "Amiri",
    elegant: "Harmattan",
    minimal: "IBMPlexSansArabic",
    professional: "NotoSansArabic",
    vibrant: "Rubik",
    corporate: "Arial",
  },

  // حجم الخط العام
  fontSize: "14px",

  // رأس الصفحة
  pageHeader: {
    default: "pageHeader-default",
    dark: "pageHeader-dark",
    colorful: "pageHeader-colorful",
    modern: "pageHeader-modern",
    classic: "pageHeader-classic",
    elegant: "pageHeader-elegant",
    minimal: "pageHeader-minimal",
    professional: "pageHeader-professional",
    vibrant: "pageHeader-vibrant",
    corporate: "pageHeader-corporate",
  },

  // تذييل الصفحة
  pageFooter: {
    default: "pageFooter-default",
    dark: "pageFooter-dark",
    colorful: "pageFooter-colorful",
    modern: "pageFooter-modern",
    classic: "pageFooter-classic",
    elegant: "pageFooter-elegant",
    minimal: "pageFooter-minimal",
    professional: "pageFooter-professional",
    vibrant: "pageFooter-vibrant",
    corporate: "pageFooter-corporate",
  },

  // جسم الجدول
  tableBodyStyle: {
    default: "tableBody-default",
    dark: "tableBody-dark",
    colorful: "tableBody-colorful",
    modern: "tableBody-modern",
    classic: "tableBody-classic",
    elegant: "tableBody-elegant",
    minimal: "tableBody-minimal",
    professional: "tableBody-professional",
    vibrant: "tableBody-vibrant",
    corporate: "tableBody-corporate",
  },

  // رأس الجدول
  tableThedStyle: {
    default: "tableThead-default",
    dark: "tableThead-dark",
    colorful: "tableThead-colorful",
    modern: "tableThead-modern",
    classic: "tableThead-classic",
    elegant: "tableThead-elegant",
    minimal: "tableThead-minimal",
    professional: "tableThead-professional",
    vibrant: "tableThead-vibrant",
    corporate: "tableThead-corporate",
  },

  // خلايا الجدول
  tableCellStyle: {
    default: "tableCell-default",
    dark: "tableCell-dark",
    colorful: "tableCell-colorful",
    modern: "tableCell-modern",
    classic: "tableCell-classic",
    elegant: "tableCell-elegant",
    minimal: "tableCell-minimal",
    professional: "tableCell-professional",
    vibrant: "tableCell-vibrant",
    corporate: "tableCell-corporate",
  },

  // العنوان الرئيسي
  titleStyle: {
    default: "title-default",
    dark: "title-dark",
    colorful: "title-colorful",
    modern: "title-modern",
    classic: "title-classic",
    elegant: "title-elegant",
    minimal: "title-minimal",
    professional: "title-professional",
    vibrant: "title-vibrant",
    corporate: "title-corporate",
  },

  // الطباعة
  printStyles: {
    default: "printStyle-default",
    dark: "printStyle-dark",
    colorful: "printStyle-colorful",
    modern: "printStyle-modern",
    classic: "printStyle-classic",
    elegant: "printStyle-elegant",
    minimal: "printStyle-minimal",
    professional: "printStyle-professional",
    vibrant: "printStyle-vibrant",
    corporate: "printStyle-corporate",
  },

  // العناصر المحددة
  selectedStyle: {
    default: "selected-default",
    dark: "selected-dark",
    colorful: "selected-colorful",
    modern: "selected-modern",
    classic: "selected-classic",
    elegant: "selected-elegant",
    minimal: "selected-minimal",
    professional: "selected-professional",
    vibrant: "selected-vibrant",
    corporate: "selected-corporate",
  },

  // الجدول الكامل
  tableStyle: {
    default: "tableStyle-default",
    dark: "tableStyle-dark",
    colorful: "tableStyle-colorful",
    modern: "tableStyle-modern",
    classic: "tableStyle-classic",
    elegant: "tableStyle-elegant",
    minimal: "tableStyle-minimal",
    professional: "tableStyle-professional",
    vibrant: "tableStyle-vibrant",
    corporate: "tableStyle-corporate",
  },
} as const;

/**
 * نوع الأنماط المتاحة
 */
export type StyleTheme = keyof typeof styles.pageHeader;

/**
 * التحقق من صحة النمط
 */
export function isValidTheme(theme: string): theme is StyleTheme {
  return theme in styles.pageHeader;
}
