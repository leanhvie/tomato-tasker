import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import createHistory from 'history/createBrowserHistory'

class HistoryStore extends EventEmitter {
    constructor() {
        super();
        this.currentPage = location.hash;
        this.history = createHistory();
    }

    getCurrentPage() {
        return this.currentPage;
    }

    getHistory() {
        return this.history;
    }

    redirect(to) {
        this.history.push(to);
        location.replace(to);
    }

    handleActions(action) {
        switch(action.type) {
            case "UPDATE_CURRENT_PAGE":
                this.currentPage = action.currentPage;
                this.emit("change");
                break;
            case "REDIRECT":
                this.redirect(action.to);
                this.emit("change");
                break;
        }
    }
}

const historyStore = new HistoryStore();
dispatcher.register(historyStore.handleActions.bind(historyStore));
export default historyStore;