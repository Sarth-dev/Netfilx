"use client";

import Footer from "@/app/Component/utils/Footer";
import { useParams } from "next/navigation";

const trailerMap = {
  1: {
    title: "Squid Game",
    url: "https://www.youtube.com/embed/oqxAJKy0ii4?si=eGjW4VL9dWYuyeTC",
  },
  2: {
    title: "The Great Indian Kapil Show",
    url: "https://www.youtube.com/embed/2aThLelex1A?si=9uwLLiXKG3NsAyBo",
  },
  3: {
    title: "Raid 2",
    url: "https://www.youtube.com/embed/GCObs0_MszA?si=uJ9it9yjL5TctY04",
  },
  4: {
    title: "Jaat",
    url: "https://www.youtube.com/embed/rAXxdaU-xeo?si=o414V_HO3wPViGdG",
  },
  5: {
    title: "Pushpa 2",
    url: "https://www.youtube.com/embed/1kVK0MZlbI4?si=-XILKSbAnm9WeJ__",
  },
  6: {
    title: "HIT",
    url: "https://www.youtube.com/embed/SDjHdCUYqIc?si=CVlYXXYJmUyjtJxL",
  },
  7: {
    title: "Rana Naidu",
    url: "https://www.youtube.com/embed/wbEWbAKo29Q?si=I9maDfmghCJEKTzl",
  },
  8: {
    title: "Chhava",
    url: "https://www.youtube.com/embed/77vRyWNqZjM?si=ocqeuVwTlp_SPCbh",
  },
  9: {
    title: "The Royals",
    url: "https://www.youtube.com/embed/YV7FN78Dwxo?si=FDAK3EZt8UE2VnML",
  },
  10: {
    title: "Sikandar",
    url: "https://www.youtube.com/embed/in6mSwNbXS0?si=g78qnPcb5QPVYadc",
  },
};

export default function TrailerPage() {
  const { id } = useParams();
  const trailer = trailerMap[id];

  if (!trailer) {
    return (
      <div className="text-white flex items-center justify-center h-screen bg-black">
        <p className="text-xl font-semibold">🚫 Trailer not found.</p>
      </div>
    );
  }

  return (
    <>
      <header className="flex justify-between items-center px-6 py-4 sm:px-10 md:px-12">
        <a href="/">
          <img
            src="/images/logo.png"
            alt="Netflix"
            className="w-32 sm:w-28 md:w-32 lg:w-40 xl:w-48"
          />
        </a>

        <div className="flex items-center gap-3">
          <select className="bg-gray-900 border border-white text-white px-2 py-1 rounded-md text-sm">
            <option>English</option>
            <option>हिन्दी</option>
          </select>
          <a href="/signin">
            <button className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded text-sm text-white">
              Sign In
            </button>
          </a>
        </div>
      </header>
      <div className="flex flex-col items-center justify-center min-h-screen bg-black px-4 py-12 text-white">
        <h1 className="text-3xl font-bold mb-6">
          {trailer.title} - Official Trailer
        </h1>
        <div className="w-full max-w-5xl aspect-video">
          <iframe
            width="100%"
            height="100%"
            src={trailer.url}
            title={`${trailer.title} Trailer`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
}
