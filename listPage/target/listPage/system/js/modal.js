var parms = {
    url:'',
    customParms:'',
    selectedItems:'',
    isStoreID  :true
};
    /**
     * 会员选择模态框
     * @param divID         需要加载的
     * @param isChoiceOne   是否可以多选,true 不可以，false 可以
     * @param url           请求的url路径
     * @param customParms   自定义参数列表
     * @param selectedItems 已选择列表,去除重复内容
     * @param callback      回调函数
     */
    function newCustomerModal(divID,isChoiceOne,url,customParms,selectedItems,callback) {
        var parm = {
            url:url,
            customParms:customParms,
            selectedItems:selectedItems,
            isStoreID  :true
        };
        $.extend(parms,parm);
        var modal="<div class=\"modal fade\" id=\"myCustomerModalChoice\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">"+
            "<div class=\"modal-dialog\" role=\"document\">"+
            "<div class=\"modal-content\" style='width: 700px;'>"+
            "<div class=\"modal-header\">"+
            "<button type=\"button\" class=\"close\" data-dismiss=\"modal\"aria-label=\"Close\">"+
            "<span aria-hidden=\"true\">&times;</span>"+
            "</button>"+
            "<h4 class=\"modal-title\" id=\"myModalLabel1\">会员列表</h4>"+
            "</div>"+
            "<div class=\"modal-body\" style='padding: 10px 10px 0 10px;'>"+
            "<div class=\"form-inline query-title-control\">"+
            "<div class=\"form-group\">"+
            "<div>用户信息:</div>"+
            "<input type=\"text\" id=\"customerInfo\" class=\"form-control width-160\" placeholder=\"昵称、LoginID\">"+
            "</div>"+
            "<div class=\"form-group\">"+
            "<div>分组名称:</div>"+
            "<select id=\"customerGroupID\" class=\"width-160\"></select>"+
            "</div>"+
            "<div class=\"form-group\">"+
            "<button type=\"button\" id='customerSearch' class=\"btn btn-success form-control form-filter-button\">" +
            "查询</button>"+
            "</div>"+
            "</div>"+
            "<div class=\"box border primary\" style=\"margin-bottom: 0px; margin-top: 5px;\">"+
            "<table class=\"table\" id=\"tableCustomerModal\">"+
            "<thead>"+
            "<tr>"+
            "<th class=\"table-col-center\">用户头像</th>"+
            "<th class=\"table-col-center\">用户昵称</th>"+
            "<th class=\"table-col-center\">LoginID</th>"+
            "<th class=\"table-col-center\">分组名称</th>"+
            "</tr>"+
            "</thead>"+
            "<tbody></tbody></table></div>"+
            "<div style=\"text-align:center; padding: 0px;\" name=\"pagination\"></div>"+
            "</div>"+
            "<div class=\"modal-footer\" style='margin-top: 0px;'>"+
            "<button type=\"button\" id=\"choiceCustomerSave\" class=\"btn btn-primary\">保存</button>"+
            "<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">关闭</button>"+
            "</div></div></div></div>";
        $("#"+divID).empty();
        $("#"+divID).append(modal);
        getCustomerGroupListForSpinner("customerGroupID","",true);
        $('#myCustomerModalChoice').modal('show');
        getCustomerChoicePage(1);//获取分页数据
        trClickListener("tableCustomerModal",isChoiceOne);//初始化表格tr的监听事件
        $("#tableCustomerModal tbody").on('dblclick','tr',function () { //双击监听
            var tr = $(this);
            removeAllSelectedTr("tableCustomerModal");
            tr.attr("class","selected-tr");
            typeof (callback) === 'function' && callback(saveCustomerChoice());
        });
        /**
         * 监听保存事件，返回json数组
         */
        $("#choiceCustomerSave").click(function () {
            typeof (callback) === 'function' && callback(saveCustomerChoice());
        });

        /**
         * 选择会员搜索
         */
        $("#customerSearch").click(function () {
            getCustomerChoicePage(1);
        });
    }

    /**
     * 商品选择模态框
     * @param divID         加载模态框使用的div
     * @param isChoiceOne   是否可以多选，true表示不可以，false表示可以
     * @param isStoreID     是否显示商城状态信息
     * @param url           数据请求的URL
     * @param customParms   自定义参数
     * @param selectedItems 已选择列表,去除重复内容
     * @param callback      回调函数
     */
    function newProductModal(divID,isChoiceOne,isStoreID,url,customParms,selectedItems,callback) {
        var parm = {
            url:url,
            customParms:customParms,
            selectedItems:selectedItems,
            isStoreID  :isStoreID
        };
        $.extend(parms,parm);
        var modal="<div class=\"bootbox modal fade in\" id=\"myProductModalChoice\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"false\">"+
            "<div class=\"modal-dialog\">"+
            "<div class=\"modal-content\" style='width: 700px;'>"+
            "<div class=\"modal-header\">"+
            "<button type=\"button\" class=\"bootbox-close-button close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>"+
            "<h4 class=\"modal-title\">商品列表</h4>"+
            "</div>"+
            "<div class=\"modal-body\" style='padding: 10px 10px 0 10px;'>"+
            "<div class=\"form-inline query-title-control\">"+
            "<div class=\"form-group\">"+
            "<div>SKU:</div>"+
            "<input type=\"text\" id=\"SKU\" class=\"form-control width-160\" placeholder=\"请输入SKU/条形码\">"+
            "</div>"+
            "<div class=\"form-group\">"+
            "<div>商品名称:</div>"+
            "<input type=\"text\" id=\"productName\" class=\"form-control width-160\" placeholder=\"请输入商品名称\">"+
            "</div>"+
            "<div class=\"form-group\">"+
            "<div>商品分类:</div>"+
            "<select id=\"categoryID\" class=\"width-160\"></select>"+
            "</div>"+
            "<div class=\"form-group\">"+
            "<button type=\"button\" id='productSearch' class=\"btn btn-success form-control form-filter-button\">" +
            "查询</button>"+
            "</div>"+
            "</div>"+
            "<div class=\"box border primary\" style=\"margin-bottom: 0px; margin-top: 5px;\">"+
            "<table class=\"table\" id=\"tableProductModal\">"+
            "<thead>"+
            "<tr>"+
            "<th class=\"table-col-center\">SKU</th>"+
            "<th class=\"table-col-left\">商品名称</th>"+
            "<th class=\"table-col-center\">条形码</th>"+
            "<th class=\"table-col-right\">建议销售价</th>";
        if (isStoreID){
            modal +=
                "<th class=\"table-col-right\">售价</th>"+
                "<th class=\"table-col-center\">上架</th>";
        }
        modal +="</tr>"+
            "</thead>"+
            "<tbody></tbody></table></div>"+
            "<div style=\"text-align:center; padding: 0px;\" name=\"pagination\"></div>"+
            "</div>"+
            "<div class=\"modal-footer\" style='margin-top: 0px;'>"+
            "<button type=\"button\" id=\"choiceProductSave\" class=\"btn btn-primary\">保存</button>"+
            "<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">关闭</button>"+
            "</div></div></div></div>";
        $("#"+divID).empty();
        $("#"+divID).append(modal);
        getCategoryForSpinner("categoryID","",true);
        $('#myProductModalChoice').modal('show');
        getProductChoicePage(1);
        trClickListener("tableProductModal",isChoiceOne);//初始化表格tr的监听事件
        $("#tableProductModal tbody").on('dblclick','tr',function () { //双击监听
            var tr = $(this);
            removeAllSelectedTr("tableProductModal");
            tr.attr("class","selected-tr");
            typeof (callback) === 'function' && callback(saveProductChoice());
        });

        /**
         * 监听保存事件，返回json数组
         */
        $("#choiceProductSave").click(function () {
            typeof (callback) === 'function' && callback(saveProductChoice());
        });

        /**
         * 选择会员搜索
         */
        $("#productSearch").click(function () {
            getProductChoicePage(1);
        });
    }


    /**
     * 选择商品弹窗分页方法
     */
    function getProductChoicePage(page) {
        getProductChoicePageList(page,parms.isStoreID,parms.customParms,parms.selectedItems,parms.url);
    }

    /**
     * 选择商品弹出框
     * */
    function getProductChoicePageList(page,isStoreID,customParms,selectedItems,url) {
        var SKU = $("#SKU").val().trim();
        var productName = $("#productName").val();
        var categoryID = $("#categoryID").val();
        var parms = {
            "page": page,
            "SKU":SKU,
            "productName": productName,
            "categoryID": categoryID,
            "selectedItems":JSON.parse(selectedItems).toString(),
            "functionName":"getProductChoicePage"
        }
        if (customParms != null){
            parms = eval('('+(JSON.stringify(parms)+JSON.stringify(customParms)).replace(/}{/,',')+')');
        }
        $.ajax({
            url: basePath + url,
            type: 'post',
            async: true,
            dataType: 'json',
            data:parms,
            beforeSend:function()
            {
                openLoading();
            },
            success: function (data) {
                loadTable3(data,"tableProductModal");
                var $tbody = $("#tableProductModal>tbody");
                $tbody.empty();
                $.each(data.pageData, function (i, item) {
                    var tr = "<tr data-id ='"+item.product_id+"'>"+
                        "<td class=\"table-col-center\">" + item.sku + "</td>"+
                        "<td class=\"table-col-left\" title=\""+item.product_name+"\">" + item.product_name.substring(0,40) + "</td>" +
                        "<td class=\"table-col-center\">" + item.barcode + "</td>"+
                        "<td class=\"table-col-right\">" + item.price_suggest + "</td>";
                    if (isStoreID) {
                        tr += "<td  class=\"table-col-right\">" + ifNull(item.price_sale, 0) + "</td>";
                        if (item.is_on_sale) {
                            tr += "<td data-on-sale='" + item.is_on_sale + "' class=\"table-col-center\"><span class='table-span-selected'> <i class=\"fa fa-check-circle-o\"></i></span></td>";
                        } else {
                            tr += "<td data-on-sale='" + item.is_on_sale + "' class=\"table-col-center\"><span class='table-span-unselected'> <i class=\"fa fa-ban\"></i></span></td>";
                        }
                    }
                    tr +="</tr>";
                    $tbody.append(tr);
                });
                closeLoading();
            }
        });
    }


    /**
     * 选择会员弹窗分页方法
     */
    function getCustomerChoicePage(page) {
        getCustomerChoicePageList(page,parms.customParms,parms.selectedItems,parms.url);
    }

    /**
     * 选择会员弹出框
     * */
    function getCustomerChoicePageList(page,customParms,selectedItems,url){
        var nickName = $("#customerInfo").val().trim();
        var customerGroupID = $("#customerGroupID").val();
        var parms = {
            "page": page,
            "nickName":nickName,
            "groupID":customerGroupID,
            "selectedItems":JSON.parse(selectedItems).toString(),
            "functionName":"getCustomerChoicePageList"
        };
        if (customParms != null){
            parms = eval('('+(JSON.stringify(parms)+JSON.stringify(customParms)).replace(/}{/,',')+')');
        }
        $.ajax({
            url: basePath + url,
            type: 'post',
            async: true,
            dataType: 'json',
            data:parms,
            beforeSend:function()
            {
                openLoading();
            },
            success: function (data) {
                loadTable3(data,"tableCustomerModal");
                var $tbody = $("#tableCustomerModal>tbody");
                $tbody.empty();
                $.each(data.pageData, function (i, item) {
                    var tr = "<tr data-id='"+item.customer_id+"'>"+
                        "<td class=\"table-col-center\"><img class='table-image' style='width: 18px;height: 18px;' src='"+ifNull(item.customer_photo_path,'')+"'/></td>" +
                        "<td class=\"table-col-center\">"+ifNull(item.nick_name,'')+"</td>" +
                        "<td class=\"table-col-center\">"+item.login_id+"</td>" +
                        "<td class=\"table-col-center\">"+ifNull(item.group_name,'')+"</td>" +
                        "</tr>";
                    $tbody.append(tr);
                });
                closeLoading();
            }
        });
    }

    /**
     * tr行的点击监听器(点击事件)
     * @param tableModalID
     * @param isChoiceOne
     */
    function trClickListener(tableModalID,isChoiceOne) {
        $("#"+tableModalID+" tbody").on('click','tr',function () { //单击监听
            var tr = $(this);
            if (isChoiceOne){
                removeAllSelectedTr(tableModalID);
            }
            if (tr.attr("class") == "selected-tr"){
                tr.removeClass("selected-tr");
            }else {
                tr.attr("class","selected-tr");
            }
        });
    }

    /**
     * 清除所有选中行
     */
    function removeAllSelectedTr(tableModalID) {
        var $trs = $("#"+tableModalID+" tbody>tr");
        $trs.each(function(index, value) {
            var tr = $(this);
            if (tr.attr("class") == "selected-tr"){
                tr.removeClass("selected-tr");
            }
        });
    }

    /**
     * 按钮保存会员选择
     */
    function saveCustomerChoice(){
        var customerArray = [];
        customerArray.splice(0,customerArray.length);//清空数组
        $('#myCustomerModalChoice').modal('hide');
        var $trs = $("#tableCustomerModal tbody>tr");
        $trs.each(function(index, value) {
            var tr = $(this);
            if (tr.attr("class") == "selected-tr"){
                var $td = tr.find('td');
                customerArray.push(
                    new customer( //写入参数
                        $(this).attr("data-id"),
                        $td.eq(0).find('img').attr('src'),
                        $td.eq(1).text().trim(),
                        $td.eq(2).text().trim(),
                        $td.eq(3).text().trim()
                    )
                );
            }
        });
        return JSON.stringify(customerArray);
    }


    /**
     * 按钮保存商品选择
     */
    function saveProductChoice(){
        var productArray = [];
        productArray.splice(0,productArray.length);//清空数组
        $('#myProductModalChoice').modal('hide');
        var $trs = $("#tableProductModal tbody>tr");
        $trs.each(function(index, value) {
            var tr = $(this);
            if (tr.attr("class") == "selected-tr"){
                var $td = tr.find('td');
                productArray.push(
                    new product( //写入参数
                        $(this).attr("data-id"),
                        $td.eq(0).text().trim(),
                        $td.eq(1).text().trim(),
                        $td.eq(2).text().trim(),
                        $td.eq(3).text().trim(),
                        ifNull($td.eq(4).text().trim(),null),
                        ifNull($td.eq(5).attr("data-on-sale"),null)
                    )
                );
            }
        });
        return JSON.stringify(productArray);
    }

    /**
     * 构建用户信息返回值实体类
     * */
    function customer(
        CID,
        CPATH,
        CNAME,
        CLOGINID,
        CGROUPNAME
    ) {
        this.CID = CID;
        this.CPATH = CPATH;
        this.CNAME = CNAME;
        this.CLOGINID = CLOGINID;
        this.CGROUPNAME = CGROUPNAME;
    }

    /**
     * 构建商品信息返回值实体类
     * */
    function product(
        PID,
        PSKU,
        PNAME,
        PBARCODE,
        PPRICE_SUGGEST,
        PPRICE_SALE,
        PIS_ON_SALE
    ) {
        this.PID = PID;
        this.PSKU = PSKU;
        this.PNAME = PNAME;
        this.PBARCODE = PBARCODE;
        this.PPRICE_SUGGEST = PPRICE_SUGGEST;
        this.PPRICE_SALE = PPRICE_SALE;
        this.PIS_ON_SALE = PIS_ON_SALE;
    }

