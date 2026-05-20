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
  category: string;
  image: string;
  author: string;
  featured?: boolean;
}

export interface Team {
  id: string;
  name: LocalizedString;
  logo: string;
  isNational?: boolean;
}

export interface MatchEvent {
  type: "goal" | "card_yellow" | "card_red" | "substitute";
  minute: number;
  player: string;
  teamId: string;
  detail?: string;
}

export interface Match {
  id: string;
  homeTeam: Team;
  awayTeam: Team;
  homeScore?: number;
  awayScore?: number;
  date: string;
  time: string;
  competition: string;
  venue: string;
  status: "upcoming" | "live" | "finished";
  events?: MatchEvent[];
}

export interface Player {
  id: string;
  name: LocalizedString;
  position: "GK" | "DF" | "MF" | "FW";
  number: number;
  club: string;
  birthDate: string;
  height: string;
  weight: string;
  image: string;
  nationalCaps: number;
  nationalGoals: number;
}

export interface Coach {
  id: string;
  name: LocalizedString;
  role: LocalizedString;
  bio: LocalizedString;
  image: string;
  specialization: string;
}

export interface Standing {
  rank: number;
  team: Team;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
  form: ("W" | "D" | "L")[];
}

export interface Tournament {
  id: string;
  name: LocalizedString;
  year: string;
  type: "league" | "cup";
  active: boolean;
}

export interface Document {
  id: string;
  title: LocalizedString;
  category: "regulation" | "official" | "legal";
  fileUrl: string;
  date: string;
  fileSize: string;
}
