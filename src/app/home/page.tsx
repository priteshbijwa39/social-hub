import { categoryCards, liveVideos, stories, trendingVideos } from "../../lib/data";
import { DashboardLayout } from "../../components/dashboard-layout";

const HomeScreen=() => {
  return (
    <DashboardLayout>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-base font-semibold text-white sm:text-lg">Stories</h2>
            </div>

            <div className="mb-5 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              <div className="flex shrink-0 flex-col items-center gap-2">
                <button className="flex h-[74px] w-[74px] items-center justify-center rounded-full border border-white bg-[#071018] text-3xl text-white/80">
                  +
                </button>
                <span className="text-[11px] text-white/70">Create new</span>
              </div>

              {stories.map((story) => (
                <div key={story.name + story.image} className="flex shrink-0 flex-col items-center gap-2">
                  <div className="relative flex h-[74px] w-[74px] items-center justify-center overflow-visible rounded-full border border-white bg-[#0a1119] p-[2px]">
                    <img src={story.image} alt={story.name} className="h-full w-full rounded-full object-cover" />
                    <img
                      src="/images/social/fire.svg"
                      alt=""
                      aria-hidden="true"
                      className="absolute -bottom-1 -right-1 h-6 w-6"
                    />
                  </div>
                  <span className="text-[11px] text-white/70">{story.name}</span>
                </div>
              ))}
            </div>

            <section className="mb-6">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-base font-semibold text-white sm:text-[17px]">💖 Playlist &amp; chill</h3>
                <button className="text-sm text-white/60">All playlists</button>
              </div>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
              {categoryCards.map((item, idx) => (
                <button
                  key={item.name + idx}
                  className={`group relative overflow-hidden rounded-[10px] border border-white/8 bg-gradient-to-br ${item.accent} p-[1px] text-left`}
                >
                  <div className="relative h-[101px] overflow-hidden rounded-[9px] bg-black/80 px-3 py-3">
                    <div className={`absolute inset-0 bg-gradient-to-b ${item.accent}`} />
                    <div className="absolute bottom-0 right-8 h-[92px] w-[84px] rotate-[8deg] overflow-hidden rounded-[10px] border border-white/10">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover object-[right_25%] opacity-90"
                      />
                    </div>
                    <div className="absolute bottom-0 right-8 h-[18px] w-[84px] bg-black/25 [clip-path:polygon(0_100%,100%_0,100%_100%)]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                    <div className="relative z-10 flex h-full items-start justify-start">
                      <div>
                        <p className="text-base font-semibold text-white sm:text-lg">{item.name}</p>
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
                <h3 className="text-base font-semibold text-white sm:text-[17px]">🚀 Most trending porn &amp; reels</h3>
                <button className="text-sm text-white/60">All reels</button>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {trendingVideos.slice(0, 4).map((video, index) => (
                  <article key={video.title + index} className="group overflow-hidden rounded-[10px] border border-white/8 bg-[#0c1118]">
                    <div className="relative aspect-[288/465] min-h-[360px] overflow-hidden xl:min-h-0">
                      <img src={video.image} alt={video.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#05070d]/90 via-[#05070d]/20 to-transparent" />
                      <span className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#3D00FF] text-[11px] font-bold text-white">
                        {video.badge}
                      </span>
                      <span className="absolute left-3 top-3 rounded-full bg-gray-500 px-2 py-1 text-[11px] font-medium text-white">
                        {video.views}
                      </span>
                      <div className="absolute left-3 right-3 bottom-3">
                        <p className="text-sm text-white/90">The Handmaidens</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-base font-semibold text-white sm:text-[17px]">Most trending Long videos</h3>
                <button className="text-sm text-white/60">All videos</button>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {liveVideos.slice(0, 4).map((video, index) => (
                  <article key={video.title + index} className="overflow-hidden rounded-[10px] border border-white/8 bg-[#0c1118]">
                    <div className={`relative aspect-[291/205] bg-gradient-to-br ${video.gradient}`}>
                      <img src={video.image} alt={video.title} className="h-full w-full object-cover opacity-90" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#05070d]/90 via-[#05070d]/10 to-transparent" />
                      <span className="absolute left-3 top-3 rounded-full bg-gray-500 px-2 py-1 text-[11px] font-medium text-white">
                        3.1M views
                      </span>
                      <span className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#3D00FF] text-[11px] font-bold text-white">
                        S
                      </span>
                      <div className="absolute left-3 right-3 bottom-3">
                        <p className="mb-1 text-sm font-bold text-white">The Handmaidens</p>
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
