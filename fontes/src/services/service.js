export function saveStateLocalStorage(data) {
    localStorage.setItem('state', JSON.stringify(data));
}

export function getStateFromLocalStorage() {
    const data = localStorage.getItem('state');
    return JSON.parse(data);
}