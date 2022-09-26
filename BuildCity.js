"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildCity = void 0;
const CityGrowthRegistry_1 = require("@civ-clone/core-city-growth/CityGrowthRegistry");
const CityRegistry_1 = require("@civ-clone/core-city/CityRegistry");
const UnitRegistry_1 = require("@civ-clone/core-unit/UnitRegistry");
const PathFinderRegistry_1 = require("@civ-clone/core-world-path/PathFinderRegistry");
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const StrategyNoteRegistry_1 = require("@civ-clone/core-strategy/StrategyNoteRegistry");
const BuildCity_1 = require("./Routines/BuildCity");
const BuildSettlers_1 = require("./Routines/BuildSettlers");
const MoveToGoodSiteForCity_1 = require("./Routines/MoveToGoodSiteForCity");
const Strategy_1 = require("@civ-clone/core-strategy/Strategy");
class BuildCity extends Strategy_1.default {
    constructor(cityRegistry = CityRegistry_1.instance, cityGrowthRegistry = CityGrowthRegistry_1.instance, pathFinderRegistry = PathFinderRegistry_1.instance, ruleRegistry = RuleRegistry_1.instance, strategyNoteRegistry = StrategyNoteRegistry_1.instance, unitRegistry = UnitRegistry_1.instance) {
        super(new BuildCity_1.default(cityRegistry), new BuildSettlers_1.default(cityGrowthRegistry, unitRegistry), new MoveToGoodSiteForCity_1.default(cityRegistry, pathFinderRegistry, ruleRegistry, strategyNoteRegistry));
    }
}
exports.BuildCity = BuildCity;
exports.default = BuildCity;
//# sourceMappingURL=BuildCity.js.map