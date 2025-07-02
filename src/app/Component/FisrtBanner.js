"use client";

import React, { useState } from "react";
import { useRouter } from 'next/navigation';

function FirstBanner() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    router.push("/signin");
  };

  return (
    <div className="relative min-h-screen text-white">
      {/* ✅ Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
        {/* <div className="absolute inset-0 bg-black bg-opacity-60" /> */}
      </div>

      {/* ✅ Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navbar */}
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

        {/* Main Text + Form */}
        <main className="flex flex-col items-center justify-center text-center flex-grow px-6 mt-10 md:mt-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Unlimited movies, TV <br /> shows and more
          </h2>
          <p className="text-lg md:text-xl mb-3">Starts at ₹149. Cancel anytime.</p>
          <p className="text-sm mb-6">
            Ready to watch? Enter your email to create or restart your membership.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col text-white md:flex-row gap-3 w-full max-w-2xl"
          >
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full md:flex-1 px-4 py-3 rounded-md border text-white bg-transparent border-gray-400"
              required
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold"
            >
              Get Started &gt;
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}

export default FirstBanner;
