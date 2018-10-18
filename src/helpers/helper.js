import config from './config';
const url = config.url;

export const logIn = (body) => {
	return fetch(`${url}login`,{
		method: 'POST',
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		}
	})
	.then(res => res.json())
	.catch(err => {console.log(err);})
}

export const getRelation = (matr, token) => {
	return fetch(`${url}relation/student/${matr}`,{
		headers: {
			'token': token
		}
	})
	.then(res => res.json())
	.catch(err => {console.log(err);})
}

export const getMatter = (matr) => {
	return fetch(`${url}matter/${matr}`)
	.then(res => res.json())
	.catch(err => { console.log(err); })
}

export const getTeacher = (teacher) => {
	return fetch(`${url}teacher/name/${teacher}`)
		.then(res => res.json())
		.catch(err => { console.log(err); })
}

//GET QUESTIONS
 export const getQuestion = () => {
	 return fetch(`${url}question`)
		 .then(res => res.json())
		 .catch(err => { console.log(err); })
 }

 export const setResp = (body, token) => {
	 return fetch(`${url}answer`, {
		 method: 'POST',
		 body: JSON.stringify(body),
		 headers: {
			 'Content-Type': 'application/json',
			 'Accept': 'application/json',
			 'token': token
		 }
	 })
		 .then(res => res.json())
		 .catch(err => { console.log(err); })
 }
