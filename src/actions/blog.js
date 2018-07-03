import { FETCH_POSTS_SUCCESS, SET_LOADING } from './';
import * as contentful from 'contentful';

export const fetchPosts = () => (dispatch) => {
	//TODO: add loading spinner
	dispatch(setLoading(true))
	
	const client = contentful.createClient({
  	space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  	accessToken: process.env.REACT_APP_CONTENTFUL_API_KEY
	})

	const error = err => console.log(err);

  return client.getEntries()
  	.then(({items}) => dispatch(fetchPostsSuccess(items)))
  	.then(dispatch(setLoading(false)))
  	.catch(error)
}


export const fetchPostsSuccess = (posts) => ({
	type: FETCH_POSTS_SUCCESS, posts
})

export const setLoading = (status) => ({
	type: SET_LOADING, status
})