import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';


export const fetchPostsandUsers= () => async dispatch => {
	 await dispatch(fetchPosts());
	 const userIds =_.uniq(_.map(getState().posts, 'userId'))
	 userIds.forEach(id=> dispatch(fetchUser(id)));
};

export const fetchPosts = () => async (dispatch) => {
		const response = await jsonPlaceholder.get('/posts');
	
	dispatch({ type: 'Fetch_Posts', payload: response });
	};

// export const fetchUser = (id) => dispatch => {
// 	_fetchUser(id, dispatch);
// };

// const _fetchUser = _.memoize(async(id, dispatch) => {
// 	const response = await jsonPlaceholder.get(`/users/${id}` );

// 	dispatch({ type: 'Fetch_User', payload: response.data });
// });

export const fetchUser = (id) => async dispatch => {
	const response = await jsonPlaceholder.get(`/users/${id}` );

	dispatch({ type: 'Fetch_User', payload: response.data });
};