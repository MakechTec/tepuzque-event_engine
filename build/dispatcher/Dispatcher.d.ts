import { ListenerRegistry } from "./ListenerRegistry";
import { PureEvent } from "../event/PureEvent";
export declare class Dispatcher {
    private registries;
    constructor();
    addListener(registry: ListenerRegistry): void;
    dispatch(event: PureEvent): Promise<void>;
}
