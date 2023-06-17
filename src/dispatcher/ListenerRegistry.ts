import { Listener } from "./Listener";

export type ListenerRegistry = {
    eventId: string;
    listener: Listener;
};