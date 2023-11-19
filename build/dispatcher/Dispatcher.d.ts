import { PureEvent } from "../event/PureEvent";
import { Listener } from "../listener/Listener";
export declare class Dispatcher {
    private registries;
    constructor();
    addListener(eventId: string, listener: Listener): void;
    dispatch(event: PureEvent): Promise<void>;
}
