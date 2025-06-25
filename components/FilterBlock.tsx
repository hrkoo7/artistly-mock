import { FC } from "react";
interface Props { label:string; children:any; }
const FilterBlock:FC<Props> = ({ label, children }) => (
  <div className="space-y-1">
    <label className="font-medium">{label}</label>
    {children}
  </div>
);
export default FilterBlock;