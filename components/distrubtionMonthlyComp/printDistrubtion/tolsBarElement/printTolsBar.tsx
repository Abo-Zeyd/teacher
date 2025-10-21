"use client";

import { usePrintContext } from "../printContext";
import ComBoStyle from "./comboStyles";
import { BsFillPrinterFill } from "react-icons/bs";
import { FaFileWord } from "react-icons/fa";

type ChildProps = {
  handlePrint: () => void; // تعريف handlePrint كـ دالة لا تُرجع شيئًا
  sevePdf: () => void; // تعريف handlePrint كـ دالة لا تُرجع شيئًا
  saveWord?: () => void; // دالة حفظ Word اختيارية
};
function PrintTolsBar({ handlePrint, saveWord }: ChildProps) {
  const { changeStyle, setWordDisplay, wordDisplay } = usePrintContext();
  return (
    <div>
      <div 
      className="flex flex-row items-center justify-end  mx-8 cursor-pointer text-2xl bg-primary p-2 border-solid border-2 border-secondary rounded-lg h-14 mb-4">
        <div className="flex flex-row  top-14  absolute right-10 text-xl border rounded-md">
          {!wordDisplay && (<ComBoStyle setBodystyle={changeStyle} />)}
        </div>
        <div className="ml-7"><p>بعد النقر على الأيقونة إذا لم تعمل انقر مرة ثانية</p></div>
        {<button onClick={() => 
         { if (!wordDisplay) {
           ( handlePrint())}
          else {
            setWordDisplay?.(false);
          }
          }
        }
          >
          <BsFillPrinterFill className="ml-3" />
        </button>
}
        {/* <button
          onClick={() => {
            sevePdf();
           
          }}
        >
          <FaFilePdf />
        </button> */}

        {/* {saveWord && ( */}
          <button
            onClick={() => {
              if (!wordDisplay) {
                setWordDisplay?.(true);
              }
              else {
              saveWord?.();
              }
            }}
            title="حفظ كملف Word"
          >
            <FaFileWord className="ml-3" />
          </button>
        {/* )} */}
      </div>
      
    </div>
  );
}

export default PrintTolsBar;


