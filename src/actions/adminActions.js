export function login(jwt) {
	return { type: 'LOG_IN', jwt };
}

export function loadAdmin(admin) {
	return { type: 'LOAD_ADMIN', admin };
}

export function logOut() {
	return { type: 'LOG_OUT', };
}