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
import Routine from '@civ-clone/core-strategy/Routine';
import Settlers from '@civ-clone/base-unit-settlers/Settlers';
import { reduceYield } from '@civ-clone/core-yield/lib/reduceYields';

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
      cityGrowth = this.#cityGrowthRegistry.getByCity(city),
      // TODO: this should probably be abstracted into its own `Rule`.
      spareFood = reduceYield(
        city.yields(),
        Food
      )

    if (spareFood < 2 || cityGrowth.size() < 2) {
      return false;
    }

    cityBuild.build(Settlers as unknown as typeof Buildable);

    return true;
  }
}

export default BuildSettlers;
