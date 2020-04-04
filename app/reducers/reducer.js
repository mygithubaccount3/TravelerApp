const initialState = {
	isSignedIn: false,
	username: ''
};

export default function status (state = initialState, action) {
	switch (action.type) {
        case 'SET_STATUS':
            return Object.assign({}, state, {
      			isSignedIn: action.isSignedIn,
				username: action.username
    		});
        default:
            return state;
    }
};
