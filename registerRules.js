"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const priority_1 = require("./Rules/Routine/priority");
const turn_start_1 = require("./Rules/Player/turn-start");
const visibility_changed_1 = require("./Rules/Player/visibility-changed");
RuleRegistry_1.instance.register(...(0, priority_1.default)(), ...(0, turn_start_1.default)(), ...(0, visibility_changed_1.default)());
//# sourceMappingURL=registerRules.js.map