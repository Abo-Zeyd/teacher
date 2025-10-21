import React from "react";
import "./style.css";

export default function ComboBox({
  data,
  labelTitle,
  changeCompmEvent,
  id,
  style,
  labelStyle
}: {
  data: string[] | null;
  labelTitle: string;
  changeCompmEvent: React.ChangeEventHandler<HTMLSelectElement>;
  id?: string;
  style?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
}) {
  return (
    <div className="w-full ">
      {data ? (
        <div className="flex flex-col items-center sm:flex-row  m-1 w-full">
          <label
            htmlFor={id}
            className="flex font-normal text-black dark:text-gray-300 txt"
            style={labelStyle}
          >
            {labelTitle}
          </label>
         
          <select
            id={id}
            name={id}
            className="w-auto rounded-lg font-bold   text-black border-2 border-secondary  shadow-sm 
                       focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            onChange={changeCompmEvent}
            style={style}
            
          >
            {data.map((item, index) => (
              <option key={index}  dir="rtl">
                {item}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <p className="text-gray-500">Loading...</p>
      )}
    </div>
  );
}
