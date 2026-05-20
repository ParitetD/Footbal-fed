import { NewsItem, Match, Player, Coach, Standing, Tournament, Document } from "./types";

export const mockTeams = {
  kyrgyzstan: { id: "t1", name: { ky: "Кыргызстан", ru: "Кыргызстан", en: "Kyrgyzstan" }, logo: "/logos/kg.png", isNational: true },
  oman: { id: "t2", name: { ky: "Оман", ru: "Оман", en: "Oman" }, logo: "/logos/oman.png", isNational: true },
  malaysia: { id: "t3", name: { ky: "Малайзия", ru: "Малайзия", en: "Malaysia" }, logo: "/logos/malaysia.png", isNational: true },
  abdyshAta: { id: "t4", name: { ky: "Абдыш-Ата", ru: "Абдыш-Ата", en: "Abdysh-Ata" }, logo: "/logos/abdysh.png" },
  dordoi: { id: "t5", name: { ky: "Дордой", ru: "Дордой", en: "Dordoi" }, logo: "/logos/dordoi.png" },
  muras: { id: "t6", name: { ky: "Мурас Юнайтед", ru: "Мурас Юнайтед", en: "Muras United" }, logo: "/logos/muras.png" }
};

export const mockNews: NewsItem[] = [
  {
    id: "1",
    title: {
      ky: "Кыргызстандын курама командасы жаңы машыктыруучу менен машыгууну баштады",
      ru: "Сборная Кыргызстана начала тренировки с новым тренером",
      en: "Kyrgyzstan national team started training with a new coach"
    },
    excerpt: {
      ky: "Максим Лисицындын жетекчилиги астында курама команда алдыдагы оюндарга даярданууда.",
      ru: "Под руководством Максима Лисицына сборная готовится к предстоящим матчам.",
      en: "Under the leadership of Maxim Lisitsyn, the national team is preparing for upcoming matches."
    },
    content: {
      ky: "Толук маалымат жакында берилет...",
      ru: "Полная информация будет доступна в ближайшее время...",
      en: "Full information will be available soon..."
    },
    date: "2024-05-15",
    category: "National Team",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000",
    author: "KFU Press",
    featured: true
  },
  {
    id: "2",
    title: {
      ky: "Кыргызстандын чемпионатында 10-тур жыйынтыкталды",
      ru: "Завершился 10-й тур чемпионата Кыргызстана",
      en: "The 10th round of the Kyrgyzstan Championship has concluded"
    },
    excerpt: {
      ky: "Турнирдик таблицада лидерлер алмашты.",
      ru: "Лидеры в турнирной таблице сменились.",
      en: "The leaders in the standings have changed."
    },
    content: { ky: "...", ru: "...", en: "..." },
    date: "2024-05-14",
    category: "Championship",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1000",
    author: "KFU Press"
  }
];

export const mockMatches: Match[] = [
  {
    id: "m1",
    homeTeam: mockTeams.kyrgyzstan,
    awayTeam: mockTeams.oman,
    date: "2024-06-06",
    time: "19:00",
    competition: "World Cup 2026 Qualifiers",
    venue: "Dolen Omurzakov Stadium, Bishkek",
    status: "upcoming"
  },
  {
    id: "m2",
    homeTeam: mockTeams.malaysia,
    awayTeam: mockTeams.kyrgyzstan,
    homeScore: 4,
    awayScore: 3,
    date: "2023-11-16",
    time: "19:00",
    competition: "World Cup 2026 Qualifiers",
    venue: "Bukit Jalil Stadium, Kuala Lumpur",
    status: "finished",
    events: [
      { type: "goal", minute: 10, player: "Player X", teamId: "t3" },
      { type: "goal", minute: 42, player: "Kayrat Zhyrgalbek uulu", teamId: "t1" }
    ]
  }
];

export const mockSquad: Player[] = [
  {
    id: "p1",
    name: { ky: "Эржан Токотаев", ru: "Эржан Токотаев", en: "Erzhan Tokotaev" },
    position: "GK",
    number: 1,
    club: "Şanlıurfaspor",
    birthDate: "2000-07-17",
    height: "188cm",
    weight: "82kg",
    image: "https://images.unsplash.com/photo-1551280857-2b9bbe52acf4?q=80&w=500",
    nationalCaps: 25,
    nationalGoals: 0
  },
  {
    id: "p2",
    name: { ky: "Валерий Кичин", ru: "Валерий Кичин", en: "Valeriy Kichin" },
    position: "DF",
    number: 2,
    club: "Yenisey Krasnoyarsk",
    birthDate: "1992-10-12",
    height: "180cm",
    weight: "75kg",
    image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=500",
    nationalCaps: 42,
    nationalGoals: 4
  }
];

export const mockStandings: Standing[] = [
  { rank: 1, team: mockTeams.abdyshAta, played: 10, won: 8, drawn: 1, lost: 1, goalsFor: 25, goalsAgainst: 8, points: 25, form: ["W", "W", "D", "W", "W"] },
  { rank: 2, team: mockTeams.dordoi, played: 10, won: 7, drawn: 2, lost: 1, goalsFor: 18, goalsAgainst: 6, points: 23, form: ["W", "D", "W", "W", "L"] },
  { rank: 3, team: mockTeams.muras, played: 10, won: 6, drawn: 1, lost: 3, goalsFor: 15, goalsAgainst: 10, points: 19, form: ["L", "W", "L", "W", "W"] },
];

export const mockDocuments: Document[] = [
  {
    id: "d1",
    title: { ky: "Устав КФС", ru: "Устав КФС", en: "KFU Statutes" },
    category: "official",
    fileUrl: "#",
    date: "2024-01-01",
    fileSize: "2.4 MB"
  },
  {
    id: "d2",
    title: { ky: "Лицензиялоо регламенти", ru: "Регламент лицензирования", en: "Licensing Regulations" },
    category: "regulation",
    fileUrl: "#",
    date: "2024-02-15",
    fileSize: "1.8 MB"
  }
];
