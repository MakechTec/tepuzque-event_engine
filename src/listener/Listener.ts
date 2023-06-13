import { PureEvent } from "../event/PureEvent";

export type Listener<T extends PureEvent> = {
    handle( event: T ): void;
};