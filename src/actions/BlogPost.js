import { FETCH_POST_SUCCESS, SET_LOADING } from './';
import { setLoading } from './blog';
import * as contentful from 'contentful';

export const fetchPost = (id) => (dispatch) => {
	dispatch(setLoading(true))

	const client = contentful.createClient({
  	space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  	accessToken: process.env.REACT_APP_CONTENTFUL_API_KEY
	})

	const error = err => console.log(err);

  return client.getEntry(`${id}`)
  	.then((post) => dispatch(fetchPostSuccess(post)))
  	.then(dispatch(setLoading(false)))
  	.catch(error)
}


export const fetchPostSuccess = (post) => ({
	type: FETCH_POST_SUCCESS, post
})