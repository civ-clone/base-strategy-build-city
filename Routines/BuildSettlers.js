"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BuildSettlers_cityGrowthRegistry, _BuildSettlers_unitRegistry;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildSettlers = void 0;
const PlayerActions_1 = require("@civ-clone/core-city-build/PlayerActions");
const CityGrowthRegistry_1 = require("@civ-clone/core-city-growth/CityGrowthRegistry");
const UnitRegistry_1 = require("@civ-clone/core-unit/UnitRegistry");
const Food_1 = require("@civ-clone/base-terrain-yield-food/Food");
const PopulationSupportFood_1 = require("@civ-clone/base-city-yield-population-support-food/PopulationSupportFood");
const Routine_1 = require("@civ-clone/core-strategy/Routine");
const Settlers_1 = require("@civ-clone/base-unit-settlers/Settlers");
const UnitSupportFood_1 = require("@civ-clone/base-city-yield-unit-support-food/UnitSupportFood");
const reduceYields_1 = require("@civ-clone/core-yield/lib/reduceYields");
class BuildSettlers extends Routine_1.default {
    constructor(cityGrowthRegistry = CityGrowthRegistry_1.instance, unitRegistry = UnitRegistry_1.instance) {
        super();
        _BuildSettlers_cityGrowthRegistry.set(this, void 0);
        _BuildSettlers_unitRegistry.set(this, void 0);
        __classPrivateFieldSet(this, _BuildSettlers_cityGrowthRegistry, cityGrowthRegistry, "f");
        __classPrivateFieldSet(this, _BuildSettlers_unitRegistry, unitRegistry, "f");
    }
    attempt(action) {
        if (!(action instanceof PlayerActions_1.ChangeProduction || action instanceof PlayerActions_1.CityBuild)) {
            return false;
        }
        const cityBuild = action.value();
        if (!cityBuild
            .available()
            .some((cityBuild) => cityBuild.item() ===
            Settlers_1.default)) {
            return false;
        }
        const city = cityBuild.city(), 
        // TODO: this should probably be abstracted into its own `Rule`.
        [totalFood, ...foodCosts] = (0, reduceYields_1.reduceYields)(city.yields(), Food_1.default, PopulationSupportFood_1.default, UnitSupportFood_1.default), totalFoodCost = foodCosts.reduce((runningTotal, value) => runningTotal + value), spareFood = totalFood - totalFoodCost;
        if (spareFood < 2) {
            return false;
        }
        const cityGrowth = __classPrivateFieldGet(this, _BuildSettlers_cityGrowthRegistry, "f").getByCity(city);
        if (cityGrowth.size() < 2) {
            return false;
        }
        cityBuild.build(Settlers_1.default);
        return true;
    }
}
exports.BuildSettlers = BuildSettlers;
_BuildSettlers_cityGrowthRegistry = new WeakMap(), _BuildSettlers_unitRegistry = new WeakMap();
exports.default = BuildSettlers;
//# sourceMappingURL=BuildSettlers.js.map