import { UPDATE_DIMENSIONS, SET_HIDDEN_STATE, SET_FIRST_LOAD } from './';

export const updateDimensions = (dimensions) => ({
	type: UPDATE_DIMENSIONS, dimensions
})

export const setHiddenState = (status) => ({
	type: SET_HIDDEN_STATE, status
})

export const setFirstLoad = (status) => ({
	type: SET_FIRST_LOAD, status
})