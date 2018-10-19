import config from './config';
const url = config.url;

//LOGIN STUDENTS
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

//LOGIN ADMIN

export const loginAdmin = (body) => {
	return fetch(`${url}session`, {
		method: 'POST',
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		}
	})
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
