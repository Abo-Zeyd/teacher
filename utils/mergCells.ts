


interface MatrixResult {
  matrix: (string | number)[][];
  rowSpanMap: number[][];
  colSpanMap: number[][];
  keys: string[];
  }


interface MatrixOptions {
  /**
   * الحد الأقصى لحجم المصفوفة (عدد الصفوف)
   * @default 1000
   */
  maxRows?: number;
  /**
   * الحد الأقصى لحجم المصفوفة (عدد الأعمدة)
   * @default 100
   */
  maxColumns?: number;
  /**
   * استخدام TypedArray لتحسين الأداء
   * @default true
   */
  useTypedArray?: boolean;
}

/**
 * معالجة المصفوفة ودمج الخلايا المتشابهة
 * @param data مصفوفة من الكائنات تحتوي على البيانات
 * @param options خيارات إضافية للمعالجة
 * @returns كائن يحتوي على المصفوفة المعالجة وخريطة الدمج
 * @throws خطأ إذا كانت البيانات غير صالحة
 * @example
 * const data = [
 *   { name: 'أحمد', grade: 'A', class: '1' },
 *   { name: 'أحمد', grade: 'A', class: '2' }
 * ];
 * const result = await mergCellprocessMatrix(data, {
 *   maxRows: 1000,
 *   maxColumns: 100,
 *   useTypedArray: true
 * });
 */
export async function mergCellprocessMatrix(
  data: Record<string, string | number>[],
  options: MatrixOptions = {}
): Promise<MatrixResult> {

  const { maxRows = 1000, maxColumns = 100 } = options;

  // التحقق من صحة البيانات المدخلة
  if (!Array.isArray(data)) {
    throw new Error("يجب أن تكون البيانات مصفوفة");
  }

  if (data.length === 0) {
    return { matrix: [], rowSpanMap: [], colSpanMap: [], keys: [] };
  }

  if (data.length > maxRows) {
    throw new Error(`عدد الصفوف يتجاوز الحد الأقصى المسموح به (${maxRows})`);
  }

  // التحقق من صحة كل صف
  data.forEach((row, index) => {
    if (row === null || row === undefined) {
      throw new Error(`الصف رقم ${index } فارغ`);
    }
    if (typeof row !== "object") {
      throw new Error(`الصف رقم ${index + 1} يجب أن يكون كائناً`);
    }
  });

  const keys = await Object.keys(data[0]);

  if (keys.length === 0) {
    throw new Error("لا توجد مفاتيح في البيانات");
  }

  if (keys.length > maxColumns) {
    throw new Error(
      `عدد الأعمدة يتجاوز الحد الأقصى المسموح به (${maxColumns})`
    );
  }

  // التحقق من اتساق المفاتيح في جميع الصفوف
  const firstRowKeys = new Set(keys);
  data.forEach((row, index) => {
    const rowKeys = Object.keys(row);
    if (rowKeys.length !== keys.length) {
      throw new Error(`عدد المفاتيح في الصف ${index + 1} غير متطابق`);
    }
    rowKeys.forEach((key) => {
      if (!firstRowKeys.has(key)) {
        throw new Error(
          `المفتاح "${key}" في الصف ${index + 1} غير موجود في الصف الأول`
        );
      }
    });
  });

  // إنشاء المصفوفة مع التحقق من القيم
  const matrix = data.map((row, rowIndex) =>
    keys.map((key) => {
      const value = row[key];
      if (value === null || value === undefined) {
        throw new Error(
          `القيمة غير موجودة في الصف ${rowIndex + 1} والمفتاح: ${key}`
        );
      }
      if (typeof value !== "string" && typeof value !== "number") {
        throw new Error(
          `نوع القيمة غير صالح في الصف ${rowIndex + 1} والمفتاح: ${key}`
        );
      }
      
      return value;
    })
  );

  // تهيئة مصفوفات الدمج
  const rowSpanMap = Array.from({ length: matrix.length }, () =>
    Array(keys.length).fill(1)
  );
  const colSpanMap = Array.from({ length: matrix.length }, () =>
    Array(keys.length).fill(1)
  );

  // معالجة التكرار الأفقي - تحسين الأداء باستخدام Set
  const processedCells = new Set<string>();

  for (let i = 0; i < matrix.length; i++) {
    let j = 0;
    while (j < keys.length) {
      const cellKey = `${i},${j}`;
      if (processedCells.has(cellKey)) {
        j++;
        continue;
      }

      const currentValue = matrix[i][j];
      let span = 1;

      // البحث عن الخلايا المتشابهة
      while (j + span < keys.length && matrix[i][j + span] === currentValue) {
        colSpanMap[i][j + span] = 0;
        processedCells.add(`${i},${j + span}`);
        span++;
      }

      colSpanMap[i][j] = span;
      processedCells.add(cellKey);
      j += span;
    }
  }

  // معالجة التكرار العمودي - تحسين الأداء
  processedCells.clear();
  for (let j = 0; j < keys.length; j++) {
    let i = 0;
    while (i < matrix.length) {
      const cellKey = `${i},${j}`;
      if (processedCells.has(cellKey)) {
        i++;
        continue;
      }

      const currentValue = matrix[i][j];
      let span = 1;

      // البحث عن الخلايا المتشابهة
      while (i + span < matrix.length && matrix[i + span][j] === currentValue) {
        rowSpanMap[i + span][j] = 0;
        processedCells.add(`${i + span},${j}`);
        span++;
      }

      rowSpanMap[i][j] = span;
      processedCells.add(cellKey);
      i += span;
    }
  }

  return { matrix, rowSpanMap, colSpanMap, keys };
}

export function addRowToTble(data: { [key: string]: string | number }[], index: number, level?: number) {
 
  const keys = Object.keys(data[0]);
  // const values = Object.values(data[0]);
 
  let EndColArabic: number = 8;
  if(level === 1 || level === 2|| level === 3){
  EndColArabic = 9;
  }
  else if(level === 4 || level === 5){
    EndColArabic = 10;
  }

  const emptyRow: { [key: string]: string | number } = {};

  keys.forEach((key) => {
    if (key === "0") {
      emptyRow[key] = "1/2";
    }
    else if (Number(key) > 1 && Number(key) < EndColArabic) {
      emptyRow[key] = "(إدماج ، تقويم ، ومعالجة) للمقطع";
     
    }
    else {
      emptyRow[key] = data[index - 1]?.[key] ?? "";
    }
  });

  // 👇 حدد مكان الإدراج
  // const insertIndex = 0;

  // إنشاء نسخة جديدة بدون حذف أي عنصر
  const newData = [
    ...data.slice(0, index),
    emptyRow,
    ...data.slice(index),
  ];

  return newData;
}

export function rotateColumn(header: string, rowSpan: number) {
 
  if ([
    "التربية العلمية",
    "التاريخ",
    "التربية المدنية",
    "الأساليب",
    "الوحدات",
    "الجغرافيا",
  ].includes(header)) {
    return "[writing-mode:vertical-rl] [text-orientation:mixed] rotate-180 text-center";
  }
   if (header === "المحور" && rowSpan > 1) {
    return "[writing-mode:vertical-rl] [text-orientation:mixed] rotate-180 text-center";
  }
  if (header === "الرياضيات") {
   
    return "whitespace-nowrap min-w-[300px]"; 
    
  }
  return "";
}
