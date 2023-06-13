import { PureEvent } from "../event/PureEvent";
export declare type Listener<T> = {
    handle(event: PureEvent<T>): void;
};
