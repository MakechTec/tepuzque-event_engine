import { PureEvent } from "../event/PureEvent";
import { ListenerRegistry } from "./ListenerRegistry";
export declare class EventDispatcher<T> {
    private listeners;
    constructor();
    addListenerRegistry(listenerRegistry: ListenerRegistry<T>): void;
    dispatch(event: PureEvent<T>): Promise<void>;
}
