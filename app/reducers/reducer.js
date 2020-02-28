export function data(state = [], action) {
    switch (action.type) {
        case 'FETCH_DATA_SUCCESS':
            return action.items;
        default:
            return state;
    }
}
