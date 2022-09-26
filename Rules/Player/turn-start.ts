import {
  CityRegistry,
  instance as cityRegistryInstance,
} from '@civ-clone/core-city/CityRegistry';
import {
  instance as strategyNoteRegistryInstance,
  StrategyNoteRegistry,
} from '@civ-clone/core-strategy/StrategyNoteRegistry';
import { generateKey, goodSiteForCity } from '../../lib/goodSiteForCity';
import Effect from '@civ-clone/core-rule/Effect';
import Player from '@civ-clone/core-player/Player';
import Tile from '@civ-clone/core-world/Tile';
import TurnStart from '@civ-clone/core-player/Rules/TurnStart';

export const getRules = (
  cityRegistry: CityRegistry = cityRegistryInstance,
  strategyNoteRegistry: StrategyNoteRegistry = strategyNoteRegistryInstance
): TurnStart[] => [
  new TurnStart(
    new Effect((player: Player) => {
      const note = strategyNoteRegistry.getByKey<Tile[]>(generateKey(player));

      if (!note) {
        return;
      }

      const goodSitesForCities = note.value();

      goodSitesForCities.forEach((tile) => {
        if (goodSiteForCity(player, tile, undefined, cityRegistry)) {
          return;
        }

        const index = goodSitesForCities.indexOf(tile);

        goodSitesForCities.splice(index, 1);
      });
    })
  ),
];

export default getRules;
