"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRules = void 0;
const Priorities_1 = require("@civ-clone/core-rule/Priorities");
const TraitRegistry_1 = require("@civ-clone/core-civilization/TraitRegistry");
const BuildCity_1 = require("../../Routines/BuildCity");
const BuildSettlers_1 = require("../../Routines/BuildSettlers");
const Criterion_1 = require("@civ-clone/core-rule/Criterion");
const Effect_1 = require("@civ-clone/core-rule/Effect");
const Expansionist_1 = require("@civ-clone/base-leader-trait-development/Development/Expansionist");
const MoveToGoodSiteForCity_1 = require("../../Routines/MoveToGoodSiteForCity");
const Priority_1 = require("@civ-clone/core-strategy/Rules/Priority");
const getRules = (traitRegistry = TraitRegistry_1.instance) => [
    new Priority_1.default(new Criterion_1.default((player, routine) => routine instanceof BuildCity_1.default ||
        routine instanceof BuildSettlers_1.default ||
        routine instanceof MoveToGoodSiteForCity_1.default), new Effect_1.default((player) => {
        const civilization = player.civilization(), leader = civilization.leader();
        if (leader &&
            traitRegistry.some((trait) => leader instanceof trait.leader() && trait instanceof Expansionist_1.default)) {
            return new Priorities_1.High();
        }
        return new Priorities_1.Normal();
    })),
];
exports.getRules = getRules;
exports.default = exports.getRules;
//# sourceMappingURL=priority.js.map