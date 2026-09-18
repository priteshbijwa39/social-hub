import { categoryCards, liveVideos, stories, trendingVideos } from "../../lib/data";
import { DashboardLayout } from "../../components/dashboard-layout";

const HomeScreen=() => {
  return (
    <DashboardLayout>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">Stories</h2>
            </div>

            <div className="mb-5 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              <div className="flex shrink-0 flex-col items-center gap-2">
                <button className="flex h-[74px] w-[74px] items-center justify-center rounded-full border-[2px] border-[#37b5ff] bg-[#071018] text-3xl text-white/80 shadow-[inset_0_0_0_2px_rgba(55,181,255,0.2)]">
                  +
                </button>
                <span className="text-[11px] text-white/70">Create new story</span>
              </div>

              {stories.map((story) => (
                <div key={story.name + story.image} className="flex shrink-0 flex-col items-center gap-2">
                  <div className="relative flex h-[74px] w-[74px] items-center justify-center overflow-hidden rounded-full border-[3px] border-[#0ea5e9] bg-[#0a1119] p-[2px]">
                    <img src={story.image} alt={story.name} className="h-full w-full rounded-full object-cover" />
                  </div>
                  <span className="text-[11px] text-white/70">{story.name}</span>
                </div>
              ))}
            </div>

            <section className="mb-6">
              <h3 className="mb-3 text-[17px] font-semibold text-white">💖 Playlist &amp; chill</h3>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-3">
              {categoryCards.map((item, idx) => (
                <button
                  key={item.name + idx}
                  className={`group relative overflow-hidden rounded-[20px] border border-white/8 bg-gradient-to-br ${item.accent} p-[1px] text-left`}
                >
                  <div className="relative h-[110px] overflow-hidden rounded-[19px] bg-black/80 px-3 py-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="absolute inset-0 h-full w-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1119] via-[#0b1119]/30 to-transparent" />
                    <div className="relative h-full flex items-end justify-start">
                      <div>
                        <p className="text-lg font-semibold text-white">{item.name}</p>
                        <p className="text-[11px] text-white/70">{item.count}</p>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
              </div>
            </section>

            <section className="mb-7">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-[17px] font-semibold text-white">🚀 Most trending porn &amp; reels</h3>
                <button className="text-sm text-white/60">All reels</button>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
                {trendingVideos.map((video, index) => (
                  <article key={video.title + index} className="group overflow-hidden rounded-[22px] border border-white/8 bg-[#0c1118]">
                    <div className="relative h-[220px] overflow-hidden">
                      <img src={video.image} alt={video.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#05070d]/90 via-[#05070d]/20 to-transparent" />
                      <span className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#f4f4f5] text-[11px] font-bold text-[#0d1018]">
                        {video.badge}
                      </span>
                      <div className="absolute left-3 right-3 bottom-3">
                        <p className="mb-1 text-[11px] text-white/75">{video.views}</p>
                        <p className="line-clamp-2 text-sm text-white/90">{video.subtitle}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-[17px] font-semibold text-white">Most trending Long videos</h3>
                <button className="text-sm text-white/60">All videos</button>
              </div>

              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                {liveVideos.map((video, index) => (
                  <article key={video.title + index} className="overflow-hidden rounded-[22px] border border-white/8 bg-[#0c1118]">
                    <div className={`relative h-[220px] bg-gradient-to-br ${video.gradient}`}>
                      <img src={video.image} alt={video.title} className="h-full w-full object-cover opacity-90" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#05070d]/90 via-[#05070d]/10 to-transparent" />
                      <span className="absolute right-2 top-2 rounded-full bg-[#ff4d7b] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                        LIVE
                      </span>
                      <div className="absolute left-3 right-3 bottom-3">
                        <div className="mb-1 flex items-center gap-2 text-[11px] text-white/80">
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f4f4f5] text-[10px] font-bold text-[#101827]">
                            {video.badge}
                          </span>
                          <span>{video.title}</span>
                        </div>
                        <p className="text-[11px] text-white/60">{video.subtitle}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
    </DashboardLayout>
  );
}
export default HomeScreen;
