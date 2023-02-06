// const { tabClasses } = require("@mui/material");

// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // Date
    date: '',
    dateFlag: false,

    // IP number
    IPnum: null,
    IPFlag: false,

    // High-tech field
    areaItems: [
      {value: '电子信息', name: '电子信息'},
      {value: '生物与新医药', name: '生物与新医药'},
      {value: '航空航天', name: '航空航天'},
      {value: '新材料', name: '新材料'},
      {value: '高技术服务', name: '高技术服务'},
      {value: '新能源与节能', name: '新能源与节能'},
      {value: '资源与环境', name: '资源与环境'},
      {value: '先进制造与自动化', name: '先进制造与自动化'},
    ],

    // Number of scientific and technical staff
    techGuy: null,
    techGuyFlag: null,
    // Total number of people
    allGuy: null,
    allGuyFlag: null,
    // Percentage of scientific and technical staff
    guyRatio: null,
    guyRatioFlag: false,

    // Sales revenue for the year
    thisYear: "",
    lastYear: "",
    // Sales revenue for the last year
    beforeLastYear: "",
    thisYearFlag: null,
    // Sales revenue in the year before last year
    lastYearFlag: null,
    beforeLastYearFlag: null,
    // Total sales revenue for the last three years
    threeYearSaleAggre: null,
    threeYearSaleAggreFlag: null,
    // Total R&D expenses for the last three years
    threeYearRandD: null,
    threeYearRandDFlag: null,
    inStateRandD: null,
    RandDRatio: null,
    RandDRatioFlag: false,
    inStateRatio: null,
    inStateRatioFlag: false,
  
    highTechInCome: "",
    highTechInComeFlag: null,
    highTechRatio: NaN,
    highTechFlag: NaN,

    advancedDegrees: [
      {value: JSON.stringify({"low": 7, "high": 8}), name: "高"},
      {value: JSON.stringify({"low": 5, "high": 6}), name: "较高"},
      {value: JSON.stringify({"low": 3, "high": 4}), name: "中"},
      {value: JSON.stringify({"low": 1, "high": 2}), name: "较低"},
      {value: JSON.stringify({"low": 0, "high": 0}), name: "低"},
    ],

    advancedDegree: JSON.stringify({low: 0, high: 0}),
    
    techImportances: [
      {value: JSON.stringify({low: 7, high: 8}), name: "强"},
      {value: JSON.stringify({low: 5, high: 6}), name: "较高"},
      {value: JSON.stringify({low: 3, high: 4}), name: "一般"},
      {value: JSON.stringify({low: 1, high: 2}), name: "较弱"},
      {value: JSON.stringify({low: 0, high: 0}), name: "弱"},
    ],

    techImportance: JSON.stringify({low: 0, high: 0}),

    IPNumbers: [
      {value: JSON.stringify({low: 7, high: 8}), name: "1项及以上(I类)"},
      {value: JSON.stringify({low: 5, high: 6}), name: "5项及以上(II类)"},
      {value: JSON.stringify({low: 3, high: 4}), name: "3-4项及以上(II类)"},
      {value: JSON.stringify({low: 1, high: 2}), name: "1-2项及以上(II类)"},
      {value: JSON.stringify({low: 0, high: 0}), name: "0项及以上(II类)"},
    ],

    IPNumber: JSON.stringify({low: 0, high: 0}),

    IPAcquires: [
      {value: JSON.stringify({low: 1, high: 6}), name: "有自主研发"},
      {value: JSON.stringify({low: 0, high: 0}), name: "受让受赠并购"},
    ],

    IPAcquire: JSON.stringify({low: 0, high: 0}),

    inVolvedInStandards: [
      {value: JSON.stringify({low: 1, high: 2}), name: "是"},
      {value: JSON.stringify({low: 0, high: 0}), name: "否"},
    ],

    inVolvedInStandard: JSON.stringify({low: 0, high: 0}),

    convertAbilitys: [
      {value: JSON.stringify({low: 25, high: 30}), name: "转化能力强"},
      {value: JSON.stringify({low: 19, high: 24}), name: "转化能力较强"},
      {value: JSON.stringify({low: 13, high: 18}), name: "转化能力一般"},
      {value: JSON.stringify({low: 7, high: 12}), name: "转化能力较弱"},
      {value: JSON.stringify({low: 1, high: 6}), name: "转化能力弱"},
      {value: JSON.stringify({low: 0, high: 0}), name: "转化能力无"},
    ],
    
    convertAbility: JSON.stringify({low: 0, high: 0}),

    manageAbilities: [
      {value: JSON.stringify({low: 0, high: 6}), name: "制定了企业研究开发的组织管理制度，建立了研发投入核算体系，编制了研发费用辅助账"},
      {value: JSON.stringify({low: 0, high: 6}), name: "设立了内部科学技术研究开发机构并具备相应的科研条件，与国内外研究开发机构开展多种形式产学研合作"},
      {value: JSON.stringify({low: 0, high: 4}), name: "建立了科技成果转化的组织实施与激励奖励制度，建立开放式的创新创业平台"},
      {value: JSON.stringify({low: 0, high: 4}), name: "建立了科技人员的培养进修、职工技能培训、优秀人才引进，以及人才绩效评价奖励制度"},
    ],
    
    manageAbility: [
      JSON.stringify({low: 0, high: 0})
    ],

    // totalScore: JSON.stringify({low: 0, high: 0}),
    totalScore: {low: 0, high: 0},

    thisYearAsset: "",
    thisYearAssetFlag: null,
    lastYearAsset: "",
    lastYearAssetFlag: null,
    beforeLastYearAsset: "",
    beforeLastYearAssetFlag: null,

    netAssetGrowthRate: 0,
    netAssetGrowthRateFlag: false,
    netAssetGrowthRateScore: JSON.stringify({low: 0, high: 0}),
    salesRevenueGrowthRate: 0,
    salesRevenueGrowthRateFlag: false,
    salesRevenueGrowthRateScore: JSON.stringify({low: 0, high: 0}),
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var that = this;
    var dateNow = new Date();
    var year = dateNow.getFullYear();
    var month = dateNow.getMonth() + 1;
    if (month < 10) {
      month = "0" + month
    }
    var day = dateNow.getDate();
    if (day < 10) {
      day = "0" + day
    }

    var date = year + "-" + month + "-" + day
    that.setData({
      date: date
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  backToIndex() {
    wx.navigateBack()
  },
  //提交表单
  formSubmit:function(e){
  //获取表单中输入框数据
    var value = e.detail.value;
  //value.name 对应账号输入框  value.password对应密码输入框
    if(value.name&&value.password){
      wx.setStorage({
        key: 'address',
        data: value,
        success(){
          wx.navigateBack();
        }
      })
    } else{
      wx.showModal({
        title: '提示',
        content: '请填写完整资料',
        showCancel:false
      })
    }
  },

  bindDateChange: function (e) {
    var that = this;
    that.setData({
      date: e.detail.value
    })
    var end = new Date();
    var end_num = new Date(end.getFullYear() + "/" + (end.getMonth() + 1) + "/" + (end.getDate()));
    var start = this.data.date;
    var start_num = new Date(start.replace(/-/g, "/"));

    var duration = parseInt((end_num.getTime() - start_num.getTime())) / (1000*60*60*24);
    var dateFlag = false;
    if (duration < 365) {
      dateFlag = true;
    }
    that.setData({
      dateFlag: dateFlag
    })
  },

//  bindIPChange: function(e) {
  bindIPChange(e) {
    var that = this;
    var ip_num = e.detail.value;
    that.setData({
      IPnum: ip_num
    })
    var ipFlag = false
    if (ip_num <= 0 || isNaN(ip_num)) {
      ipFlag = true
    }
    that.setData({
      IPFlag: ipFlag
    })
  },

  IPChagne(e) {
    var that = this;
    var values = e.detail.value;
    var items = that.data.areaItems;
    for (let i = 0; i < items.length; ++i) {
      items[i].checked = false;
      for (let j = 0; j < values.length; ++j) {
        if (items[i].value === values[j]) {
          items[i].checked = true;
          break;
        }
      }
    }
    this.setData({
      areaItems: items
    })
  },

  techGuyChange(e) {
    var that = this;
    var techGuy = e.detail.value;
    that.setData({
      techGuy: techGuy
    })
    var techGuyFlag = false;
    if (techGuy <= 0 || isNaN(techGuy)) {
      techGuyFlag = true;
    }
    that.setData({
      techGuy: techGuy,
      techGuyFlag: techGuyFlag,
    });
    this.checkGuyRatio();
  },

  allGuyChange(e) {
    var that = this;
    var allGuy = e.detail.value;
    that.setData({
      allGuy: allGuy
    })
    var allGuyFlag = false;
    if (allGuy <= 0 || isNaN(allGuy)) {
      allGuyFlag = true;
    }
    that.setData({
      allGuy: allGuy,
      allGuyFlag: allGuyFlag,
    })
    var test = that.data.techGuy/that.data.allGuy;
    this.checkGuyRatio();
  },

  // should add sth to ratio of Guys
  checkGuyRatio() {
    var that = this;
    if (that.data.techGuyFlag == null || that.data.allGuyFlag == null) {
      return
    }
    var guyRatioFlag = false;
    var techGuy = that.data.techGuy;
    var allGuy = that.data.allGuy;
    var guyRatio = null;
    if(!that.data.techGuyFlag && !that.data.allGuyFlag) {
      guyRatio = techGuy/allGuy*100;
    }
    if(!that.data.techGuyFlag && !that.data.allGuyFlag) {
      guyRatioFlag = true;
    }
    that.setData({
      guyRatioFlag: guyRatioFlag,
      guyRatio: techGuy/allGuy*100,
    })
  },

  thisYear(e) {
    var that = this;
    var thisYearSale = e.detail.value;
    that.setData({
      thisYear: thisYearSale,
    })
    var yearFlag = false
    if (thisYearSale == "" || thisYearSale < 0 || isNaN(thisYearSale)) {
      yearFlag = true;
    }
    that.setData({
      thisYearFlag: yearFlag,
    });
    this.checkThreeYearSaleAggre();
    this.checkRandDRatio();
  },

  lastYear(e) {
    var that = this;
    var lastYearSale = e.detail.value;
    that.setData({
      lastYear: lastYearSale,
    })
    var yearFlag = false
    if (lastYearSale == "" || lastYearSale < 0 || isNaN(lastYearSale)) {
      yearFlag = true;
    }
    that.setData({
      lastYearFlag: yearFlag,
    });
    this.checkThreeYearSaleAggre();
    this.checkRandDRatio();
  },

  beforeLastYear(e) {
    var that = this;
    var beforeLastYearSale = e.detail.value;
    that.setData({
      beforeLastYear: beforeLastYearSale,
    })
    var yearFlag = false
    if (beforeLastYearSale == "" || beforeLastYearSale < 0 || isNaN(beforeLastYearSale)) {
      yearFlag = true;
    }
    that.setData({
      beforeLastYearFlag: yearFlag,
    });
    this.checkThreeYearSaleAggre();
    this.checkRandDRatio();
  },

  checkThreeYearSaleAggre() {
    var that = this;
    if (that.data.thisYearFlag == null || that.data.lastYearFlag == null || that.data.beforeLastYearFlag == null) {
      return;
    }
    var thisYear = that.data.thisYear;
    var lastYear = that.data.lastYear;
    var beforeLastYear = that.data.beforeLastYear;
    var flag = false;
    if (!that.data.thisYearFlag && !that.data.lastYearFlag && !that.data.beforeLastYearFlag) {
      that.setData({
        threeYearSaleAggre: parseInt(thisYear) + parseInt(lastYear) + parseInt(beforeLastYear),
      })
      flag = true;
    }
    that.setData({
      threeYearSaleAggreFlag: flag,
    })
    this.checkRandDRatio();
    this.checkSalesGrowthRate();
  },

  threeYearRandD(e) {
    var that = this;
    var RandD = e.detail.value;
    var flag = false;
    if (RandD == "" || RandD < 0 || isNaN(RandD)) {
      flag = true;
    }
    that.setData({
      threeYearRandD: RandD,
      threeYearRandDFlag: flag
    })
    this.checkRandDRatio();
  },

  checkRandDRatio() {
    var that = this;
    var threeYearSale = that.data.threeYearSaleAggre;
    var threeYearRandD = that.data.threeYearRandD;
    var RandDRatioFlag = false;
    var RandDRatio = null;
    if(that.data.threeYearSaleAggreFlag && !that.data.threeYearRandDFlag) {
      RandDRatioFlag = true;
      RandDRatio = threeYearRandD/threeYearSale*100;
    }
    console.log("before null check: ", RandDRatioFlag);
    console.log("before null check: ", that.data.threeYearSaleAggreFlag);
    console.log("before null check: ", that.data.threeYearRandDFlag);
    if(that.data.threeYearSaleAggreFlag == null || that.data.threeYearRandDFlag == null) {
      RandDRatioFlag = false;
    }
    console.log("after null check: ", RandDRatioFlag)
    that.setData({
      RandDRatio: RandDRatio,
      RandDRatioFlag: RandDRatioFlag,
    });
    this.checkSalesGrowthRate();

  },

  inStateRandD(e) {
    var that = this;
    var RandD = e.detail.value;
    if (RandD == "") {
      RandD = NaN;
    }
    that.setData({
      inStateRandD: RandD,
    })
    this.checkInStateRatio()
    this.checkRandDRatio();
  },

  checkInStateRatio() {
    var that = this;
    var all = that.data.threeYearRandD;
    var inState = that.data.inStateRandD;
    var inStateRatio = null;
    var inStateRatioFlag = false;
    if (!isNaN(all)&&!isNaN(inState)) {
      inStateRatioFlag = true;
      inStateRatio = inState / all * 100;
    }
    that.setData({
      inStateRatio: inStateRatio,
      inStateRatioFlag: inStateRatioFlag,
    })
  },

  checkHighTech(e) {
    var that = this;
    var highTech = e.detail.value;
    var flag = false;
    if (highTech < 0 || highTech == "" || isNaN(highTech)) {
      flag = true;
    }
    that.setData({
      highTechInCome: highTech,
      highTechInComeFlag: flag,
    });
    this.checkHighTechRatio();
  },

  checkHighTechRatio() {
    var that = this;
    var flag = false;
    var Ratio = "";
    if (!that.data.thisYearFlag && !that.data.highTechInComeFlag) {
      Ratio = that.data.highTechInCome/that.data.thisYear*100;
      flag = true;
    }
    that.setData({
      highTechRatio: Ratio,
      highTechFlag: flag,
    })
  },

  advancedDegreesChanges(e) {
    var that = this;
    var checkedItem = e.detail.value;
    that.setData({
      advancedDegree: checkedItem,
    });
    that.aggregateScore();
  },

  advancedTechImportances(e) {
    var that = this;
    var checkedItem = e.detail.value;
    that.setData({
      techImportance: checkedItem,
    });
    that.aggregateScore();
  },

  advancedIPNumbers(e) {
    var that = this;
    var checkedItem = e.detail.value;
    that.setData({
      IPNumber: checkedItem,
    });
    that.aggregateScore();
  },

  advancedIPAcquires(e) {
    var that = this;
    var checkedItem = e.detail.value;
    that.setData({
      IPAcquire: checkedItem,
    });
    that.aggregateScore();
  },

  advancedInVolveStandards(e) {
    var that = this;
    var checkedItem = e.detail.value;
    that.setData({
      inVolvedInStandard: checkedItem,
    });
    that.aggregateScore();
  },

  advancedConvertAbilitys(e) {
    var that = this;
    var checkedItem = e.detail.value;
    that.setData({
      convertAbility: checkedItem,
    });
    that.aggregateScore();
  },

  advancedManageAbilities(e) {
    var that = this;
    var values = e.detail.value;
    that.setData({
      manageAbility: values,
    });
    that.aggregateScore();
  },

  bindThisYearAsset(e) {
    var that = this;
    var asset = e.detail.value;
    that.setData({
      thisYearAsset: asset
    })
    var assetFlag = false
    if (asset == "" || isNaN(asset)) {
      assetFlag = true;
    }
    that.setData({
      thisYearAssetFlag: assetFlag,
    });
    this.checkThreeYearAsset();
  },

  bindLastYearAsset(e) {
    var that = this;
    var asset = e.detail.value;
    that.setData({
      lastYearAsset: asset
    })
    var assetFlag = false
    if (asset == "" || isNaN(asset)) {
      assetFlag = true;
    }
    that.setData({
      lastYearAssetFlag: assetFlag,
    });
    this.checkThreeYearAsset();
  },

  bindBeforeLastYearAsset(e) {
    var that = this;
    var asset = e.detail.value;
    that.setData({
      beforeLastYearAsset: asset
    })
    var assetFlag = false
    if (asset == "" || isNaN(asset)) {
      assetFlag = true;
    }
    that.setData({
      beforeLastYearAssetFlag: assetFlag,
    });
    this.checkThreeYearAsset();
  },

  aggregateScore() {
    var that = this;
    var result = {"low": 0, "high": 0};
    var mA = that.data.manageAbility;
    var datas = [
      JSON.parse(that.data.advancedDegree),
      JSON.parse(that.data.techImportance),
      JSON.parse(that.data.IPNumber),
      JSON.parse(that.data.IPAcquire),
      JSON.parse(that.data.inVolvedInStandard),
      JSON.parse(that.data.convertAbility),
      JSON.parse(that.data.netAssetGrowthRateScore),
      JSON.parse(that.data.salesRevenueGrowthRateScore),
    ];
    for (var tmp of datas) {
      result.low += tmp.low;
      result.high += tmp.high;
    }
    for (var tmp of mA) {
      tmp = JSON.parse(tmp);
      result.low += tmp.low;
      result.high += tmp.high;
    }

    that.setData({
      totalScore: result,
    })
  },

  // this func may be truncate
  checkThreeYearAsset() {
    var that = this;
    this.checkNetGrowthRate();

  },

  checkNetGrowthRate() {
    var that = this;
    if (that.data.thisYearAssetFlag == null || that.data.lastYearAssetFlag == null || that.data.beforeLastYearAssetFlag == null) {
      return;
    }
    var thisYear = that.data.thisYearAsset;
    var lastYear = that.data.lastYearAsset;
    var beforeLastYear = that.data.beforeLastYearAsset;
    var netRate = 0;
    netRate = ((thisYear/lastYear + lastYear/beforeLastYear) / 2 - 1) * 100;
    that.setData({
      netAssetGrowthRate: netRate,
    })
    var flag = false;
    if (!that.data.thisYearAssetFlag && !that.data.lastYearAssetFlag && !that.data.beforeLastYearAssetFlag) {
      flag = true;
    }
    that.setData({
      netAssetGrowthRateFlag: flag,
    })
    if (netRate != null && !isNaN(netRate) && isFinite(netRate)) {

    } else {
      netRate = 0;
    }
    var score = {"low": 0, "high":0};
    switch (true) {
      case netRate > 35 || netRate == 35:
        score = {"low": 9, "high" : 10}; 
        break;
      case netRate > 25 || netRate == 25:
        score = {"low": 7, "high" : 8}; 
        break;
      case netRate > 15 || netRate == 15:
        score = {"low": 5, "high" : 6}; 
        break;
      case netRate > 5 || netRate == 5:
        score = {"low": 3, "high" : 4}; 
        break;
      case netRate > 0:
        score = {"low": 1, "high" : 2}; 
        break;
      case netRate < 0 || netRate == 0:
        score = {"low": 0, "high" : 0}; 
        break;
    }
  that.setData({
    netAssetGrowthRateScore: JSON.stringify(score),
  });
  that.aggregateScore();
  },

  checkSalesGrowthRate() {
    var that = this;
    if (that.data.thisYearFlag == null || that.data.lastYearFlag == null || that.data.beforeLastYearFlag == null) {
      return;
    }
    var salesRate = 0;
    var thisYearSales = that.data.thisYear;
    var lastYearSales = that.data.lastYear;
    var beforeLastYearSales = that.data.beforeLastYear;
    salesRate = ((lastYearSales/beforeLastYearSales + thisYearSales/lastYearSales) / 2 - 1) * 100;
    that.setData({
      salesRevenueGrowthRate: salesRate,
    })
    var flag = false;
    if (!that.data.thisYeareFlag && !that.data.lastYearFlag && !that.data.beforeLastYearFlag) {
      flag = true;
    }
    that.setData({
      salesRevenueGrowthRateFlag: flag,
    })
    if (salesRate != null && !isNaN(salesRate) && isFinite(salesRate)) {
    } else {
      salesRate = 0;
    }
    var score = {"low": 0, "high":0};
    switch (true) {
      case salesRate > 35 || salesRate == 35:
        score = {"low": 9, "high" : 10}; 
        break;
      case salesRate > 25 || salesRate == 25:
        score = {"low": 7, "high" : 8}; 
        break;
      case salesRate > 15 || salesRate == 15:
        score = {"low": 5, "high" : 6}; 
        break;
      case salesRate > 5 || salesRate == 5:
        score = {"low": 3, "high" : 4}; 
        break;
      case salesRate > 0:
        score = {"low": 1, "high" : 2}; 
        break;
      case salesRate < 0 || salesRate == 0:
        score = {"low": 0, "high" : 0}; 
        break;
    }
    that.setData({
      salesRevenueGrowthRateScore: JSON.stringify(score),
    });
    that.aggregateScore();
 
  },


})