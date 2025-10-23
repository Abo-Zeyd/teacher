import React from 'react'

export function Button({
    children,
    handleChange,
    id,
    style,
    
  }: {
    children: React.ReactNode;
    handleChange: React.MouseEventHandler<HTMLButtonElement>;
    id?: string;
    style?: string | { [key: string]: string };
    
  }) {
    return (
      <button
        id={id}
        type="button"
        onClick={handleChange}
        className={`text border-2 border-secondary text-white ${style ? style : 'buttonheader'}
        focus:bg-accent rounded-lg text-base px-5 p-1 me-2 mb-2 ms-auto dark:bg-blue-600 
        dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 default-class`}
      >
        {children}
      </button>
    );
  }