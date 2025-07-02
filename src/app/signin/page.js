import Link from "next/link";

export default function SignIn() {
  return (
    <div className="relative min-h-screen bg-black text-white flex items-center justify-center">
      {/* 🔙 Background Image Layer */}
      <div className="absolute inset-0 -z-10">
        <img
          src="./hero.jpg" // make sure this image is in /public
          alt="background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* 🔛 Foreground Form */}
      <div className="bg-[#111] p-8 rounded-lg w-full max-w-md shadow-lg z-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Sign In</h2>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email or phone number"
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
            Sign In
          </button>

          <div className="flex justify-between items-center text-sm text-gray-400 mt-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-red-600" />
              <span>Remember me</span>
            </label>
            <a href="#" className="hover:underline">Need help?</a>
          </div>
        </form>

        <p className="mt-6 text-center text-gray-400 text-sm">
          New to Netflix?{" "}
          <Link href="/signin/signup" className="text-white hover:underline">
            Sign up now
          </Link>
        </p>
      </div>
    </div>
  );
}
