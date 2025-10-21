'use client'
import { useState } from "react";

export default function TableWithStyles() {
  const [selectedStyle, setSelectedStyle] = useState<keyof typeof styles>("default");

  const styles = {
    default: "bg-white text-black border border-gray-300",
    dark: "bg-gray-800 text-white border border-gray-700",
    colorful: "bg-gradient-to-r from-purple-500 to-pink-500 text-white",
    modern: "bg-gray-100 text-gray-900 shadow-lg rounded-lg",
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* قائمة لاختيار التنسيق */}
      <select
        className="p-2 border rounded-md"
        value={selectedStyle}
        onChange={(e) => setSelectedStyle(e.target.value as keyof typeof styles)}
      >
        <option value="default">افتراضي</option>
        <option value="dark">مظلم</option>
        <option value="colorful">ملون</option>
        <option value="modern">حديث</option>
      </select>

      {/* الجدول مع تطبيق التنسيق المختار */}
      <table className={`w-1/2 border-collapse ${styles[selectedStyle]}`}>
        <thead>
          <tr>
            <th className="border p-2">الاسم</th>
            <th className="border p-2">العمر</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">محمد</td>
            <td className="border p-2">25</td>
          </tr>
          <tr>
            <td className="border p-2">علي</td>
            <td className="border p-2">30</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
