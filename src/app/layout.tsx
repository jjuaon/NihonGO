import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "NihonGO",
  description: "Learn Japanese effectively",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex bg-gradient-to-br from-indigo-50 via-white to-pink-50">
        <Sidebar />
        {/*
          On mobile: add pt-16 so content doesn't hide behind the fixed hamburger button.
          On md+: the sidebar is in the normal flow (relative), so no extra padding needed.
          Reduce horizontal padding on mobile (p-4) and restore on desktop (md:p-10).
        */}
        <main className="flex-1 min-h-screen p-4 pt-16 md:p-10 md:pt-10">
          {children}
        </main>
      </body>
    </html>
  );
}