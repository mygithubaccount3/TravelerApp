const initialState = {
  isSignedIn: false
};

export default function status (state = initialState, action) {
	switch (action.type) {
        case 'SET_STATUS':
            return Object.assign({}, state, {
      			isSignedIn: action.isSignedIn
    		});
        default:
            return state;
    }
};
