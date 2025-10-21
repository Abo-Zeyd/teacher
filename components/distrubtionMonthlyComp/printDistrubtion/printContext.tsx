"use client";

import { styles } from "./distrubtionPageItems/styles";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface PrintContextData {
  bodyStyle: keyof typeof styles.tableBodyStyle;
  setBodystyle: Dispatch<SetStateAction<keyof typeof styles.tableBodyStyle>>;
  changeStyle: (val: string) => void;
  value?: string;
  setValue?: Dispatch<SetStateAction<string | undefined>>;
  styleType: typeof styles; // المصفوفة التنسيقات
  wordDisplay?: boolean;
  setWordDisplay?: Dispatch<SetStateAction<boolean>>;
}

const PrintContext = createContext<PrintContextData | undefined>(undefined);

export function PrintContextContext({ children }: { children: ReactNode }) {
  //حالة تغيير التنسيق
  const [bodyStyle, setBodystyle] =
    useState<keyof typeof styles.tableBodyStyle>("default");
  const [value, setValue] = useState<string | undefined>();
//دالة تغيير التسيق
  const changeStyle = (value: string) => {
    setBodystyle(value as keyof typeof styles.tableBodyStyle);
  };
  //مصفوفة التنسيقات
  const styleType = styles
  const [wordDisplay, setWordDisplay] = useState(false);
  return (
    <PrintContext
      value={{
        bodyStyle,
        setBodystyle,
        changeStyle,
        value,
        setValue,
        styleType,
        setWordDisplay,
        wordDisplay,

      }}
    >
      {children}
    </PrintContext>
  );
}

export function usePrintContext() {
  // return useContext(PrintContext);

  const context = useContext(PrintContext);
  if (!context) {
    throw new Error("PrintContext يجب أن يكون داخل PrintContext");
  }
  return context;
}
