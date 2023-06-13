import { EventDefinition } from "./EventDefinition";
export declare class PureEvent<T> {
    private definition;
    private payload;
    constructor(definition: EventDefinition, payload: T);
    getDefinition(): EventDefinition;
    getPayload(): T;
    getNativeEvent(): CustomEvent;
}
