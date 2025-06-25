
import { FC } from "react";
interface Artist { id:number; name:string; category:string; price:string; location:string; image:string; }
const ArtistCard:FC<{artist:Artist}> = ({ artist }) => (
<div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition p-4">
    <img src={artist.image} alt={artist.name} className="h-40 w-full object-cover rounded" />
    <h3 className="mt-2 font-semibold">{artist.name}</h3>
    <p>{artist.category} | {artist.location}</p>
    <p className="mt-1 text-sm">{artist.price}</p>
<button className="bg-brand-500 text-white px-4 py-2 rounded hover:bg-brand-600">
  Ask for Quote
</button>
  </div>
);
export default ArtistCard;