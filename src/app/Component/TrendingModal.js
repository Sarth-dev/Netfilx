// components/TrendingModal.jsx
"use client";
import Link from "next/link";
import { X } from "lucide-react";

export default function TrendingModal({ show, onClose, showData }) {
  if (!show || !showData) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4">
      <div className="bg-[#141414] max-w-2xl w-full rounded-xl overflow-hidden relative text-white max-h-[95vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-white z-10"
        >
          <X />
        </button>

        {/* Banner Image */}
        <img
          src={showData.image}
          alt={showData.title}
          className="w-full h-72 object-contain"
        />

        {/* Content */}
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-2">{showData.title}</h2>
          {/* <p className='text-medium font-normal mb-2'>{showData.description}</p> */}

          <div className="flex flex-wrap gap-2 text-sm mb-4">
            {showData.tags?.map((tag, idx) => (
              <span key={idx} className="px-2 py-1 bg-neutral-700 rounded">
                {tag}
              </span>
            ))}
          </div>

          <p className="text-sm mb-4">{showData.description}</p>

          <Link href={`/Content/${showData.id}`}>
            <button className="bg-red-600 text-white font-semibold px-3 py-2 rounded text-sm hover:bg-red-700 mt-2">
              Watch Trailer →
            </button>
          </Link>

          {/* <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
            Get Started →
          </button> */}
        </div>
      </div>
    </div>
  );
}
