import axios from 'axios';


 export default axios.create({
	baseURL: 'https://api.unplash.com',
	headers: {
		Authorization: 'Client-ID 0105e61c150988b1756d53b76b82babbfa354bb75e4853276fab769a9c184098'
	}
});
