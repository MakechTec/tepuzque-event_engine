import {Dispatcher} from "../dispatcher/Dispatcher";
import { PureEvent } from "../event/PureEvent";
import { Listener } from "../listener/Listener";

export const addGlobalEventListener = (eventId: string, listener: Listener) => {
    GLOBAL_DISPATCHER.addListener(eventId, listener);
}

export const dispatchGlobalEvent = (event: PureEvent) => {
    GLOBAL_DISPATCHER.dispatch(event);
}

const GLOBAL_DISPATCHER: Dispatcher = new Dispatcher();