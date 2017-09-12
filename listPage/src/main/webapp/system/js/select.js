//默认异步提交
function getSalesChannelForSpinner(ctrlID, selectVal, isViewAll) {
    getSyncSalesChannelForSpinner(ctrlID, selectVal, isViewAll, true);
}
//isAsync，false同步，true异步
function getSyncSalesChannelForSpinner(ctrlID, selectVal, isViewAll, isAsync) {
    $.ajax({
        url: basePath + "ba/sales_channel/getSalesChannelForSpinner",
        type: "post",
        async: isAsync,
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.sales_channel_id + "'>" + item.sales_channel_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择销售渠道--"});
        }
    });
}

//会员分组下拉列表
function getCustomerGroupListForSpinner(ctrlID, selectVal, isViewAll) {
    getSyncCustomerGroupListForSpinner(ctrlID, selectVal, isViewAll, true);
}
function getSyncCustomerGroupListForSpinner(ctrlID, selectVal, isViewAll, isAsync) {
    $.ajax({
        url: basePath + "sh/customer_group/getCustomerGroupListForSpinner",
        type: "post",
        async: isAsync,
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.customer_group_id + "'>" + item.group_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择会员分组--"});
        }
    });
}

function getStoreListForSpinner(ctrlID, selectVal, isViewAll) {
    getSyncStoreListForSpinner(ctrlID, selectVal, isViewAll, true);
}
function getSyncStoreListForSpinner(ctrlID, selectVal, isViewAll, isAsync) {
    $.ajax({
        url: basePath + "ba/store/getStoreListForSpinner",
        type: "post",
        async: isAsync,
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.store_id + "'>" + item.store_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择商城--"});
        }
    });
}
//获取入库单状态
function getCheckInStatusForSpinner(ctrlID, selectVal, isViewAll, isAsync) {
    $.ajax({
        url: basePath + "ba/status/getCheckInStatusForSpinner",
        type: "post",
        async: isAsync,
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.status_id + "'>" + item.status_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择入库单状态--"});
        }
    });
}

function getStoreGroupListForSpinner(ctrlID, selectVal, isViewAll) {
    getSyncStoreGroupListForSpinner(ctrlID, selectVal, isViewAll, true);
}
function getSyncStoreGroupListForSpinner(ctrlID, selectVal, isViewAll, isAsync) {
    $.ajax({
        url: basePath + "ba/store_group/getStoreGroupListForSpinner",
        type: "post",
        async: isAsync,
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.store_group_id + "'>" + item.group_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择商城分组--"});
        }
    });
}
function getOrderStatusForSpinner(ctrlID, selectVal, isViewAll) {
    $.ajax({
        url: basePath + "ba/status/getOrderStatusForSpinner",
        type: "post",
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.status_id + "'>" + item.status_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择订单状态--"});
        }
    });
}
function getOrderPaymentStatusForSpinner(ctrlID, selectVal, isViewAll) {
    $.ajax({
        url: basePath + "ba/status/getOrderPaymentStatusForSpinner",
        type: "post",
        async : false,
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.status_id + "'>" + item.status_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择付款状态--"});
        }
    });
}
function getDeliveryStatusForSpinner(ctrlID, selectVal, isViewAll) {
    $.ajax({
        url: basePath + "ba/status/getDeliveryStatusForSpinner",
        type: "post",
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.status_id + "'>" + item.status_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择配送状态--"});
        }
    });
}
function getSyncOrderAuditStatusForSpinner(ctrlID, selectVal, isViewAll,isAsync) {
    $.ajax({
        url: basePath + "ba/status/geOrderAuditStatusForSpinner",
        type: "post",
        async : isAsync,
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.status_id + "'>" + item.status_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择订单审核状态--"});
        }
    });
}
function getOrderAuditStatusForSpinner(ctrlID, selectVal, isViewAll) {
    getSyncOrderAuditStatusForSpinner(ctrlID, selectVal, isViewAll,true);
}
function getCountryForSpinner(ctrlID, selectVal, isViewAll) {
    $.ajax({
        url: basePath + "ba/country/getCountryForSpinner",
        type: "post",
        async:false,
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.country_id + "'>" + item.short_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择国家--"});
        }
    });
}


function getStateForSpinner(ctrlID, selectVal, countryID,isDefaultChina) {
    if(isDefaultChina == undefined){
        isDefaultChina = false;
    }
    $.ajax({
        url: basePath + "ba/state/getStateForSpinner",
        type: "post",
        data: {"countryID": countryID,"isDefaultChina":isDefaultChina},
        async:false,
        success: function (data) {
            $("#" + ctrlID + "").empty();
            if (data.length == 0) {
                $("#" + ctrlID + "").append("<option value=''></option>");
                $("#" + ctrlID + "").select2({placeholder: "--请选择省份--"});
                return;
            }
            if (data.length > 1) {
                $("#" + ctrlID + "").append("<option value=''></option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.state_id + "'>" + item.state_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            } else {
                if (data.length == 1) {
                    $("#" + ctrlID + "").change();
                }
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择省份--"});
        }
    });
}

function getCityForSpinner(ctrlID, selectVal, stateID) {
    $.ajax({
        url: basePath + "ba/city/getCityForSpinner",
        type: "post",
        data: {stateID: stateID},
        success: function (data) {
            $("#" + ctrlID + "").empty();
            if (data.length == 0) {
                $("#" + ctrlID + "").append("<option value=''></option>");
                $("#" + ctrlID + "").select2({placeholder: "--请选择城市--"});
                return;
            }
            if (data.length > 1) {
                $("#" + ctrlID + "").append("<option value=''></option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.city_id + "'>" + item.city_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            } else {
                if (data.length == 1) {
                    $("#" + ctrlID + "").change();
                }
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择城市--"});
        }
    });
}

function getDistrictForSpinner(ctrlID, selectVal, cityID) {
    $.ajax({
        url: basePath + "ba/district/getDistrictForSpinner",
        type: "post",
        async:false,
        data: {cityID: cityID},
        success: function (data) {
            $("#" + ctrlID + "").empty();
            if (data.length == 0) {
                $("#" + ctrlID + "").append("<option value=''></option>");
                $("#" + ctrlID + "").select2({placeholder: "--请选择县区--"});
                return;
            }
            if (data.length > 1) {
                $("#" + ctrlID + "").append("<option value=''></option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.district_id + "'>" + item.district_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择县区--"});
        }
    });
}

/*常见问题选择列表*/
function getFaqTypeListForSpinner(ctrlID, selectVal, isViewAll) {
    $.ajax({
        url: basePath + "cs/faq/getFAQTypeListForSpinner",
        type: "post",
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.faq_type_id + "'>" + item.faq_type_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择问题类型--"});
        }
    });
}

/*货币类型选择列表*/
function getCurrencyListForSpinner(currencyID, selectVal, isViewAll) {
    $.ajax({
        url: basePath + "ba/currency/getCurrencyListForSpinner",
        type: "post",
        async:false,
        success: function (data) {
            $("#" + currencyID + "").empty();
            $("#" + currencyID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + currencyID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + currencyID + "").append("<option value='" + item.currency_id + "'>" + item.currency_code + "</option>")
            });
            if (selectVal != "") {
                $("#" + currencyID + "").val(selectVal);
            }
            $("#" + currencyID + "").select2({placeholder: "--请选择货币类型--"});
        }
    });
}
function getAsyncCurrencyListForSpinner(currencyID, selectVal, isViewAll,isAsync) {
    $.ajax({
        url: basePath + "ba/currency/getCurrencyListForSpinner",
        type: "post",
        async:isAsync,
        success: function (data) {
            $("#" + currencyID + "").empty();
            $("#" + currencyID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + currencyID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + currencyID + "").append("<option value='" + item.currency_id + "'>" + item.currency_code + "</option>")
            });
            if (selectVal != "") {
                $("#" + currencyID + "").val(selectVal);
            }
            $("#" + currencyID + "").select2({placeholder: "--请选择货币类型--"});
        }
    });
}

/*配送方式选择列表*/
function getDeliveryTypeListForSpinner(deliveryTypeID, selectVal, isViewAll) {
    $.ajax({
        url: basePath + "ba/delivery_type/getDeliveryTypeListForSpinner",
        type: "post",
        async: false,
        success: function (data) {
            $("#" + deliveryTypeID + "").empty();
            $("#" + deliveryTypeID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + deliveryTypeID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + deliveryTypeID + "").append("<option value='" + item.delivery_type_id + "'>" + item.delivery_type_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + deliveryTypeID + "").val(selectVal);
            }
            $("#" + deliveryTypeID + "").select2({placeholder: "--请选择配送方式--"});
        }
    });
}
function getAsyncDeliveryTypeListForSpinner(deliveryTypeID, selectVal, isViewAll,isAsync) {
    $.ajax({
        url: basePath + "ba/delivery_type/getDeliveryTypeListForSpinner",
        type: "post",
        async:isAsync,
        success: function (data) {
            $("#" + deliveryTypeID + "").empty();
            $("#" + deliveryTypeID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + deliveryTypeID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + deliveryTypeID + "").append("<option value='" + item.delivery_type_id + "'>" + item.delivery_type_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + deliveryTypeID + "").val(selectVal);
            }
            $("#" + deliveryTypeID + "").select2({placeholder: "--请选择配送方式--"});
        }
    });
}

/*结账方式选择列表*/
function getPaymentTermsForSpinner(ctrlID, selectVal) {
    $.ajax({
        url: basePath + "ba/payment_terms/getPaymentTermsForSpinner",
        type: "post",
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.payment_terms_id + "'>" + item.payment_terms_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择结账方式--"});
        }
    });
}

function getParentCategoryForSpinner(ctrlID, selectVal) {
    $.ajax({
        url: basePath + "ba/category/getParentCategoryForSpinner",
        type: "post",
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option><option value='0'>设置为父级菜单</option>");
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.category_id + "'>" + item.category_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择父级菜单--"});
        }
    });
}
<!--获取商品分类下拉列表-->
function getCategoryForSpinner(ctrlID, selectVal, isViewAll) {
    $.ajax({
        url: basePath + "ba/category/getCategoryForSpinner",
        type: "post",
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.category_id + "'>" + item.category_name + "</option>");
                $.each(item.children, function (i, item) {
                    $("#" + ctrlID + "").append("<option value='" + item.category_id + "'>&nbsp;&nbsp;" + item.category_name + "</option>");
                });
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择分类名称--"});
        }
    });
}

/**
 *  选择商品分类禁用一级分类选择功能
 * @param ctrlID
 * @param selectVal
 * @param isViewAll
 */
function getCategoryForSpinnerDisableTopCategory(ctrlID, selectVal, isViewAll) {
    $.ajax({
        url: basePath + "ba/category/getCategoryForSpinner",
        type: "post",
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                var str = "<option disabled> " + item.category_name + "</option>";
                $.each(item.children, function (i, item){
                    str += "<option value='" + item.category_id + "'>&nbsp;&nbsp;" + item.category_name + "</option>";
                });
                $("#" + ctrlID + "").append(str);
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择分类名称--"});
        }
    });
}

/**
 * 根据商城id销售渠道获取广告位置
 * @param basePath
 * @param ctrlID
 * @param storeID
 * @param salesChannelID
 * @param selectVal
 * @param isAsync
 */
function getAdvPositionStoreForSpinner(ctrlID, storeID, salesChannelID, selectVal, isViewAll, isAsync) {

    var store_id = $("#" + storeID).val();
    var sales_channel_id = $("#" + salesChannelID).val();
    $.ajax({
        url: basePath + "ba/adv_position/get_adv_position_store",
        type: "post",
        async: isAsync,
        data: {
            "storeID": store_id,
            "salesChannelID": sales_channel_id
        },
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.adv_position_id + "'>" + item.position_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择广告位置--"});
        }
    });
}

function getAttributeForSpinner(ctrlID, selectVal) {
    $.ajax({
        url: basePath + "ba/attribute/getAttributeForSpinner",
        type: "post",
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.attribute_id + "'>" + item.attribute_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择商品属性--"});
        }
    });
}
/*公告等级下拉选择列表*/
function getNoticeLevelForSpinner(ctrlID, selectVal,isViewAll) {
    $.ajax({
        url: basePath + "cs/notice_level/getNoticeLevelListForSpinner",
        type: "post",
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.notice_level_id + "'>" + item.notice_level_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择公告等级--"});
        }
    });

}
/*公告状态下拉选择列表getNoticeStatusForSpinner*/
function getNoticeStatusForSpinner(ctrlID, selectVal,isViewAll) {
    $.ajax({
        url: basePath + "ba/status/getNoticeStatusForSpinner",
        type: "post",
        success: function (data) {

            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.status_id + "'>" + item.status_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择公告状态--"});
        }
    });
}
/*盘点单状态下拉选择列表getInvCheckStatusForSpinner*/
function getInvCheckStatusForSpinner(ctrlID, selectVal,isAsync,isViewAll) {
    $.ajax({
        url: basePath + "ba/status/getInvCheckStatusForSpinner",
        type: "post",
        async: isAsync,
        success: function (data) {

            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.status_id + "'>" + item.status_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择盘点单状态--"});
        }
    });
}
/*调整单状态下拉选择列表getInvAdjustStatusForSpinner*/
function getInvAdjustStatusForSpinner(ctrlID, selectVal,isAsync,isViewAll) {
    $.ajax({
        url: basePath + "ba/status/getInvAdjustStatusForSpinner",
        type: "post",
        async: isAsync,
        success: function (data) {

            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.status_id + "'>" + item.status_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择盘点单状态--"});
        }
    });
}
function getAttributeGroupForSpinner(ctrlID, selectVal) {
    $.ajax({
        url: basePath + "ba/attribute_group/getAttributeGroupForSpinner",
        type: "post",
        success: function (data) {

            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.attribute_group_id + "'>" + item.attribute_group_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择属性组合--"});
        }
    });
}

function getAttributeGroupDetailForSpinner(ctrlID, parentVal, attributeVal) {
    $.ajax({
        url: basePath + "ba/attribute_group_detail/getAttributeGroupDetailForSpinner",
        type: "post",
        data: {
            "attributeGroupID": parentVal
        },
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $.each(data, function (i, item) {
                var div = "<div class='form-group'><label class='col-sm-2 control-label'>" + item.attribute_name + "：</label> " +
                    "<div class='col-sm-3'><select tip='请选择属性' id='" + item.attribute_code + "' name='attributeID' class='col-md-12 validate'><option value=''></option>";
                $.each(item.attributeNames, function (e, attribute) {
                    div += "<option value='" + attribute.attribute_group_detail_id + "'>" + attribute.attribute_value + "</option>";
                });
                div += "</select></div></div>";
                $("#" + ctrlID + "").append(div);
                if (attributeVal != null) {
                    if (attributeVal[i] != "") {
                        $("#" + item.attribute_code + "").val(attributeVal[i]);
                    }
                }
                $("#" + item.attribute_code + "").select2({placeholder: "--请选择属性--"});
            });
        }
    });
}
<!--获取供应商的下拉菜单-->
function getSupplierForSpinner(ctrlID, selectVal, isViewAll, isAsync) {
    $.ajax({
        url: basePath + "pu/supplier/get_supplier",
        type: "post",
        async: isAsync,
        data: {},
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.supplier_id + "'>" + item.supplier_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择供应商--"});
        }
    });
}
<!--获取询价单状态-->
function getInquiryStatusForSpinner(ctrlID, selectVal, isViewAll, isAsync) {
    $.ajax({
        url: basePath + "ba/status/getInquiryStatusForSpinner",
        type: "post",
        async: isAsync,

        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.status_id + "'>" + item.status_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择询价单状态--"});
        }
    });
}
<!--获取采购单状态的下拉菜单-->
function getPurchaseStatusForSpinner(ctrlID, selectVal, isViewAll, isAsync) {
    $.ajax({
        url: basePath + "ba/status/getPurchaseStatusForSpinner",
        type: "post",
        async: isAsync,
        data: {},
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.status_id + "'>" + item.status_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择采购单状态--"});
        }
    });
}
<!--获取登录用户所在仓库的货主-->
function getItemOwnerForSpinner(ctrlID, selectVal, isViewAll, isAsync) {
    $.ajax({
        url: basePath + "wa/item_owner/getItemOwnerForSpinner",
        type: "post",
        async: isAsync,
        data: {},
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.item_owner_id + "'>" + item.item_owner_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择货主--"});
        }
    });
}
<!--获取入库方式-->
function getAccessModeINForSpinner(ctrlID, selectVal, isViewAll, isAsync) {
    $.ajax({
        url: basePath + "wa/access_mode/getAccessModeINForSpinner",
        type: "post",
        async: isAsync,
        data: {},
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.access_mode_id + "'>" + item.access_mode_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择入库方式--"});
        }
    });
}
<!--获取出库方式-->
function getAccessModeOUTForSpinner(ctrlID, selectVal, isViewAll, isAsync) {
    $.ajax({
        url: basePath + "wa/access_mode/getAccessModeOUTForSpinner",
        type: "post",
        async: isAsync,
        data: {},
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.access_mode_id + "'>" + item.access_mode_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择出库方式--"});
        }
    });
}
<!--获取包装类型下拉菜单-->
function getPackageTypeForSpinner(ctrlID, selectVal, isViewAll) {
    $.ajax({
        url: basePath + "ba/package_type/getPackageTypeForSpinner",
        type: "post",
        async: false,
        success: function (data) {
            $("#" + ctrlID + "").empty();
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''></option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.package_type_id + "'>" + item.package_type_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择包装类型--"});
            if (ctrlID == "packageTypeID" && selectVal != "") {
                $("#" + ctrlID + "").attr("disabled", "disabled");
            }
        }
    });
}
<!--根据商品id获取包装类型下拉菜单-->
function getPackageTypeByProductIDForSpinner(ctrlID, productID, selectVal, isViewAll, isAsync) {
    $.ajax({
        url: basePath + "ba/package_type_conversion/getPackageTypeByProductIDForSpinner",
        type: "post",
        async: isAsync,
        data: {"productID": productID},
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.package_type_id + "'>" + item.package_type_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择包装类型--"});
        }
    });
}
<!--获取采购单类型下拉菜单-->
function getPurchaseTypeForSpinner(ctrlID, selectVal, isViewAll, isAsync) {
    $.ajax({
        url: basePath + "pu/purchase/purchase_type",
        type: "post",
        async: isAsync,
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.purchase_type_id + "'>" + item.purchase_type_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择采购类型--"});
        }
    });
}
function getAdvPositionForSpinner(ctrlID, selectVal, isViewAll, isAsync) {
    $.ajax({
        url: basePath + "ba/adv_position/get_adv_position",
        type: "post",
        async: isAsync,
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.adv_position_id + "'>" + item.position_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择广告位置--"});
        }
    });
}

function getWarehouseUserForSpinner(ctrlID, selectVal, isViewAll, isAsync) {
    $.ajax({
        url: basePath + "ba/system/user/getWarehouseUserForSpinner",
        type: "post",
        async: isAsync,
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.system_user_id + "'>" + item.name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择操作人--"});
        }
    });
}
/*系统下拉选择列表*/
function getSystemForSpinner(ctrlID, selectVal, isViewAll) {
    $.ajax({
        url: basePath + "ba/system/getSystemListForSpinner",
        type: "post",
        async: false,
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.system_id + "'>" + item.system_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择系统--"});
        }
    });
}
/*角色下拉选择列表*/
function getRoleForSpinner(ctrlID, selectVal) {
    $.ajax({
        url: basePath + "ba/system/role/getSystemRoleListForSpinner",
        type: "post",
        success: function (data) {

            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option><option value=''> 查看全部</option>");
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.system_role_id + "'>" + item.role_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择角色--"});
        }
    });
}
/*仓库下拉选择列表getWarehouseListForSpinner*/
function getWarehouseListForSpinner(ctrlID, selectVal, isViewAll) {
    $.ajax({
        url: basePath + "ba/warehouse/getWarehouseListForSpinner",
        type: "post",
        async: false,
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>")
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.warehouse_id + "'>" + item.warehouse_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择仓库--"});
        }
    });
}

/*规格参数*/
function getSpecForSpinner(ctrlID, selectVal) {
    $.ajax({
        url: basePath + "ba/spec/getSpecForSpinner",
        type: "post",
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.spec_id + "'>" + item.spec_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择规格参数--"});
        }
    });
}
/*管理员状态*/
function getSystemUserStatusForSpinner(ctrlID, selectVal) {
    $.ajax({
        url: basePath + "ba/status/getSystemUserStatusForSpinner",
        type: "post",
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.status_id + "'>" + item.status_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择规格参数--"});
        }
    });
}
/*管理员级别*/
function getSystemUserAccessRightForSpinner(ctrlID, selectVal) {
    $.ajax({
        url: basePath + "ba/system/user/getSystemUserAccessRightForSpinner",
        type: "post",
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.system_user_access_right_id + "'>" + item.access_right_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择规格参数--"});
        }
    });
}


/*会员VIP等级下拉列表*/
function getCustomerVipLevelForSpinner(ctrlID, selectVal, isViewAll) {
    $.ajax({
        url: basePath + "sh/customer_vip_level/getCustomerVipLevelForSpinner",
        type: "post",
        async: true,
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''>查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.customer_vip_level_id + "'>" + item.vip_level_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择会员VIP等级--"});
        }
    });
}
/**
 * 所有的客服人员
 * @param basePath
 * @param ctrlID
 * @param selectVal
 * @param isViewAll
 */
function getCsSystemUserForSpinner(ctrlID, selectVal, isViewAll) {
    $.ajax({
        url: basePath + "ba/system/user/csSystemUserForSpinner",
        type: "post",
        datatype: "json",
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''>查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.system_user_id + "'>" + item.login_id + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择操作者--"});
        }
    });
}
function getEventListForSpinner(ctrlID, selectVal, isViewAll) {
    $.ajax({
        url: basePath + "ba/event_master/spinner",
        type: "post",
        datatype: "json",
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''>查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.event_id + "'>" + item.event_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择事件--"});
        }
    });
}

/**
 * 获取品牌下拉列表
 */
function getBrandForSpinner(ctrlID, selectVal, isViewAll) {
    $.ajax({
        url: basePath + "ba/brand/getBrandForSpinner",
        type: "post",
        datatype: "json",
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''>查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.brand_id + "'>" + item.brand_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择品牌--"});
        }
    });
}

/**
 * 获取制造商下拉列表
 */
function getManufacturerForSpinner(ctrlID, selectVal, isViewAll) {
    $.ajax({
        url: basePath + "ba/manufacturer/getManufacturerForSpinner",
        type: "post",
        datatype: "json",
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''>查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.manufacturer_id + "'>" + item.manufacturer_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择制造商--"});
        }
    });
}

/**
 * 根据系统ID获取相关角色列表
 */
function getSystemRoleListBySystemIdForSpinner(ctrlID, selectVal, isViewAll, systemID) {
    $.ajax({
        url: basePath + "ba/system/role/getSystemRoleListBySystemIDForSpinner",
        type: "post",
        data: {systemID: Number(systemID)},
        datatype: "json",
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''>查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.system_role_id + "'>" + item.role_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择角色--"});
        }
    });
}

/*支付类型下拉列表*/
function getPaymentModeForSpinner(ctrlID, selectVal, isViewAll) {
    $.ajax({
        url: basePath + "ba/payment_mode/getPaymentModeForSpinner",
        type: "post",
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''>查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.payment_mode_id + "'>" + item.payment_mode_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择支付类型--"});
        }
    });
}


/*发货方下拉列表*/
function getShipperForSpinner(ctrlID, selectVal, isViewAll) {
    $.ajax({
        url: basePath + "ba/shipper/getShipperForSpinner",
        type: "post",
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''>查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.shipper_id + "'>" + item.shipper_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择发货方--"});
        }
    });
}
/*团购状态下拉列表*/
function getGroupBuyingStatusForSpinner(ctrlID, selectVal) {
    $.ajax({
        url: basePath + "ba/status/getGroupBuyingStatusForSpinner",
        type: "post",
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            $("#" + ctrlID + "").append("<option value=''>查看全部</option>");
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.status_id + "'>" + item.status_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择团购状态--"});
        }
    });
}
/*代理团购小团状态下拉列表*/
function getGroupBuyingOrderStatusForSpinner(ctrlID, selectVal) {
    $.ajax({
        url: basePath + "ba/status/getGroupBuyingOrderStatusForSpinner",
        type: "post",
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            $("#" + ctrlID + "").append("<option value=''>查看全部</option>");
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.status_id + "'>" + item.status_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择团购状态--"});
        }
    });
}

/**
 * 获取红包发放类型下拉列表
 * @param ctrlID
 * @param selectVal
 * @param isViewAll
 */
function getRedPacketTypeForSpinner(ctrlID, selectVal, isViewAll) {
    $.ajax({
        url: basePath + "sh/red_packet_type/getRedPacketTypeForSpinner",
        type: "post",
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.redPacketTypeID + "'>" + item.redPacketTypeName + "</option>");
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择红包发放类型--"});
        }
    });
}

    /**
     * 获取红包使用类型下拉列表
     * @param ctrlID
     * @param selectVal
     * @param isViewAll
     */
    function getRedPacketConsumeTypeForSpinner(ctrlID, selectVal, isViewAll) {
        $.ajax({
            url: basePath + "sh/red_packet_consume_type/getRedPacketConsumeTypeForSpinner",
            type: "post",
            success: function (data) {
                $("#" + ctrlID + "").empty();
                $("#" + ctrlID + "").append("<option value=''></option>");
                if (isViewAll) {
                    $("#" + ctrlID + "").append("<option value=''> 查看全部</option>");
                }
                $.each(data, function (i, item) {
                    $("#" + ctrlID + "").append("<option value='" + item.redPacketConsumeTypeID + "'>" + item.redPacketConsumeTypeName + "</option>");
                });
                if (selectVal != "") {
                    $("#" + ctrlID + "").val(selectVal);
                }
                $("#" + ctrlID + "").select2({placeholder: "--请选择红包使用类型--"});
            }
        });
    }


/**
 * 获取会员等级下拉列表
 * @param ctrlID
 * @param selectVal
 * @param isViewAll
 */
function getCustomerLevelForSpinner(ctrlID, selectVal, isViewAll) {
    $.ajax({
        url: basePath + "sh/customer_level/getCustomerLevelForSpinner",
        type: "post",
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.customer_level_id + "'>" + item.level_name + "</option>");
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择会员等级--"});
        }
    });
}
/**
 * 查询出库状态列表
 * @param ctrlID
 * @param selectVal
 * @param isViewAll
 */
function getCheckOutStatusForSpinner(ctrlID, selectVal, isViewAll) {
    getSyncCheckOutStatusForSpinner(ctrlID, selectVal, isViewAll,true);
}
function getSyncCheckOutStatusForSpinner(ctrlID, selectVal, isViewAll,isAsync) {
    $.ajax({
        url: basePath + "ba/status/getCheckOutStatusForSpinner",
        type: "post",
        async: isAsync,
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.status_id + "'>" + item.status_name + "</option>");
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择出库状态--"});
        }
    });
}

/*规格参数*/
function getSpecGroupForSpinner(ctrlID, selectVal) {
    $.ajax({
        url: basePath + "ba/spec_group/getSpecGroupForSpinner",
        type: "post",
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.spec_group_id + "'>" + item.spec_group_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择规格组合--"});
        }
    });
}


/**
 * 订单问题类型
 * @param ctrlID
 * @param selectVal
 */
function getOrderTroubleTypeForSpinner(ctrlID, selectVal) {
    $.ajax({
        url: basePath + "cs/order_trouble/type/spinner",
        type: "post",
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.id + "'>" + item.name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择问题类型--"});
        }
    });
}

function getOrderTroubleStatusForSpinner(ctrlID, selectVal, isViewAll) {
    getSyncOrderTroubleStatusForSpinner(ctrlID, selectVal, isViewAll,true);
}
function getSyncOrderTroubleStatusForSpinner(ctrlID, selectVal, isViewAll,isAsync) {
    $.ajax({
        url: basePath + "ba/status/getOrderTroubleStatusForSpinner",
        type: "post",
        async: isAsync,
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.status_id + "'>" + item.status_name + "</option>");
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择问题状态--"});
        }
    });
}

/**
 * 获取status表中采购退货状态下拉列表公共方法
 * @param ctrlID        下拉列表ID
 * @param selectVal     设置选中值
 * @param isViewAll     是否显示查询全部
 * @param isAsync       同步或者异步，true异步，false 同步，有时候我们需要同步执行
 */
function getPurchaseReturnForSpinner(ctrlID,selectVal, isViewAll,isAsync) {
    $.ajax({
        url: basePath + "ba/status/getPurchaseReturnForSpinner",
        type: "post",
        async: isAsync,
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.status_id + "'>" + item.status_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择退货状态--"});
        }
    });
}
/**
 * 获取status表中公共状态下拉列表公共方法
 * @param ctrlID        下拉列表ID
 * @param selectVal     设置选中值
 * @param isViewAll     是否显示查询全部
 * @param isAsync       同步或者异步，true异步，false 同步，有时候我们需要同步执行
 */
function getCommonStatusForSpinner(ctrlID,selectVal, isViewAll,isAsync) {
    $.ajax({
        url: basePath + "ba/status/getCommonStatusForSpinner",
        type: "post",
        async: isAsync,
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.status_id + "'>" + item.status_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择状态--"});
        }
    });
}

/**
 * 获取佣金分成状态下拉列表
 * @param ctrlID
 * @param selectVal
 * @param isViewAll
 * @param isAsync
 */
function getCommissionStatusForSpinner(ctrlID,selectVal, isViewAll,isAsync) {
    $.ajax({
        url: basePath + "ba/status/getCommissionStatusForSpinner",
        type: "post",
        async: isAsync,
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.status_id + "'>" + item.status_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择佣金分成状态--"});
        }
    });
}


/**
 * 获取佣金类型下拉列表
 * @param ctrlID
 * @param selectVal
 * @param isViewAll
 * @param isAsync
 */
function getCommissionTypeForSpinner(ctrlID,selectVal, isViewAll,isAsync) {
    $.ajax({
        url: basePath + "sh/commission_type/getCommissionTypeForSpinner",
        type: "post",
        async: isAsync,
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.commission_type_id + "'>" + item.commission_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择佣金类型--"});
        }
    });
}

/**
 * 获取订单退换货类型下拉列表
 * @param ctrlID
 * @param selectVal
 * @param isViewAll
 * @param isAsync
 */
function getOrderSaleSupportReturnTypeForSpinner(ctrlID,selectVal, isViewAll,isAsync) {
    $.ajax({
        url: basePath + "sh/order_sale_support_type/getOrderSaleSupportTypeForSpinner",
        type: "post",
        async: isAsync,
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.order_sale_support_type_id + "'>" + item.support_type_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择售后类型--"});
        }
    });
}

/**
 * 获取订单退款类型下拉列表
 * @param ctrlID
 * @param selectVal
 * @param isViewAll
 * @param isAsync
 */
function getOrderRefundTypeForSpinner(ctrlID,selectVal, isViewAll,isAsync) {
    $.ajax({
        url: basePath + "sh/order_refund_type/getOrderRefundTypeForSpinner",
        type: "post",
        async: isAsync,
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.order_refund_type_id + "'>" + item.order_refund_type_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择退款方式--"});
        }
    });
}

function getOrderSaleSupportStatusForSpinner(ctrlID,selectVal, isViewAll,isAsync) {
    $.ajax({
        url: basePath + "ba/status/getOrderSaleSupportStatusForSpinner",
        type: "post",
        async: isAsync,
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.status_id + "'>" + item.status_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择退换货审核状态--"});
        }
    });
}

function getCustomerIdentityStatusForSpinner(ctrlID, selectVal, isViewAll) {
    $.ajax({
        url: basePath + "ba/status/getCustomerIdentityStatusForSpinner",
        type: "post",
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.status_id + "'>" + item.status_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择身份审核状态--"});
        }
    });
}

/**
 * 获取账单方向类型列表
 * @param ctrlID        指定下拉框
 * @param selectVal     设定选中值
 * @param isViewAll     是否显示"查看全部"
 * @param isAsync       true 同步，false 异步
 */
function getInvoiceBalanceTypeForSpinner(ctrlID, selectVal, isViewAll,isAsync) {
    $.ajax({
        url: basePath +"fi/invoice_balance_type/getInvoiceBalanceTypeForSpinner",
        type: "post",
        async: isAsync,
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.balanceTypeID + "'>" + item.balanceTypeName + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择账单方向--"});
        }
    });
}

/**
 * 获取账单方向类型列表
 * @param ctrlID        指定下拉框
 * @param selectVal     设定选中值
 * @param isViewAll     是否显示"查看全部"
 * @param isAsync       true 同步，false 异步
 */
function getInvoiceTypeForSpinner(ctrlID, selectVal, isViewAll,isAsync) {
    $.ajax({
        url: basePath +"fi/invoice_type/getInvoiceTypeForSpinner",
        type: "post",
        async: isAsync,
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.invoiceTypeID + "'>" + item.invoiceTypeName + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择账单类型--"});
        }
    });
}

/**
 * 获取账单状态下拉列表
 * @param ctrlID        指定下拉框
 * @param selectVal     设定选中值
 * @param isViewAll     是否显示"查看全部"
 * @param isAsync       true 同步，false 异步
 */
function getInvoiceStatusForSpinner(ctrlID, selectVal, isViewAll,isAsync) {
    $.ajax({
        url: basePath +"ba/status/getInvoiceStatusForSpinner",
        type: "post",
        async: isAsync,
        success: function (data) {
            $("#" + ctrlID + "").empty();
            $("#" + ctrlID + "").append("<option value=''></option>");
            if (isViewAll) {
                $("#" + ctrlID + "").append("<option value=''> 查看全部</option>");
            }
            $.each(data, function (i, item) {
                $("#" + ctrlID + "").append("<option value='" + item.status_id + "'>" + item.status_name + "</option>")
            });
            if (selectVal != "") {
                $("#" + ctrlID + "").val(selectVal);
            }
            $("#" + ctrlID + "").select2({placeholder: "--请选择账单状态--"});
        }
    });
}