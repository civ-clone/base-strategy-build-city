import { instance as strategyRegistryInstance } from '@civ-clone/core-strategy/StrategyRegistry';
import BuildCity from './BuildCity';

strategyRegistryInstance.register(new BuildCity());
