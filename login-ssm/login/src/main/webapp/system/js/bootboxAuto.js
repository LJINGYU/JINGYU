/**
 * Created by Amos on 2017/3/28.
 */
var dialogs = {
    url: 'sh/product/get_product_page',
    title: '商品列表',
    isclose: true,
    storeID: '',
    sales_channel_ID: '',
    callback: null,
    isAutoCallBack: false,
    isGroupBuying: '',
    select_one: false,
    isGetPackageTypeId: false
};
function openBootBox(options) {
    $.extend(dialogs, options);
    $.get("home/products?url=" + dialogs.url + "&storeID=" + dialogs.storeID + "&sales_channel_ID=" + dialogs.sales_channel_ID + "&isGroupBuying=" + dialogs.isGroupBuying, '', function (data) {
        bootbox.dialog({
            message: data,
            title: dialogs.title,
            buttons: {
                "success": {
                    "label": "确定",
                    "className": "btn btn-primary",
                    "callback": function () {
                        if (dialogs.isAutoCallBack) {
                            dialogs.callback();
                            return dialogs.isclose;
                        } else {
                            var data = [];
                            data = saveSelectProducts(data);
                            getSelectProducts(data);
                            return dialogs.isclose;
                        }
                    }
                },
                "cancel": {
                    label: "关闭",
                    className: "btn btn-default",
                    callback: function () {
                        clearAllProduct();
                        $(".bootbox").modal("hide");
                    }
                }
            }
        });
    });
}
//检验商品选择个数
function checkProductSelect() {
    if (dialogs.select_one) {
        var $obj = $("tr.select-product");
        if($obj.length == 1){
            return false;
        }
    }
    return true;
}
function clearAllProduct() {
    $("#selectProduct td").each(function () {
        var $obj = $(this).parent();
        if ($obj.hasClass("select-product")) {
            $obj.removeClass("select-product");
            $obj.removeAttr("data-id");
        }
    });
}
/*弹框点击确定保存函数*/
function saveSelectProducts(data) {
    var obj = null;
    $("#selectProduct tr.select-product").each(function () {
        var $tr = $(this);
        var id = $tr.data("productid");
        var $tds = $tr.children("td");
        var sku = $tds.eq(0).text();
        var name = $tds.eq(1).text();
        var salePrice = $tds.eq(2).text();
        var packageTypeId = $tds.eq(2).data("package-type-id");
        var priceSale = $tds.eq(3).text();
        var onSale = $tds.eq(4).data("on-sale");
        if (!dialogs.isGetPackageTypeId) {
            obj =
            {
                "id": id,
                "sku": sku,
                "name": name,
                "salePrice": salePrice,
                "priceSale": priceSale,
                "onSale": onSale
            };
        } else {
            obj =
            {
                "id": id,
                "sku": sku,
                "name": name,
                "salePrice": salePrice,
                "packageTypeId": packageTypeId,
                "priceSale": priceSale,
                "onSale": onSale
            };
        }
        data.push(obj);
    });
    return data;
}


