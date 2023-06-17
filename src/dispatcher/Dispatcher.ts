import { ListenerRegistry } from "./ListenerRegistry";
import { PureEvent } from "../event/PureEvent";

export class Dispatcher{

    private registries: ListenerRegistry[];

    public constructor(){
        this.registries = [];
    }

    public addListener(registry: ListenerRegistry): void{
        this.registries.push(registry);
    }

    public async dispatch(event: PureEvent): Promise<void>{
        this.registries
            .filter(registry => registry.eventId === event.id)
            .forEach(registry => registry.listener(event));
    }

}