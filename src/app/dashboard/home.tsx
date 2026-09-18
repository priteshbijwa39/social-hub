import { categoryCards, liveVideos, stories, trendingVideos } from "../../lib/data";


const HomeScreen=() => {
  return (
    <div className="min-h-screen bg-[#03070d]  text-white ">
      <div className="mx-auto max-w-[1320px] overflow-hidden bg-[#02070d]">
        <div className="flex min-h-[920px]">
          <aside className="hidden w-[72px] flex-col items-center border-r border-white/8 bg-[#02060b] py-5 md:flex">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full  text-3xl font-bold text-white bg-[#1d4ed8] ">
              S
            </div>

            {["home", "play", "bag", "grid", "chart", "spark"].map((icon, index) => (
              <button
                key={icon}
                className={`mb-3 flex h-9 w-9 items-center justify-center rounded-full border text-[10px] font-semibold transition ${
                  index === 0
                    ? "border-[#60a5fa]/40 bg-[#1d4ed8]/15 text-[#dbeafe]"
                    : "border-white/5 bg-white/[0.02] text-white/70"
                }`}
              >
                {index === 0 ? "⌂" : index === 1 ? "◸" : index === 2 ? "▣" : index === 3 ? "▦" : index === 4 ? "◮" : "✦"}
              </button>
            ))}

        
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
                <div className="relative">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#f5d0fe] via-[#c084fc] to-[#7c3aed] text-sm font-semibold text-white shadow-lg shadow-violet-600/30">
                    S
                  </div>
                  <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#ff4d7b] px-1 text-[9px] font-bold text-white">
                    2
                  </span>
                </div>
              </div>
            </header>

            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">Stories</h2>
            </div>

            <div className="mb-5 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              <button className="flex h-[74px] w-[74px] shrink-0 items-center justify-center rounded-full border-[2px] border-[#37b5ff] bg-[#071018] text-3xl text-white/80 shadow-[inset_0_0_0_2px_rgba(55,181,255,0.2)]">
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

            <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
              {categoryCards.map((item, idx) => (
                <button
                  key={item.name + idx}
                  className={`group relative overflow-hidden rounded-[20px] border border-white/8 bg-gradient-to-br ${item.accent} p-[1px] text-left`}
                >
                  <div className="relative h-[110px] overflow-hidden rounded-[19px] bg-[#0a0f16]/80 px-3 py-3">
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

            <section className="mb-7">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-[17px] font-semibold text-white">Most trending porn & reels</h3>
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
          </main>
        </div>
      </div>
    </div>
  );
}
export default HomeScreen;