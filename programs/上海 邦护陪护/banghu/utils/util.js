const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


// 接口域名地址
const baseInfo = "https://banghu.lixinapp.com/banghu/service/";
//const baseInfo = "http://192.168.3.218:8080/zhiyunpeihu/service/";
// 单张图片上传地址
// const upload = "http://192.168.3.218/zhiyunpeihu/service/uploadImage";
const upload = "https://banghu.lixinapp.com/banghu/service/uploadImage";

module.exports = {
  formatTime: formatTime,
  baseInfo: baseInfo,
  upload: upload
}

