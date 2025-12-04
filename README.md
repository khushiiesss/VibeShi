# VibeShi - Find Your Sonic Soulmate

A music-based social matching platform that connects users through their Spotify listening habits. VibeShi analyzes top artists, genres, and audio features to calculate compatibility scores and help you find your perfect music companion.

## Features

- **Spotify OAuth Integration** - Seamless authentication using your Spotify account
- **Music Profile Analysis** - Deep analysis of your top artists, genres, tracks, and playlists
- **Smart Compatibility Algorithm** - Advanced matching based on:
  - Artist overlap
  - Genre compatibility
  - Audio feature similarity (energy, danceability, valence, etc.)
- **Swipe-Based Discovery** - Tinder-style interface to discover potential matches
- **Real-Time Messaging** - Chat with your matches when mutual interest is confirmed
- **Beautiful UI** - Modern, responsive design with smooth animations

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Backend**: Supabase (PostgreSQL + Auth + Real-time)
- **External API**: Spotify Web API
- **Icons**: Lucide React

## Setup Instructions

### Quick Start (Demo Mode with Dummy Data)

The application comes pre-configured with dummy data, so you can start using it immediately without Spotify credentials:

1. Install Dependencies
```bash
npm install
```

2. Start Development Server
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

4. Click "Connect with Spotify" to start using the demo with simulated user profiles and music data

### Using Real Spotify Data

To use real Spotify data instead of the demo:

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Create a new app
3. Add `http://localhost:5173/callback` to Redirect URIs
4. Copy your Client ID and Client Secret
5. Update the `.env` file:

```env
VITE_SPOTIFY_CLIENT_ID=your_spotify_client_id_here
VITE_SPOTIFY_CLIENT_SECRET=your_spotify_client_secret_here
VITE_SPOTIFY_REDIRECT_URI=http://localhost:5173/callback
```

6. Modify `src/services/spotifyApi.ts` and set `USE_DUMMY_DATA = false`
7. Restart your development server

The Supabase credentials are already configured in your `.env` file.

## How It Works

### Demo Mode (Dummy Data)
1. **Login**: Click "Connect with Spotify" to instantly create an account with simulated music preferences
2. **Profile**: Receive a randomized music profile with:
   - 6 varied top artists (The Weeknd, SZA, Dua Lipa, etc.)
   - 20 curated genres
   - Real-looking album artwork and music data
3. **Discovery**: Swipe through AI-generated matches with realistic compatibility scores
4. **Real Matching**: When you and another user both like each other, it's a match!
5. **Chat**: Send and receive messages with your matches in real-time using Supabase subscriptions

### Real Spotify Mode
1. **Sign In**: Authenticate with your real Spotify account
2. **Profile Creation**: The app fetches and analyzes your actual music data:
   - Top 50 artists
   - Top 50 tracks
   - Public playlists
   - Audio features (danceability, energy, valence, etc.)
3. **Discovery**: Find real matches based on your authentic music taste
4. **Matching & Chat**: Same as demo mode

## Compatibility Algorithm

The matching algorithm considers three main factors:

- **Artist Overlap (40%)**: Common artists between users
- **Genre Match (40%)**: Shared music genres with weighted scoring
- **Audio Features (20%)**: Similarity in listening preferences (energy, mood, etc.)

Scores range from 0-100%, with higher scores indicating better musical compatibility.

## Database Schema

- **profiles**: User account information and Spotify data
- **spotify_data**: Detailed music preferences and listening habits
- **matches**: Compatibility scores and match status
- **messages**: Real-time chat between matched users

All tables have Row Level Security enabled for data protection.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ChatModal.tsx   # Real-time chat interface
│   └── MatchCard.tsx   # User profile display card
├── contexts/           # React contexts
│   └── AuthContext.tsx # Authentication state management
├── lib/                # Core utilities
│   ├── supabase.ts    # Supabase client
│   └── database.types.ts # TypeScript types
├── pages/              # Route pages
│   ├── Landing.tsx    # Landing/login page
│   ├── Callback.tsx   # OAuth callback handler
│   └── Discover.tsx   # Main discovery interface
├── services/           # Business logic
│   ├── spotifyAuth.ts # Spotify OAuth flow
│   ├── spotifyApi.ts  # Spotify data fetching
│   └── compatibility.ts # Matching algorithm
└── App.tsx            # Main app with routing
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Notes

- Make sure your Spotify account has listening history for accurate matching
- The compatibility algorithm works best with users who have diverse music tastes
- Messages are delivered in real-time using Supabase's real-time subscriptions
- All user data is stored securely with Row Level Security policies

## Future Enhancements

- Add filters (age, location, specific genres)
- Playlist recommendations for matches
- Group chat rooms based on music genres
- Integration with more music platforms
- Music event suggestions for matched users
- Collaborative playlist creation

Enjoy finding your sonic soulmate! 🎵
