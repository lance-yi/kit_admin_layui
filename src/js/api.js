/**
 * api 接口文档
 */
layui.define(function(exports) {
  var Api = function(){
    this.version = '1.0.0',
    this.baseURL = _baseURL,
    this.interface = _private;
    this.imgUrl = _imgURL;
  }
  //测试环境地址
  // var _baseURL = 'http://192.168.1.2:8202';
  var _baseURL = 'http://apitops.runmin.shop/bajieadmin';
  // 结算接口地址
  // var _baseURLOrder = 'http://192.168.1.2:8084';
  var _baseURLOrder = 'http://apitops.runmin.shop/bajieadminsettle';
  // 图片地址
  var _imgURL = 'http://192.168.1.6:888';
  //正式环境地址
  // var _baseURL = 'http://apitops.runmin.shop/bajieadmin';
  var _private = {

    //图片上传（测试环境）
    // uploadImageFile: 'http://192.168.1.3:8081/RmarketShop/uploadFile/upload.html',
    uploadImageFile: 'http://192.168.1.87:8088/uploadFile/upload',
    uploadFileEditor: 'http://192.168.1.3:8081/RmarketShop/uploadFile/uploadEditor.html',

    //图片上传（正式环境）
    // uploadImageFile: 'http://rmwapi.runmin.shop/RmarketShop/uploadFile/upload.html',
    // uploadFileEditor: 'http://rmwapi.runmin.shop/RmarketShop/uploadFile/uploadEditor.html',

    /**
     * 管理员用户登录、退出
     */
    //登录
    adminLogin: _baseURL + '/admin/login',
    //登出
    adminLogout: _baseURL + '/admin/logout',
    //获取权限列表
    adminNavList: _baseURL + '/admin/navList',
    //修改登录密码
    adminUpdatePassword: _baseURL + '/admin/updatePassword',

    /**
     * 后台首页
     */
    //平台数据统计
    backGroundPagePlatformDataStatistics: _baseURL + '/backGroundPage/platformDataStatistics',
    //按时间查询数据统计
    backGroundPagePlatformDataStatisticsByTime: _baseURL + '/backGroundPage/platformDataStatisticsByTime',
    //按时间查询数据统计--导出
    backGroundPageExcelPlatformDataStatisticsByTime: _baseURL + '/backGroundPage/excelPlatformDataStatisticsByTime',

    /**
     * 仔猪财务管理
     */
    // 用户交易流水
    pigFinanceManageUserDealFlow: _baseURL + '/pigFinanceManage/queryUserDealFlow',
    // 平台入账记录
    pigFinanceManageIncomeRecord: _baseURL + '/pigFinanceManage/platformIncomeRecord',
    // 用户收支记录
    pigFinanceManageCashFlowRecord: _baseURL + '/pigFinanceManage/queryCashFlowRecord',
    // 平台提现审核/全民养猪提现审核
    pigFinanceManagePlatformWithdrawalAudit: _baseURL + '/pigFinanceManage/queryPlatformWithdrawalAudit',
    // 提现审核详情
    pigFinanceManageWithdrawAuditDetails: _baseURL + '/pigFinanceManage/queryWithdrawAuditDetails',
    // 审核通过和驳回
    pigFinanceManageAudit: _baseURL + '/pigFinanceManage/audit',
    // 平台资金统计
    pigFinanceManageStatistics: _baseURL + '/pigFinanceManage/queryStatistics',
    // 用户资金明细
    pigFinanceManageUserFundDetails: _baseURL + '/pigFinanceManage/queryUserFundDetails',
    // 近五个月的未回报统计
    pigFinanceManageNearlyNoReturnStatistics: _baseURL + '/pigFinanceManage/queryNearlyNoReturnStatistics',
    // 平台收入支出 - 平台收入、支出
    pigFinanceManagePlatformIncome: _baseURL + '/pigFinanceManage/queryPlatformIncome',
    // 平台收入支出 - 平台收入、支出
    pigFinanceManagePlatformSend: _baseURL + '/pigFinanceManage/queryPlatformSpend',
    // 平台收入支出 - 系统
    pigFinanceManageSystemSpend: _baseURL + '/pigFinanceManage/querySystemSpend',
    // 标记已对账
    pigFinanceManageSign: _baseURL + '/pigFinanceManage/sign',
    // 平台入账明细
    pigFinanceManagePlatformIncomeDetails: _baseURL + '/pigFinanceManage/queryPlatformIncomeDetails',
    // 平台投资人数统计
    pigFinanceManageInvestNum: _baseURL + '/pigFinanceManage/queryInvestNum',
    // 客户投资列表汇总
    pigFinanceManageCustomerInvestSum: _baseURL + '/pigFinanceManage/queryCustomerInvestSum',
    // 平台投资产品分析
    pigFinanceManageProductAnalysis: _baseURL + '/pigFinanceManage/queryProductAnalysis',
    // 平台投资随机查询表
    pigFinanceManageInvestRandom: _baseURL + '/pigFinanceManage/queryInvestRandom',
    // 平台投资汇总表
    pigFinanceManagePlatformInvestSummarySheet: _baseURL + '/pigFinanceManage/queryPlatformInvestSummarySheet',
    //客户投资列表汇总--导出
    pigFinanceManageExcelCustomerInvestSum: _baseURL + '/pigFinanceManage/excelCustomerInvestSum',
    //平台投资人数统计--导出
    pigFinanceManageExcelInvestNum: _baseURL + '/pigFinanceManage/excelInvestNum',
    //平台投资随机查询表--导出
    pigFinanceManageExcelInvestRandom: _baseURL + '/pigFinanceManage/excelInvestRandom',
    //平台入账明细--导出
    pigFinanceManageExcelPlatformIncomeDetails: _baseURL + '/pigFinanceManage/excelPlatformIncomeDetails',
    //平台入账记录--导出
    pigFinanceManageExcelPlatformIncomeRecord: _baseURL + '/pigFinanceManage/excelPlatformIncomeRecord',
    //平台提现审核/全民养猪提现审核--导出
    pigFinanceManageExcelPlatformWithdrawalAudit: _baseURL + '/pigFinanceManage/excelPlatformWithdrawalAudit',
    //平台投资产品分析--导出
    pigFinanceManageExcelProductAnalysis: _baseURL + '/pigFinanceManage/excelProductAnalysis',
    //平台资金统计--导出
    pigFinanceManageExcelStatistics: _baseURL + '/pigFinanceManage/excelStatistics',
    //平台投资汇总表--导出已勾选的月份数据/导出全部数据
    pigFinanceManageSelectExcelPlatformInvestSummarySheet: _baseURL + '/pigFinanceManage/selectExcelPlatformInvestSummarySheet',

    /**
     * 权限管理
     */
    //角色管理-获取角色列表
    adminTypeRoleList: _baseURL + '/adminType/roleList',
    //管理员管理-获取管理员列表
    adminTypeAdminList: _baseURL + '/adminType/adminList',
    //管理员管理-添加管理员
    adminTypeAdminAdd: _baseURL + '/adminType/adminAdd',
    //管理员管理 - 修改
    adminTypeAdminEdit: _baseURL + '/adminType/adminEdit',
    //管理员管理 - 恢复和禁用账号
    adminTypeAdminRecoverAndInvalid: _baseURL + '/adminType/adminRecoverAndInvalid',
    //角色管理-更具id获取角色信息
    adminTypeRoleInfo: _baseURL + '/adminType/roleInfo',
    //角色管理 - 添加
    adminTypeRoleAdd: _baseURL + '/adminType/roleAdd',
    //角色管理 - 删除
    adminTypeRoleRemove: _baseURL + '/adminType/roleRemove',
    //管理员管理-更具id获取管理员信息
    adminTypeAdminInfo: _baseURL + '/adminType/adminInfo',
    //角色管理-更具id获取角色信息
    adminTypeRoleInfo: _baseURL + '/adminType/roleInfo',

    /**
     * 文库管理
     */
    //添加公告消息
    announcementAdd: _baseURL + '/announcement/add',
    //删除公告消息
    announcementDelete: _baseURL + '/announcement/delete',
    //获取公告列表
    announcementSelect: _baseURL + '/announcement/select',
    //添加文章
    articleAdd: _baseURL + '/article/add',
    //审核文章
    articleAudit: _baseURL + '/article/audit',
    //删除文章
    articleDelete: _baseURL + '/article/delete',
    //获取文章列表
    articleSelect: _baseURL + '/article/select',
    //通过ID查询文章
    articleSelectById: _baseURL + '/article/selectById',
    //编辑文章
    articleUpdate: _baseURL + '/article/update',
    //添加文库分类
    articleTypeAdd: _baseURL + '/articleType/add',
    //删除文库分类
    articleTypeDelete: _baseURL + '/articleType/delete',
    //查询文库分类列表
    articleTypeSelect: _baseURL + '/articleType/select',
    //通过ID查询文库分类
    articleTypeSelectById: _baseURL + '/articleType/selectById',
    //修改文库分类
    articleTypeUpdate: _baseURL + '/articleType/update',
    
    /**
     * 仔猪预定
     */
    //投资订单列表
    investOrderSelect: _baseURL + '/investOrder/select',
    //添加分类管理
    investPeriodTypeAdd: _baseURL + '/investPeriodType/add',
    //编辑分类管理
    investPeriodTypeEdit: _baseURL + '/investPeriodType/edit',
    //查询分类管理
    investPeriodTypeSelect: _baseURL + '/investPeriodType/select',
    //通过Id查询
    investPeriodTypeSelectById: _baseURL + '/investPeriodType/selectById',
    //查询预发布产
    investPeriodTypeSelectPre: _baseURL + '/investPeriodType/selectPre',
    //设置预发布
    investPeriodTypeUpdate: _baseURL + '/investPeriodType/update',
    //发布产品
    investProductAdd: _baseURL + '/investProduct/add',
    //编辑产品
    investProductEdit: _baseURL + '/investProduct/edit',
    //查询产品列表
    investProductSelect: _baseURL + '/investProduct/select',
    //通过Id查询
    investProductSelectById: _baseURL + '/investProduct/selectById',
    //分类列表---在售商品
    investPeriodTypeSelectList: _baseURL + '/investPeriodType/selectList',

    /**
     * 会员管理模块
     */
    //新增用户的其他联系方式
    userAddUserContact: _baseURL + '/user/addUserContact',
    //操作评论的状态
    userAuditUserComment: _baseURL + '/user/auditUserComment',
    //银行卡状态操作--审核，取消，恢复
    userBankCardAudit: _baseURL + '/user/bankCardAudit',
    //银行卡信息
    userBankCardInfo: _baseURL + '/user/bankCardInfo',
    //其他联系方式--删除
    userDeleteUserContact: _baseURL + '/user/deleteUserContact',
    //身份证状态操作--审核，取消，恢复
    userIdCardAudit: _baseURL + '/user/idCardAudit',
    //标记已读
    userMarkUserFeedback: _baseURL + '/user/markUserFeedback',
    //标识内部会员的查询
    userQueryMembers: _baseURL + '/user/queryMembers',
    //用户分布统计>查看详情
    userQueryStatisticsDetail: _baseURL + '/user/queryStatisticsDetail',
    //注册用户管理查询
    userQueryUser: _baseURL + '/user/queryUser',
    //用户预定账户详情
    userQueryUserBookAccountDetails: _baseURL + '/user/queryUserBookAccountDetails',
    //会员评论管理
    userQueryUserComment: _baseURL + '/user/queryUserComment',
    //其他联系方式
    userQueryUserContact: _baseURL + '/user/queryUserContact',
    //其他联系方式--查看
    userQueryUserContactDetail: _baseURL + '/user/queryUserContactDetail',
    //用户分布统计
    userQueryUserDistributionStatistics: _baseURL + '/user/queryUserDistributionStatistics',
    //用户反馈
    userQueryUserFeedback: _baseURL + '/user/queryUserFeedback',
    //交易信息
    userTradeInformation: _baseURL + '/user/tradeInformation',
    //标识为会员或者取消会员
    userUpdateMemberState: _baseURL + '/user/updateMemberState',
    //其他联系方式--编辑
    userUpdateUserContact: _baseURL + '/user/updateUserContact',
    //更新用户状态（置无效或者恢复）
    userUpdateUserStatus: _baseURL + '/user/updateUserStatus',
    //用户认证申请
    userUserAuditApply: _baseURL + '/user/userAuditApply',
    //用户详情
    userUserDetail: _baseURL + '/user/userDetail',
    //账号信息
    userUserInfo: _baseURL + '/user/userInfo',
    //养殖中的仔猪
    userUserInvestIng: _baseURL + '/user/userInvestIng',
    //用户分布统计>查看详情--导出
    userExcelStatisticsDetail: _baseURL + '/user/excelStatisticsDetail',
    //注册用户管理--导出
    userExcelUser: _baseURL + '/user/excelUser',
    //用户预定账户详情--导出
    userExcelUserBookAccountDetails: _baseURL + '/user/excelUserBookAccountDetails',
    //用户反馈--导出
    userExcelUserFeedback: _baseURL + '/user/excelUserFeedback',


    /**
     * 商城管理
     */
    //商品添加 - 提交
    goodsGoodsAdd: _baseURL + '/goods/goodsAdd',
    //商品列表 - 获取商品列表
    goodsGoodsList: _baseURL + '/goods/goodsList',
    //商品列表 - 删除商品
    goodsGoodsListDel: _baseURL + '/goods/goodsListDel',
    //商品列表 - 修改商品（上架、包邮、2小时配送）
    goodsGoodsListEdit: _baseURL + '/goods/goodsListEdit',
    //商品列表 - 修改商品(详情)
    goodsGoodsListEditInfo: _baseURL + '/goods/goodsListEditInfo',
    //商品列表 - 商品详情
    goodsGoodsListInfo: _baseURL + '/goods/goodsListInfo',
    //商品推荐
    goodsGoodsRecommend: _baseURL + '/goods/goodsRecommend',
    //商品推荐-添加
    goodsGoodsRecommendAdd: _baseURL + '/goods/goodsRecommendAdd',
    //商品推荐-删除
    goodsGoodsRecommendDel: _baseURL + 'goods/goodsRecommendDel',
    //商品推荐 - 取消or推荐
    goodsGoodsRecommendOkOrCancel: _baseURL + '/goods/goodsRecommendOkOrCancel',
    //商品推荐 - 上移或者下移
    goodsGoodsRecommendSort: _baseURL + '/goods/goodsRecommendSort',
    //获取商品规格
    goodsGoodsSpecList: _baseURL + '/goods/goodsSpecList',
    //商品分类 - 添加商品
    goodsGoodsTypeAdd: _baseURL + '/goods/goodsTypeAdd',
    //商品分类 - 修改商品分类信息
    goodsGoodsTypeEdit: _baseURL + '/goods/goodsTypeEdit',
    //商品分类 - 获取商品分类信息
    goodsGoodsTypeInfo: _baseURL + '/goods/goodsTypeInfo',
    //商品分类 - 获取列表
    goodsGoodsTypeList: _baseURL + '/goods/goodsTypeList',

    /**
     * 商城管理 - 储值卡
     */
    //获取门店列表
    cardCardList: _baseURL + '/card/cardList',
    //审核
    cardCardListAudit: _baseURL + '/card/cardListAudit',
    //编辑额度
    cardCardListEdit: _baseURL + '/card/cardListEdit',

    /**
     * 商城管理 - 活动管理
     */
    //添加活动 - 获取参与活动商品列表
    promotPromotGoodsList: _baseURL + '/promot/promotGoodsList',
    //获取活动列表
    promotPromotList: _baseURL + '/promot/promotList',
    //添加活动
    promotPromotListAdd: _baseURL + '/promot/promotListAdd',
    //停止或启动活动
    promotPromotListCancelOrOpen: _baseURL + '/promot/promotListCancelOrOpen',
    //删除活动
    promotPromotListDel: _baseURL + '/promot/promotListDel',
    //修改活动 - 修改
    promotPromotListEdit: _baseURL + '/promot/promotListEdit',
    //修改活动 - 详情
    promotPromotListInfo: _baseURL + '/promot/promotListInfo',
    //获取有效活动列表
    promotPromotValidList: _baseURL + '/promot/promotValidList',
    
    /**
     * 商城管理 - 开通城市
     */
    //添加开放市
    addressAddOpenCity: _baseURL + '/address/addOpenCity',
    //添加开放省
    addressAddOpenProvince: _baseURL + '/address/addOpenProvince',
    //获取区
    addressGetArea: _baseURL + '/address/getArea',
    //获取市
    addressGetCity: _baseURL + '/address/getCity',
    //获取开放区
    addressGetOpenArea: _baseURL + '/address/getOpenArea',
    //获取开放市
    addressGetOpenCity: _baseURL + '/address/getOpenCity',
    //添加开放省 - 获取图片
    addressGetOpenCityImg: _baseURL + '/address/getOpenCityImg',
    //获取开放省
    addressGetOpenProvince: _baseURL + '/address/getOpenProvince',
    //获取开放街道
    addressGetOpenStreet: _baseURL + '/address/getOpenStreet',
    //获取省
    addressGetProvince: _baseURL + '/address/getProvince',
    //获取街道
    addressGetStreet: _baseURL + '/address/getStreet',

    /**
     * 商城管理 - 门店管理
     */
    //获取门店列表
    shopShopList: _baseURL + '/shop/shopList',
    //添加门店
    shopShopListAdd: _baseURL + '/shop/shopListAdd',
    //删除门店信息
    shopShopListDel: _baseURL + '/shop/shopListDel',
    //修改门店信息
    shopShopListEdit: _baseURL + '/shop/shopListEdit',
    //获取门店信息详情
    shopShopListInfo: _baseURL + '/shop/shopListInfo',
    //暂停或启用门店
    shopShopListStopOrOpen: _baseURL + '/shop/shopListStopOrOpen',
    //添加配送信息
    shopShopScopeAdd: _baseURL + '/shop/shopScopeAdd',
    //删除配送信息
    shopShopScopeDel: _baseURL + '/shop/shopScopeDel',
    //获取配送信息列表
    shopShopScopeList: _baseURL + '/shop/shopScopeList',

    /**
     * 财务管理
     */
    //活动获利明细
    financialManageActivityProfitDetails: _baseURL + '/financialManage/activityProfitDetails',
    //操作审核状态
    financialManageAudit: _baseURL + '/financialManage/audit',
    //用户收支记录
    financialManageQueryIncomeAndExpenses: _baseURL + '/financialManage/queryIncomeAndExpenses',
    //平台入账记录 【 充值储值卡，购买储值卡，充值账户，购买猪肉】
    financialManageQueryPlatformEntryRecord: _baseURL + '/financialManage/queryPlatformEntryRecord',
    //平台提现审核
    financialManageQueryPlatformWithdrawalAudit: _baseURL + '/financialManage/queryPlatformWithdrawalAudit',
    //总账单列表
    financialManageQueryTotalBillsTable: _baseURL + '/financialManage/queryTotalBillsTable',
    //用户储蓄账户列表
    financialManageQueryUserTable: _baseURL + '/financialManage/queryUserTable',
    //用户资金流水列表 充值储值卡，充值账户，余额提现
    financialManageQueryUserTransacateRecords: _baseURL + '/financialManage/queryUserTransacateRecords',
    //提现审核详情操作
    financialManageQueryWithdrawAuditDetails: _baseURL + '/financialManage/queryWithdrawAuditDetails',
    //标记
    financialManageSign: _baseURL + '/financialManage/sign',
    //用户资金明细
    financialManageUserFundDetails: _baseURL + '/financialManage/userFundDetails',
    //用户收支记录--导出
    financialManageExcelIncomeAndExpenses: _baseURL + '/financialManage/excelIncomeAndExpenses',
    //平台入账记录--导出
    financialManageExcelPlatformEntryRecord: _baseURL + '/financialManage/excelPlatformEntryRecord',
    //平台提现审核--导出
    financialManageExcelPlatformWithdrawalAudit: _baseURL + '/financialManage/excelPlatformWithdrawalAudit',
    //总帐单列表--导出
    financialManageExcelTotalBillsTable: _baseURL + '/financialManage/excelTotalBillsTable',

    /**
     * 广告管理
     */
    //添加查询广告
    adAdd: _baseURL + '/ad/add',
    //编辑查询广告
    adEdit: _baseURL + '/ad/edit',
    //查询广告列表
    adQuery: _baseURL + '/ad/query',
    //通过Id查询广告
    adQueryById: _baseURL + '/ad/queryById',
    //修改广告状态
    adUpdate: _baseURL + '/ad/update',

    /**
     * 广告位置
     */
    //添加广告位置
    adlocationAdd: _baseURL + '/adlocation/add',
    //编辑广告位置
    adlocationEdit: _baseURL + '/adlocation/edit',
    //获取广告位置列表
    adlocationQuery: _baseURL + '/adlocation/query',
    //获取广告位置信息
    adlocationQueryById: _baseURL + '/adlocation/queryById',
    //修改广告状态
    adlocationUpdate: _baseURL + '/adlocation/update',

    /**
     * 推广企业管理
     */
    //添加企业账号
    enterpriseReferrerAdd: _baseURL + '/enterpriseReferrer/add',
    //编辑企业账号
    enterpriseReferrerEdit: _baseURL + '/enterpriseReferrer/edit',
    //企业账号列表
    enterpriseReferrerSelect: _baseURL + '/enterpriseReferrer/select',
    //通过Id企业账号
    enterpriseReferrerSelectById: _baseURL + '/enterpriseReferrer/selectById',
    //企业推广用户列表
    enterpriseReferrerSelectManage: _baseURL + '/enterpriseReferrer/selectManage',
    //修改状态
    enterpriseReferrerUpdate: _baseURL + '/enterpriseReferrer/update',

    /**
     * 问卷调查
     */
    //创建调查问题
    questionnaireAddQuestion: _baseURL + '/questionnaire/addQuestion',
    //创建调查问卷
    questionnaireAddQuestionnaire: _baseURL + '/questionnaire/addQuestionnaire',
    //用户答案列表
    questionnaireQueryAnswer: _baseURL + '/questionnaire/queryAnswer',
    //调查问题列表
    questionnaireQueryQuestion: _baseURL + '/questionnaire/queryQuestion',
    //调查问卷列表
    questionnaireQueryQuestionnaire: _baseURL + '/questionnaire/queryQuestionnaire',
    //调查问题详情
    questionnaireQuestionById: _baseURL + '/questionnaire/questionById',
    //删除问题
    questionnaireQuestionDelete: _baseURL + '/questionnaire/questionDelete',
    //修改问题
    questionnaireQuestionUpdate: _baseURL + '/questionnaire/questionUpdate',

    /**
     * 订单管理
     */
    //批量受理
    orderManageBatchAccept: _baseURL + '/orderManage/batchAccept',
    //操作订单状态
    orderManageOperationOrderStatus: _baseURL + '/orderManage/operationOrderStatus',
    //储值卡订单状态操作(发货，取消)
    orderManageOperationPrepaidOrderStatus: _baseURL + '/orderManage/operationPrepaidOrderStatus',
    //操作备注
    orderManageOperationalInfo: _baseURL + '/orderManage/operationalInfo',
    //查看
    orderManageOrderView: _baseURL + '/orderManage/orderView',
    //商城订单/两小时订单
    orderManageQueryMallOrders: _baseURL + '/orderManage/queryMallOrders',
    //储值卡订单管理
    orderManageQueryPrepaidOrder: _baseURL + '/orderManage/queryPrepaidOrder',
    //商城订单/两小时订单--导出
    orderManageExcelMallOrders: _baseURL + '/orderManage/excelMallOrders',
    //储值卡订单管理--导出
    orderManageExcelPrepaidOrder: _baseURL + '/orderManage/excelPrepaidOrder',

    /**
     * 促销管理
     */
    //添加优惠券
    couponAddCoupon: _baseURL + '/coupon/addCoupon',
    //添加优惠券分类
    couponAddCouponType: _baseURL + '/coupon/addCouponType',
    //编辑优惠券分类
    couponEditCouponType: _baseURL + '/coupon/editCouponType',
    //优惠券列表
    couponQueryCoupon: _baseURL + '/coupon/queryCoupon',
    //优惠券使用情况列表
    couponQueryCouponNumber: _baseURL + '/coupon/queryCouponNumber',
    //优惠券分类列表
    couponQueryCouponType: _baseURL + '/coupon/queryCouponType',
    //通过Id获取优惠券分类
    couponQueryCouponTypeById: _baseURL + '/coupon/queryCouponTypeById',
    //发劵管理列表
    couponSendCoupon: _baseURL + '/coupon/sendCoupon',
    //优惠券详情
    couponQueryCouponById: _baseURL + '/coupon/queryCouponById',

    /**
     * 短信管理
     */
    //添加短信提醒
    smsAddSmsNotice: _baseURL + '/sms/addSmsNotice',
    //审核
    smsAuditSms: _baseURL + '/sms/auditSms',
    //删除短信提醒
    smsDeleteSmsNotice: _baseURL + '/sms/deleteSmsNotice',
    //定时任务检测列表
    smsQueryCrontabLog: _baseURL + '/sms/queryCrontabLog',
    //短信列表
    smsQueryRedsendlog: _baseURL + '/sms/queryRedsendlog',
    //信息提醒列表
    smsQuerySmsNotice: _baseURL + '/sms/querySmsNotice',
    //获取短信提醒
    smsQuerySmsNoticeById: _baseURL + '/sms/querySmsNoticeById',
    //发红包或者短信
    smsSendSms: _baseURL + '/sms/sendSms',
    //编辑短信提醒
    smsUpdateSmsNotice: _baseURL + '/sms/updateSmsNotice',
    //修改短信提醒状态
    smsUpdateSmsNoticeStatus: _baseURL + '/sms/updateSmsNoticeStatus',

    /**
     * 登录日志
     */
    //查询登录日志列表
    adminLogList: _baseURL + '/admin/logList',


    // 企业订单接口 
    enterpriseList: _baseURLOrder + '/enterprise/list',
    // 渠道列表
    enterpriseSpread: _baseURLOrder + '/enterprise/spread',
    // 结算
    enterpriseSettlement: _baseURLOrder + '/enterprise/settlement',
    // 财务
    enterpriseListFinance: _baseURLOrder + '/enterprise/list/Finance',
    // 审核
    enterpriseListAssessor: _baseURLOrder + '/enterprise/list/Assessor',
    // 运营
    enterpriseListOperation: _baseURLOrder + '/enterprise/list/Operation',
    // 客服
    enterpriseAdvisor: _baseURLOrder + '/enterprise/advisor',

  }
  var _api = new Api();

  exports("api",_api)
});