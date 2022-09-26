import { instance as ruleRegistryInstance } from '@civ-clone/core-rule/RuleRegistry';
import priority from './Rules/Routine/priority';
import turnStart from './Rules/Player/turn-start';
import visibilityChanged from './Rules/Player/visibility-changed';

ruleRegistryInstance.register(
  ...priority(),
  ...turnStart(),
  ...visibilityChanged()
);
