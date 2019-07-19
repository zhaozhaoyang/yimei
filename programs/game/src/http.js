import axios from 'axios'
// import QS from 'qs';
// axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? '/tourism/api' : '/tourism/api'
// axios.defaults.baseURL = 'https://xcx.huandugj.com/tourism/api/'

// 公用的post请求
const request = {
  postRequest (data = {}, method = 'post') {
    return new Promise((resolve, reject) => {
      axios({
        url: 'https://xcx.huandugj.com/tourism/api/service?json=' + JSON.stringify(data),
        method: method,
        headers: {
          'Content-Type': 'application/json'
        }
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
  },
  
  post (url, data = {}, method = 'post') {
    return new Promise((resolve, reject) => {
      axios({
        url: url,
        method: method,
        headers: {
          'Content-Type': 'application/json'
        }
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
export default request
