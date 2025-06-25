"use client";
import { useState, useMemo } from "react";
import ArtistCard from "../../components/ArtistCard";
import FilterBlock from "../../components/FilterBlock";
import artistsData from "../../data/artists.json";

export default function ArtistList() {
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [maxPrice, setMaxPrice] = useState(10000);

  const filteredArtists = useMemo(() => {
    let filtered = [...artistsData];

    if (category) {
      filtered = filtered.filter((artist) => artist.category === category);
    }

    if (location) {
      filtered = filtered.filter((artist) => artist.location === location);
    }

    filtered = filtered.filter((artist) => {
      // Extract the first price number from the string (minimum price)
      const priceMatch = artist.price.match(/\d+/);
      if (!priceMatch) return false; // Skip if no price found
      
      const priceValue = parseInt(priceMatch[0], 10);
      return priceValue <= maxPrice;
    });

    return filtered;
  }, [category, location, maxPrice]);

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4">
      <aside className="w-full lg:w-1/4 space-y-6 bg-white p-4 rounded shadow-sm border">
        <FilterBlock label="Category">
          <select
            className="w-full border p-2 rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All</option>
            {[...new Set(artistsData.map((a) => a.category))].map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </FilterBlock>

        <FilterBlock label="Location">
          <select
            className="w-full border p-2 rounded"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">All</option>
            {[...new Set(artistsData.map((a) => a.location))].map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </FilterBlock>

        <FilterBlock label="Max Price ($)">
          <input
            type="range"
            min="0"
            max="10000"
            step="100"
            className="w-full"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>0</span>
            <span>${maxPrice}</span>
            <span>10000</span>
          </div>
        </FilterBlock>
      </aside>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
        {filteredArtists.length > 0 ? (
          filteredArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))
        ) : (
          <p className="col-span-full text-gray-500 text-center">
            No artists match the filters.
          </p>
        )}
      </section>
    </div>
  );
}