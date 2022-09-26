"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRules = void 0;
const CityRegistry_1 = require("@civ-clone/core-city/CityRegistry");
const StrategyNoteRegistry_1 = require("@civ-clone/core-strategy/StrategyNoteRegistry");
const goodSiteForCity_1 = require("../../lib/goodSiteForCity");
const Effect_1 = require("@civ-clone/core-rule/Effect");
const TurnStart_1 = require("@civ-clone/core-player/Rules/TurnStart");
const getRules = (cityRegistry = CityRegistry_1.instance, strategyNoteRegistry = StrategyNoteRegistry_1.instance) => [
    new TurnStart_1.default(new Effect_1.default((player) => {
        const note = strategyNoteRegistry.getByKey((0, goodSiteForCity_1.generateKey)(player));
        if (!note) {
            return;
        }
        const goodSitesForCities = note.value();
        goodSitesForCities.forEach((tile) => {
            if ((0, goodSiteForCity_1.goodSiteForCity)(player, tile, undefined, cityRegistry)) {
                return;
            }
            const index = goodSitesForCities.indexOf(tile);
            goodSitesForCities.splice(index, 1);
        });
    })),
];
exports.getRules = getRules;
exports.default = exports.getRules;
//# sourceMappingURL=turn-start.js.map