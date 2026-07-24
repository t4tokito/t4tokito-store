export const apps = [
  {
    id: 'tokitotv',
    name: 'TokitoTV',
    tagline: 'Anime Streaming App',
    description: 'Watch your favorite anime with a beautiful, fast, and feature-rich streaming experience. Built with Expo, React Native, and AniList API.',
    fullDescription: `TokitoTV is a modern anime streaming application built with Expo and React Native. It leverages the AniList GraphQL API to provide you with comprehensive anime information, tracking, and discovery features.

Whether you're a casual viewer or a hardcore otaku, TokitoTV offers a seamless watching experience with a beautiful dark theme optimized for late-night anime sessions.`,
    category: 'Entertainment',
    version: '1.0.0',
    updated: 'June 28, 2024',
    size: '25 MB',
    androidVersion: '7.0+',
    downloads: '10K+',
    rating: 4.8,
    reviews: 2847,
    icon: '🎬',
    color: '#433D8B',
    techStack: ['Expo SDK 54', 'React Native', 'Expo Router', 'NativeWind', 'AniList GraphQL API', 'Zustand'],
    features: [
      { title: 'Trending & Popular', desc: 'Discover what\'s hot right now with real-time trending anime from AniList', icon: '🔥' },
      { title: 'Continue Watching', desc: 'Never lose your place - resume exactly where you left off', icon: '▶️' },
      { title: 'Genre Browsing', desc: 'Explore anime by genre: Action, Romance, Fantasy, Sci-Fi, and 40+ more', icon: '🏷️' },
      { title: 'Beautiful Dark Theme', desc: 'Easy on the eyes for those late-night binge sessions', icon: '🌙' },
      { title: 'Search & Filter', desc: 'Find any anime instantly with powerful search and filters', icon: '🔍' },
      { title: 'AniList Integration', desc: 'Accurate, up-to-date anime data from the best anime database', icon: '📊' },
    ],
    screenshots: [
      { alt: 'TokitoTV Home Screen - Trending Anime', caption: 'Home - Trending & Continue Watching' },
      { alt: 'TokitoTV Search Screen', caption: 'Search & Discover' },
      { alt: 'TokitoTV Anime Detail', caption: 'Anime Details & Episodes' },
      { alt: 'TokitoTV Genres', caption: 'Browse by Genre' },
    ],
    downloadUrl: '/downloads/tokitotv.apk',
    githubUrl: 'https://github.com/t4tokito/TokitoTv',
    changelog: [
      { version: '1.0.0', date: '2024-06-28', changes: ['Initial release', 'Trending, Popular, Top Airing sections', 'Continue watching feature', 'Genre browsing', 'Dark theme', 'Search functionality'] },
    ],
  },
  {
    id: 'yt-notes-maker',
    name: 'YT Notes Maker',
    tagline: 'YouTube to AI Notes',
    description: 'Transform any YouTube video into structured, AI-powered notes instantly. Paste a link, choose your style, and get comprehensive notes with flashcards and quizzes.',
    fullDescription: `YT Notes Maker revolutionizes how you learn from YouTube. Simply paste any YouTube URL, and our AI (powered by OpenRouter with models like Claude 3.5 Sonnet) will fetch the transcript, analyze the content, and generate beautifully structured notes in your preferred format.

Perfect for students, professionals, and lifelong learners who want to extract maximum value from educational content without spending hours taking manual notes.`,
    category: 'Productivity',
    version: '1.0.0',
    updated: 'July 17, 2024',
    size: '30 MB',
    androidVersion: '7.0+',
    downloads: '5K+',
    rating: 4.9,
    reviews: 1234,
    icon: '📝',
    color: '#C8ACD6',
    techStack: ['Expo SDK 54', 'React Native', 'Expo Router', 'NativeWind', 'Firebase Auth/Firestore', 'OpenRouter API', 'Express Backend', 'expo-sqlite'],
    features: [
      { title: 'AI-Powered Summarization', desc: 'Uses OpenRouter (Claude 3.5 Sonnet, GPT-4, etc.) to create intelligent notes', icon: '🤖' },
      { title: 'Multiple Note Styles', desc: 'Choose from Summary, Detailed, or Bullet Points format', icon: '📋' },
      { title: 'Firebase Cloud Sync', desc: 'Your notes sync across all devices with email/password auth', icon: '☁️' },
      { title: 'Flashcards & Quizzes', desc: 'Auto-generate flashcards and take quizzes to reinforce learning', icon: '🎴' },
      { title: 'Friends & Study Groups', desc: 'Connect with friends, share notes, and study together', icon: '👥' },
      { title: 'Offline Support', desc: 'Access your notes anytime with local SQLite storage', icon: '💾' },
    ],
    screenshots: [
      { alt: 'YT Notes Maker Home - Create Notes', caption: 'Create Notes from YouTube' },
      { alt: 'YT Notes Maker Note Styles', caption: 'Choose Note Format' },
      { alt: 'YT Notes Maker Flashcards', caption: 'Flashcards & Quizzes' },
      { alt: 'YT Notes Maker Notes List', caption: 'Your Notes Library' },
    ],
    downloadUrl: '/downloads/yt-notes-maker.apk',
    githubUrl: 'https://github.com/t4tokito/yt-notes-maker',
    changelog: [
      { version: '1.0.0', date: '2024-07-17', changes: ['Initial release', 'YouTube transcript fetching', 'AI note generation via OpenRouter', 'Firebase auth & sync', 'Flashcards & quizzes', 'Friends & chat', 'Offline SQLite storage'] },
    ],
  },
];

export function getAppById(id) {
  return apps.find((app) => app.id === id) || null;
}
