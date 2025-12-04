import type { SpotifyArtist, SpotifyTrack, SpotifyPlaylist, GenreCount, AudioFeatures } from './database.types';

export const generateDummyArtists = (): SpotifyArtist[] => [
  {
    id: '1',
    name: 'The Weeknd',
    genres: ['alternative r&b', 'synthwave', 'hip hop'],
    popularity: 95,
    images: [
      { url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop' },
    ],
  },
  {
    id: '2',
    name: 'Billie Eilish',
    genres: ['alternative z', 'electropop', 'sad indie'],
    popularity: 94,
    images: [
      { url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop' },
    ],
  },
  {
    id: '3',
    name: 'Travis Scott',
    genres: ['hip hop', 'trap', 'rap'],
    popularity: 92,
    images: [
      { url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop' },
    ],
  },
  {
    id: '4',
    name: 'SZA',
    genres: ['alternative r&b', 'neo-soul', 'hip hop'],
    popularity: 93,
    images: [
      { url: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=300&h=300&fit=crop' },
    ],
  },
  {
    id: '5',
    name: 'Dua Lipa',
    genres: ['dance pop', 'pop', 'electropop'],
    popularity: 94,
    images: [
      { url: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop' },
    ],
  },
  {
    id: '6',
    name: 'Post Malone',
    genres: ['hip hop', 'trap', 'pop rap'],
    popularity: 91,
    images: [
      { url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop' },
    ],
  },
];

export const generateDummyTracks = (): SpotifyTrack[] => [
  {
    id: '1',
    name: 'Blinding Lights',
    artists: [{ name: 'The Weeknd' }],
    album: {
      name: 'After Hours',
      images: [{ url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop' }],
    },
    popularity: 96,
  },
  {
    id: '2',
    name: 'Levitating',
    artists: [{ name: 'Dua Lipa' }, { name: 'DaBaby' }],
    album: {
      name: 'Future Nostalgia',
      images: [{ url: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop' }],
    },
    popularity: 95,
  },
  {
    id: '3',
    name: 'As It Was',
    artists: [{ name: 'Harry Styles' }],
    album: {
      name: 'Harry\'s House',
      images: [{ url: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=300&h=300&fit=crop' }],
    },
    popularity: 94,
  },
  {
    id: '4',
    name: 'Heat Waves',
    artists: [{ name: 'Glass Animals' }],
    album: {
      name: 'Dreamland',
      images: [{ url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop' }],
    },
    popularity: 93,
  },
  {
    id: '5',
    name: 'Cruel Summer',
    artists: [{ name: 'SZA' }],
    album: {
      name: 'Ctrl',
      images: [{ url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop' }],
    },
    popularity: 92,
  },
];

export const generateDummyGenres = (): GenreCount[] => [
  { genre: 'alternative r&b', count: 8 },
  { genre: 'hip hop', count: 7 },
  { genre: 'trap', count: 6 },
  { genre: 'synthwave', count: 5 },
  { genre: 'pop', count: 5 },
  { genre: 'electropop', count: 4 },
  { genre: 'indie pop', count: 3 },
  { genre: 'neo-soul', count: 3 },
];

export const generateDummyPlaylists = (): SpotifyPlaylist[] => [
  {
    id: '1',
    name: 'Vibes',
    images: [{ url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop' }],
    tracks: { total: 45 },
  },
  {
    id: '2',
    name: 'Late Night',
    images: [{ url: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop' }],
    tracks: { total: 67 },
  },
  {
    id: '3',
    name: 'Summer Hits',
    images: [{ url: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=300&h=300&fit=crop' }],
    tracks: { total: 89 },
  },
];

export const generateDummyAudioFeatures = (): AudioFeatures => ({
  avg_danceability: 0.72,
  avg_energy: 0.68,
  avg_valence: 0.61,
  avg_acousticness: 0.15,
  avg_instrumentalness: 0.08,
});

export const dummyProfiles = [
  {
    name: 'Alex',
    bio: 'Hip-hop head and indie enthusiast. Love discovering new artists.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    age: 27,
    location: 'Brooklyn, NY',
  },
  {
    name: 'Jordan',
    bio: 'Synthwave and electronic music lover. Raving on weekends.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
    age: 25,
    location: 'Los Angeles, CA',
  },
  {
    name: 'Casey',
    bio: 'R&B and soul music. Looking for someone who gets the vibe.',
    avatar: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=400&fit=crop',
    age: 29,
    location: 'Chicago, IL',
  },
  {
    name: 'Morgan',
    bio: 'Indie pop and alternative rock. Festival regular.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    age: 26,
    location: 'Portland, OR',
  },
  {
    name: 'Riley',
    bio: 'Electronic and experimental music. Always exploring new sounds.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    age: 24,
    location: 'Austin, TX',
  },
  {
    name: 'Avery',
    bio: 'Pop and dance music enthusiast. Loves a good beat.',
    avatar: 'https://images.unsplash.com/photo-1507009335874-2d3150a1a38f?w=400&h=400&fit=crop',
    age: 28,
    location: 'Miami, FL',
  },
  {
    name: 'Taylor',
    bio: 'Folk and acoustic lover. Coffee shop guitarist.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
    age: 31,
    location: 'Seattle, WA',
  },
  {
    name: 'Sam',
    bio: 'House DJ and producer. Catch me at the underground nights.',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop',
    age: 30,
    location: 'Berlin, DE',
  },
  {
    name: 'Jamie',
    bio: 'Indie film soundtrack collector. Vinyl hoarder.',
    avatar: 'https://images.unsplash.com/photo-1545996124-1d6049d1a7b4?w=400&h=400&fit=crop',
    age: 27,
    location: 'Toronto, CA',
  },
  {
    name: 'Charlie',
    bio: 'Classic rock fan and weekend hiker.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-3c57d3ad6f7f?w=400&h=400&fit=crop',
    age: 34,
    location: 'Denver, CO',
  },
  {
    name: 'Devon',
    bio: 'Singer-songwriter. Working on my next EP.',
    avatar: 'https://images.unsplash.com/photo-1524504388940-2c9d0f3d2e3b?w=400&h=400&fit=crop',
    age: 23,
    location: 'Nashville, TN',
  },
  {
    name: 'Peyton',
    bio: 'Lo-fi beats and chill study playlists curator.',
    avatar: 'https://images.unsplash.com/photo-1524504388940-7f8e1b9cdb2d?w=400&h=400&fit=crop',
    age: 22,
    location: 'Boston, MA',
  },
  {
    name: 'Harper',
    bio: 'Avant-garde and experimental composer.',
    avatar: 'https://images.unsplash.com/photo-1524504388940-5c3b4b2f4a2b?w=400&h=400&fit=crop',
    age: 33,
    location: 'London, UK',
  },
  {
    name: 'Rowan',
    bio: 'K-pop stan and choreography enthusiast.',
    avatar: 'https://images.unsplash.com/photo-1524504388940-1a2b3c4d5e6f?w=400&h=400&fit=crop',
    age: 21,
    location: 'Seoul, KR',
  },
  {
    name: 'Quinn',
    bio: 'Ambient music listener and night owl.',
    avatar: 'https://images.unsplash.com/photo-1524504388940-9f1e5a6b7c8d?w=400&h=400&fit=crop',
    age: 29,
    location: 'San Francisco, CA',
  },
  {
    name: 'Blake',
    bio: 'Metal head with a soft spot for melodic hooks.',
    avatar: 'https://images.unsplash.com/photo-1524504388940-abcdef123456?w=400&h=400&fit=crop',
    age: 35,
    location: 'Birmingham, UK',
  },
  {
    name: 'Isla',
    bio: 'Singer and part-time music teacher. Coffee & vinyl geek.',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop',
    age: 29,
    location: 'Edinburgh, UK',
  },
  {
    name: 'Kai',
    bio: 'Bedroom producer. Love beatmaking and late-night studio sessions.',
    avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&h=400&fit=crop',
    age: 26,
    location: 'Melbourne, AU',
  },
  {
    name: 'Maya',
    bio: 'Jazz vocalist and tea enthusiast. Always down for live shows.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
    age: 32,
    location: 'New Orleans, LA',
  },
  {
    name: 'Noah',
    bio: 'Sound engineer who loves mixing and mountain biking.',
    avatar: 'https://images.unsplash.com/photo-1545996124-1d6049d1a7b4?w=400&h=400&fit=crop',
    age: 33,
    location: 'Vancouver, CA',
  },
  {
    name: 'Lena',
    bio: 'Electronic DJ playing small rooms and rooftop parties.',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop',
    age: 27,
    location: 'Barcelona, ES',
  },
  {
    name: 'Omar',
    bio: 'Drummer in a local rock band. Pizza and practice nights.',
    avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop',
    age: 31,
    location: 'Cairo, EG',
  },
  {
    name: 'Zoe',
    bio: 'Choir director and musical theatre fan. Brunch > club.',
    avatar: 'https://images.unsplash.com/photo-1524504388940-3c57d3ad6f7f?w=400&h=400&fit=crop',
    age: 28,
    location: 'Dublin, IE',
  },
  {
    name: 'Mateo',
    bio: 'Reggaeton and Latin pop enjoyer. Fluent in dance moves.',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&h=400&fit=crop',
    age: 24,
    location: 'Mexico City, MX',
  },
  {
    name: 'Nina',
    bio: 'Indie songwriter who loves long drives and seaside gigs.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop',
    age: 30,
    location: 'Lisbon, PT',
  },
  {
    name: 'Hugo',
    bio: 'Classical pianist moonlighting as an electronic fan.',
    avatar: 'https://images.unsplash.com/photo-1527980965255-0f2f7e0a0b2d?w=400&h=400&fit=crop',
    age: 36,
    location: 'Paris, FR',
  },
  {
    name: 'Sofia',
    bio: 'Festival photographer and merch collector.',
    avatar: 'https://images.unsplash.com/photo-1544005313-67e3c6cf8f1c?w=400&h=400&fit=crop',
    age: 25,
    location: 'Rome, IT',
  },
  {
    name: 'Ethan',
    bio: 'Garage band guitarist. BBQs on the weekend.',
    avatar: 'https://images.unsplash.com/photo-1527980965255-2c0b3f8b9c99?w=400&h=400&fit=crop',
    age: 29,
    location: 'Austin, TX',
  },
  {
    name: 'Yara',
    bio: 'World music DJ and crate digger. Rituals and rhythms.',
    avatar: 'https://images.unsplash.com/photo-1527980965255-7d6a3d3c57d7?w=400&h=400&fit=crop',
    age: 34,
    location: 'Istanbul, TR',
  },
  {
    name: 'Ravi',
    bio: 'Bollywood and electronic mashup creator. Chowpatty runner.',
    avatar: 'https://images.unsplash.com/photo-1527980965255-1a3b4f5d6e7f?w=400&h=400&fit=crop',
    age: 27,
    location: 'Mumbai, IN',
  },
  {
    name: 'Emilia',
    bio: 'Lo-fi channel curator and late-night coder.',
    avatar: 'https://images.unsplash.com/photo-1524504388940-5c3b4b2f4a2b?w=400&h=400&fit=crop',
    age: 23,
    location: 'Krakow, PL',
  },
];

export function createDummySpotifyData(seed: number = 0) {
  const artists = generateDummyArtists();
  const tracks = generateDummyTracks();
  const genres = generateDummyGenres();
  const playlists = generateDummyPlaylists();
  const audioFeatures = generateDummyAudioFeatures();

  return {
    profile: {
      id: `dummy_user_${seed}`,
      email: `user${seed}@example.com`,
      display_name: dummyProfiles[seed]?.name || `User ${seed}`,
      images: [{ url: dummyProfiles[seed]?.avatar || 'https://via.placeholder.com/300' }],
    },
    topArtists: artists,
    topTracks: tracks,
    topGenres: genres,
    playlists: playlists,
    audioFeatures: audioFeatures,
  };
}

export function generateVariedSpotifyData(seed: number) {
  const baseData = createDummySpotifyData(seed);

  const artistVariations = [
    [...baseData.topArtists.slice(1), generateDummyArtists()[0]],
    generateDummyArtists().sort(() => Math.random() - 0.5),
    generateDummyArtists().slice(0, 4),
  ];

  const genreVariations = [
    [
      { genre: 'indie pop', count: 7 },
      { genre: 'alternative', count: 6 },
      { genre: 'synth-pop', count: 5 },
    ],
    [
      { genre: 'trap', count: 8 },
      { genre: 'hip hop', count: 7 },
      { genre: 'rap', count: 6 },
    ],
    [
      { genre: 'electronic', count: 7 },
      { genre: 'techno', count: 6 },
      { genre: 'house', count: 5 },
    ],
  ];

  const audioVariations = [
    { avg_danceability: 0.85, avg_energy: 0.75, avg_valence: 0.72, avg_acousticness: 0.1, avg_instrumentalness: 0.05 },
    { avg_danceability: 0.55, avg_energy: 0.62, avg_valence: 0.45, avg_acousticness: 0.35, avg_instrumentalness: 0.2 },
    { avg_danceability: 0.8, avg_energy: 0.88, avg_valence: 0.68, avg_acousticness: 0.08, avg_instrumentalness: 0.12 },
  ];

  const variation = seed % 3;

  return {
    ...baseData,
    topArtists: artistVariations[variation],
    topGenres: genreVariations[variation],
    audioFeatures: audioVariations[variation],
  };
}
