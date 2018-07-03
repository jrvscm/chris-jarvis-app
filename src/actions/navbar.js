import { UPDATE_DIMENSIONS, SET_HIDDEN_STATE, SET_FIRST_LOAD, SET_SCROLL_TO_CONTACT } from './';

export const updateDimensions = (dimensions) => ({
	type: UPDATE_DIMENSIONS, dimensions
})

export const setHiddenState = (status) => ({
	type: SET_HIDDEN_STATE, status
})

export const setScrollToContact = (status) => ({
	type: SET_SCROLL_TO_CONTACT, status
})