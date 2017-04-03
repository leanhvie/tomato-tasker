export function isObjectEmpty(object) {
    return Object.keys(object).length === 0 && object.constructor === Object;
}

export function isArrayEmpty(array) {
    return array === undefined || array.length == 0;
}

export function isUndefinedOrNull(element) {
    return typeof element === "undefined" || element  === null;
}