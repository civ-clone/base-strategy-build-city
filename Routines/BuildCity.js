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
var _BuildCity_cityRegistry;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildCity = void 0;
const CityRegistry_1 = require("@civ-clone/core-city/CityRegistry");
const ActiveUnit_1 = require("@civ-clone/base-player-action-active-unit/ActiveUnit");
const FoundCity_1 = require("@civ-clone/base-unit-action-found-city/FoundCity");
const Routine_1 = require("@civ-clone/core-strategy/Routine");
const goodSiteForCity_1 = require("../lib/goodSiteForCity");
class BuildCity extends Routine_1.default {
    constructor(cityRegistry = CityRegistry_1.instance) {
        super();
        _BuildCity_cityRegistry.set(this, void 0);
        __classPrivateFieldSet(this, _BuildCity_cityRegistry, cityRegistry, "f");
    }
    attempt(playerAction) {
        if (!(playerAction instanceof ActiveUnit_1.default)) {
            return false;
        }
        const unit = playerAction.value(), tile = unit.tile(), [foundCity] = unit
            .actions()
            .filter((unitAction) => unitAction instanceof FoundCity_1.default);
        if (!foundCity ||
            !(0, goodSiteForCity_1.default)(playerAction.player(), tile, undefined, __classPrivateFieldGet(this, _BuildCity_cityRegistry, "f"))) {
            return false;
        }
        foundCity.perform();
        return true;
    }
}
exports.BuildCity = BuildCity;
_BuildCity_cityRegistry = new WeakMap();
exports.default = BuildCity;
//# sourceMappingURL=BuildCity.js.map