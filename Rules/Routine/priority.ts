import { High, Normal } from '@civ-clone/core-rule/Priorities';
import {
  TraitRegistry,
  instance as traitRegistryInstance,
} from '@civ-clone/core-civilization/TraitRegistry';
import BuildCity from '../../Routines/BuildCity';
import BuildSettlers from '../../Routines/BuildSettlers';
import Criterion from '@civ-clone/core-rule/Criterion';
import Effect from '@civ-clone/core-rule/Effect';
import Expansionist from '@civ-clone/base-leader-trait-development/Development/Expansionist';
import MoveToGoodSiteForCity from '../../Routines/MoveToGoodSiteForCity';
import Player from '@civ-clone/core-player/Player';
import Priority from '@civ-clone/core-strategy/Rules/Priority';
import Routine from '@civ-clone/core-strategy/Routine';
import Trait from '@civ-clone/core-civilization/Trait';

export const getRules = (
  traitRegistry: TraitRegistry = traitRegistryInstance
): Priority[] => [
  new Priority(
    new Criterion(
      (player: Player, routine: Routine) =>
        routine instanceof BuildCity ||
        routine instanceof BuildSettlers ||
        routine instanceof MoveToGoodSiteForCity
    ),
    new Effect((player: Player) => {
      const civilization = player.civilization(),
        leader = civilization.leader();

      if (
        leader &&
        traitRegistry.some(
          (trait: Trait) =>
            leader instanceof trait.leader() && trait instanceof Expansionist
        )
      ) {
        return new High();
      }

      return new Normal();
    })
  ),
];

export default getRules;
