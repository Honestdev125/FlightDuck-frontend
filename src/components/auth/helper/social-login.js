import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Link, Redirect, withRouter } from 'react-router-dom';
import API_URL, { authenticate } from "./index";

const socialMediaLoginAPI = (accesstoken, backendProvider) => {
	return axios
		.post(`${API_URL}auth/convert-token`, {
			token: accesstoken,
			backend: backendProvider,
			grant_type: 'convert_token',
			client_id: '9nsQvEJzA3Rc4PPvnjFU3JIIiGHWOpjg5fvxnn6C',
			client_secret:
				'5n9VauZZdKfTd2s02wcHmG0O51Wmb2iWYhoRTpf5vA9ZjNT2hJNFmNAO4Ix5F0uTUxVxFNQfio3C6ifsFad0hI8RuX744PNYj7jYx0h77QOmMgqqmJDxpG2cy7PNFKO2',
		})
		.then((res) => {
			return res;
		})
		.catch((err) => {
			return err;
		});
};

export default socialMediaLoginAPI;