import {
  CityRegistry,
  instance as cityRegistryInstance,
} from '@civ-clone/core-city/CityRegistry';
import Action from '@civ-clone/core-unit/Action';
import ActiveUnit from '@civ-clone/base-player-action-active-unit/ActiveUnit';
import FoundCity from '@civ-clone/base-unit-action-found-city/FoundCity';
import PlayerAction from '@civ-clone/core-player/PlayerAction';
import Routine from '@civ-clone/core-strategy/Routine';
import goodSiteForCity from '../lib/goodSiteForCity';

export class BuildCity extends Routine {
  #cityRegistry: CityRegistry;

  constructor(cityRegistry: CityRegistry = cityRegistryInstance) {
    super();

    this.#cityRegistry = cityRegistry;
  }

  attempt(playerAction: PlayerAction): boolean {
    if (!(playerAction instanceof ActiveUnit)) {
      return false;
    }

    const unit = playerAction.value(),
      tile = unit.tile(),
      [foundCity] = unit
        .actions()
        .filter(
          (unitAction: Action): unitAction is FoundCity =>
            unitAction instanceof FoundCity
        );

    if (
      !foundCity ||
      !goodSiteForCity(
        playerAction.player(),
        tile,
        undefined,
        this.#cityRegistry
      )
    ) {
      return false;
    }

    foundCity.perform();

    return true;
  }
}

export default BuildCity;
