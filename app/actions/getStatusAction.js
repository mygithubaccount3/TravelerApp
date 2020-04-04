export function setStatus(isSignedIn, username) {
    return {
        type: 'SET_STATUS',
        isSignedIn,
		username
    };
}
