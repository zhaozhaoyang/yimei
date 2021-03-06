const baseInfo = require("../../utils/util.js").baseInfo;
var uid = "";

var deviceNum = ""; //设备编号

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
var data_jia = ""; //加密后的数据
var data_jie = ""; //解密后的数据
var data_token = "";

var return_jia = ""; //加密接口返回的值

var hex_guan = "";//关锁指令
var hex_dian = "";//获取电量
var hex_kg="";//获取锁的状态
var data_jiazt=""//获取锁状态加密的数据
var strone = "";//这个是磁铁的状态
var two ="";  //这个是锁的状态
var sfkaisuo="";//是否关锁了
var sou_ly = "0";//搜索蓝牙判断条件
var dian_jie=""//需要加密指令
var search_lany = ""//搜索蓝牙 判断蓝牙监听是否走了没
/**蓝牙锁专用结束 */

Page({

  data: {
    laveEle: "", //设备电量
    shows: true,
    sha:'',
    shayy:false,
    device_Ids:''
  },
  
  onLoad: function(options) {
    let _this = this;
    
    uid = wx.getStorageSync("userinfo").uid;
    deviceNum = options.deviceNum;

    console.log("扫码关锁传入的设备编号：", options);
  //初始化一下获取token的指令（之前被开锁的数据污染了）
    data_data = "060101012C2C62582667426601333141"; //第一次加密用
    _this.getData();
    
  },
  //初始化蓝牙并关锁
  //确认关锁
  submit: function () {
    let _this = this;
    _this.setData({
      shows: false
    })
    // _this.getData();
    console.log("点击了关锁按钮--设备号为:", deviceNum, "id为=", device_Id)
    console.log(_this.setData.deviceNumInfo)
    _this.openadapter();//初始化蓝牙
  },
//点击取消强制关闭小程序
  qx_tk:function(){
  let _this=this;
  _this.setData({
    shayy:false
  })
  },

 //关闭订单的接口
  submits: function() {
    let _this = this;
    wx.request({
      url: baseInfo + "saveCloseLock",
      data: {
        "uid": uid,
        "deviceNum": deviceNum,
        "laveEle": _this.data.laveEle //剩余电量
      },
      dataType: "json",
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        console.log("--确认关锁：--", res);
        console.log("确认关锁请求状态："+res.data.errorCode);
        if (res.data.errorCode == "0") {
          var datas = res.data.body;
          // wx.showToast({
          //   icon: 'none',
          //   title: "关锁成功"
          // })
          wx.showModal({
            title:"提示",
            content:"关锁成功",
            showCancel:false,
            confirmColor:'#1197f6',
            success(res){
              if(res.confirm){
                wx.reLaunch({
                  url: '../home/home',
                })
              } 
            }
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



  //获取数据
  getData: function() {
    let _this = this;

    wx.request({
      url: baseInfo + "closeLockInfo",
      data: {
        "deviceNum": deviceNum
      },
      dataType: "json",
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        console.log("--关锁设备数据：--", res);
        if (res.data.errorCode == "0") {
          var datas = res.data.body;
          device_Id = datas.macAddr; //0C:1C:57:AC:1D:A0
          _this.setData({
            deviceNumInfo: datas
          });
          
        } else {
          wx.showToast({
            icon: 'none',
            title: res.data.msg
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
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

  },
  /** 蓝牙相关处理开始*/

  //1.0 初始化蓝牙
  openadapter: function () {
    var _this = this;
    wx.openBluetoothAdapter({
      success: function (res) {
        console.log("1.0 初始化蓝牙成功:")
        console.log(res);
        setTimeout(function () {
          _this.getdevice();
        }, 1000);
      }, fail: function (res) {
        
        _this.setData({
          shows: true,
          sha: '初始化蓝牙失败',
          shayy:true,
        })
        // wx.showToast({
        //   title: '初始化蓝牙失败',
        //   icon: "none",
        //   duration: 3000
        // })
      }
    })
  },


  //1.1 开始搜索
  opendiscovery: function () {
    var _this = this;
    console.log("走开始搜索前")
    _this.getdevice();
  },
  //1.2 获取设备
  getdevice: function () {
    var _this = this;
    var mac_id = device_Id.replace(/:/g, ""); //0C1C57AC1DA0
    let isFind = 0;
    wx.startBluetoothDevicesDiscovery({
      services: ['FEE7'],
      success(res) {
        console.log("开始搜寻附近的蓝牙外围设备")
        wx.onBluetoothDeviceFound(function (res) {
          console.log("搜索到的所有设备：" + JSON.stringify(res));
          let devices = res.devices;
          let advertisData = devices[0].advertisData;
          let data = _this.arrayBufferToHexString(advertisData);//二进制转字符串01020C1C57AC1DA0
          if (!!data && data.indexOf(mac_id) > -1) { //查找是否存在该设备
            console.log("找到了匹配的相关设备");
            isFind = 1;
            _this.setData({
              device_Ids: devices[0].deviceId//90F577B0-1E9F-F35B-C50A-399A4BC5C6B2
            })
            console.log(device_Id,data)
            _this.connecteddevice();
            console.log("停止蓝牙搜索")
            setTimeout(function () {
              wx.stopBluetoothDevicesDiscovery({
                success: function (res) { }
              })
            }, 5000);
          }
        });
      },
      fail(res) {
        console.log("失败"+res);
        _this.setData({
          shows: true,
          sha: '搜索蓝牙失败',
          shayy: true,
        }) 
      },
      complete(res) {
        console.log("这个是监听1" + res)
        setTimeout(function () {
          if (isFind == 0) {
            console.log("这个是监听2" + res)
            wx.closeBluetoothAdapter({
              success(res) {
                _this.setData({
                  shows: true,
                  sha: '搜索蓝牙失败',
                  shayy: true,
                }) 
              },
              fail(res) {
              }
            })
          }
        }, 10000);
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
    console.log('开始链接设备');
    var _this = this;
    let device_Ids = _this.data.device_Ids
    console.log('连接的设备mac:' + device_Ids);
    wx.createBLEConnection({
      deviceId: device_Ids + "", //90F577B0-1E9F-F35B-C50A-399A4BC5C6B2
      success: function (res_) {
        console.log("1.0 连接设备成功");
        console.log(res_);
        _this.getservice();
      }, fail: function (res_) {// 连接蓝牙失败
        _this.setData({
          shows: true,
          sha: '连接蓝牙失败',
          shayy: true,
        })  
      }
    })
  },


  //3.0 获取服务--所有服务集合

  getservice: function () {
    var _this = this;
    let device_Ids = _this.data.device_Ids
    wx.getBLEDeviceServices({
      deviceId: device_Ids,
      success: function (res) {
        console.log("3.0 获取服务--所有服务集合");
        console.log(res);
        _this.getcharacteristics();
      }
    })
  },

  //4.0 获取特征值
  getcharacteristics: function () {
    var _this = this;
    let device_Ids = _this.data.device_Ids
    wx.getBLEDeviceCharacteristics({
      deviceId: device_Ids,
      serviceId: service_Id,
      success: function (res) {
        console.log("4.0 获取特征值成功:");
        console.log(res);
        _this.startnotify();
        //获取令牌
        _this.senddata();

      }
    })
  },

  //5.0 开启notify
  startnotify: function () {
    var _this = this;
    let device_Ids = _this.data.device_Ids
    wx.notifyBLECharacteristicValueChange({
      state: true,
      deviceId: device_Ids,
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

        //C617C84ED677219809A9FB9C88D8A1B6
        wx.onBLECharacteristicValueChange(function (res) {
          console.log("5.1 监听蓝牙发送过来的值");
          console.log(res);
          console.log("这个一直是监听蓝牙返回的值"+ab2hex(res.value));

          //获取蓝牙响应的数据
          get_Data = ab2hex(res.value).slice(0,32);
          _this.startwrite();
        })
      }
    })
  },


  //6.1 将蓝牙响应的数据 发送给后台进行解密
  senddata: function () {
    var _this = this;
    _this.senddatapop(data_data);
  },


  senddatapop: function (data_data) {
    let _this = this;

    wx.request({
      url: "https://xcx.zhiyunw.com/zhiyunpeihu/service/getEncrypt",
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
          data_jia = datas;
          // _this.setData({
          //   data_jia: datas
          // });

          console.log("加密后的数据：");
          console.log(datas);
          //开始获取令牌并执行加密关锁
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

  //6.0 写入数据 获取token
  startwrite: function () {
    let _this = this;

    // _this.getJiami();

    // let hex = "CAFB4AC988966A676339FE490705B1F9";

    let hex = data_jia;

    let typedArray = new Uint8Array(hex.match(/[\da-f]{2}/gi).map(function (h) {
      return parseInt(h, 16)
    }))

    let buffer = typedArray.buffer;
    let device_Ids = _this.data.device_Ids

    wx.writeBLECharacteristicValue({
      deviceId: device_Ids,
      serviceId: service_Id,
      characteristicId: writeCharacteristicId,
      value: buffer,
      success: function (res) {
        console.log("9.0 写入数据成功:")
        console.log(res);
        //开始进行解密令牌以及加密关锁操作
        _this.getdata_token();
      }
    })

  },

  getdata_token: function () {
    let _this = this;
    _this.getdatapop_token(get_Data);
  },
 //这里主要是关锁 所以只要一个
  //6.2 获取后台解密后的数据token
  getdatapop_token: function (get_Data) {
    let _this = this;
    wx.request({
      url: "https://xcx.zhiyunw.com/zhiyunpeihu/service/getDecrypt",
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
          let str = datas.slice(6, 14);
          data_token = str;
          let hex = "050106303030303030" + str + "5E2636";

          // hex_guan = "050C0101303030303030" + str + "5E26";
          //0100010035274ADE
          hex_guan = "050C0101" + str + "0100010035274ADE";
          hex_dian = "02010101" + str + "0100010035274ADE";//查询电量指令
          hex_kg = "050E0101" + str + "0100010035274ADE";//这个是检查锁的状态
           //这个是发关锁的指令
          console.log("解密后的数据");
          console.log(datas);
          //这个是锁的状态
          console.log("要去加密锁的状态" + data_data)
          
          //获取电量
         _this.dian_mi(hex_dian);
        } else {
          wx.showToast({
            icon: 'none',
            title: res.data.msg
          })
        }
      }
    })
  },
  //标准关锁  关锁前先把关锁指令加密
  doCloseSuo: function (data_data) {
    let _this = this;
    console.log("准备加密关锁指令");
    wx.request({
      url: "https://xcx.zhiyunw.com/zhiyunpeihu/service/getEncrypt",
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
          data_jia = datas;
          // _this.setData({
          //   data_jia: datas
          // });

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

  //8.0 关锁
  startread: function () {

    let _this = this;

    console.log("关锁打印的token值" + hex_guan);
    console.log(data_jia);

    let hex = data_jia;

    let typedArray = new Uint8Array(hex.match(/[\da-f]{2}/gi).map(function (h) {
      return parseInt(h, 16)
    }))

    let buffer = typedArray.buffer;
    let device_Ids = _this.data.device_Ids

    wx.writeBLECharacteristicValue({
      deviceId: device_Ids,
      serviceId: service_Id,
      characteristicId: writeCharacteristicId,
      value: buffer,
      success: function (res) {
        //获取状态
        _this.getdatapop(get_Data);
        setTimeout(function () {
          console.log("开锁状态（锁是否开）"+sfkaisuo)
          if (sfkaisuo=='01'){
              wx.closeBLEConnection({//开锁成功之后关闭连接
                deviceId: device_Ids + "",
                success(res) {
                  _this.setData({
                    shows: true
                  })
                  wx.reLaunch({
                    url: '../home/home',
                  })
                  console.log("开锁成功之后断开链接成功");
                }
              })
            wx.closeBluetoothAdapter({
              success(res) {
              },
              fail(res) {
              }
            })
            _this.submits();
          }else{
            // wx.showToast({
            //   title: '关锁失败',
            //   icon: "none",
            //   duration: 3000
            // })
            _this.setData({
              shows: true,
              sha: '关锁失败',
              shayy: true,
            })  
            console.log("关锁失败")
            setTimeout(function () {
              wx.closeBLEConnection({//开锁成功之后关闭连接
                deviceId: device_Ids + "",
                success(res) {
                  _this.setData({
                    shows: true
                  })
                  console.log("开锁成功之后断开链接成功");
                }
              })
              wx.closeBluetoothAdapter({
                success(res) {
                },
                fail(res) {
                }
              })
            }, 2000)
          }
        }, 3000)
        
      }, fail: function (res) {
        console.log(res);
        //获取状态
        
      }
    })

  },

  getdatas: function () {
    let _this = this;
    console.log("这个是调状态蓝牙的值"+get_Data)
    _this.getdatapop(get_Data);
  },

  //6.2 获取后台解密后的数据
  getdatapop: function (get_Data) {
    let _this = this;
    wx.request({
      url: "https://xcx.zhiyunw.com/zhiyunpeihu/service/getDecrypt",
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
          console.log("解密后的数据状态解密" + datas); 
          sfkaisuo = datas.slice(6, 8)
           strone = datas.slice(6, 8);
           two = datas.slice(8, 10);
          console.log(strone, two, sfkaisuo);
        } else {
          wx.showToast({
            icon: 'none',
            title: res.data.msg
          })
        }
      }
    })
  },

  //8.1这个是获取状态指令前的加密
  huoqzl: function (data_data) {
    let _this = this;
    console.log("准备加密关锁指令" + data_data);
    wx.request({
      url: "https://xcx.zhiyunw.com/zhiyunpeihu/service/getEncrypt",
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
          data_jiazt = datas;
          console.log("关锁指令已加密");
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


  //8.2 锁的状态
  getStatus: function () {

    let _this = this;

    console.log("这个是获得锁的状态的指令" + data_data);

    let hex = data_jiazt;

    let typedArray = new Uint8Array(hex.match(/[\da-f]{2}/gi).map(function (h) {
      return parseInt(h, 16)
    }))

    let buffer = typedArray.buffer;
    let device_Ids = _this.data.device_Ids

    wx.writeBLECharacteristicValue({
      deviceId: device_Ids,
      serviceId: service_Id,
      characteristicId: writeCharacteristicId,
      value: buffer,
      success: function (res) {
        console.log("9.1 获取状态成功:")
        console.log(res)
        console.log("这是要解密锁状态的值" + get_Data)
        _this.getdatapop(get_Data)
        //判断磁铁位置
        setTimeout(function () {
          _this.setData({
            shows:true
          })
        if (strone == '00' ) {
          console.log("您没有关锁")
          wx.showToast({
            title: '关锁失败,请将设备关紧后重试',
            icon: "none",
            duration: 3000
          })
          _this.setData({
            shows: true
          })
            wx.closeBLEConnection({//开锁成功之后关闭连接
              deviceId: device_Ids,
              success(res) {
                _this.setData({
                  shows: true
                })
                data_data = "060101012C2C62582667426601333141"; //第一次加密用
                console.log("开锁成功之后断开链接成功");
              }
            })
          wx.closeBluetoothAdapter({
            success(res) {
            },
            fail(res) {
            }
          })
         
        } else if (strone == '01') {
          if (two == '00') {
            console.log("还是没有关")
            //执行加密关锁
            _this.doCloseSuo(hex_guan);
          } else {
            //关锁了
            setTimeout(function () {
              wx.closeBLEConnection({//开锁成功之后关闭连接
                deviceId: device_Ids + "",
                success(res) {
                  _this.setData({
                    shows: true
                  })
                  wx.reLaunch({
                    url: '../home/home',
                  })
                  console.log("开锁成功之后断开链接成功");
                }
              })
              wx.closeBluetoothAdapter({
                success(res) {
                },
                fail(res) {
                }
              })
            }, 3000)
            _this.submits();
          }
        }
        }, 3000)
      
      }
    })

  },
  //获取电量第一步先加密
  dian_mi:function(mi){
    let _this = this;
    console.log("准备加密获取电量指令" + mi);
    wx.request({
      url: "https://xcx.zhiyunw.com/zhiyunpeihu/service/getEncrypt",
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
          let datas = res.data.body.encrypt;
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
    console.log("这个是获得锁的状态的指令" + dian_jie);
    let hex = dian_jie; //赋值解密
    let typedArray = new Uint8Array(hex.match(/[\da-f]{2}/gi).map(function (h) {
      return parseInt(h, 16)
    }))
    let buffer = typedArray.buffer;
    let device_Ids = _this.data.device_Ids

    wx.writeBLECharacteristicValue({
      deviceId: device_Ids,
      serviceId: service_Id,
      characteristicId: writeCharacteristicId,
      value: buffer,
      success: function (res) {
       setTimeout(function(){
         _this.dian_getdatapop(get_Data)
       },2000)
  
      }
    })

  },

  dian_getdatapop: function (get_Data) {
    let _this = this;
    wx.request({
      url: "https://xcx.zhiyunw.com/zhiyunpeihu/service/getDecrypt",
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
          console.log("获取电量解密数据"+datas)
         var dianliang=datas.slice(6, 8);
          console.log(dianliang)
         //这个是电量
         _this.setData({
           laveEle:dianliang
         })
         // 磁铁状态
          _this.huoqzl(hex_kg);
          console.log(hex_kg)
        } else {
          wx.showToast({
            icon: 'none',
            title: res.data.msg
          })
        }
      }
    })
  },
  //获取fromid
  gorRunnerLobby: function (e) {
    console.log(e);
    var that = this;
    // that.setData({
    //   fid: e.detail.formId
    // })
    this.formid(e.detail.formId)

  },

  formid: function (id) {
    var that = this;
    console.log(id)
    // console.log(that.data.fid)
    wx.request({
      url: baseInfo + "saveFormID",
      method: "get",
      data: {
        "uid": uid, //用户ID
        "formId": id //提交formid 用于推送
      },
      dataType: "json",
      header: {
        'Content-Type': 'application/json',
      },
      success: function (datas) {
        console.log(datas);
        if (datas.data.errorCode == "0") {


        } else {
          wx.showToast({
            icon: 'none',
            title: datas.resultNote
          })
        }
      }
    })
  },


})