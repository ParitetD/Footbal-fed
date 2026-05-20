import { NewsItem, Match, Player, Coach, Standing } from "./types";

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
    category: { ky: "Улуттук курама", ru: "Национальная сборная", en: "National Team" },
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000&auto=format&fit=crop"
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
    content: {
      ky: "...",
      ru: "...",
      en: "..."
    },
    date: "2024-05-14",
    category: { ky: "Чемпионат", ru: "Чемпионат", en: "Championship" },
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1000&auto=format&fit=crop"
  }
];

export const mockMatches: Match[] = [
  {
    id: "m1",
    homeTeam: "Kyrgyzstan",
    awayTeam: "Oman",
    date: "2024-06-06",
    time: "19:00",
    competition: { ky: "Дүйнө чемпионатынын тандоосу", ru: "Отбор на ЧМ-2026", en: "World Cup Qualifiers" },
    venue: "Dolen Omurzakov Stadium, Bishkek",
    status: "upcoming"
  },
  {
    id: "m2",
    homeTeam: "Malaysia",
    awayTeam: "Kyrgyzstan",
    homeScore: 4,
    awayScore: 3,
    date: "2023-11-16",
    time: "19:00",
    competition: { ky: "Дүйнө чемпионатынын тандоосу", ru: "Отбор на ЧМ-2026", en: "World Cup Qualifiers" },
    venue: "Bukit Jalil Stadium, Kuala Lumpur",
    status: "finished"
  }
];

export const nationalCoach: Coach = {
  name: { ky: "Максим Лисицын", ru: "Максим Лисицын", en: "Maxim Lisitsyn" },
  role: { ky: "Башкы машыктыруучу", ru: "Главный тренер", en: "Head Coach" },
  bio: {
    ky: "Максим Лисицын - тажрыйбалуу адис.",
    ru: "Максим Лисицын - опытный специалист.",
    en: "Maxim Lisitsyn is an experienced specialist."
  },
  image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=500&auto=format&fit=crop"
};

export const squad: Player[] = [
  {
    id: "p1",
    name: { ky: "Эржан Токотаев", ru: "Эржан Токотаев", en: "Erzhan Tokotaev" },
    position: "Goalkeeper",
    number: 1,
    club: "Şanlıurfaspor",
    birthDate: "2000-07-17",
    image: "https://images.unsplash.com/photo-1551280857-2b9bbe52acf4?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: "p2",
    name: { ky: "Валерий Кичин", ru: "Валерий Кичин", en: "Valeriy Kichin" },
    position: "Defender",
    number: 2,
    club: "Yenisey Krasnoyarsk",
    birthDate: "1992-10-12",
    image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=500&auto=format&fit=crop"
  }
];

export const standings: Standing[] = [
  { rank: 1, team: "Abdysh-Ata", played: 10, won: 8, drawn: 1, lost: 1, goalsFor: 25, goalsAgainst: 8, points: 25 },
  { rank: 2, team: "Dordoi", played: 10, won: 7, drawn: 2, lost: 1, goalsFor: 18, goalsAgainst: 6, points: 23 },
  { rank: 3, team: "Muras United", played: 10, won: 6, drawn: 1, lost: 3, goalsFor: 15, goalsAgainst: 10, points: 19 },
];
