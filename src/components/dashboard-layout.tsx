import Link from "next/link";
import type { ReactNode } from "react";

export function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#03070d] text-white">
      <div className="mx-auto max-w-[1320px] overflow-hidden bg-[#02070d]">
        <div className="flex min-h-[920px]">
          <aside className="hidden w-[72px] flex-col items-center border-r border-white/8 bg-[#02060b] py-5 md:flex">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#1d4ed8] text-3xl font-bold text-white">
              S
            </div>

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

          <main className="flex-1 bg-[#040a12] px-4 py-4 sm:px-5 lg:px-6">
            <header className="mb-4 flex items-center justify-between gap-3 border-b border-white/8 pb-3">
              <div className="flex items-center gap-3">
                <button className="inline-flex items-center gap-2 rounded-full bg-[#101926] px-3 py-2 text-sm font-medium text-white/80 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">
                  <span className="text-lg leading-none">+</span>
                  <span>Upload video</span>
                </button>
              </div>

              <div className="flex items-center gap-2 text-white/70">
                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.03] text-sm shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
                  ⌕
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.03] text-sm shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
                  ◌
                </button>
                <Link href="/profile">
                  <div className="relative">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#f5d0fe] via-[#c084fc] to-[#7c3aed] text-sm font-semibold text-white shadow-lg shadow-violet-600/30">
                      S
                    </div>
                    <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#ff4d7b] px-1 text-[9px] font-bold text-white">
                      2
                    </span>
                  </div>
                </Link>
              </div>
            </header>

            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
