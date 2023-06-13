import { PureEvent } from "../event/PureEvent";
export declare type Listener<T extends PureEvent> = {
    handle(event: T): void;
};
