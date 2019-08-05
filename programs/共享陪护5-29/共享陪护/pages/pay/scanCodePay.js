const baseInfo = require("../../utils/util.js").baseInfo;
var uid = "";

var deviceNum = ""; //设备编号
var typeSataus = ""; //是否运维 0：客户端  1：运维
var payType = '';   //计费类型：0-时段计费，1-小时计费，2-按天计费

var isFrist='';  //是否首次下单
var isCard='';  //代表是否从卡包页面跳转过来的

Page({

  data: {
    dxStatus: "", //抵现状态：0-关 ，1-开（关的时候不显示）

    radioStatus: false, //单击时间
    checkboxStatus: false, //默认使用抵现
    amount_count: 0, //计算后的总额
    amount_set: 0, //初始化金额

    hfId: "", //医院费用设置ID
    integral: "", //使用积分
    cashMoney: "", //抵现金额
    yajin: "", //设备押金
    payMoney: "", //实付金额
    isYunwei: "", //是否运维:0-否，1-是
    isSuffice: "", //是否满足条件:0-否，1-是(时卡和天卡的时候直接传1就行)
    jiami: "", //加密
    jiemi: "" //解密
  },

  onLoad: function(options) {
    let _this = this;
    uid = wx.getStorageSync("userinfo").uid;

    deviceNum = options.deviceNum;
    typeSataus = options.typeSataus;
    isCard=options.isCard;
    console.log("扫码支付传入的设备编号：", options);
    _this.setData({
      typeSataus: typeSataus
    })
    _this.getData();
  },

  //获取数据
  getData: function() {
    let _this = this;
    wx.request({
      url: baseInfo + "payInfoPage",
      data: {
        "uid": uid,
        "deviceNum": deviceNum
      },
      dataType: "json",
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        console.log("--支付获取数据：--", res);
        if (res.data.errorCode == "0") {
          var datas = res.data.body;
          isFrist = datas.isFirst;
          payType=datas.type;
          _this.setData({
            payList: datas,
            dxStatus: datas.dxStatus,
            cashMoney: datas.cashMoney,
          })

          if (datas.dxStatus == '0') { //抵现设置关闭
            _this.setData({
              cashMoney: 0
            })
          }

          // setTimeout(function() {
          //   wx.navigateTo({
          //     url: "../home/home"
          //   });
          // }, 1000);

        } else {
          wx.showToast({
            icon: 'none',
            title: res.data.msg
          })
        }
      }
    })
  },

  //单击选择 时间
  clickLabel: function(e) {
    console.log("选择时间点"+JSON.stringify(e))
    let _this = this;
    let money = e.currentTarget.dataset.money;
    console.log(money)
    if (typeSataus==0){//不是运维 普通用户
      if (isCard == '1') {//代表从卡包页面跳转过来
        var count = (Number(_this.data.payList.yajin)).toFixed(2);
        _this.setData({
          amount_count: count,
          amount_set: money
        });
      } else {
        if (_this.data.radioStatus) { //选择时间后  总计金额才有数字
          if (_this.data.checkboxStatus) { //使用积分

            if (isFrist == '1') { //新用户打折

              var count = (Number(money) * 0.8 - Number(_this.data.cashMoney) + Number(_this.data.payList.yajin)).toFixed(2);
              var bcount = (Number(money) * 0.8 - Number(_this.data.cashMoney)).toFixed(2); //这个是不在时段内 只支付时段钱 不支付押金
              _this.setData({
                amount_count: count,
                amount_set: money,
                bpayMoney: bcount,
              });
            } else {  //不打折 
              var count = (Number(money) - Number(_this.data.cashMoney) + Number(_this.data.payList.yajin)).toFixed(2);
              var bcount = (Number(money) - Number(_this.data.cashMoney)).toFixed(2);//这个是不在时段内 只支付时段钱 不支付押金
              _this.setData({
                amount_count: count,
                amount_set: money,
                bpayMoney: bcount,
              });
            }

          } else { //不适用积分
            console.log("不使用积分只有一个新用户打折" + isFrist)
            if (isFrist == '1') {

              var count = (Number(money) * 0.8 + Number(_this.data.payList.yajin)).toFixed(2);
              var bcount = (Number(money) * 0.8).toFixed(2);   //这个是不在时段内 只支付时段钱 不支付押金 
              console.log("新用户优惠" + money * 0.8)
              _this.setData({
                amount_count: count,
                amount_set: money,
                bpayMoney: bcount,
              });
            } else {
              var count = (Number(money) + Number(_this.data.payList.yajin)).toFixed(2);
              _this.setData({
                amount_count: count,
                amount_set: money,
                bpayMoney: money,
              });
            }


          }
        }
      }
    } else if (typeSataus==1){//运维 扫码代开没有打折没有积分
      _this.setData({
        amount_count: money,
       
      });
    }

    console.log(money)
  },

  //单选按钮
  radioChange: function(e) {
    let _this = this;
    _this.setData({
      hfId: e.detail.value,
      radioStatus: true
    });
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  //复选按钮--积分用
  checkboxChange: function(e) {
    let _this = this;

    _this.setData({
      checkboxStatus: !_this.data.checkboxStatus,
    });
    if (isCard == '1') {//代表从卡包页面跳转过来
      var count = (Number(_this.data.payList.yajin)).toFixed(2);
      _this.setData({
        amount_count: count,
        amount_set: money
      });
    }else{
      if (_this.data.radioStatus) {
        if (_this.data.checkboxStatus) {
          let count = (Number(_this.data.amount_set) - Number(_this.data.cashMoney) + Number(_this.data.payList.yajin)).toFixed(2);
          var bcount = (Number(_this.data.amount_set) - Number(_this.data.cashMoney)).toFixed(2); //这个是不在时段内 只支付时段钱 不支付押金
          _this.setData({
            amount_count: count,
            bpayMoney:bcount
          });
        } else {
          let count = (Number(_this.data.amount_set) + Number(_this.data.payList.yajin)).toFixed(2);
         // let bcount = (Number(_this.data.amount_set) ).toFixed(2);
          _this.setData({
            amount_count: count,
            bpayMoney: _this.data.amount_set
          });
        }
      }
    }
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    console.log(_this.data.checkboxStatus);


  },


  //立即下单
  openpaymentPay: function() {
    let _this = this;
    let isUse = "";
    let integral = "";
    let cashMoney = "";
    let isSuffice = "";

    if (_this.data.checkboxStatus) { //使用积分抵现
      isUse = 1;
      integral = _this.data.payList.integral;
      cashMoney = _this.data.cashMoney;
    } else { //不使用
      isUse = 0;
      integral = "";
      cashMoney = "";
    }

    //计费类型：0-时段计费，1-小时计费，2-按天计费
    if (_this.data.payList.type == '0') { //时段卡
      isSuffice = 1;
    } else { //小时、天卡
      isSuffice = 1;
    }
    console.log("医院费用设置ID:", _this.data.hfId);
    // console.log("是否使用积分抵现金额:", isUse);
    // console.log("使用积分:", integral);
    // console.log("抵现金额:", cashMoney);

    // console.log("设备押金:", _this.data.payList.yajin);
    // console.log("实付金额:", _this.data.amount_count);
    // console.log("是否运维:", typeSataus);
    // console.log("是否满足条件:", isSuffice);
    if (typeSataus==1){
      isUse=0;
      integral=0;
      cashMoney=0;
      _this.data.payList.yajin="";
      _this.data.bpayMoney = _this.data.amount_count;
   }
    console.log("这个是在时段内的" + _this.data.amount_count + "这个不是在时段内的钱" + _this.data.bpayMoney)
    if (_this.data.radioStatus) {
      wx.request({
        url: baseInfo + "submitOrder",
        data: {
          "uid": uid, //用户ID
          "deviceNum": deviceNum, //设备编号
          "hfId": _this.data.hfId, //医院费用设置ID
          "isUse": isUse, //是否使用积分抵现金额：0-否，1-是
          "integral": integral, //使用积分
          "cashMoney": cashMoney, //抵现金额
          "yajin": _this.data.payList.yajin, //设备押金
          "payMoney": _this.data.amount_count, //实付金额
          "bpayMoney": _this.data.bpayMoney, //这个是没有押金的实付金额
          "isYunwei": typeSataus, //是否运维:0-否，1-是
          "isSuffice": isSuffice //是否满足条件:0-否，1-是(时卡和天卡的时候直接传1就行)
        },
        dataType: "json",
        header: {
          'content-type': 'application/json'
        },
        success: function(res) {
          console.log("--立即下单：--", res);
          if (res.data.errorCode == "0") {
            let datas = res.data.body;

            let orderId = datas.orderId; //订单ID
            // let orderId = "123455501"; //订单ID
            let balance = datas.balance; //账户余额
            let isSuffice_ = datas.isSuffice; //是否在时段内
            if (isSuffice_=='0'){
              // wx.showToast({
              //   icon: 'none',
              //   title: '当前时间不是设备使用时间范围内~'
              // })
              console.log("时间段", _this.data.payList.zwTimeSlot, _this.data.payList.wsTimeSlot)
              // + res.body.zwTimeSlot + res.body.wsTimeSlot
              if (typeof (_this.data.payList.zwTimeSlot) =='undefined' ){
                _this.data.payList.zwTimeSlot==''
              }
              if (typeof (_this.data.payList.wsTimeSlot) == 'undefined') {
                _this.data.payList.wsTimeSlot == ''
              }
              wx.showModal({
                title: '开锁提示',
                content: "当前时间段不支持开启，是否确认开锁。支持时段" + _this.data.payList.zwTimeSlot+'-'+ _this.data.payList.wsTimeSlot,
                success: function (res) {
                  if (res.confirm) {
                    wx.redirectTo({
                      url: "./paymentPay?orderId=" + orderId + "&balance=" + balance + "&payMoney=" + _this.data.bpayMoney + "&payType=1" + '&isSuffice=0' + '&typeSataus=' + typeSataus
                    });
                  } else {
                    console.log('用户点击取消')
                  }
                }
              })
            }else{
              wx.showToast({
                icon: 'none',
                title: res.data.msg
              })

              setTimeout(function () {
                wx.redirectTo({
                  url: "./paymentPay?orderId=" + orderId + "&balance=" + balance + "&payMoney=" + _this.data.amount_count + "&payType=" + payType + '&isSuffice=1' + '&typeSataus=' + typeSataus
                });
              }, 1000);
            }
            // let balance = 800; //账户余额

           

          } else {
            wx.showToast({
              icon: 'none',
              title: res.data.msg
            })
          }
        }
      })
    } else {
      wx.showToast({
        icon: 'none',
        title: "请选择时间套餐"
      })
    }

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

  },
 


})