export interface ITVMazeData {
  score: number;
  show:  Show;
}

export interface Show {
  id:           number;
  url:          string;
  name:         string;
  type:         string;
  language:     string;
  genres:       string[];
  status:       string;
  runtime:      number | null;
  premiered:    string;
  officialSite: null | string;
  schedule:     string;
  rating:       string;
  weight:       number;
  network:      Network | null;
  webChannel:   Network | null;
  externals:    Externals | null;
  image:        Image | null;
  summary:      null | string;
  updated:      number;
  _links:       Links | null;
}

interface Links {
  self:            Previousepisode;
  previousepisode: Previousepisode;
}

interface Previousepisode {
  href: string;
}

interface Externals {
  tvrage: number | null;
  thetvdb: number | null;
  imdb: null | string;
}

export interface Image {
  medium:   string;
  original: string;
}

// enum Language {
//   English = "English",
//   French = "French",
// }

interface Network {
  id:      number;
  name:    string;
  country: Country;
}

interface Country {
  name:     string;
  code:     string;
  timezone: string;
}

export class InitShow implements Show {
  id:           0;
  url:          '';
  name:         '';
  type:         '';
  language:     '';
  genres:       [''];
  status:       '';
  runtime:      null;
  premiered:    '';
  officialSite: null;
  schedule:     '';
  rating:       '';
  weight:       0;
  network:      null;
  webChannel:  null;
  externals:    null;
  image:        null;
  summary:      null;
  updated:      0;
  _links:       null;
}
