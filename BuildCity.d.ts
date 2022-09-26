import { CityGrowthRegistry } from '@civ-clone/core-city-growth/CityGrowthRegistry';
import { CityRegistry } from '@civ-clone/core-city/CityRegistry';
import { UnitRegistry } from '@civ-clone/core-unit/UnitRegistry';
import { PathFinderRegistry } from '@civ-clone/core-world-path/PathFinderRegistry';
import { RuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import { StrategyNoteRegistry } from '@civ-clone/core-strategy/StrategyNoteRegistry';
import Strategy from '@civ-clone/core-strategy/Strategy';
export declare class BuildCity extends Strategy {
  constructor(
    cityRegistry?: CityRegistry,
    cityGrowthRegistry?: CityGrowthRegistry,
    pathFinderRegistry?: PathFinderRegistry,
    ruleRegistry?: RuleRegistry,
    strategyNoteRegistry?: StrategyNoteRegistry,
    unitRegistry?: UnitRegistry
  );
}
export default BuildCity;
