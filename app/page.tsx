import Link from "next/link";
export default function Home() {
  const categories=["Singers","Dancers","Speakers","DJs"];
  return (
    // Before: <section className="py-20">…
<section className="py-20 bg-gradient-to-r from-brand-500 to-brand-400 text-white text-center">
  <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Welcome to Artistly</h1>
  <p className="text-lg max-w-xl mx-auto mb-8">
    Discover & connect with top-performing artists across categories.
  </p>
  <a href="/artists" className="inline-block px-6 py-3 bg-white text-brand-600 rounded-full font-medium shadow hover:bg-gray-100">
    Explore Artists
  </a>
</section>


  );
}