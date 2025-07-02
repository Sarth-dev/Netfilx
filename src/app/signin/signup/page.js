// pages/signup.js
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="bg-[#111] p-8 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded bg-[#333] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded bg-[#333] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded bg-[#333] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            required
          />
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 transition-colors py-3 rounded font-semibold"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-gray-400 text-sm">
          Already have an account?
          <Link href="/signin" className="text-white hover:underline">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
}
