import { FC } from "react";
interface Option { label:string; value:string; }
const MultiSelect:FC<{options:Option[]; value:string[]; onChange:(v:string[])=>void}> = ({ options, value, onChange }) => {
  const toggle=(v:string)=> onChange(value.includes(v)? value.filter(x=>x!==v):[...value,v]);
  return (
    <div className="border p-2 rounded max-h-40 overflow-auto">
      {options.map(o => (
        <label key={o.value} className="flex items-center space-x-2">
          <input type="checkbox" checked={value.includes(o.value)} onChange={()=>toggle(o.value)} />
          <span>{o.label}</span>
        </label>
      ))}
    </div>
  );
};
export default MultiSelect;