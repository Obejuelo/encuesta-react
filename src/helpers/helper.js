export const logIn = (body) => {
	return fetch(`http://localhost:5000/login`,{
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
	return fetch(`http://localhost:5000/relation/student/${matr}`,{
		headers: {
			'token': token
		}
	})
	.then(res => res.json())
	.catch(err => {console.log(err);})
}