import React from 'react'
import { usePrintContext } from '../printContext';

/**
 * مكون تذييل الصفحة
 * يعرض توقيعات الأستاذ والمدير
 */
function PageFooter() {
  const { bodyStyle, styleType } = usePrintContext();

  return (
    <footer className="w-full mt-4">
      <div className={`flex flex-row justify-between items-center w-5/6 mx-auto p-4 ${styleType.pageFooter[bodyStyle]}`}>
        {/* توقيع الأستاذ */}
        <div className="flex flex-col items-center">
          <div className="w-48  flex items-center justify-center">
            <p className="text-lg font-medium">توقيع الأستاذ</p>
          </div>
        
        </div>

        {/* توقيع المدير */}
        <div className="flex flex-col items-center">
          <div className="w-48  flex items-center justify-center">
            <p className="text-lg font-medium">توقيع المدير</p>
          </div>
         
        </div>
      </div>
    </footer>
  )
}

export default PageFooter