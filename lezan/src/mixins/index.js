import axios from 'axios'
import { Toast } from 'vant';
// 环境的切换
// if (process.env.NODE_ENV == 'development') {
// 	axios.defaults.baseURL = 'http://122.114.48.61'
// } else if (process.env.NODE_ENV == 'debug') {
// 	axios.defaults.baseURL = '';
// } else if (process.env.NODE_ENV == 'production') {
// 	axios.defaults.baseURL = 'http://112.35.113.88'
// }

axios.defaults.timeout = 10000

axios.interceptors.response.use(
response => {
	return response;
},
error => {
	if(error.message.includes('timeout')){   // 判断请求异常信息中是否含有超时timeout字符串
	console.log("错误回调", error);
	return Promise.reject(error);          // reject这个错误信息
	}
	return Promise.reject(error);
});

export default{
    methods:{
        goto(data){			
			if(data == '0'){
				this.$router.push({ name: 'index', params: {}})
			}else if(data == '1'){
				this.$router.push({ name: 'rank', params: {}})
			}else if(data == '2'){
				this.$router.push({ name: 'news', params: {}})
			}else if(data == '3'){
				this.$router.push({ name: 'my', params: {}})
			}				
			
		},
		back(){
            this.$router.back(-1)
		},
		postRequest(data = {}, method = 'post') {
			return new Promise((resolve, reject) => {
				axios({
						url: encodeURI("http://47.95.5.242/api/service?json="+JSON.stringify(data)),
						method: method,
						headers: {
							'Content-Type': 'application/json'
						}
						
					})
					.then(res => {
						Toast.clear();
						//成功
						if(res.data.result == '0'){
							resolve(res)
						}else{
							Toast(res.data.resultNote);
							if('你已领取过该任务，请勿重复领取'==res.data.resultNote){
								resolve(res)
							}				
						}
						
					})
					.catch(res => {
						//失败
						// reject(res)
						Toast('请求超时！')
					})
			})
		},
		dataURLtoFile(dataurl, filename) {
			let arr = dataurl.split(','),
				mime = arr[0].match(/:(.*?);/)[1],
				bstr = atob(arr[1]),
				n = bstr.length,
				u8arr = new Uint8Array(n);
			while (n--) {
				u8arr[n] = bstr.charCodeAt(n);
			}
			return new File([u8arr], filename, {
				type: mime
			});
		},
    }
}