export default function userReducer(state = {}, action) {
	switch (action.type) {
		case 'LOAD_RELATION':
			return action.relation
		default:
			return state
	}
}