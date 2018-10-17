import * as helper from '../helpers/helper';

export function getRelation(relation) {
	return { type: 'LOAD_RELATION', relation };
}

export function loadRelation(clave, jwt){
	return(dispatch, getState) => {
		helper.getRelation(clave, jwt)
			.then(res => {
				console.log(res);
				dispatch(getRelation(res))
			})
	}
}