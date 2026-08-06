import type { Song } from "./types";

import { happySongs } from "./Happy";
import { sadSongs } from "./Sad";
import { energeticSongs } from "./Energetic";
import { romanticSongs } from "./Romantic";
import { relaxedSongs } from "./Relaxed";
import { motivatedSongs } from "./Motivated";
import { sleepSongs } from "./Sleep";
import { rainySongs } from "./Rainy";

import { morningSongs } from "./Morning";
import { nightSongs } from "./Night";
import { partySongs } from "./Party";
import { heartbreakSongs } from "./Heartbreak";
import { meditationSongs } from "./Meditation";
import { roadtripSongs } from "./Roadtrip";
import { studySongs } from "./Study";
import { gamingSongs } from "./Gaming";


export type { Song };


export const songs: Song[] = [

  ...happySongs,
  ...sadSongs,
  ...energeticSongs,
  ...romanticSongs,
  ...relaxedSongs,
  ...motivatedSongs,
  ...sleepSongs,
  ...rainySongs,

  ...morningSongs,
  ...nightSongs,
  ...partySongs,
  ...heartbreakSongs,
  ...meditationSongs,
  ...roadtripSongs,
  ...studySongs,
  ...gamingSongs,

];