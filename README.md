
## Usage ##

    

    import {Dispatcher} from "@makechtec/event_engine";

    const dispatcher = new Dispatcher();

    dispatcher.addListener( {
        eventId: "f",
        listener: ev => {console.log(ev.name)}
    } );
    dispatcher.dispatch({ id: "f", name: "George"});