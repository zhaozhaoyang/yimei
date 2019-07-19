// 使用微信JS调用微信扫一扫功能
// 初始化微信JS调用配置，并调用微信扫一扫 
var codeUid;
function directScanQRCode(appId,timestamp,nonceStr,signature,uid){

	wx.config({
		// 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
		debug : false,
		// 必填，公众号的唯一标识
		appId : appId,
		// 必填，生成签名的时间戳
		timestamp : timestamp,
		// 必填，生成签名的随机串
		nonceStr : nonceStr,
		// 必填，签名，见附录1
		signature : signature,
		// 必填，需要使用的JS接口列表，所有JS接口列表见附录2
		jsApiList : [ 'checkJsApi', 'scanQRCode' ]
	});
	
	wx.error(function(res) {
		//这个地方的好处就是wx.config配置错误，会弹出窗口哪里错误，然后根据微信文档查询即可。
//        layerTip("我要充电扫码出错了：" + res.errMsg); 
		alert("我要充电扫码出错了：" + res.errMsg)
    });
    wx.ready(function() {
//    	var isScanQRCode = false;
//		// 备注：checkJsApi接口是客户端6.0.2新引入的一个预留接口，第一期开放的接口均可不使用checkJsApi来检测。
//        wx.checkJsApi({
//             jsApiList : ['scanQRCode'],
//             success : function(res) {
//            	 // alert("=====cc========" + JSON.stringify(res));
//            	 // 以键值对的形式返回，可用的api值true，不可用为false
//        		 // 如：{"checkResult":{"scanQRCode":true},"errMsg":"checkJsApi:ok"}
//            	 if(res && res.checkResult && res.checkResult.scanQRCode){
//            		 isScanQRCode = true;
					//alert("2221执行")
            		 wx.scanQRCode({
            	            needResult : 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
            	            scanType : [ "qrCode"], // 可以指定扫二维码还是一维码，默认二者都有
            	            success : function(res) {
            	            	//alert(JSON.stringify(res));
								var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
								//alert("=====aa========" + JSON.stringify(result));
								var reg = /^[\'\"]+|[\'\"]+$/g;
								var str = JSON.stringify(result);
								str=str.replace(reg,"");
								codeUid=getvar(result,"codeUid"); 
								alert("codeUid:"+codeUid);
								 $.ajax({
								 	type: "get",
								 	url: waimaiurl + "/weixinloginsao",
								 	data: {"codeUid": codeUid},
								 	dataType: "json",
								 	success: function (response) {
								 		//alert(response)
										//loadSweepCode(uid,codeUid);
								 	}
								 });
								

								
				

            	             	// window.location.href = result?type=type;//因为我这边是扫描后有个链接，然后跳转到该页面
            	            },
            	            fail : function(res) {
            	            	//alert("=====ff========" + JSON.stringify(res));
//            	            	layerTip("我要充电扫码出错了：" + res.errMsg);
            	            	alert("我要充电扫码出错了：" + res.errMsg)
            	            }
            	            /* ,
            	            complete : function(res) {
            	            	alert("微信扫码加载完成：" + JSON.stringify(res));
            	            } */
            	        });
//            	 }
//             }
//        });
//        if(!isScanQRCode){
//    		layerTip("请确保在微信里使用，稍后重试"); 
//    	}
    });
}

function loadSweepCode(uid,codeUid){
	 $.ajax({
								 	type: "get",
								 	url: waimaiurl + "/sweepCode",
								 	data: {"codeUid": codeUid,"uid" : uid},
								 	dataType: "json",
									success: function (response) {
								// 		// alert("=====ff========" + JSON.stringify(response));
								 		if(response.result == 0){
											
								 			if(response.object == 1){
								 				window.location.href = "http://cqmxsm.com/duoshangcheng/webpage/modules/waimai/html/joinUs.html?uid="+uid+"codeUid="+result ;
												
								 			}else{
								 				window.location.href = "http://cqmxsm.com/duoshangcheng/webpage/modules/waimai/my.html?uid="+uid ;
								 			}
											
								 		}else{
								 			mui.toast(response.resultNote);
													 window.location.href = "index.html";
								 		}
										
								 	}
								 });
}
