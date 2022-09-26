import { CityRegistry } from '@civ-clone/core-city/CityRegistry';
import { PathFinderRegistry } from '@civ-clone/core-world-path/PathFinderRegistry';
import { RuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import { StrategyNoteRegistry } from '@civ-clone/core-strategy/StrategyNoteRegistry';
import PlayerAction from '@civ-clone/core-player/PlayerAction';
import Routine from '@civ-clone/core-strategy/Routine';
export declare class MoveToGoodSiteForCity extends Routine {
  #private;
  constructor(
    cityRegistry?: CityRegistry,
    pathFinderRegistry?: PathFinderRegistry,
    ruleRegistry?: RuleRegistry,
    strategyNoteRegistry?: StrategyNoteRegistry
  );
  attempt(action: PlayerAction): boolean;
}
export default MoveToGoodSiteForCity;
