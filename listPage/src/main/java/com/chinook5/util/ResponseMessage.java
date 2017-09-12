package com.chinook5.util;

/**
 * Created by Mori on 2017/2/22.
 */
public class ResponseMessage {

    public static final String SUCCESS = "success";
    public static final String SAVE_SUCCESS = "保存成功！";
    public static final String PRODUCT_COPY_SUCCESS = "商品复制成功！";
    public static final String PRODUCT_COPY_ERROR = "商品复制失败，请稍后再试！";
    public static final String DELETE_SUCCESS = "删除成功！";
    public static final String IMPORT_SUCCESS = "导入成功！";
    public static final String ERROR = "系统繁忙，请稍后再试";
    public static final String SAVE_RELATE_ERROR = "相关商品均已添加过。";
    public static final String SAVE_PRODUCT_GROUP_ERROR = "所选商品均已添加过本套装。";
    public static final String SAVE_PRODUCT_CONSONLISATION_ERROR = "所选商品均已添加过本组合。";
    public static final String DB_ERROR = "Access to database failed.";
    public static final String LOGIN_ERROR = "用户名或密码错误。";
    public static final String LOGIN_SUCCESS = "登录成功。";
    public static final String CODE_ERROR = "编码已存在,请重新输入。";
    public static final String CODE_SUCCESS = "编码输入正确。";
    public static final String REPEAT_SUBMIT = "请求已提交，请等待。";
    public static final String REPEAT_PASSWORD_ERROR = "密码重置错误，请稍后再试。";
    public static final String REPEAT_PASSWORD_SUCCESS = "密码重置成功。";
    public static final String WAREHOUSE_NAME = "仓库名称已经存在。";
    public static final String ITEM_OWNER_ERROR = "货主名称已经存在。";
    public static final String NAME_DUPLICATE_ERROR = "名称已存在,请重新输入。";
    public static final String NAME_DUPLICATE_SUCCESS = "名称输入正确。";
    public static final String ATTRIBUTE_GROUP_DETAIL_ERROR = "该属性组合已存在，无需重复添加。";
    public static final String SPEC_GROUP_DETAIL_ERROR = "该规格名称已存在，无需重复添加。";
    public static final String PRODUCT_SUK_ERROR = "SKU已存在,请重新输入。";
    public static final String PRODUCT_BARCODE_ERROR = "条形码已存在,请重新输入。";
    public static final String PACKAGE_TYPE_CONVERSION_ERROR = "该包装类型已存在,请重新选择包装类型。";
    public static final String PRODUCT_STORE_ERROR = "该代理控制已存在,请重新选择商城。";
    public static final String PRODUCT_PRICE_ERROR = "当前商城本商品的该销售渠道已设置,请重新选择销售渠道。";
    public static final String PRODUCT_SPEC_ERROR = "该规格参数已存在,请重新选择规格参数。";
    public static final String ATTRIBUTE_VALUE_ERROR = "该属性组合已存在,请重新选择相关属性。";
    public static final String CONSOLIDATION_NAME_ERROR = "该商品组合已存在,请重新输入。";
    public static final String CONSOLIDATION_PRODUCT_ERROR = "该商品已添加过商品组合,请重新选择。";
    public static final String INQUIRY_PRODUCT_ERROR = "该询价单的商品已经存在。";
    public static final String SYSTEM_USER_LOGINID_ERROR = "该用户登录名称已经存在。";
    public static final String SYSTEM_USER_ACCESS_RIGHT_ERROR = "请至少选择一个菜单。";
    public static final String PRODUCT_ERROR = "该商品已经存在。";
    public static final String DETACH_ORDER_QUANTITY_MORE_THAN_ZERO = "发货数量必须大于0。";
    public static final String DETACH_ORDER_QUANTITY_LESS_THAN_QUANTITY_LEFT = "发货数量必须小于等于可拆数量。";
    public static final String DETACH_ORDER_QUANTITY_LESS_THAN_QUANTITY_AVAILABLE = "发货数量必须小于等于仓库可用库存。";
    public static final String ORDER_NO_AUDITED = "该订单未审核。";
    public static final String ORDER_NO_SETTING_PRICE_COST = "该订单中有商品未设置成本价。";
    public static final String ORDER_NO_PRODUCT = "该订单没有商品。";
    public static final String NO_SETTING_PRICE_COST = "未设置商品成本价。";
    public static final String NO_STORAGE = "库存不足。";
    public static final String PRODUCT_EXISTS_ERROR = "选择的商品已经存在，请选择其他商品。";
    public static final String CHARGE_TARIFF_DETAIL_WEIGHT_UPTO_EXISTS= "该重量上限已存在";
    public static final String CHARGE_TARIFF_ZONE_EXISTS_ERROR = "选择的区域已经存在，请选择其他区域。";
    public static final String CHARGE_TARIFF_ZONE_EXISTS_SUCCESS= "选择的区域有效";
    public static final String CLOSE_SUCCESS= "关闭成功。";
    public static final String ORDER_TROUBLE_STATUS_ERROR= "该问题订单已解决。";
    public static final String TRANSFER_CHECK_OUT_CANCEL_ERROR= "该出库单对应的移库入库单已经入库，不能取消。";
    public static final String TRANSFER_CHECK_OUT_CONFIRMATION_ERROR= "该出库单对应的移库入库单已经取消，不能出库。";
    public static final String CUSTOMER_BALANCE_ADJUSTMENT= "输入的金额要小于该用户的余额(金币/经验)";

    public static final String REDPACKET_ERROR_SYSTEM_ERROR = "红包创建失败：系统内部错误";
    public static final String REDPACKET_ERROR_NO_APPOINT_CUSTOMER_SEND = "红包创建错误：没有选择指定的发放用户";
    public static final String REDPACKET_ERROR_BIND_CUSTOMER_ERROR = "红包创建错误：绑定发放用户失败";
    public static final String REDPACKET_ERROR_NO_APPOINT_GROUP_RED_PACKET_CUSTOMER = "红包创建错误：没有选择指定群红包分享的用户";
    public static final String REDPACKET_ERROR_NO_APPOINT_CATEGORY_SEND = "红包创建错误：没有选择指定的发放商品类型";
    public static final String REDPACKET_ERROR_BIND_CATEGORY_ERROR = "红包创建错误：绑定发放商品类型失败";
    public static final String REDPACKET_ERROR_NO_APPOINT_PRODUCT_SEND = "红包创建错误：没有选择指定发放红包的商品";
    public static final String REDPACKET_ERROR_BIND_PRODUCT_ERROR = "红包创建错误：绑定发放商品失败";
    public static final String REDPACKET_ERROR_NO_APPOINT_CATEGORY_USE = "红包创建错误：没有选择指定使用红包的商品类型";
    public static final String REDPACKET_ERROR_BIND_CATEGORY_USE_ERROR = "红包创建错误：绑定可以使用红包的商品类型失败";
    public static final String REDPACKET_ERROR_NO_APPOINT_PRODUCT_USE = "红包创建错误：没有选择指定使用红包的商品";
    public static final String REDPACKET_ERROR_BIND_PRODUCT_USE_ERROR = "红包创建错误：绑定可以使用红包的商品失败";

    public static final String COMMISSION_NO_THIS_COMMISSION_ORDER = "佣金订单错误：此佣金分成订单不存在";
    public static final String COMMISSION_DIVIDE_ERROR = "佣金订单错误：此佣金订单分成失败";
    public static final String COMMISSION_DIVIDE_ALL_ERROR = "佣金订单错误：目前系统中没有可以分成的佣金订单";
    public static final String COMMISSION_DIVIDE_ERROR_UPDATE_ERROR = "佣金订单错误：佣金订单状态更新失败";

    public static final String COMMISSION_CONFIG_SETTING_ERROR = "佣金比例设置提示:该商品所属的一级分类还未保存佣金比例设置，请先去保存佣金比例设置";
    public static final String COMMISSION_CONFIG_SETTING_SUCCESS = "佣金比例设置提示:已保存该商品类别的佣金比例设置，可以正常上架";

    public static final String INVOICE_DETAIL_SAVE_ERROR = "生成账单错误:保存账单明细出错，请重新生成";
    public static final String INVOICE_HEADER_SAVE_ERROR = "生成账单错误:保存账单出错，请重新生成";
    public static final String PRODUCT_IS_CONSOLIDATION = "本商品是组合商品";
    public static final String PRODUCT_IS_NOT_CONSOLIDATION = "本商品不是组合商品";

    public static final String CLEARANCE_ERROR_BY_CREATE_INVOICE = "清账错误：差异处理，生成新账单出错.";
    public static final String CLEARANCE_ERROR_BY_SAVE_CLEARANCE = "清账错误：保存清账单出错.";
    public static final String CLEARANCE_ERROR_BY_SAVE_CLEARANCE_DETAIL = "清账错误：保存清账单明细出错.";
    public static final String CLEARANCE_ERROR_BY_SAVE_CLEARANCE_INVOICE = "清账错误：更新账单信息出错，不存在该账单.";
    public static final String CLEARANCE_ERROR_BY_SAVE_CLEARANCE_STORE = "清账错误：更新商城资金变动信息出错.";

    public static final String PRE_STEP_VERIFY_MOBILE_ERROR = "上一步手机号验证错误。";
    public static final String VERIFY_CODE_SUCCESS = "验证码输入正确。";
    public static final String VERIFY_CODE_ERROR = "验证码输入错误。";
    public static final String VERIFY_MOBILE_SUCCESS = "手机号可用。";
    public static final String VERIFY_MOBILE_ALREADY_REGISTER = "该手机号已经被注册。";
    public static final String VERIFY_CUSROMER_NOT_EXISTS = "该用户不存在。";

    public static final String INSERT_CART_SUCCESS = "该商品已添加到购物车。";
}
