import {
  FETCH_POSTS_BEGIN,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from '../../constants/actions';

const initialState = {
  posts: [],
  isLoading: false,
  isLoaded: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_BEGIN:
      return {
        ...state,
        posts: [],
        isLoading: true,
        isLoaded: false,
        error: null,
      };

    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload.posts,
        isLoading: false,
        isLoaded: true,
      };

    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
