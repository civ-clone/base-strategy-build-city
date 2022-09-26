import { CityGrowthRegistry } from '@civ-clone/core-city-growth/CityGrowthRegistry';
import { UnitRegistry } from '@civ-clone/core-unit/UnitRegistry';
import PlayerAction from '@civ-clone/core-player/PlayerAction';
import Routine from '@civ-clone/core-strategy/Routine';
export declare class BuildSettlers extends Routine {
  #private;
  constructor(
    cityGrowthRegistry?: CityGrowthRegistry,
    unitRegistry?: UnitRegistry
  );
  attempt(action: PlayerAction): boolean;
}
export default BuildSettlers;
