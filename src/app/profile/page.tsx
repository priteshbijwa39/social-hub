import { profileTags, stories, trendingVideos } from "../../lib/data";
import { DashboardLayout } from "../../components/dashboard-layout";

const ProfileScreen=()=> {
  return (
    <DashboardLayout>
            <div className="flex flex-col gap-6 xl:flex-row">
              <div className="min-w-0 flex-1">
                <div className="relative mb-5 overflow-hidden rounded-[26px] border border-white/6 bg-[#0e141d] p-3 sm:p-4">
                  <div className="h-[230px] overflow-hidden rounded-[22px] bg-gradient-to-r from-[#1f1b2d] via-[#14151c] to-[#0f172a]">
                    <img
                      src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80"
                      alt="Profile banner"
                      className="h-full w-full object-cover opacity-90"
                    />
                  </div>

                  <div className="relative -mt-12 flex items-end justify-between gap-4 px-2 pb-2">
                    <div className="flex items-end gap-4">
                      <div className="flex h-[120px] w-[120px] items-center justify-center overflow-hidden rounded-full border-[4px] border-[#0e141d] bg-[#0b0f15] shadow-[0_15px_35px_rgba(0,0,0,0.45)]">
                        <img
                          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80"
                          alt="Profile avatar"
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="pb-4">
                        <div className="flex items-center gap-2">
                          <h1 className="text-[28px] font-semibold">Stas Neprokin</h1>
                          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[10px]">✓</span>
                        </div>
                        <div className="mt-1 flex items-center gap-2 text-sm text-[#9ca3af]">
                          <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[11px] text-emerald-300">
                            ● Available Now
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 pb-4">
                      <button className="rounded-full bg-[#7c3aed] px-4 py-2 text-sm font-medium text-white shadow-lg shadow-violet-900/30">
                        Follow
                      </button>
                      <button className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white/90">
                        Message
                      </button>
                      <button className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white/90">
                        Gift
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mb-4 flex items-center justify-between gap-4">
                  <p className="text-sm text-white/70">
                    SpaceX designs, manufactures and launches the world’s most advanced rockets and spacecraft.
                  </p>
                  <button className="text-xl text-white/60">⤴</button>
                </div>

                <div className="mb-5 flex flex-wrap items-center gap-2 text-sm text-white/65">
                  <span className="rounded-full border border-white/8 bg-white/[0.02] px-2.5 py-1">2 Free Playlists</span>
                  <span className="rounded-full border border-white/8 bg-white/[0.02] px-2.5 py-1">4 Paid Playlists</span>
                  <span className="rounded-full border border-white/8 bg-white/[0.02] px-2.5 py-1">Earth</span>
                  <span className="rounded-full border border-white/8 bg-white/[0.02] px-2.5 py-1">Joined April 2009</span>
                  <span className="rounded-full border border-white/8 bg-white/[0.02] px-2.5 py-1">spacex.com</span>
                </div>

                <div className="mb-5 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                  <button className="flex h-[74px] w-[74px] shrink-0 items-center justify-center rounded-full border-[2px] border-[#37b5ff] bg-[#071018] text-3xl text-white/80">
                    +
                  </button>

                  {stories.map((story) => (
                    <div key={story.name + story.image} className="flex shrink-0 flex-col items-center gap-2">
                      <div className="relative flex h-[74px] w-[74px] items-center justify-center overflow-hidden rounded-full border-[3px] border-[#0ea5e9] bg-[#0a1119] p-[2px]">
                        <img src={story.image} alt={story.name} className="h-full w-full rounded-full object-cover" />
                      </div>
                      <span className="text-[11px] text-white/70">{story.name}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-6 grid gap-4 md:grid-cols-3">
                  {[
                    { label: "Long video", items: trendingVideos.slice(0, 3) },
                    { label: "Short video", items: trendingVideos.slice(1, 4) },
                    { label: "Playlist", items: trendingVideos.slice(2, 5) },
                  ].map((section) => (
                    <div key={section.label}>
                      <h3 className="mb-3 text-lg font-medium text-white">{section.label}</h3>
                      <div className="grid grid-cols-3 gap-2">
                        {section.items.map((video, idx) => (
                          <div key={video.title + idx} className="overflow-hidden rounded-[18px] border border-white/8 bg-[#0d141d]">
                            <div className="relative h-[140px] overflow-hidden">
                              <img src={video.image} alt={video.title} className="h-full w-full object-cover" />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#080d12]/90 via-[#080d12]/10 to-transparent" />
                              <span className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#f4f4f5] text-[10px] font-bold text-[#0d1018]">
                                {video.badge}
                              </span>
                              <div className="absolute bottom-2 left-2 right-2 text-[10px] text-white/80">
                                {video.views}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <aside className="w-full xl:w-[320px]">
                <div className="rounded-[22px] border border-white/8 bg-[#070d14] p-4">
                  <h2 className="mb-4 text-[18px] font-semibold text-white">About Your Profile</h2>

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Views", value: "63.3M" },
                      { label: "Likes", value: "1.2M" },
                      { label: "Followers", value: "1.6M" },
                      { label: "Shares", value: "1.4M" },
                    ].map((stat) => (
                      <div key={stat.label} className="rounded-[16px] border border-white/8 bg-white/[0.02] p-3">
                        <p className="text-[11px] uppercase tracking-[0.08em] text-white/45">{stat.label}</p>
                        <p className="mt-2 text-xl font-semibold text-white">{stat.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-[16px] border border-white/8 bg-white/[0.02] p-3 text-center text-sm text-white/70">
                    1,169 videos
                  </div>

                  <div className="mt-6">
                    <h3 className="mb-3 text-[18px] font-semibold text-white">Your videos categories</h3>
                    <div className="flex flex-wrap gap-2">
                      {profileTags.map((tag) => (
                        <span key={tag} className="rounded-full bg-[#322f6d] px-3 py-1.5 text-sm text-white/90">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>
            </div>
    </DashboardLayout>
  );
}
export default ProfileScreen;