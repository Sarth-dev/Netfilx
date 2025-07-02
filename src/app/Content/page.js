// app/trailer/[id]/page.jsx
'use client';

import { useParams } from 'next/navigation';

const trailerMap = {
  1: 'https://youtu.be/oqxAJKy0ii4?si=RTYpWmoayb8wUAxp', // Squid Game
  2: 'https://www.youtube.com/embed/your-video-id2', // Kapil Show
  3: 'https://www.youtube.com/embed/your-video-id3', // Raid 2
  // Add more mappings...
};

export default function TrailerPage() {
  const { id } = useParams();
  const videoUrl = trailerMap[id];

  if (!videoUrl) {
    return (
      <div className="text-center py-20 text-white">
        <h2 className="text-2xl font-semibold">Trailer Not Available</h2>
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
      <div className="flex flex-col items-center justify-center min-h-screen bg-black px-4 py-8 text-white">
      <h1 className="text-2xl font-bold mb-6">Watch Trailer</h1>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          width="100%"
          height="100%"
          src={videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-xl"
        ></iframe>
      </div>
    </div>
  </>
  );
}
