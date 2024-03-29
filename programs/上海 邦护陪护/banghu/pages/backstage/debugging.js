// pages/backstage/debugging.js
const baseInfo = require("../../utils/util.js").baseInfo;
var uid = "";
//var macAddr="";//mac
/**以下为蓝牙锁专用 开始 */
var device_Id = ""; //34:03:DE:4D:9A:C8   advertisServiceUUIDs: 0000FEE7-0000-1000-8000-00805F9B34FB
var service_Id = "0000FEE7-0000-1000-8000-00805F9B34FB";
var writeServiceId = ""; // 可写服务uuid
var writeCharacteristicId = "000036F5-0000-1000-8000-00805F9B34FB"; // 可写特征值uuid  
var notifyServiceId = ""; // 通知服务uuid
var notifyCharacteristicId = "000036F6-0000-1000-8000-00805F9B34FB"; // 通知特征值uuid
// var get_Data_jia = "060101012C2C62582667426601333141"; //获取token时 请求加密的数据
var get_Data = ""; //获取蓝牙发送的信息

//----------------------------------------------------------------------------------------------------
var characteristicId = []; //可以接收 蓝牙信息 read：true  write：true  notify：false
var characteristicId2 = []; //发送信息 开启推送 read：false  write：true  notify：true

var readServiceId = ""; // 可读服务uuid
var readCharacteristicId = "000036F6-0000-1000-8000-00805F9B34FB"; // 可读特征值uuid    

var readServiceId2 = "00001800-0000-1000-8000-00805F9B34FB"; // 可读服务uuid
var readCharacteristicId2 = "00002A02-0000-1000-8000-00805F9B34FB"; // 可读特征值uuid   

var data_data = "060101012C2C62582667426601333141"; //第一次加密用
var data_jia = ""; //获取token加密后的数据
var data_jias = ""; //开锁加密后的数据
var data_jiag = ""; //关锁加密后的数据
var data_jie = ""; //解密后的数据
var data_token = "";

var return_jia = ""; //加密接口返回的值

var hex_guan = ""; //关锁指令
var hex_dian = "";//锁的电量
var hex_kg = "";//锁的状态指令
var data_jiazt = "";
var kaisuozt = "";//锁的状态
var kfNum = 0;//搜索蓝牙判断条件
var kaiorg="";//下面按钮时开锁还是关锁 0是开锁 1是关锁
var sfkaisuo = "" //这是开锁
var strone = ""; //关锁磁铁获取的状态
var two ="" //g关锁获取的状态
var dian_jie = ""//需要加密指令


/**蓝牙锁专用结束 */
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shows: true,
    kaiorg:kaiorg
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let _this = this;
    kfNum = 0;
    uid = wx.getStorageSync("userinfo").uid;
    _this.setData({
      bianhao:options.info
    })
    console.log(_this.data.bianhao);
    _this.getData();
  },

  //获取数据
  getData:function(){
    let _this = this;

    wx.request({
      url: baseInfo + "deviceInfo",
      data: {
        "deviceNum":_this.data.bianhao,
        "type":"0"
      },
      dataType: "json",
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res)
        if (res.data.errorCode == "0") {
          device_Id = res.data.body.macAddr;
          if (res.data.body.tsStatus==0){
            kaiorg=1;
          } else if (res.data.body.tsStatus == 1){
            kaiorg = 0;
          }
         // kaiorg = res.data.body.tsStatus
          console.log(kaiorg)
          _this.setData({
            datas: res.data.body,
            kaiorg: kaiorg
          });
          console.log("这个是判断开关锁按钮" + kaiorg, _this.data.kaiorg)
        } else {
          wx.showToast({
            icon: 'none',
            title: res.data.msg
          })
        }
      }
    })
  },


  //开锁
  openkai: function() {
    let _this = this;

    wx.request({
      url: baseInfo + "saveOpenLock",
      data: {
        "uid": uid,
        "deviceNum": _this.data.bianhao //编号
      },
      dataType: "json",
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        if (res.data.errorCode == "0") {
          var datas = res.data.body;
          kaiorg="1";
          _this.setData({
            kaiorg: kaiorg,
            shows: true,
          })


        } else {
          wx.showToast({
            icon: 'none',
            title: res.data.msg
          })
        }
      }
    })
  },


  //点击开锁
  openkaione:function(){
    var _this=this;
    _this.setData({
      shows:false
    })
    _this.openadapter();
  },

  //关锁流程1
  openkaig: function () {
    var _this = this;
    //这个是先加密 获取状态
    console.log("这个是获取锁的状态指令" + hex_kg)
    _this.setData({
      shows: false
    })
    _this.openadapter();
  },

  //关锁的接口
  submits: function () {
    let _this = this;
    console.log(_this.data.laveEle)
    wx.request({
      url: baseInfo + "tsCloseLock",
      data: {
        "uid": uid,
        "deviceNum": _this.data.bianhao,
        "laveEle": _this.data.laveEle //剩余电量
      },
      dataType: "json",
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        if (res.data.errorCode == "0") {
          console.log("上传数据成功");
          var datas = res.data.body;
          wx.showToast({
            icon: 'none',
            title: "关锁成功"
          })
          wx.reLaunch({
            url: '../backstage/backstage',
          })

        } else {
          wx.showToast({
            icon: 'none',
            title: res.data.msg
          })
        }
      },
      fail:function(res){
        console.log("上传数据失败");
      }
    })
  },


  //1.0 初始化蓝牙
  openadapter: function () {
    var _this = this;

    wx.openBluetoothAdapter({
      success: function (res) {
        console.log("1.0 初始化蓝牙成功:")
        console.log(res);
        _this.opendiscovery();  //1.1 开始搜索
        //  setTimeout(function () {
        //     console.log("停止蓝牙搜索")
        //     wx.stopBluetoothDevicesDiscovery({
        //       success: function (res) {
        //       }
        //     })
        //   }, 5000);
      },
      fail:function(res){
        //这里需要给用户一个提示，然后退出页面
        wx.showToast({
          icon: 'none',
          title: "初始化蓝牙失败"
        })
        wx.reLaunch({
          url: '../backstage/backstage',
        })
      }
    })
  },
  //1.1 开始搜索
  opendiscovery: function () {
    var _this = this;
    _this.getdevice();
  },
  //1.2 获取设备
  getdevice: function () {
    console.log("这个走了几次获取设备")
    var _this = this;
    wx.startBluetoothDevicesDiscovery({
      services: ['FEE7'],
      success(res) {
        wx.onBluetoothDeviceFound(res => {
           //onBluetoothDeviceFound
          console.log("-------------:" + JSON.stringify(res));
          var devices = res.devices;
          for (let i = 0; i < devices.length; i++) {
            let advertisData = devices[i].advertisData;
            var data = _this.arrayBufferToHexString(advertisData);//二进制转字符串
            console.log("这个是搜索到的mac数据"+data)
            console.log("这个是mac" + device_Id.replace(/:/g, ""))
            var mac_id = device_Id.replace(/:/g, "")
            console.log(!!data)
            if (!!data && data.indexOf(mac_id) > -1) {
              console.log("find");
              device_Id = devices[i].deviceId;
              _this.connecteddevice();
         
                console.log("停止蓝牙搜索")
                wx.stopBluetoothDevicesDiscovery({
                  success: function (res) {

                  }
                })
         
            }
          }
        });
      },
      fail(res) {
       
        console.log(res);
      }
    });
  },
  //把二进制转成字符串
  arrayBufferToHexString: function (buffer) {
    let bufferType = Object.prototype.toString.call(buffer)
    if (buffer != '[object ArrayBuffer]') {
      return
    }
    let dataView = new DataView(buffer)

    var hexStr = '';
    for (var i = 0; i < dataView.byteLength; i++) {
      var str = dataView.getUint8(i);
      var hex = (str & 0xff).toString(16);
      hex = (hex.length === 1) ? '0' + hex : hex;
      hexStr += hex;
    }
    console.log("================:" + hexStr.toUpperCase());
    return hexStr.toUpperCase();
  },

  //2.0 连接设备
  connecteddevice: function () {
    console.log('2.0开始链接设备');
    var _this = this;
    console.log('连接的设备mac:' + device_Id);
    wx.createBLEConnection({
      deviceId: device_Id + "",
      success: function (res_) {
        console.log("2.1 连接设备成功");
        console.log(res_);
        _this.getservice();
      }, fail: function (res_) {// 连接蓝牙失败
       wx.showToast({
          title: '连接蓝牙失败',
          icon: "none",
          duration: 2000
        })
        _this.setData({
          shows: true
        })
        wx.closeBluetoothAdapter({
          success(res) {
            console.log("");
          },
          fail(res) {
          }
        })
        console.log("蓝牙创建链接失败1：" + JSON.stringify(res_));
        // if (res_.errCode == -1) {//说明已经连接
        //   wx.closeBLEConnection({//先关闭连接然后在创建连接
        //     deviceId: device_Id + "",
        //     success(res) {
        //       console.log("断开链接成功");
        //       wx.createBLEConnection({
        //         deviceId: device_Id + "",
        //         success: function (res_) {
        //           console.log("1.0 连接设备成功");
        //           console.log(res_);
        //           _this.getservice();
        //         }, fail: function (res_) {// 连接蓝牙失败
        //           wx.showToast({
        //             title: '连接蓝牙失败，请联系管理员退款',
        //             icon: "none",
        //             duration: 2000
        //           })
        //           _this.setData({
        //             shows: true
        //           })
        //           console.log("蓝牙创建链接失败1：" + JSON.stringify(res_));
        //         }
        //       })
        //     }
        //   })
        // }
      }
    })
  },

  //3.0 获取服务--所有服务集合
  getservice: function () {
    var _this = this;
    wx.getBLEDeviceServices({
      deviceId: device_Id,
      success: function (res) {
        console.log("3.0 获取服务--所有服务集合");
        console.log(res);
        _this.getcharacteristics_ks();
      }
    })
  },

  //4.0 获取特征值 开锁专用
  getcharacteristics_ks: function () {
    var _this = this;
    wx.getBLEDeviceCharacteristics({
      deviceId: device_Id,
      serviceId: service_Id,
      success: function (res) {
        console.log("4.0 获取特征值成功:");
        console.log(res);
        _this.startnotify();
        //获取令牌
        setTimeout(function () {
          _this.senddata();
        }, 2000);
      

      }
    })
  },

  //5.0 开启notify
  startnotify: function () {
    var _this = this;
    wx.notifyBLECharacteristicValueChange({
      state: true,
      deviceId: device_Id,
      serviceId: service_Id,
      characteristicId: notifyCharacteristicId,
      success: function (res) {
        console.log("5.0 开启notify成功:")
        console.log(res);

        function ab2hex(buffer) {
          var hexArr = Array.prototype.map.call(
            new Uint8Array(buffer),
            function (bit) {
              return ('00' + bit.toString(16)).slice(-2)
            }
          )
          return hexArr.join('');
        }
        wx.onBLECharacteristicValueChange(function (res) {
          console.log("5.1 监听蓝牙发送过来的值");
          console.log(res);
          console.log(ab2hex(res.value));
          kfNum++;
          console.log("kfNum =========" + kfNum);
          //获取蓝牙响应的数据    开锁=2， 关锁=11，获取电量=21, 获取锁的状态=31
          get_Data = ab2hex(res.value);

          if (kfNum == 2 || kfNum == 11 || kfNum == 31){
            _this.getdatapop(get_Data);
          }

          if(kfNum == 21){
            _this.dian_getdatapop(get_Data);
          }

        })
      }
    })
  },

  //6.1 将蓝牙响应的数据 发送给后台进行解密
  senddata: function () {
    var _this = this;
    _this.senddatapop(data_data);
  },

  // 6.2获取token前加密获取token指令接口
  senddatapop: function (data_data) {
    let _this = this;
    wx.request({
      url: baseInfo+"getEncrypt",
      data: {
        "hexString": data_data
      },
      dataType: "json",
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        if (res.data.errorCode == "0") {
          var datas = res.data.body.encrypt;
          data_jia = datas;
          console.log("加密后的数据：");
          console.log(datas);
          //开始获取token
          _this.startwrite();

        } else {
          wx.showToast({
            icon: 'none',
            title: res.data.msg
          })
        }
      },
      fail: function (res) {
        console.log(res);
      }
    })
  },  
  //6.3 写入数据，获取token
  startwrite: function () {
    let _this = this;
    let hex = data_jia;

    let typedArray = new Uint8Array(hex.match(/[\da-f]{2}/gi).map(function (h) {
      return parseInt(h, 16)
    }))

    let buffer = typedArray.buffer;

    wx.writeBLECharacteristicValue({
      deviceId: device_Id,
      serviceId: service_Id,
      characteristicId: writeCharacteristicId,
      value: buffer,
      success: function (res) {
        console.log("获取token成功:")
        console.log(res);
        //执行令牌解密以及开锁操作
        _this.getdatapop_token(get_Data);
      }
    })

  },

  //6.4 获取后台解密后的数据
  getdatapop_token: function (get_Data) {
    let _this = this;
    wx.request({
      url: baseInfo+"getDecrypt",
      data: {
        "hexString": get_Data
      },
      dataType: "json",
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log("请求成功");
        if (res.data.errorCode == "0") {
          let datas = res.data.body.decrypt;
          //截取token字符段
          let str = datas.slice(6, 14);
          data_token = str;
          let hex = "050106303030303030" + str + "5E2636";
          hex_guan = "050C0101" + str + "0100010035274ADE";
          hex_kg = "050E0101" + str + "0100010035274ADE";//这个是检查锁的状态
          //02010101
          hex_dian = "02010101" + str + "0100010035274ADE";
          data_data = hex;//这个是开锁指令

          console.log("解密后的数据");
          console.log(datas);
          //获取令牌后执行加密开锁 
          console.log("kaiorg == " + kaiorg);
          if (kaiorg=="0"){
            //开锁
            _this.doKaiSuo();
          }else if(kaiorg=="1"){
            //获取状态
            _this.huoqzl(hex_kg);
          }
         

        } else {
          wx.showToast({
            icon: 'none',
            title: res.data.msg
          })
        }
      }
    })
  },
  //7.0先加密，后开锁
  doKaiSuo: function () {
    let _this = this;
    console.log("开锁指令" + data_data)
    wx.request({
      url: baseInfo+"getEncrypt",
      data: {
        "hexString": data_data
      },
      dataType: "json",
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        // console.log("请求成功", res);
        if (res.data.errorCode == "0") {
          var datas = res.data.body.encrypt;
          data_jias = datas;

          //获取密文然后去开锁
          _this.kaisuo();
        } else {
          wx.showToast({
            icon: 'none',
            title: res.data.msg
          })
        }
      },
      fail: function (res) {
        console.log(res);
      }
    })
  },
  //8.0 开锁
  kaisuo: function () {
    let hex1 = data_jias;
    let typedArray = new Uint8Array(hex1.match(/[\da-f]{2}/gi).map(function (h) {
      return parseInt(h, 16)
    }))

    let buffer = typedArray.buffer;

    kfNum = 1;
    wx.writeBLECharacteristicValue({
      deviceId: device_Id,
      serviceId: service_Id,
      characteristicId: writeCharacteristicId,
      value: buffer,
      success: function (res) {
        console.log("开锁指令写入成功");
   
      }, fail: function (res) {
        console.log("开锁指令写入失败");
        //断开蓝牙链接
        _this.closeLine();
        //这里需要给用户一个提示，然后退出页面
        wx.showToast({
          icon: 'none',
          title: "开锁失败"
        })
        wx.reLaunch({
          url: '../backstage/backstage',
        })
      }
    })

  },



  //8.1这个是获取状态指令前的加密
  huoqzl: function (hex_kg) {
    let _this = this;
    wx.request({
      url: baseInfo+"getEncrypt",
      data: {
        "hexString": hex_kg
      },
      dataType: "json",
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        // console.log("请求成功", res);
        if (res.data.errorCode == "0") {
          var datas = res.data.body.encrypt;
          data_jiazt = datas;
          console.log("获取状态指令已加密");
          //获取密文然后去关锁
          //这个是获取状态...............................
          _this.getStatus();
        } else {
          wx.showToast({
            icon: 'none',
            title: res.data.msg
          })
        }
      },
      fail: function (res) {
        console.log(res);
      }
    })
  },

  //获取锁的状态
  getStatus: function () {

    let _this = this;
    console.log("这个是获得锁的状态的指令" + data_jiazt);
    let hex = data_jiazt;

    let typedArray = new Uint8Array(hex.match(/[\da-f]{2}/gi).map(function (h) {
      return parseInt(h, 16)
    }))

    let buffer = typedArray.buffer;
    kfNum = 30;
    wx.writeBLECharacteristicValue({
      deviceId: device_Id,
      serviceId: service_Id,
      characteristicId: writeCharacteristicId,
      value: buffer,
      success: function (res) {


      }
    })

  },

  //9.0 标准关锁  关锁前先把关锁指令加密
  doCloseSuo: function (data_data) {
    let _this = this;
    wx.request({
      url: baseInfo+"getEncrypt",
      data: {
        "hexString": data_data
      },
      dataType: "json",
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        if (res.data.errorCode == "0") {
          var datas = res.data.body.encrypt;
          data_jiag = datas;

          console.log("关锁指令已加密");
          //获取密文然后去关锁
          //这个是关锁...............................
          _this.startread();
        } else {
          wx.showToast({
            icon: 'none',
            title: res.data.msg
          })
        }
      },
      fail: function (res) {
        console.log(res);
      }
    })
  },

  //10.0 关锁
  startread: function () {

    let _this = this;

    console.log("关锁打印的token值" + hex_guan);
    console.log(data_jiag);

    let hex = data_jiag;

    let typedArray = new Uint8Array(hex.match(/[\da-f]{2}/gi).map(function (h) {
      return parseInt(h, 16)
    }))

    let buffer = typedArray.buffer;
    //需要关锁时，将kfnum状态置为10；
    kfNum = 10,
    wx.writeBLECharacteristicValue({
      deviceId: device_Id,
      serviceId: service_Id,
      characteristicId: writeCharacteristicId,
      value: buffer,
      success: function (res) {
        console.log("关锁指令写入成功");

      }, fail: function (res) {
        console.log("关锁指令写入失败");
        //这里需要给用户一个提示，然后退出页面
        wx.showToast({
          icon: 'none',
          title: "开锁失败"
        })
        wx.reLaunch({
          url: '../backstage/backstage',
        })
      }
    })

  },





  //11.0 解密蓝牙返的值 看开/关锁成功了没
  getdatapop: function (get_Data) {
    let _this = this;
    wx.request({
      url: baseInfo+"getDecrypt",
      data: {
        "hexString": get_Data
      },
      dataType: "json",
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        if (res.data.errorCode == "0") {
          let datas = res.data.body.decrypt;
          //截取token字符段
          kaisuozt = datas.slice(6, 8);
          console.log("解密后的数据" + kaisuozt);
          console.log(datas);
          sfkaisuo = datas.slice(6, 8)
          strone = datas.slice(6, 8);
          two = datas.slice(8, 10);
          console.log(strone, two, sfkaisuo);




          //开锁成功返回信息后再执行相关操作
          if(kfNum == 2){
            //断开蓝牙连接
            _this.closeLine();

            if (kaisuozt == '00') {
              console.log("开锁成功")
              data_data = "060101012C2C62582667426601333141"; //第一次加密用
              //开锁成功 生成一个订单
              _this.openkai();
            } else {
              console.log("开锁失败");
              //这里需要给用户一个提示，然后退出页面
              wx.showToast({
                icon: 'none',
                title: "开锁失败"
              })
              wx.reLaunch({
                url: '../backstage/backstage',
              })
            }

          }




          //根据返回的锁状态 判断磁铁位置
          if(kfNum == 31) {
            if (strone == '00') {  
              _this.closeLine(); //磁铁不在位置，断开蓝牙
              console.log("您没有关锁")
              wx.showToast({
                title: '关锁失败,请将柜门关紧后重试',
                icon: "none",
                duration: 2000
              })
              _this.setData({
                shows:true
              })
            } else if (strone == '01') {  //磁铁在位置
              if (two == '00') {  //锁头还没有伸出来，执行关锁指令
                console.log("还是没有关")
                //执行加密关锁
                _this.doCloseSuo(hex_guan);

              } else { //锁头已经伸出来

                //执行获取电量
                _this.dian_mi(hex_dian);

                // kaiorg = "0";
                // _this.setData({
                //   kaiorg: kaiorg
                // })
                wx.reLaunch({
                  url: '../backstage/backstage',
                })


              }
            }
          }








          //关锁成功之后的判断
          if(kfNum == 11 || kfNum==12) {

            data_data = "060101012C2C62582667426601333141";
            if (sfkaisuo == '01') {
              console.log("关锁成功");

              //执行获取电量
              _this.dian_mi(hex_dian);

              // kaiorg = "0";
              // _this.setData({
              //   kaiorg: kaiorg
              // })


            } else {
              //断开蓝牙连接
              _this.closeLine();
              console.log("关锁失败");
              wx.showToast({
                title: '关锁失败，请重试',
                icon: "none",
                duration: 2000
              })

            }
          }
 
        } else {
          wx.showToast({
            icon: 'none',
            title: res.data.msg
          })
        }
      }
    })
  },
  //获取电量第一步先加密
  dian_mi: function (mi) {
    let _this = this;
    console.log("准备加密获取电量指令" + mi);
    wx.request({
      url: baseInfo+"getEncrypt",
      data: {
        "hexString": mi
      },
      dataType: "json",
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        // console.log("请求成功", res);
        if (res.data.errorCode == "0") {
          var datas = res.data.body.encrypt;
          dian_jie = datas;//还得解密
          _this.huo_dian();
        } else {
          wx.showToast({
            icon: 'none',
            title: res.data.msg
          })
        }
      },
      fail: function (res) {
        console.log(res);
      }
    })
  },

  //8.2 锁的电量
  huo_dian: function () {
    let _this = this;
    console.log("这个是获得锁的电量的指令" + dian_jie);
    let hex = dian_jie;
    let typedArray = new Uint8Array(hex.match(/[\da-f]{2}/gi).map(function (h) {
      return parseInt(h, 16)
    }))
    let buffer = typedArray.buffer;
    kfNum = 20;
    wx.writeBLECharacteristicValue({
      deviceId: device_Id,
      serviceId: service_Id,
      characteristicId: writeCharacteristicId,
      value: buffer,
      success: function (res) {

      }
    })

  },

  dian_getdatapop: function (get_Data) {
    let _this = this;
    wx.request({
      url: baseInfo+"getDecrypt",
      data: {
        "hexString": get_Data
      },
      dataType: "json",
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {

        if (res.data.errorCode == "0") {
          let datas = res.data.body.decrypt;
          //截取token字符段
          console.log("获取电量解密数据" + datas)
          var dianliang = datas.slice(6, 8);
          //这个是电量
          _this.setData({
            laveEle: dianliang
          })
          console.log(_this.data.laveEle)
          //上传电量
          _this.submits();

        } else {
          wx.showToast({
            icon: 'none',
            title: res.data.msg
          })
        }
        //关锁成功后获取电量，然后断开蓝牙连接
        _this.closeLine();

      }
    })
  },

  //断开两个蓝牙连接封装方法
  closeLine: function () {
    let _this = this;
    console.log("进入断开链接BLEConnection" + device_Id)
    wx.closeBLEConnection({
      deviceId: device_Id,
      success(res) {
        console.log("开/关锁成功之后断开链接成功BLEConnection");
        _this.setData({
          shows: true
        })
      }
    })
    wx.closeBluetoothAdapter({
      success(res) {
        console.log("开/关锁成功之后断开链接成功BluetoothAdapter");
      },
      fail(res) {
      }
    })
  },


//蓝牙开锁结束


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})