import { FC } from "react";
interface Column<T> { header:string; accessor:keyof T; }
const Table = <T extends object>({ columns, data }: { columns: Column<T>[]; data: T[]; }) => (
  <table className="w-full text-sm text-left border border-gray-300 shadow-sm rounded overflow-hidden">
    <thead className="bg-brand-500 text-white">
      <tr>{columns.map(c=> <th key={String(c.accessor)} className="border p-2 text-left">{c.header}</th>)}</tr>
    </thead>
    <tbody>
    {data.map((row, idx) => (
      <tr className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
          {columns.map(c=>(<td key={String(c.accessor)} className="border p-2">{String(row[c.accessor])}</td>))}
        </tr>
      ))}
    </tbody>
  </table>
);
export default Table;