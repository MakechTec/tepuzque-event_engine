"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventDefinition = void 0;
class EventDefinition {
    constructor(prefix, id) {
        this.prefix = prefix;
        this.id = id;
    }
    getPrefix() {
        return this.prefix;
    }
    getId() {
        return this.id;
    }
    getFullId() {
        return this.prefix + "." + this.id;
    }
}
exports.EventDefinition = EventDefinition;
