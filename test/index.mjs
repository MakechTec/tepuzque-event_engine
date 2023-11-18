import {Dispatcher} from "../build/index.js";

const dispatcher = new Dispatcher();

console.log(dispatcher);

dispatcher.addListener( {
    eventId: "f",
    listener: ev => {console.log(ev.name)}
} );
dispatcher.dispatch({ id: "f", name: "George"});