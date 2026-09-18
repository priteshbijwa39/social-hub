import { profileTags, stories, trendingVideos } from "../../lib/data";
import { DashboardLayout } from "../../components/dashboard-layout";

const stats = [
  ["Views", "63.5M"],
  ["Likes", "1.2M"],
  ["Visits", "1.6M"],
  ["Shares", "1.4M"],
];

const tabs = ["Long video", "Short video", "Playlist", "Guestbook"];

export default function ProfileScreen() {
  return (
    <DashboardLayout variant="profile">
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-0">
        <div className="min-w-0 flex-1">
          <section className="overflow-hidden bg-black">
            <div className="relative h-[170px] overflow-hidden sm:h-[210px] lg:h-[240px]">
              <img
                src="/images/social/1524504388940-b1c1722653e1.jpg"
                alt="Profile cover"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-2 left-3 flex h-24 w-24 items-center justify-center rounded-full bg-black text-5xl text-white sm:h-28 sm:w-28 lg:h-32 lg:w-32 lg:text-6xl">
                〽
              </div>
              <div className="absolute right-3 top-2 flex max-w-[75%] flex-wrap justify-end gap-2">
                {["Follow", "Message", "Gift"].map((action) => (
                  <button
                    key={action}
                    className={`rounded-full border px-3 py-1 text-sm text-white sm:px-4 sm:text-base lg:text-lg ${
                      action === "Follow"
                        ? "border-purple-500 bg-purple-600"
                        : "border-white/30 bg-black/70"
                    }`}
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-b border-white/20 px-3 pb-2 pt-1">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h1 className="text-lg font-semibold text-white sm:text-xl">
                    Stas Neprokin <span className="text-yellow-400">●</span>
                  </h1>
                  <p className="text-sm text-emerald-400 sm:text-base">● Available Now</p>
                </div>
                <div className="flex w-full items-center justify-between gap-2 sm:w-auto sm:justify-end">
                  <div className="flex max-w-full flex-wrap items-center rounded-full border border-white/40 text-[11px] font-bold text-white sm:text-xs">
                    <span className="px-1.5 py-1 sm:px-2">143 Following</span>
                    <span className="h-3 border-l border-white/40" />
                    <span className="px-1.5 py-1 sm:px-2">149 View</span>
                    <span className="h-3 border-l border-white/40" />
                    <span className="px-1.5 py-1 sm:px-2">149 Likes</span>
                  </div>
                  <button
                    aria-label="Share profile"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/40 text-xs text-white"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <circle cx="6" cy="12" r="2.5" />
                      <circle cx="18" cy="6" r="2.5" />
                      <circle cx="18" cy="18" r="2.5" />
                      <path d="m8.2 10.8 7.6-3.6M8.2 13.2l7.6 3.6" />
                    </svg>
                  </button>
                </div>
              </div>
              <p className="mt-2 text-sm text-white/80 sm:text-base">
                SpaceX designs, manufactures and launches the world&apos;s most advanced rockets and spacecraft.
              </p>
              <div className="mt-2 flex flex-col items-start gap-2 text-xs text-white/70 sm:text-sm">
                <div className="flex flex-wrap items-center justify-start gap-2">
                  <span className="rounded-full border border-purple-300/50 bg-purple-400/30 px-2 py-1 text-white">
                    2 Free Playlists
                  </span>
                  <span className="rounded-full border border-blue-300/50 bg-blue-400/30 px-2 py-1 text-white">
                    4 Paid Playlists
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <svg
                      aria-hidden="true"
                      className="h-3.5 w-3.5 text-white/80"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z" />
                      <circle cx="12" cy="9" r="2.2" />
                    </svg>
                    Earth
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <svg
                      aria-hidden="true"
                      className="h-3.5 w-3.5 text-white/80"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <rect x="4" y="5" width="16" height="15" rx="2" />
                      <path d="M8 3v4M16 3v4M4 10h16" />
                    </svg>
                    Joined April 2009
                  </span>
                  <span className="inline-flex items-center gap-1 text-cyan-300">
                    <svg
                      aria-hidden="true"
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M10.5 13.5a4 4 0 0 0 5.7.1l2-2a4 4 0 0 0-5.7-5.7l-1.1 1.1" />
                      <path d="M13.5 10.5a4 4 0 0 0-5.7-.1l-2 2a4 4 0 0 0 5.7 5.7l1.1-1.1" />
                    </svg>
                    spacex.com
                  </span>
                </div>
                <div className="flex flex-wrap items-center justify-start gap-x-4 gap-y-2 text-cyan-300">
                  {[1, 2, 3].map((item) => (
                    <span key={item} className="inline-flex items-center gap-1">
                      <svg
                        aria-hidden="true"
                        className="h-3.5 w-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path d="M10.5 13.5a4 4 0 0 0 5.7.1l2-2a4 4 0 0 0-5.7-5.7l-1.1 1.1" />
                        <path d="M13.5 10.5a4 4 0 0 0-5.7-.1l-2 2a4 4 0 0 0 5.7 5.7l1.1-1.1" />
                      </svg>
                      <span>spacex.com</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-5 overflow-x-auto px-3 py-5">
              <div className="flex w-16 shrink-0 flex-col items-center gap-2">
                <button className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400 text-2xl text-white">+</button>
                <span className="whitespace-nowrap text-xs text-white/70">Create new</span>
              </div>
              {stories.map((story) => (
                <div key={story.name + story.image} className="flex w-16 shrink-0 flex-col items-center gap-2">
                  <img src={story.image} alt={story.name} className="h-14 w-14 rounded-full border border-cyan-400 object-cover" />
                  <span className="whitespace-nowrap text-xs text-white/70">John Deo</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4">
              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  className={`border-b-2 py-2 text-[10px] sm:text-xs ${
                    index === 1
                      ? "border-violet-500 font-semibold text-white"
                      : "border-transparent text-white/60"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-1 p-1 sm:grid-cols-4">
              {[...trendingVideos, ...trendingVideos].map((video, index) => (
                <article key={`${video.title}-${index}`} className="relative aspect-[0.72] overflow-hidden bg-[#0b0d12]">
                  <img src={video.image} alt={video.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                  <span className="absolute right-1 top-1 rounded bg-violet-700 px-1.5 py-1 text-[9px] font-bold text-white">S</span>
                  <span className="absolute left-1 top-1 text-[9px] text-white">3.1M views</span>
                  <div className="absolute bottom-1 left-1 right-1 flex items-end justify-between gap-1">
                    <span className="truncate text-[10px] text-white">The Handmaidens</span>
                    <span className="text-white">◔</span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <aside className="w-full shrink-0 border-t border-white/15 bg-black p-3 lg:w-[270px] lg:border-l lg:border-t-0 lg:border-white/15 xl:w-[300px]">
          <h2 className="mb-3 text-sm font-semibold text-white">About Your Profile</h2>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-2">
            {stats.map(([label, value]) => (
              <div key={label} className="rounded-full border border-white/20 px-2 py-2 text-center text-[10px] text-white/80">
                <span className="mr-1 text-white/60">◉</span>{value} {label}
              </div>
            ))}
          </div>
          <div className="mt-2 rounded-full border border-white/20 px-2 py-2 text-center text-[10px] text-white/80">
            ▣ 1,169 videos
          </div>
          <h2 className="mb-3 mt-8 text-sm font-semibold text-white">Your videos Categories</h2>
          <div className="flex flex-wrap gap-1.5">
            {profileTags.map((tag) => (
              <span key={tag} className="rounded bg-[#2b1169] px-2 py-1 text-[10px] text-white">
                {tag}
              </span>
            ))}
          </div>
        </aside>
      </div>
    </DashboardLayout>
  );
}
