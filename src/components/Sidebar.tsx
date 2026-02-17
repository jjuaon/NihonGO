"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close sidebar on route change (mobile nav)
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const linkStyle = (path: string) =>
    `px-4 py-3 rounded-xl transition-all text-sm font-medium ${
      pathname === path
        ? "bg-blue-600 text-white shadow-md"
        : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
    }`;

  return (
    <>
      {/* ── Hamburger button — visible on mobile only, hides when sidebar is open ── */}
      {!isOpen && (
        <button
          className="fixed top-4 left-4 z-50 flex items-center justify-center w-10 h-10 rounded-xl bg-white shadow-md border border-slate-200 md:hidden"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <span className="sr-only">Open menu</span>
          <div className="flex flex-col gap-[5px] w-5">
            <span className="block h-0.5 bg-slate-700 rounded" />
            <span className="block h-0.5 bg-slate-700 rounded" />
            <span className="block h-0.5 bg-slate-700 rounded" />
          </div>
        </button>
      )}

      {/* ── Backdrop overlay (mobile only) ── */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ── Sidebar panel ── */}
      <aside
        className={`
          fixed top-0 left-0 z-40 h-full w-64 bg-white border-r border-slate-200 p-6 flex flex-col
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:relative md:translate-x-0 md:flex md:shrink-0
        `}
      >
        {/* Brand */}
        <h2 className="text-2xl font-bold mb-10 bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
          NihonGO
        </h2>

        {/* Nav links */}
        <nav className="flex flex-col gap-2 overflow-y-auto flex-1">
          <Link href="/" className={linkStyle("/")}>
            ホーム
          </Link>
          <Link href="/vocab1" className={linkStyle("/vocab1")}>
            あ い う え お
          </Link>
          <Link href="/vocab2" className={linkStyle("/vocab2")}>
            か き く け こ
          </Link>
          <Link href="/vocab3" className={linkStyle("/vocab3")}>
            さ し す せ そ
          </Link>
          <Link href="/vocab4" className={linkStyle("/vocab4")}>
            た ち つ て と
          </Link>
          <Link href="/vocab5" className={linkStyle("/vocab5")}>
            な に ぬ ね の
          </Link>
          <Link href="/vocab6" className={linkStyle("/vocab6")}>
            は ひ ふ へ ほ
          </Link>
          <Link href="/vocab7" className={linkStyle("/vocab7")}>
            ま み む め も
          </Link>
          <Link href="/vocab8" className={linkStyle("/vocab8")}>
            や ゆ よ, わ
          </Link>
          <Link href="/vocab9" className={linkStyle("/vocab9")}>
            ら り る れ ろ
          </Link>
        </nav>

        <div className="mt-auto pt-4 text-xs text-slate-400">© 2026 NihonGO</div>
      </aside>
    </>
  );
}