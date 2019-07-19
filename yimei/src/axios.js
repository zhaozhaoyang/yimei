import axios from 'axios'

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? '/api' : '/plastic/api'

// 公用的get请求
function get(url,data = {}){
    return new Promise((resolve,reject) => {
     // console.log(this) 
     //  axios.post(url,data)
      axios.get('service?json='+JSON.stringify(url),{})
           .then(response => {
             if(response.data.result==2){
            //    Toast.clear();
               return;
             }
             resolve(response.data);
           },err => {
             reject(err)
           })
    })
  }

// 公用的post请求
function post(url,data = {}){
    return new Promise((resolve,reject) => {
     // console.log(this)
     //  axios.post(url,data)
      axios.post('service?json='+JSON.stringify(url),{})
           .then(response => {
             if(response.data.result==2){
            //    Toast.clear();
               return;
             }
             resolve(response.data);
           },err => {
             reject(err)
           })
    })
  }
export default post