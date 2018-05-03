import { Cookies } from 'react-cookie';
const cookies = new Cookies();

const AUTH_USER = "auth-user"

const cookiesUtils = (function() {

	let setCookie = (key, value) => {
		cookies.set(key, value, { path: '/' })		
	}

	let getCookie = (key) => {
		return cookies.get(key)
	}

	let removeCookie = (key) => {
		return cookies.remove(key)
	}

	return {
		setAuthorisedUser : function(userObj) {
			setCookie(AUTH_USER, userObj)
		},

		getAuthorisedUser : function() {
			getCookie(AUTH_USER)
		},

		logout : function() {
			removeCookie(AUTH_USER)
		}		
	}
})();

export default cookiesUtils;