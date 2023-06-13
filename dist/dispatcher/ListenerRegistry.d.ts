import { Listener } from "../listener/Listener";
export declare type ListenerRegistry<T> = {
    eventId: string;
    listener: Listener<T>;
};
