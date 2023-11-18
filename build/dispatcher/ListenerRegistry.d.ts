import { Listener } from "../listener/Listener";
export type ListenerRegistry = {
    eventId: string;
    listener: Listener;
};
