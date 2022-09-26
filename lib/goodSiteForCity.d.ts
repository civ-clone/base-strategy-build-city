import { CityRegistry } from '@civ-clone/core-city/CityRegistry';
import Player from '@civ-clone/core-player/Player';
import Tile from '@civ-clone/core-world/Tile';
export declare const generateKey: (player: Player) => string;
export declare const goodSiteForCity: (
  player: Player,
  tile: Tile,
  threshold?: number,
  cityRegistry?: CityRegistry
) => boolean;
export default goodSiteForCity;
