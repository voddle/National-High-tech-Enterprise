// const { tabClasses } = require("@mui/material");

// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '',
    dateFlag: false,

    IPnum: null,
    IPFlag: false,

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

    techGuy: null,
    techGuyFlag: null,
    allGuy: null,
    allGuyFlag: null,
    guyRatio: null,
    guyRatioFlag: false,

    thisYear: "",
    lastYear: "",
    beforeLastYear: "",
    thisYearFlag: null,
    lastYearFlag: null,
    beforeLastYearFlag: null,

    threeYearSaleAggre: null,
    threeYearRandD: NaN,
    threeYearRandDFlag: NaN,
    inStateRandD: NaN,
    RandDRatio: null,
    RandDRatioFlag: false,
    inStateRatio: null,
    inStateRatioFlag: false,
  
    highTechInCome: NaN,
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
    thisYearAssetFlag: true,
    lastYearAsset: "",
    lastYearAssetFlag: true,
    beforeLastYearAsset: "",
    beforeLastYearAssetFlag: true,

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
    console.log(ipFlag)
    that.setData({
      IPFlag: ipFlag
    })
  },

  IPChagne(e) {
    var that = this;
    var values = e.detail.value;
    var items = that.data.areaItems;
    console.log("IPS: ", values);
    for (let i = 0; i < items.length; ++i) {
      items[i].checked = false;
      for (let j = 0; j < values.length; ++j) {
        if (items[i].value === values[j]) {
          items[i].checked = true;
          break;
        }
      }
    }
    console.log(items);
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
    console.log(test);
    console.log(!isNaN(test)&&isFinite(test));
    this.checkGuyRatio();
  },

  // should add sth to ratio of Guys
  checkGuyRatio() {
    var that = this;
    if (that.data.techGuyFlag == null || that.data.allGuyFlag == null) {
      return
    }
    console.log("rational")
    var guyRatioFlag = false;
    var techGuy = that.data.techGuy;
    var allGuy = that.data.allGuy;
    var guyRatio = null;
    console.log("guy flag: ", that.data.techGuyFlag, that.data.allGuyFlag)
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
    console.log(yearFlag)
    console.log("asset: ", thisYearSale)
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
    console.log(yearFlag)
    console.log("asset: ", lastYearSale)
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
    console.log(yearFlag)
    console.log("asset: ", beforeLastYearSale)
    that.setData({
      beforeLastYearFlag: yearFlag,
    });
    this.checkThreeYearSaleAggre();
    this.checkRandDRatio();
  },

  checkThreeYearSaleAggre() {
    var that = this;
    var thisYear = that.data.thisYear;
    var lastYear = that.data.lastYear;
    var beforeLastYear = that.data.beforeLastYear;
    if (!that.data.thisYearFlag && !that.data.lastYearFlag && !that.data.beforeLastYearFlag) {
      that.setData({
        threeYearSaleAggre: parseInt(thisYear) + parseInt(lastYear) + parseInt(beforeLastYear),
      })
    }
    console.log("sale rate flag: ", !that.data.thisYearFlag);
    console.log("sale rate flag: ", !that.data.lastYearFlag);
    console.log("sale rate flag: ", !that.data.beforeLastYearFlag);
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
    console.log("checking R&D");
    var that = this;
    var threeYearSale = that.data.threeYearSaleAggre;
    var threeYearRandD = that.data.threeYearRandD;
    var RandDRatioFlag = false;
    var RandDRatio = null;
    if(!isNaN(threeYearSale)&&!isNaN(threeYearRandD)) {
      RandDRatioFlag = true;
      RandDRatio = threeYearRandD/threeYearSale*100;
    }
    console.log("RandD: " + threeYearRandD);
    console.log("sale: " + threeYearSale);
    console.log("ratio:" + RandDRatio);
    console.log("Flag: " + RandDRatioFlag);
    console.log("isNaN RandD: " + !isNaN(NaN));
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
    if (highTech == "") {
      highTech = NaN;
    }
    that.setData({
      highTechInCome: highTech,
    });
    this.checkHighTechRatio();
  },

  checkHighTechRatio() {
    var that = this;
    var highTech = that.data.highTechInCome;
    var thisYearTotalInCome = that.data.thisYear;
    var Flag = false;
    var Ratio = NaN;
    if (!isNaN(highTech)&&!isNaN(thisYearTotalInCome)&&thisYearTotalInCome!="") {
      Ratio = highTech/thisYearTotalInCome*100;
      Flag = true;
    }
    that.setData({
      highTechRatio: Ratio,
      highTechFlag: Flag,
    })
  },

  advancedDegreesChanges(e) {
    var that = this;
    var checkedItem = e.detail.value;
    console.log(that.data.advancedDegree);
    that.setData({
      advancedDegree: checkedItem,
    });
    console.log(that.data.advancedDegree);
    console.log(checkedItem);
    // for (let i = 0, len = items.length; i < len; ++i) {
    // console.log(items[i].name + "  " + checkedItem);
    //   items[i].checked = items[i].name === checkedItem;
    // }
    // console.log(items);

    // that.setData({
    //   advancedDegrees: items,
    // })
    that.aggregateScore();
  },

  advancedTechImportances(e) {
    var that = this;
    var checkedItem = e.detail.value;
    that.setData({
      techImportance: checkedItem,
    });
    console.log(that.data.techImportance);
    that.aggregateScore();
  },

  advancedIPNumbers(e) {
    var that = this;
    var checkedItem = e.detail.value;
    that.setData({
      IPNumber: checkedItem,
    });
    console.log(that.data.IPNumber);
    that.aggregateScore();
  },

  advancedIPAcquires(e) {
    var that = this;
    var checkedItem = e.detail.value;
    that.setData({
      IPAcquire: checkedItem,
    });
    console.log(that.data.IPAcquire);
    that.aggregateScore();
  },

  advancedInVolveStandards(e) {
    var that = this;
    var checkedItem = e.detail.value;
    that.setData({
      inVolvedInStandard: checkedItem,
    });
    console.log(that.data.inVolvedInStandard);
    that.aggregateScore();
  },

  advancedConvertAbilitys(e) {
    var that = this;
    var checkedItem = e.detail.value;
    that.setData({
      convertAbility: checkedItem,
    });
    console.log(that.data.convertAbility);
    that.aggregateScore();
  },

  advancedManageAbilities(e) {
    var that = this;
    var values = e.detail.value;
    console.log("IPS: ", values);
    that.setData({
      manageAbility: values,
    });
    console.log("mA: ", that.data.manageAbility);
    // for (let i = 0; i < items.length; ++i) {
    //   items[i].checked = false;
    //   for (let j = 0; j < values.length; ++j) {
    //     if (items[i].value === values[j]) {
    //       items[i].checked = true;
    //       break;
    //     }
    //   }
    // }
    // console.log(items);
    // this.setData({
    //   areaItems: items
    // })
    that.aggregateScore();
  },

  test() {
    console.log("test");
    console.log("degree: " + this.data.advancedDegree);
    console.log("importance: " + this.data.techImportance);
    console.log("IPNumber: " + this.data.IPNumber);
    console.log("IPAcquire: " + this.data.IPAcquire);
    console.log("standard: " + this.data.inVolvedInStandard);
    console.log("convert: " + this.data.convertAbility);
    this.aggregateScore();
    this.checkRate();
  },

  bindThisYearAsset(e) {
    var that = this;
    var asset = e.detail.value;
    that.setData({
      thisYearAsset: asset
    })
    var assetFlag = false
    if (asset == "") {
      assetFlag = true;
    }
    console.log("this year asset flag: ", assetFlag)
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
    if (asset == "") {
      assetFlag = true;
    }
    console.log(assetFlag)
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
    if (asset == "") {
      assetFlag = true;
    }
    console.log(assetFlag)
    console.log("asset: ", asset)
    that.setData({
      beforeLastYearAssetFlag: assetFlag,
    });
    this.checkThreeYearAsset();
  },

  aggregateScore() {
    var that = this;
    var result = {"low": 0, "high": 0};
    var mA = that.data.manageAbility;
    console.log("init result: ", result);
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
      // console.log("low: ", result.low);
      // console.log("low: " + tmp.low);
      // console.log("tmp: " + tmp);
    }
    for (var tmp of mA) {
      tmp = JSON.parse(tmp);
      result.low += tmp.low;
      result.high += tmp.high;
      console.log("low: ", result.low);
      console.log("low: " + tmp.low);
      // console.log("tmp: " + tmp);
    }

    // var tmp = JSON.parse(that.data.advancedDegree);
    // console.log("low: ", result.low);
    // console.log("low: " + tmp.low);
    // result.low += tmp.low;
    // console.log("low: ", result.low);
    console.log("result: ", result);
    that.setData({
      totalScore: result,
    })
  },

  checkThreeYearAsset() {
    var that = this;
    var thisYear = that.data.thisYearAsset;
    var lastYear = that.data.lastYearAsset;
    var beforeLastYear = that.data.beforeLastYearAsset;
    var flag = false;
    if (!that.data.thisYearAssetFlag && !that.data.lastYearAssetFlag && !that.data.beforeLastYearAssetFlag) {
      flag = true;
    }
    console.log("net Rate Flag: ", that.data.thisYearAssetFlag);
    console.log("net Rate Flag: ", that.data.lastYearAssetFlag);
    console.log("net Rate Flag: ", that.data.beforeLastYearAssetFlag);
    console.log("net Rate Flag: ", flag);
    that.setData({
      netAssetGrowthRateFlag: flag,
    })
    this.checkNetGrowthRate();

  },

  checkNetGrowthRate() {
    var that = this;
    var thisYear = that.data.thisYearAsset;
    var lastYear = that.data.lastYearAsset;
    var beforeLastYear = that.data.beforeLastYearAsset;
    var netRate = 0;
    netRate = ((thisYear/lastYear + lastYear/beforeLastYear) / 2 - 1) * 100;
    that.setData({
      netAssetGrowthRate: netRate,
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
  console.log("rate score: ", that.data.netAssetGrowthRateScore);
  },

  checkSalesGrowthRate() {
    var that = this;
    console.log("null flag: ", that.data.thisYearFlag);
    console.log("null flag: ", that.data.lastYearFlag);
    console.log("null flag: ", that.data.beforeLastYearFlag);
    if (that.data.thisYearFlag == null || that.data.lastYearFlag == null || that.data.beforeLastYearFlag == null) {
      console.log("hello")
      return;
      console.log("hello")
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
    if (salesRate != null && !isNaN(salesRate) && isFinite(salesRate)) {
      console.log("WTF")
    } else {
      salesRate = 0;
    }
    that.setData({
      salesRevenueGrowthRateFlag: flag,
    })
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