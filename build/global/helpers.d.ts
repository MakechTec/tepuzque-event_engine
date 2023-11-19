import { PureEvent } from "../event/PureEvent";
import { Listener } from "../listener/Listener";
export declare const addGlobalEventListener: (eventId: string, listener: Listener) => void;
export declare const dispatchGlobalEvent: (event: PureEvent) => void;
