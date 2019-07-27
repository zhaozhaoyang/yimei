<template>
  <div class="hello">
    <!-- <img src="../../public/images/1.jpg" alt="" style="width:300px;height:300px;"> -->
    <img alt="Vue logo" :src="src" v-if="src">
	<p>动态图片src;单张多张图片上传压缩</p>
    <div class="up">
      <input type="file"  class="in" name="file" id="file" :key="key" multiple @change="sub($event)">
    </div>
  </div>
</template>

<script>
import Img from '../assets/no.png'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
    //   src:"/images/2.png"
	//   src: require('../assets/logo.png')
	src:Img,
	key:"123"
    }
  },
  methods:{
    // 说明：var file = e.target.files[0] 直接就是后台要的图片流 不用dataURLtoFile
    // onRead1 这个函数容易产生异步
    sub(e){
      var that =  this;
      var file = e.target.files[0];
      var type = file.type.split('/')[0];
       if ( type === 'image' ){
          //将图片img转化为base64
          var reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onloadend = function () {
              var dataURL = reader.result;
              console.log(file)
              that.onRead1(file,dataURL,obj=>{
                var formdata = new FormData();
                console.log(obj)
                formdata.append('file',obj);
                that.http.post('http://122.114.49.242/plastic/api/uploadFile',formdata).then(res =>{
                  // console.log(res)
                  if(res.data.result == '0'){
                    // http://122.114.49.242/plastic/userfiles/uploadFile/2019/06/20190625180012P9P9.jpg
                      that.src = "http://122.114.49.242"+res.data.dataobject
                      // console.log(that.src)
                  }
                }).catch(e =>{
                  console.log(e)
                })  
              })
              
          };
          
      }
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
    onRead1(file,content,callback) {
				if(file.size > 4194304) {
					console.log("图片大小不能超过4M")
					return;
				}
				if (/\/(?:jpeg|png)/i.test(file.type) && file.size > 204800) {
					let self = this
					let canvas = document.createElement('canvas')
					// 获取对应的CanvasRenderingContext2D对象(画笔)
					let ctx = canvas.getContext('2d')
					// 创建新的图片对象 
					let img = new Image()
					// 指定图片的DataURL(图片的base64编码数据)
					img.src = content
					img.onload = function() {
						var initSize = img.src.length;
						var width = img.width;
						var height = img.height;
						console.log(width, height, '输出宽高')
					
						//如果图片大于四百万像素，计算压缩比并将大小压至400万以下
						var ratio;
						if ((ratio = width * height / 4000000) > 1) {
							ratio = Math.sqrt(ratio);
							width /= ratio;
							height /= ratio;
						} else {
							ratio = 1;
						}
					
						canvas.width = width;
						canvas.height = height;
					
						//铺底色
						ctx.fillStyle = "#fff";
						ctx.fillRect(0, 0, canvas.width, canvas.height);
					
						// 如果图片像素大于100万则使用瓦片绘制
						var count;
						let tCanvas = document.createElement('canvas');
						let tctx = canvas.getContext('2d');
						if ((count = width * height / 10000000) > 1) {
							count = (Math.sqrt(count) + 1); //计算要分成多少块瓦片
					
							//            计算每块瓦片的宽和高
							var nw = (width / count);
							var nh = (height / count);
					
							tCanvas.width = nw;
							tCanvas.height = nh;
					
							for (var i = 0; i < count; i++) {
								for (var j = 0; j < count; j++) {
									tctx.drawImage(img, i * nw * ratio, j * nh * ratio, nw * ratio, nh * ratio, 0, 0, nw, nh);
									ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);
								}
							}
						} else {
							ctx.drawImage(img, 0, 0, width, height);
						}
					
						//进行最小压缩
						content = canvas.toDataURL("image/jpeg", 0.1);
						//console.log("压缩前：" + initSize);
						//console.log("压缩后：" + file.content.length);
						//console.log("压缩率：" + (100 * (initSize - file.content.length) / initSize) + "%");
						//console.log(file.content)
					
						canvas.width = canvas.height = 0;
					
						let files = self.dataURLtoFile(content, Date.parse(Date()) + '.jpg')
						// files = {
						// 	content: content,
						// 	file: files
            // };
            // return files; 这里产生异步了，返回undefined
            callback(files)
					}
				}else{
          callback(file)
					// return file;
				}
			}
    // dataURItoBlob (dataURI) {
    //     // base64 解码
    //     let byteString = window.atob(dataURI.split(',')[1]);
    //     let mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    //     let T = mimeString.split('/')[1];
    //     let ab = new ArrayBuffer(byteString.length);
    //     let ia = new Uint8Array(ab);
    //     for (let i = 0; i < byteString.length; i++) {
    //         ia[i] = byteString.charCodeAt(i);
    //     }
    //     return new Blob([ab], {type: mimeString});
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.in{width:100%;height:100%;}
.up{height: 200px;width: 300px;border: 1px solid #999;}
</style>
