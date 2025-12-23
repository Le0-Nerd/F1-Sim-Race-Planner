
export interface Driver {
  id: string;
  firstName: string;
  lastName: string;
  team: string;
  number: number;
  image: string;
  nationality: string;
  color: string;
}

export interface Track {
  id: number;
  round: number;
  name: string;
  country: string;
  flag: string;
  month: string;
  dates: string;
}

export interface PlayerSession {
  id: number;
  name: string;
  driver?: Driver;
  points: number;
}

export type Step = 'WELCOME' | 'DATE_PLAYERS' | 'DRIVERS' | 'TRACKS' | 'WILDCARDS' | 'POINTS' | 'SUMMARY';
