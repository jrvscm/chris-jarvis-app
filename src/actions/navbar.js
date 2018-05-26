import { UPDATE_DIMENSIONS, SET_HIDDEN_STATE } from './';

export const updateDimensions = (dimensions) => ({
	type: UPDATE_DIMENSIONS, dimensions
})

export const setHiddenState = (status) => ({
	type: SET_HIDDEN_STATE, status
})