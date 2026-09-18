export type Story = {
  name: string;
  image: string;
};

export type CategoryCard = {
  name: string;
  count: string;
  image: string;
  accent: string;
};

export type VideoCard = {
  title: string;
  views: string;
  image: string;
  badge?: string;
  gradient?: string;
  subtitle?: string;
};

export const stories: Story[] = [
  { name: "John Deo", image: "/images/social/1500648767791-00dcc994a43e.jpg" },
  { name: "John Deo", image: "/images/social/1494790108377-be9c29b29330.jpg" },
  { name: "John Deo", image: "/images/social/1487412720507-e7ab37603c6f.jpg" },
  { name: "John Deo", image: "/images/social/1524504388940-b1c1722653e1.jpg" },
  { name: "John Deo", image: "/images/social/1517841905240-472988babdf9.jpg" },
  { name: "John Deo", image: "/images/social/1544005313-94ddf0286df2.jpg" },
  { name: "John Deo", image: "/images/social/1521119989659-a83eee488004.jpg" },
  { name: "John Deo", image: "/images/social/1506794778202-cad84cf45f1d.jpg" },
];

export const categoryCards: CategoryCard[] = [
  {
    name: "Actors",
    count: "150 Videos",
    image: "/images/social/1500648767791-00dcc994a43e.jpg",
    accent: "from-[#793d72] via-[#2e1b3d] to-[#0d1018]",
  },
  {
    name: "Creators",
    count: "50 Videos",
    image: "/images/social/1494790108377-be9c29b29330.jpg",
    accent: "from-[#2e5a8d] via-[#1a263d] to-[#0d1018]",
  },
  {
    name: "Comedy",
    count: "30 Videos",
    image: "/images/social/1487412720507-e7ab37603c6f.jpg",
    accent: "from-[#5b2b6f] via-[#2f1e39] to-[#0d1018]",
  },
  {
    name: "Musicians",
    count: "80 Videos",
    image: "/images/social/1524504388940-b1c1722653e1.jpg",
    accent: "from-[#7a3947] via-[#2a1b28] to-[#0d1018]",
  },
  {
    name: "Athletes",
    count: "60 Videos",
    image: "/images/social/1517841905240-472988babdf9.jpg",
    accent: "from-[#2f4d7d] via-[#1a2444] to-[#0d1018]",
  },
  {
    name: "Reality TV",
    count: "150 Videos",
    image: "/images/social/1544005313-94ddf0286df2.jpg",
    accent: "from-[#7e304f] via-[#2f1a31] to-[#0d1018]",
  },
];

export const trendingVideos: VideoCard[] = [
  {
    title: "The Handmaidens",
    views: "3.1M views",
    image: "/images/social/1521119989659-a83eee488004.jpg",
    badge: "S",
    subtitle: "Why I fell in love with life because he loves her and music too",
  },
  {
    title: "The Handmaidens",
    views: "3.1M views",
    image: "/images/social/1517841905240-472988babdf9.jpg",
    badge: "S",
    subtitle: "Why I fell in love with life because he loves her and music too",
  },
  {
    title: "The Handmaidens",
    views: "3.1M views",
    image: "/images/social/1544005313-94ddf0286df2.jpg",
    badge: "S",
    subtitle: "Why I fell in love with life because he loves her and music too",
  },
  {
    title: "The Handmaidens",
    views: "3.1M views",
    image: "/images/social/1494790108377-be9c29b29330.jpg",
    badge: "S",
    subtitle: "Why I fell in love with life because he loves her and music too",
  },
  {
    title: "The Handmaidens",
    views: "3.1M views",
    image: "/images/social/1487412720507-e7ab37603c6f.jpg",
    badge: "S",
    subtitle: "Why I fell in love with life because he loves her and music too",
  },
];

export const liveVideos: VideoCard[] = [
  {
    title: "The Handmaidens",
    views: "3.1M views",
    image: "/images/social/1500648767791-00dcc994a43e.jpg",
    badge: "S",
    gradient: "from-[#3d1a4d] via-[#231b2d] to-[#0c111a]",
    subtitle: "Live now",
  },
  {
    title: "The Handmaidens",
    views: "3.1M views",
    image: "/images/social/1506794778202-cad84cf45f1d.jpg",
    badge: "S",
    gradient: "from-[#35235d] via-[#2c1d33] to-[#0c111a]",
    subtitle: "Live now",
  },
  {
    title: "The Handmaidens",
    views: "3.1M views",
    image: "/images/social/1524504388940-b1c1722653e1.jpg",
    badge: "S",
    gradient: "from-[#1d3d5c] via-[#191b2d] to-[#0c111a]",
    subtitle: "Live now",
  },
  {
    title: "The Handmaidens",
    views: "3.1M views",
    image: "/images/social/1544005313-94ddf0286df2.jpg",
    badge: "S",
    gradient: "from-[#3a2d2b] via-[#1b1b2b] to-[#0c111a]",
    subtitle: "Live now",
  },
  {
    title: "The Handmaidens",
    views: "3.1M views",
    image: "/images/social/1521119989659-a83eee488004.jpg",
    badge: "S",
    gradient: "from-[#4a2e56] via-[#1f1a32] to-[#0c111a]",
    subtitle: "Live now",
  },
  {
    title: "The Handmaidens",
    views: "3.1M views",
    image: "/images/social/1517841905240-472988babdf9.jpg",
    badge: "S",
    gradient: "from-[#104a82] via-[#1e2136] to-[#0c111a]",
    subtitle: "Live now",
  },
  {
    title: "The Handmaidens",
    views: "3.1M views",
    image: "/images/social/1494790108377-be9c29b29330.jpg",
    badge: "S",
    gradient: "from-[#2c2f6b] via-[#1d1d2d] to-[#0c111a]",
    subtitle: "Live now",
  },
  {
    title: "The Handmaidens",
    views: "3.1M views",
    image: "/images/social/1487412720507-e7ab37603c6f.jpg",
    badge: "S",
    gradient: "from-[#3f295d] via-[#1d1d2d] to-[#0c111a]",
    subtitle: "Live now",
  },
];

export const profileStats = [
  { label: "Following", value: "143" },
  { label: "View", value: "149" },
  { label: "Likes", value: "149" },
];

export const profileTags = [
  "Traveling",
  "Corporate Life",
  "Couples",
  "Trending Topic",
  "Festival",
  "Music listening",
  "Reading time",
  "Onlyfans",
];
