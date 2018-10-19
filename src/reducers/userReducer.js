export default function userReducer(state = {}, action) {
	switch (action.type) {
		case 'LOG_IN':
			return Object.assign({}, state, { jwt: action.jwt })
		case 'LOAD_USER':
			return Object.assign({}, state, {
				_id: action.user._id,
				nombre: action.user.nombre,
				ciclo: action.user.ciclo,
				matricula: action.user.matricula,
				grupo: action.user.grupo,
				email: action.user.email,
				name: action.user.name
				
			})
		case 'LOG_OUT':
			return {}
		default:
			return state
	}
}