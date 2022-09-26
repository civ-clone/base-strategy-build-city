import {
  CityGrowthRegistry,
  instance as cityGrowthRegistryInstance,
} from '@civ-clone/core-city-growth/CityGrowthRegistry';
import {
  CityRegistry,
  instance as cityRegistryInstance,
} from '@civ-clone/core-city/CityRegistry';
import {
  UnitRegistry,
  instance as unitRegistryInstance,
} from '@civ-clone/core-unit/UnitRegistry';
import {
  PathFinderRegistry,
  instance as pathFinderRegistryInstance,
} from '@civ-clone/core-world-path/PathFinderRegistry';
import {
  RuleRegistry,
  instance as ruleRegistryInstance,
} from '@civ-clone/core-rule/RuleRegistry';
import {
  StrategyNoteRegistry,
  instance as strategyNoteRegistryInstance,
} from '@civ-clone/core-strategy/StrategyNoteRegistry';
import BuildCityRoutine from './Routines/BuildCity';
import BuildSettlers from './Routines/BuildSettlers';
import MoveToGoodSiteForCity from './Routines/MoveToGoodSiteForCity';
import Strategy from '@civ-clone/core-strategy/Strategy';

export class BuildCity extends Strategy {
  constructor(
    cityRegistry: CityRegistry = cityRegistryInstance,
    cityGrowthRegistry: CityGrowthRegistry = cityGrowthRegistryInstance,
    pathFinderRegistry: PathFinderRegistry = pathFinderRegistryInstance,
    ruleRegistry: RuleRegistry = ruleRegistryInstance,
    strategyNoteRegistry: StrategyNoteRegistry = strategyNoteRegistryInstance,
    unitRegistry: UnitRegistry = unitRegistryInstance
  ) {
    super(
      new BuildCityRoutine(cityRegistry),
      new BuildSettlers(cityGrowthRegistry, unitRegistry),
      new MoveToGoodSiteForCity(
        cityRegistry,
        pathFinderRegistry,
        ruleRegistry,
        strategyNoteRegistry
      )
    );
  }
}

export default BuildCity;
