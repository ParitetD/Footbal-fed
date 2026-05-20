export type Language = "ky" | "ru" | "en";

export interface LocalizedString {
  ky: string;
  ru: string;
  en: string;
}

export interface NewsItem {
  id: string;
  title: LocalizedString;
  excerpt: LocalizedString;
  content: LocalizedString;
  date: string;
  category: LocalizedString;
  image: string;
}

export interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  date: string;
  time: string;
  competition: LocalizedString;
  venue: string;
  status: "upcoming" | "live" | "finished";
}

export interface Player {
  id: string;
  name: LocalizedString;
  position: "Goalkeeper" | "Defender" | "Midfielder" | "Forward";
  number: number;
  club: string;
  birthDate: string;
  image: string;
}

export interface Coach {
  name: LocalizedString;
  role: LocalizedString;
  bio: LocalizedString;
  image: string;
}

export interface Standing {
  rank: number;
  team: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
}
