import Link from "next/link";
import type { ReactNode } from "react";

export function DashboardLayout({
  children,
  variant = "home",
}: {
  children: ReactNode;
  variant?: "home" | "profile";
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-[1320px] overflow-hidden bg-black">
        <div className="flex min-h-[920px]">
          <aside className="hidden w-[72px] flex-col items-center border-r border-white/8 bg-black py-5 md:flex">
            <img
              src="/images/social/1524504388940-b1c1722653e1.jpg"
              alt="Profile"
              className="mb-6 h-12 w-12 rounded-full border border-white/20 object-cover"
            />

            {["home", "play", "bag", "grid", "chart", "spark"].map((icon, index) => {
              const className = `mb-3 flex h-9 w-9 items-center justify-center rounded-full border text-[10px] font-semibold transition ${
                index === 0
                  ? "border-[#60a5fa]/40 bg-[#1d4ed8]/15 text-[#dbeafe]"
                  : "border-white/5 bg-white/[0.02] text-white/70"
              }`;
              const content = index === 0 ? "⌂" : index === 1 ? "◸" : index === 2 ? "▣" : index === 3 ? "▦" : index === 4 ? "◮" : "✦";

              return index === 0 ? (
                <Link key={icon} href="/" className={className}>
                  {content}
                </Link>
              ) : (
                <button key={icon} className={className}>
                  {content}
                </button>
              );
            })}

          </aside>

          <main className="flex-1 bg-black">
            <header className="flex items-center justify-between gap-3 border-b border-white/8 px-4 pb-3 pt-4 sm:px-5 lg:px-6">
              <div className="flex items-center gap-3">
                <button className="inline-flex items-center gap-2 rounded-full bg-[#101926] px-3 py-2 text-sm font-medium text-white/80 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">
                  <span className="text-lg leading-none">+</span>
                  <span>Upload video</span>
                </button>
              </div>

              <div className="flex items-center gap-2 text-white/70">
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.03] text-sm shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-white/80"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="11" cy="11" r="6.5" />
                    <path d="m16 16 4.5 4.5" />
                  </svg>
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.03] text-sm shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
                  <span className="relative flex h-full w-full items-center justify-center">
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 text-white/80"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
                    </svg>
                    <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#ff4d7b] px-1 text-[9px] font-bold text-white">
                      2
                    </span>
                  </span>
                </button>
                <Link href="/profile">
                  <div className="relative">
                    <img
                      src="/images/social/1524504388940-b1c1722653e1.jpg"
                      alt="Profile"
                      className="h-9 w-9 rounded-full border border-white/20 object-cover shadow-lg shadow-violet-600/30"
                    />
                    <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-black bg-emerald-400" />
                  </div>
                </Link>
              </div>
            </header>

            <div
              className={
                variant === "profile"
                  ? "pb-4"
                  : "px-4 py-4 sm:px-5 lg:px-6"
              }
            >
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
