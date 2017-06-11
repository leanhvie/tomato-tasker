import dispatcher from "../dispatcher";

export function updateCurrentPage(currentPage) {
    dispatcher.dispatch({
        type: "UPDATE_CURRENT_PAGE",
        currentPage: currentPage
    })
}

export function redirect(to) {
    dispatcher.dispatch({
        type: "REDIRECT",
        to: to
    })
}