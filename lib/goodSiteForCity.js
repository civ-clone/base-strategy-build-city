"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.goodSiteForCity = exports.generateKey = void 0;
const CityRegistry_1 = require("@civ-clone/core-city/CityRegistry");
const Food_1 = require("@civ-clone/base-terrain-yield-food/Food");
const Production_1 = require("@civ-clone/base-terrain-yield-production/Production");
const Trade_1 = require("@civ-clone/base-terrain-yield-trade/Trade");
const StrategyNote_1 = require("@civ-clone/core-strategy/StrategyNote");
const FOOD_WEIGHT = 4;
const PRODUCTION_WEIGHT = 2;
const TRADE_WEIGHT = 1;
// If the above changes to be controlled dynamically, this would need to be made so too...
const GOOD_SITE_SCORE = 180;
const generateKey = (player) => (0, StrategyNote_1.generateKey)(player, 'goodSiteForCity');
exports.generateKey = generateKey;
const goodSiteForCity = (player, tile, threshold = GOOD_SITE_SCORE, cityRegistry = CityRegistry_1.instance) => tile.score(player, [[Food_1.default, 1]]) > 1 &&
    tile.getSurroundingArea().score(player, [
        [Food_1.default, FOOD_WEIGHT],
        [Production_1.default, PRODUCTION_WEIGHT],
        [Trade_1.default, TRADE_WEIGHT],
    ]) >= threshold &&
    tile
        .getSurroundingArea(4)
        .some((tile) => cityRegistry.getByTile(tile).length === 0);
exports.goodSiteForCity = goodSiteForCity;
exports.default = exports.goodSiteForCity;
//# sourceMappingURL=goodSiteForCity.js.map