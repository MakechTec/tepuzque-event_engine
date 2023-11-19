import { ListenerRegistry } from "./ListenerRegistry";
import { PureEvent } from "../event/PureEvent";
import { Listener } from "../listener/Listener";

export class Dispatcher{

    private registries: ListenerRegistry[];

    public constructor(){
        this.registries = [];
    }

    public addListener(eventId: string, listener: Listener): void{
        this.registries.push({eventId, listener});
    }

    public async dispatch(event: PureEvent): Promise<void>{
        this.registries
            .filter(registry => registry.eventId === event.id)
            .forEach( async registry => registry.listener(event));
    }

}