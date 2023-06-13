import { PureEvent } from "../event/PureEvent";
import { ListenerRegistry } from "./ListenerRegistry";
export declare class EventDispatcher<T extends PureEvent> {
    private listeners;
    constructor();
    addListenerRegistry(listenerRegistry: ListenerRegistry<T>): void;
    dispatch(event: T): Promise<void>;
}
