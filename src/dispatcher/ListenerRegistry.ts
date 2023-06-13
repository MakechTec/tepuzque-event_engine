import { PureEvent } from "../event/PureEvent";
import { Listener } from "../listener/Listener";

export type ListenerRegistry<T extends PureEvent> = {
    eventId: string;
    listener: Listener<T>;
};