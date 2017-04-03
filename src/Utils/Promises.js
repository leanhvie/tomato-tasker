export function booleanAfterTimeout(boolean, timeout) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(boolean), timeout);
    });
}