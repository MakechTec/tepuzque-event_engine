import { PureEvent } from "../event/PureEvent";
import { ListenerRegistry } from "./ListenerRegistry";


export class EventDispatcher<T extends PureEvent>{

    private listeners: ListenerRegistry<T>[];

    public constructor(){
        this.listeners = [];
    }

    public addListenerRegistry(listenerRegistry: ListenerRegistry<T>): void{
        this.listeners.push(listenerRegistry);
    }

    public async dispatch(event: T): Promise<void>{

        this.listeners
            .filter(registry => registry.eventId === event.id)
            .map( registry => registry.listener )
            .forEach( listener => listener.handle(event) );

    }

}