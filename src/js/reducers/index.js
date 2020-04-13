import { ADD_ARTICLE, DATA_LOADED } from "../constants/action-types";

const initialState = {
	posts: [],
};

/**
 * Function to handle reducer.
 *
 * @param {object} state  Current state.
 * @param {action} action Store action.
 *
 * @return {object} Updated state.
 */
function rootReducer( state = initialState, action ) {
	return state;
}

export default rootReducer;
