import { PureEvent } from "../event/PureEvent";
import { Listener } from "../listener/Listener";
export declare type ListenerRegistry<T extends PureEvent> = {
    eventId: string;
    listener: Listener<T>;
};
