import { CityRegistry } from '@civ-clone/core-city/CityRegistry';
import { StrategyNoteRegistry } from '@civ-clone/core-strategy/StrategyNoteRegistry';
import TurnStart from '@civ-clone/core-player/Rules/TurnStart';
export declare const getRules: (
  cityRegistry?: CityRegistry,
  strategyNoteRegistry?: StrategyNoteRegistry
) => TurnStart[];
export default getRules;
