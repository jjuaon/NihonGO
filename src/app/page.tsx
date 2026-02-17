import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[85vh] text-center px-4 sm:px-6 overflow-hidden">
      <div className="relative z-10 max-w-3xl w-full">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          勉強しましょう!
        </h1>
        <h6 className="text-base font-bold mb-6 leading-tight bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          べんきょうしましょう
        </h6>
        <p className="text-slate-600 text-base sm:text-xl mb-10">
          Learn vocabulary effectively using beautifully designed flashcards.
          Track progress, switch versions, and improve every day.
        </p>
      </div>
    </div>
  );
}