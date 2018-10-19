export default function adminReducer(state = {}, action) {
	switch (action.type) {
		case 'LOG_IN':
			return Object.assign({}, state, { jwt: action.jwt, user: 'admin' })
		case 'LOAD_ADMIN':
			return Object.assign({}, state, {
				_id: action.admin._id,
				name: action.admin.name,
				email: action.admin.email
			})
		case 'LOG_OUT':
			return {}
		default:
			return state
	}
}