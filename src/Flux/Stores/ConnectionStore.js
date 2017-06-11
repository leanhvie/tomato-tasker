import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class ConnectionStore extends EventEmitter {
    constructor() {
        super();
        this.isConnected = navigator.onLine;
    }

    getIsConnected() {
        return this.isConnected;
    }

    handleActions(action) {
        switch(action.type) {

        }
    }
}

const connectionStore = new ConnectionStore();
dispatcher.register(connectionStore.handleActions.bind(connectionStore));
export default connectionStore;