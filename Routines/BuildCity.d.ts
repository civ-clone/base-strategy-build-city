import { CityRegistry } from '@civ-clone/core-city/CityRegistry';
import PlayerAction from '@civ-clone/core-player/PlayerAction';
import Routine from '@civ-clone/core-strategy/Routine';
export declare class BuildCity extends Routine {
  #private;
  constructor(cityRegistry?: CityRegistry);
  attempt(playerAction: PlayerAction): boolean;
}
export default BuildCity;
