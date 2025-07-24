'use client'; // Only needed if you use hooks (none here — safe to remove if unused)

import React from 'react';

export default function AboutPage() {
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

      <div className="bg-black text-white min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Title */}
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-gray-400 text-lg">
            Experience entertainment like never before — unlimited movies, TV shows, and original content, anytime, anywhere.
          </p>
        </section>

        {/* Mission */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-400">
            Our goal is to make world-class entertainment accessible to everyone. Whether you're binge-watching your favorite series or exploring new genres, our platform is designed to deliver high-quality streaming at the most affordable prices — starting at just ₹149/month.
          </p>
        </section>

        {/* Features */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Unlimited access to 10,000+ movies and series</li>
            <li>Original content you won't find anywhere else</li>
            <li>Watch on your phone, tablet, TV, or laptop</li>
            <li>Cancel anytime — no hidden fees</li>
            <li>Stream in up to 4K Ultra HD quality</li>
          </ul>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p className="text-gray-400 mb-1">Questions? Reach out to our support team.</p>
          <p className="text-gray-400">
            Email: <a href="mailto:testsmmail8@gmail.com" className="text-red-500 hover:underline">testsmmail8@gmail.com</a>
          </p>
        </section>
      </div>
    </div>
  </>
  );
}
