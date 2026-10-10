import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-lg text-center">
        <h1 className="text-8xl font-extrabold tracking-tight text-green-600 sm:text-9xl">
          404
        </h1>

        <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-green-500" />

        <h2 className="mt-6 text-2xl font-bold text-gray-800 sm:text-3xl">
          পেজটি খুঁজে পাওয়া যায়নি!
        </h2>

        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-gray-500 sm:text-base">
          দুঃখিত! আপনি যে পেজটি খুঁজছেন সেটি
          হয়তো সরিয়ে ফেলা হয়েছে অথবা ঠিকানাটি ভুল।
        </p>

        <a
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition duration-300 hover:bg-green-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-green-200"
        >
          ← হোম পেজে ফিরে যান
        </a>

        <p className="mt-10 text-xs text-gray-400">
           © {new Date().getFullYear()} — আপনার যাত্রা এখান থেকেই শুরু হোক।
        </p>
      </div>
      </div>
  )
}