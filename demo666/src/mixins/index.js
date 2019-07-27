import axios from 'axios'
// 环境的切换
// if (process.env.NODE_ENV == 'development') {
// 	axios.defaults.baseURL = 'http://112.35.113.88'
// } else if (process.env.NODE_ENV == 'debug') {
// 	axios.defaults.baseURL = '';
// } else if (process.env.NODE_ENV == 'production') {
// 	axios.defaults.baseURL = 'http://112.35.113.88'
// }

axios.defaults.timeout = 10000

export default{
    methods: {
        postRequest(url, data = {}, method = 'post'){
            return new Promise((resolve, reject) => {
                axios({
                        url: url,
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
    }
}