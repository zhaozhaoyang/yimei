
 var baseId = "http://cqmxsm.com/duoshangcheng/api/";
var waimaiurl = 'http://cqmxsm.com/duoshangcheng/vip';

//var waimaiurl = 'http://192.168.3.218:8080/duoshangcheng/vip';





 function GetUrlParms() {
     var args = new Object();
     var query = location.search.substring(1); //获取查询串   
     var pairs = query.split("&"); //在逗号处断开   
     for (var i = 0; i < pairs.length; i++) {
         var pos = pairs[i].indexOf('='); //查找name=value   
         if (pos == -1) continue; //如果没有找到就跳过   
         var argname = pairs[i].substring(0, pos); //提取name   
         var value = pairs[i].substring(pos + 1); //提取value   
         args[argname] = unescape(value); //存为属性   
     }
     return args;
 }

function getParmVal(key) {
    var args = new Object();
    args = GetUrlParms();
    if (args[key] != undefined) {
        //如果要查找参数key:
        var value1 = args[key];
        return value1;
    } else {
        return null;
    }
}

function getvar(url,par){
		var urlsearch = url.split('?');
		pstr = urlsearch[1].split('&');
		for (var i = pstr.length - 1; i >= 0; i--) {
			var tep = pstr[i].split("=");
			if(tep[0] == par){
				return tep[1];
			}
		}
		return(false);
}

