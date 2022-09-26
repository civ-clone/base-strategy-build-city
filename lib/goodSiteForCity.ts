import {
  CityRegistry,
  instance as cityRegistryInstance,
} from '@civ-clone/core-city/CityRegistry';
import Food from '@civ-clone/base-terrain-yield-food/Food';
import Player from '@civ-clone/core-player/Player';
import Production from '@civ-clone/base-terrain-yield-production/Production';
import Tile from '@civ-clone/core-world/Tile';
import Trade from '@civ-clone/base-terrain-yield-trade/Trade';
import { generateKey as generateRawKey } from '@civ-clone/core-strategy/StrategyNote';

const FOOD_WEIGHT = 4;
const PRODUCTION_WEIGHT = 2;
const TRADE_WEIGHT = 1;

// If the above changes to be controlled dynamically, this would need to be made so too...
const GOOD_SITE_SCORE = 180;

export const generateKey = (player: Player) =>
  generateRawKey(player, 'goodSiteForCity');

export const goodSiteForCity = (
  player: Player,
  tile: Tile,
  threshold: number = GOOD_SITE_SCORE,
  cityRegistry: CityRegistry = cityRegistryInstance
): boolean =>
  tile.score(player, [[Food, 1]]) > 1 &&
  tile.getSurroundingArea().score(player, [
    [Food, FOOD_WEIGHT],
    [Production, PRODUCTION_WEIGHT],
    [Trade, TRADE_WEIGHT],
  ]) >= threshold &&
  tile
    .getSurroundingArea(4)
    .some((tile: Tile): boolean => cityRegistry.getByTile(tile).length === 0);

export default goodSiteForCity;
