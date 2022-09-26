import { CityRegistry } from '@civ-clone/core-city/CityRegistry';
import { StrategyNoteRegistry } from '@civ-clone/core-strategy/StrategyNoteRegistry';
import VisibilityChanged from '@civ-clone/core-player-world/Rules/Player/VisibilityChanged';
export declare const getRules: (
  cityRegistry?: CityRegistry,
  strategyNoteRegistry?: StrategyNoteRegistry
) => VisibilityChanged[];
export default getRules;
