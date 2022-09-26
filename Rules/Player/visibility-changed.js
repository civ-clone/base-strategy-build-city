"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRules = void 0;
const CityRegistry_1 = require("@civ-clone/core-city/CityRegistry");
const StrategyNoteRegistry_1 = require("@civ-clone/core-strategy/StrategyNoteRegistry");
const goodSiteForCity_1 = require("../../lib/goodSiteForCity");
const Criterion_1 = require("@civ-clone/core-rule/Criterion");
const Effect_1 = require("@civ-clone/core-rule/Effect");
const VisibilityChanged_1 = require("@civ-clone/core-player-world/Rules/Player/VisibilityChanged");
const getRules = (cityRegistry = CityRegistry_1.instance, strategyNoteRegistry = StrategyNoteRegistry_1.instance) => [
    new VisibilityChanged_1.default(new Criterion_1.default((tile, player) => (0, goodSiteForCity_1.goodSiteForCity)(player, tile, undefined, cityRegistry)), new Effect_1.default((tile, player) => {
        const note = strategyNoteRegistry.getByKey((0, goodSiteForCity_1.generateKey)(player));
        if (!note) {
            return;
        }
        const tiles = note.value();
        if (tiles.includes(tile)) {
            return;
        }
        tiles.push(tile);
    })),
];
exports.getRules = getRules;
exports.default = exports.getRules;
//# sourceMappingURL=visibility-changed.js.map