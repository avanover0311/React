import axios from 'axios';

const KEY = 'AIzaSyBlvrPfGDh26-ryScpTPkFLTF1m1UWjcZQ';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResult: 5,
		key: KEY,
		
	}
});


