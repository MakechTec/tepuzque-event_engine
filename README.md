
## Usage ##

If you use global singleton dispatcher

    addGlobalListener("org.example.customEvent", ev => console.log(ev.message));

    //... is another far away place
    const customEvent = {id: "org.example.customEvent", message: "some message"};
    dispatchGlobalEvent(customEvent);

If you plan use more than one dispatcher

    import {Dispatcher} from "@makechtec/event_engine";

    //... when init application
    const ajaxEventsDispatcher = new Dispatcher();
    const uiEventsDispatcher = new Dispatcher();

    const app: App = new App(uiEventsDispatcher);
    const httpService: HttpService = new HttpService(ajaxEventsDispatcher);


    //... inside App class
    public onStart():void {
        uiEventsDispatcher.addListener("org.example.customEvent", ev => console.log(ev.message));

        //... in some far away place 
        submitButton.addEventListener("click", (e) => {
            console.log("clicked");
            const event = {id: "org.example.customEvent", message: "some message"};
            uiEventsDispatcher.dispatch(event);
        });


    }

    //... inside HttpService class
    public requestAllProducts():void {
        
        //... Note this won't react when submitButton is clicked, because this listener stays in different 
        // dispatcher
        ajaxEventsDispatcher.addListener("org.example.customEvent", ev => console.log(ev.message));

        ajaxEventsDispatcher.addListener("org.example.ajax.onSuccess", 
            ev => 
                ev.products.forEach( product => console.log(product.name) )
        );


        //... in some far away place 
        axios.get("http://example.com/product")
            .then( response => {
                console.log("http success getting all products");
                const event = {id: "org.example.ajax.onSuccess", products: response.data};
                ajaxEventsDispatcher.dispatch(event);
            } );


    }
