export function fetchDataSuccess(data) {
    return {
        type: 'FETCH_DATA_SUCCESS',
        data
    };
}

export function fetchData(url) {
    return (dispatch) => {
        fetch(url)
            .then((response) => response.json())
            .then((items) => dispatch(fetchDataSuccess(items)))
    };
}

// export const fetch = () => {
//     return {
//         type: "FETCH"
//     }
// };
