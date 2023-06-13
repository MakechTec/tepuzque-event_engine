"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PureEvent = void 0;
class PureEvent {
    constructor(definition, payload) {
        this.definition = definition;
        this.payload = payload;
    }
    getDefinition() {
        return this.definition;
    }
    getPayload() {
        return this.payload;
    }
    getNativeEvent() {
        return new CustomEvent(this.definition.getFullId(), { detail: this.payload });
    }
}
exports.PureEvent = PureEvent;
