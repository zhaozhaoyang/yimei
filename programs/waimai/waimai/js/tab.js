var tabArr = [];

function changeColor(param) {
    if (param == 0) {
        tabArr = [{
            srca: 'img/shouyes@3x.png',
            name: '首页',
            hrf: 'index.html',
            blue: 'active',
        }, {
            srca: 'img/sahngcheng@3x.png',
            name: '商城',
            hrf: 'find.html',
            blue: '',
        }, {
            srca: 'img/gouwuche@3x.png',
            name: '购物车',
            hrf: 'cartb.html',
            blue: '',
        }, {
            srca: 'img/dingdan@3x.png',
            name: '订单',
            hrf: 'order.html',
            blue: '',
        }, {
            srca: 'img/wode@3x.png',
            name: '我的',
            hrf: 'my.html',
            blue: '',
        }]
    } else if (param == 1) {
        tabArr = [{
            srca: 'img/shouye@3x.png',
            name: '首页',
            hrf: 'index.html',
            blue: '',
        }, {
            srca: 'img/sahngchengs@3x.png',
            name: '商城',
            hrf: 'find.html',
            blue: 'active',
        }, {
            srca: 'img/gouwuche@3x.png',
            name: '购物车',
            hrf: 'cartb.html',
            blue: '',
        }, {
            srca: 'img/dingdan@3x.png',
            name: '订单',
            hrf: 'order.html',
            blue: '',
        }, {
            srca: 'img/wode@3x.png',
            name: '我的',
            hrf: 'my.html',
            blue: '',
        }]
    } else if (param == 2) {
        tabArr = [{
            srca: 'img/shouye@3x.png',
            name: '首页',
            hrf: 'index.html',
            blue: '',
        }, {
            srca: 'img/sahngcheng@3x.png',
            name: '商城',
            hrf: 'find.html',
            blue: '',
        }, {
            srca: 'img/gouwuches@3x.png',
            name: '购物车',
            hrf: 'cartb.html',
            blue: 'active',
        }, {
            srca: 'img/dingdan@3x.png',
            name: '订单',
            hrf: 'order.html',
            blue: '',
        }, {
            srca: 'img/wode@3x.png',
            name: '我的',
            hrf: 'my.html',
            blue: '',
        }]
    } else if (param == 3) {
        tabArr = [{
            srca: 'img/shouye@3x.png',
            name: '首页',
            hrf: 'index.html',
            blue: '',
        }, {
            srca: 'img/sahngcheng@3x.png',
            name: '商城',
            hrf: 'find.html',
            blue: '',
        }, {
            srca: 'img/gouwuche@3x.png',
            name: '购物车',
            hrf: 'cartb.html',
            blue: '',
        }, {
            srca: 'img/dingdans@3x.png',
            name: '订单',
            hrf: 'order.html',
            blue: 'active',
        }, {
            srca: 'img/wode@3x.png',
            name: '我的',
            hrf: 'my.html',
            blue: '',
        }]
    } else if (param == 4) {
        tabArr = [{
            srca: 'img/shouye@3x.png',
            name: '首页',
            hrf: 'index.html',
            blue: '',
        }, {
            srca: 'img/sahngcheng@3x.png',
            name: '商城',
            hrf: 'find.html',
            blue: '',
        }, {
            srca: 'img/gouwuche@3x.png',
            name: '购物车',
            hrf: 'cartb.html',
            blue: '',
        }, {
            srca: 'img/dingdan@3x.png',
            name: '订单',
            hrf: 'order.html',
            blue: '',
        }, {
            srca: 'img/wodes@3x.png',
            name: '我的',
            hrf: 'my.html',
            blue: 'active',
        }]
    }
    var inner = '';
    var cc = document.createElement("ul");
    cc.setAttribute("class", "tabs");
    var str = '';
    for (var i = 0; i < tabArr.length; i++) {
        str += '<li class="li-tab"><a href="' + tabArr[i].hrf + '"><img src="' + tabArr[i].srca + '"> <span class=' + tabArr[i].blue + '>' + tabArr[i].name + '</span></a></li>'
    }
    cc.innerHTML = str
    document.getElementById("appTaber").appendChild(cc);
}