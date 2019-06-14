import {
  FETCH_JOKES_START,
  FETCH_JOKES_SUCCESS,
  FETCH_JOKES_FAILURE,
} from '../actions';

const initialState = {
  jokesList: [],
  fetchingJokes: false,
  error: null
};

const fetchJokesReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_JOKES_START:
      return {
        ...state,
        fetchingJokes: true,
        error: ''
      }
    case FETCH_JOKES_SUCCESS:
      return {
        ...state,
        jokesList: action.payload,
        fetchingJokes: false,
        error: ''
      }
    case FETCH_JOKES_FAILURE:
      return {
        ...state,
        fetchingJokes: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default fetchJokesReducer;
