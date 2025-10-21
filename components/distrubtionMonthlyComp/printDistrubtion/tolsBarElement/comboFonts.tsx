import React from 'react'
import ComboStyles from "./comboStyles";
// import {usePrintContext} from "../printContext";

export default function CmboStyles() {
  const styleNames: string[] = Object.keys(ComboStyles);

  


  return (
    <div>
      <select
        className="p-1 border rounded-md bg-white text-gray-900 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={styleNames[0]}
        onChange={() => {

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
  )
}
