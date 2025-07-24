'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Footer() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted from footer:", email);
    router.push('/signin');
  };

  const links = [
    ['FAQ', 'Investor Relations', 'Privacy', 'Speed Test'],
    ['Help Centre', 'Jobs', 'Cookie Preferences', 'Legal Notices'],
    ['Account', 'Ways to Watch', 'Corporate Information', 'Only on Netflix'],
    ['Media Centre', 'Terms of Use', 'Contact Us'],
  ];

  return (
    <>
      <div className="w-full h-full text-center items-center flex flex-col px-4">
        <p className="text-sm mb-6 text-white">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        {/* Email Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col text-white md:flex-row gap-3 w-full max-w-2xl"
        >
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full md:flex-1 px-4 py-3 rounded-md border text-white bg-transparent"
            required
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white text-xl px-6 py-3 rounded-md font-semibold"
          >
            Get Started &gt;
          </button>
        </form>
      </div>

      <footer className="bg-black text-gray-400 text-sm px-6 py-12">
        <p className="mb-6">
          Questions? Call <a href="tel:0008009191743" className="underline">000-800-919-1743</a>
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-6">
          {links.map((group, i) => (
            <ul key={i} className="space-y-2">
              {group.map((link, j) => (
                <li key={j}>
                  <a href="/about" className="underline hover:text-white">{link}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <div className="mb-4">
          <select className="bg-black border border-gray-600 px-3 py-1 rounded text-white">
            <option>English</option>
            <option>Hindi</option>
          </select>
        </div>

        <p className="text-gray-400">Netflix India By Sarthak Kale</p>
      </footer>
    </>
  );
}
