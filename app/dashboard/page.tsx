"use client";
import Table from "../../components/Table";
import artistsData from "../../data/artists.json";

type Artist = {
  id: number;
  name: string;
  category: string;
  location: string;
  price: string;
  image: string;
};

export default function Dashboard() {
  const columns: { header: string; accessor: keyof Artist }[] = [
    { header: "Name", accessor: "name" },
    { header: "Category", accessor: "category" },
    { header: "Location", accessor: "location" },
    { header: "Fee", accessor: "price" }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Artist Submissions</h2>
      <Table columns={columns} data={artistsData} />
    </div>
  );
}
