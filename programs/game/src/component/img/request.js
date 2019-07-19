import axios from 'axios'

// 环境的切换
// if (process.env.NODE_ENV == 'development') {
// 	axios.defaults.baseURL = 'https://xcx.huandugj.com/tourism/api/service'
// 	// axios.defaults.baseURL = 'http://192.168.3.198:8080'
// } else if (process.env.NODE_ENV == 'debug') {
// 	axios.defaults.baseURL = '';
// } else if (process.env.NODE_ENV == 'production') {
// 	axios.defaults.baseURL = 'https://xcx.huandugj.com/tourism/api/service'
// }

axios.defaults.timeout = 10000

// post请求
function postRequest( data = {}, method = 'post') {
	return new Promise((resolve, reject) => {
		axios({
				url: "https://xcx.huandugj.com/tourism/api/service?json="+JSON.stringify(data),
				method: method,
				headers: {
					'Content-Type': 'application/json'
				},
				data: data
			})
			.then(res => {
				//成功
				resolve(res)
			})
			.catch(res => {
				//失败
				reject(res)
			})
	})
}

export default {
	postRequest: postRequest
}
