import {
  CityRegistry,
  instance as cityRegistryInstance,
} from '@civ-clone/core-city/CityRegistry';
import {
  StrategyNoteRegistry,
  instance as strategyNoteRegistryInstance,
} from '@civ-clone/core-strategy/StrategyNoteRegistry';
import { generateKey, goodSiteForCity } from '../../lib/goodSiteForCity';
import Criterion from '@civ-clone/core-rule/Criterion';
import Effect from '@civ-clone/core-rule/Effect';
import Player from '@civ-clone/core-player/Player';
import Tile from '@civ-clone/core-world/Tile';
import VisibilityChanged from '@civ-clone/core-player-world/Rules/Player/VisibilityChanged';

export const getRules = (
  cityRegistry: CityRegistry = cityRegistryInstance,
  strategyNoteRegistry: StrategyNoteRegistry = strategyNoteRegistryInstance
): VisibilityChanged[] => [
  new VisibilityChanged(
    new Criterion((tile: Tile, player: Player) =>
      goodSiteForCity(player, tile, undefined, cityRegistry)
    ),
    new Effect((tile: Tile, player: Player) => {
      const note = strategyNoteRegistry.getByKey<Tile[]>(generateKey(player));

      if (!note) {
        return;
      }

      const tiles = note.value();

      if (tiles.includes(tile)) {
        return;
      }

      tiles.push(tile);
    })
  ),
];

export default getRules;
