import React from "react";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  arr: string[];
};

export default function Select({ value, onChange, arr }: Props) {
  return (
    <select
      className='outline-none border-2 border-slate-300 rounded-md p-2 focus:border-slate-500'
      value={value}
      onChange={onChange}
    >
      {arr.map((cV, i) => (
        <option key={i} value={cV}>
          {cV}
        </option>
      ))}
    </select>
  );
}
