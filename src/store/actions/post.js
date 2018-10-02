import axios from 'axios';
import {
  FETCH_POSTS_BEGIN,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from '../../constants/actions';

export const fetchPosts = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_POSTS_BEGIN });

    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

    if (response.status === 200) {
      dispatch({
        type: FETCH_POSTS_SUCCESS,
        payload: {
          posts: response.data,
        },
      });
    }
  } catch (error) {
    dispatch({ type: FETCH_POSTS_FAILURE, payload: { error } });
  }
};
