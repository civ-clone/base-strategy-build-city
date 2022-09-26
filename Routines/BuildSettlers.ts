import {
  ChangeProduction,
  CityBuild as CityBuildAction,
} from '@civ-clone/core-city-build/PlayerActions';
import {
  CityGrowthRegistry,
  instance as cityGrowthRegistryInstance,
} from '@civ-clone/core-city-growth/CityGrowthRegistry';
import {
  UnitRegistry,
  instance as unitRegistryInstance,
} from '@civ-clone/core-unit/UnitRegistry';
import Buildable from '@civ-clone/core-city-build/Buildable';
import Food from '@civ-clone/base-terrain-yield-food/Food';
import PlayerAction from '@civ-clone/core-player/PlayerAction';
import PopulationSupportFood from '@civ-clone/base-city-yield-population-support-food/PopulationSupportFood';
import Routine from '@civ-clone/core-strategy/Routine';
import Settlers from '@civ-clone/base-unit-settlers/Settlers';
import UnitSupportFood from '@civ-clone/base-city-yield-unit-support-food/UnitSupportFood';
import Yield from '@civ-clone/core-yield/Yield';
import { reduceYields } from '@civ-clone/core-yield/lib/reduceYields';

export class BuildSettlers extends Routine {
  #cityGrowthRegistry: CityGrowthRegistry;
  #unitRegistry: UnitRegistry;

  constructor(
    cityGrowthRegistry: CityGrowthRegistry = cityGrowthRegistryInstance,
    unitRegistry: UnitRegistry = unitRegistryInstance
  ) {
    super();

    this.#cityGrowthRegistry = cityGrowthRegistry;
    this.#unitRegistry = unitRegistry;
  }

  attempt(action: PlayerAction): boolean {
    if (
      !(action instanceof ChangeProduction || action instanceof CityBuildAction)
    ) {
      return false;
    }

    const cityBuild = action.value();

    if (
      !cityBuild
        .available()
        .some(
          (cityBuild) =>
            (cityBuild.item() as typeof Settlers | typeof Buildable) ===
            Settlers
        )
    ) {
      return false;
    }

    const city = cityBuild.city(),
      // TODO: this should probably be abstracted into its own `Rule`.
      [totalFood, ...foodCosts] = reduceYields(
        city.yields(),
        Food,
        PopulationSupportFood,
        UnitSupportFood as unknown as typeof Yield
      ),
      totalFoodCost = foodCosts.reduce(
        (runningTotal, value) => runningTotal + value
      ),
      spareFood = totalFood - totalFoodCost;

    if (spareFood < 2) {
      return false;
    }

    const cityGrowth = this.#cityGrowthRegistry.getByCity(city);

    if (cityGrowth.size() < 2) {
      return false;
    }

    cityBuild.build(Settlers as unknown as typeof Buildable);

    return true;
  }
}

export default BuildSettlers;
