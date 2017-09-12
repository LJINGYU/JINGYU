function extractNumber(obj, decimalPlaces, allowNegative) {
    var temp = obj.value;

    // avoid changing things if already formatted correctly
    var reg0Str = '[0-9]*';
    if (decimalPlaces > 0) {
        reg0Str += '\\.?[0-9]{0,' + decimalPlaces + '}';
    } else if (decimalPlaces < 0) {
        reg0Str += '\\.?[0-9]*';
    }
    reg0Str = allowNegative ? '^-?' + reg0Str : '^' + reg0Str;
    reg0Str = reg0Str + '$';
    var reg0 = new RegExp(reg0Str);
    if (reg0.test(temp)) return true;

    // first replace all non numbers
    var reg1Str = '[^0-9' + (decimalPlaces != 0 ? '.' : '') + (allowNegative ? '-' : '') + ']';
    var reg1 = new RegExp(reg1Str, 'g');
    temp = temp.replace(reg1, '');

    if (allowNegative) {
        // replace extra negative
        var hasNegative = temp.length > 0 && temp.charAt(0) == '-';
        var reg2 = /-/g;
        temp = temp.replace(reg2, '');
        if (hasNegative) temp = '-' + temp;
    }

    if (decimalPlaces != 0) {
        var reg3 = /\./g;
        var reg3Array = reg3.exec(temp);
        if (reg3Array != null) {
            // keep only first occurrence of .
            // and the number of places specified by decimalPlaces or the entire string if decimalPlaces < 0
            var reg3Right = temp.substring(reg3Array.index + reg3Array[0].length);
            reg3Right = reg3Right.replace(reg3, '');
            reg3Right = decimalPlaces > 0 ? reg3Right.substring(0, decimalPlaces) : reg3Right;
            temp = temp.substring(0, reg3Array.index) + '.' + reg3Right;
        }
    }

    obj.value = temp;
}

/**
 * 列表为空时显示方法
 * @param data  传入的列表数据
 * @param tableID   表格ID
 * @param tbodyID   表格bodyID
 * @param pagerID    分页页面divID
 * @param currentPageNo     当前页input框ID
 */
function loadTable2(data,tableID,tbodyID,pagerID,currentPageNo) {
    if(data.pageData.length == 0){
        //移除  之前的为空显示div
        showTable(tableID,false);
        $("#"+ pagerID +"").html("");
        return;
    }
    showTable(tableID,true);
    $("#" + tbodyID + "").empty();
    if (data.pageData.length > 0) {
        //更新页码
        location.hash = "!page=" + data.pageInfo.currentPage;
        //更新列表显示的数据
        $("#"+ currentPageNo +"").val(data.pageInfo.currentPage);
    }
    //更新分页字符串
    $("#"+ pagerID +"").html(data.pageInfo.pageStr);
}
/**
 * 是否显示table，true显示，false不显示
 * @param tableID
 * @param showFlag
 */
function showTable(tableID, showFlag) {
    $("#" + tableID).parent().children(".list-div").remove();
    if (showFlag) {
        $("#" + tableID + "").show();
        return;
    }
    $("#" + tableID + "").hide();
    $("#" + tableID + "").parent().append("<div class='list-div'>" +
        "<i class='fa fa-exclamation-triangle list-i'></i> 抱歉，没有找到数据。</div>");
}
/**
 * 列表为空时显示方法
 * @param data  传入的列表数据
 * @param tableID   表格ID
 * @param tbodyID   表格bodyID
 */
function loadTable(data,tableID,tbodyID) {
    loadTable2(data,tableID,tbodyID,"pagination","currentPage");
}

//checkbox统一判断方法
function CheckBox(id) {
    var flag = false;
    if(($("#"+ id +"").parent().attr("class")) == "checked"){
        flag = true;
    }
    return flag;
}
//
/**
 * 校验邮箱
 * @param email 要校验email的
 * @param required 是否是必填项
 * @returns {boolean}
 */
function checkEmail(email,required) {
    var e = $.trim($("#" + email).val());
    if (required){
        if (e == ""){
            $("#" + email).tips({msg:"邮箱不能为空。"});
            return false;
        }
        if (!checkEmailResult(e)){
            $("#" + email).tips({msg:"邮箱格式不正确。"});
            return false
        }
        return true;
    }
    if (e != ""){
       if (!checkEmailResult(e)){
           $("#" + email).tips({msg:"邮箱格式不正确。"});
           return false;
       }
       return true;
    }
    return true;
}

/**
 * 唯一性校验通用方法
 * @param firstID  数据id的input id
 * @param secondID  数据名字的input id
 * @param url   校验的地址
 * @returns {boolean}
 */
function checkExist(firstID, secondID,url) {
    var flag = true;
    var ID = $("#" + firstID).val();
    var Name = $("#" + secondID).val().trim();
    if(Name == ""){
        return true;
    }
    $.ajax({
        async:false,
        url: url,
        type: "post",
        data: {
            "ID": ID,
            "Name": Name
        },
        success: function (data) {
            if (data.code == 500) {
                $("#" + secondID).tips({msg: data.message}).show();
                flag = false;
            }
        }
    });
    return flag;
}

function checkEmailResult(e) {
    var reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
    var flag = reg.test(e);
    return flag;
}

//http请求Url格式校验
function checkHttpUrl(e) {
    var reg = /^(?:http(?:s|):\/\/|)(?:(?:\w*?)\.|)(?:\w*?)\.(?:\w{2,4})(?:\?.*|\/.*|)$/ig;
    var flag = reg.test(e);
    return flag;
}

Date.prototype.format = function(format) {
    var date = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S+": this.getMilliseconds()
    };
    if (/(y+)/i.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in date) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
        }
    }
    return format;
}
jQuery.extend({
    createUploadIframe: function(id, uri)
    {
        //create frame
        var frameId = 'jUploadFrame' + id;

        if(window.ActiveXObject) {
            var io = document.createElement('<iframe id="' + frameId + '" name="' + frameId + '" />');
            if(typeof uri== 'boolean'){
                io.src = 'javascript:false';
            }
            else if(typeof uri== 'string'){
                io.src = uri;
            }
        }
        else {
            var io = document.createElement('iframe');
            io.id = frameId;
            io.name = frameId;
        }
        io.style.position = 'absolute';
        io.style.top = '-1000px';
        io.style.left = '-1000px';

        document.body.appendChild(io);

        return io
    },
    createUploadForm: function(id, fileElementId)
    {
        //create form
        var formId = 'jUploadForm' + id;
        var fileId = 'jUploadFile' + id;
        var form = $('<form  action="" method="POST" name="' + formId + '" id="' + formId + '" enctype="multipart/form-data"></form>');
        for(var i in fileElementId){
            var oldElement = jQuery('#' + fileElementId[i]);
            var newElement = jQuery(oldElement).clone();
            jQuery(oldElement).attr('id', fileId);
            jQuery(oldElement).before(newElement);
            jQuery(oldElement).appendTo(form);
        }
        //set attributes
        $(form).css('position', 'absolute');
        $(form).css('top', '-1200px');
        $(form).css('left', '-1200px');
        $(form).appendTo('body');
        return form;
    },
    addOtherRequestsToForm: function(form,data)
    {
        // add extra parameter
        var originalElement = $('<input type="hidden" name="" value="">');
        for (var key in data) {
            name = key;
            value = data[key];
            var cloneElement = originalElement.clone();
            cloneElement.attr({'name':name,'value':value});
            $(cloneElement).appendTo(form);
        }
        return form;
    },

    ajaxFileUpload: function(s) {
        // TODO introduce global settings, allowing the client to modify them for all requests, not only timeout
        s = jQuery.extend({}, jQuery.ajaxSettings, s);
        var id = new Date().getTime()
        var form = jQuery.createUploadForm(id, s.fileElementId);
        if ( s.data ) form = jQuery.addOtherRequestsToForm(form,s.data);
        var io = jQuery.createUploadIframe(id, s.secureuri);
        var frameId = 'jUploadFrame' + id;
        var formId = 'jUploadForm' + id;
        // Watch for a new set of requests
        if ( s.global && ! jQuery.active++ )
        {
            jQuery.event.trigger( "ajaxStart" );
        }
        var requestDone = false;
        // Create the request object
        var xml = {}
        if ( s.global )
            jQuery.event.trigger("ajaxSend", [xml, s]);
        // Wait for a response to come back
        var uploadCallback = function(isTimeout)
        {
            var io = document.getElementById(frameId);
            try
            {
                if(io.contentWindow)
                {
                    xml.responseText = io.contentWindow.document.body?io.contentWindow.document.body.innerHTML:null;
                    xml.responseXML = io.contentWindow.document.XMLDocument?io.contentWindow.document.XMLDocument:io.contentWindow.document;

                }else if(io.contentDocument)
                {
                    xml.responseText = io.contentDocument.document.body?io.contentDocument.document.body.innerHTML:null;
                    xml.responseXML = io.contentDocument.document.XMLDocument?io.contentDocument.document.XMLDocument:io.contentDocument.document;
                }
            }catch(e)
            {
                jQuery.handleError(s, xml, null, e);
            }
            if ( xml || isTimeout == "timeout")
            {
                requestDone = true;
                var status;
                try {
                    status = isTimeout != "timeout" ? "success" : "error";
                    // Make sure that the request was successful or notmodified
                    if ( status != "error" )
                    {
                        // process the data (runs the xml through httpData regardless of callback)
                        var data = jQuery.uploadHttpData( xml, s.dataType );
                        // If a local callback was specified, fire it and pass it the data
                        if ( s.success )
                            s.success( data, status );

                        // Fire the global callback
                        if( s.global )
                            jQuery.event.trigger( "ajaxSuccess", [xml, s] );
                    } else
                        jQuery.handleError(s, xml, status);
                } catch(e)
                {
                    status = "error";
                    jQuery.handleError(s, xml, status, e);
                }

                // The request was completed
                if( s.global )
                    jQuery.event.trigger( "ajaxComplete", [xml, s] );

                // Handle the global AJAX counter
                if ( s.global && ! --jQuery.active )
                    jQuery.event.trigger( "ajaxStop" );

                // Process result
                if ( s.complete )
                    s.complete(xml, status);

                jQuery(io).unbind()

                setTimeout(function()
                {    try
                {
                    $(io).remove();
                    $(form).remove();

                } catch(e)
                {
                    jQuery.handleError(s, xml, null, e);
                }

                }, 100)

                xml = null

            }
        }
        // Timeout checker
        if ( s.timeout > 0 )
        {
            setTimeout(function(){
                // Check to see if the request is still happening
                if( !requestDone ) uploadCallback( "timeout" );
            }, s.timeout);
        }
        try
        {
            // var io = $('#' + frameId);
            var form = $('#' + formId);
            $(form).attr('action', s.url);
            $(form).attr('method', 'POST');
            $(form).attr('target', frameId);
            if(form.encoding)
            {
                form.encoding = 'multipart/form-data';
            }
            else
            {
                form.enctype = 'multipart/form-data';
            }
            $(form).submit();

        } catch(e)
        {
            jQuery.handleError(s, xml, null, e);
        }
        if(window.attachEvent){
            document.getElementById(frameId).attachEvent('onload', uploadCallback);
        }
        else{
            document.getElementById(frameId).addEventListener('load', uploadCallback, false);
        }
        return {abort: function () {}};

    },

    uploadHttpData: function( r, type ) {
        var data = !type;
        data = type == "xml" || data ? r.responseXML : r.responseText;
        // If the type is "script", eval it in global context
        if ( type == "script" )
            jQuery.globalEval( data );
        // Get the JavaScript object, if JSON is used.
        if ( type == "json" )
        {
            // If you add mimetype in your response,
            // you have to delete the '<pre></pre>' tag.
            // The pre tag in Chrome has attribute, so have to use regex to remove
            var data = r.responseText;
            var rx = new RegExp("<pre.*?>(.*?)</pre>","i");
            var am = rx.exec(data);
            //this is the desired data extracted
            var data = (am) ? am[1] : "";    //the only submatch or empty
            eval( "data = " + data );
        }
        if (type == "text") {
            data = data.replace(/<[^>]+>/g, "");
        }
        // evaluate scripts within html
        if ( type == "html" )
            jQuery("<div>").html(data).evalScripts();
        //alert($('param', data).each(function(){alert($(this).attr('value'));}));
        return data;
    }

});
/**
 * 选中菜单
 * @param currentMenuID 当前菜单ID
 * @param parentMenuID 父级菜单ID
 */
function selectMenu(currentMenuID,parentMenuID) {
    var $currentMenu =  $("a[data-id='"+currentMenuID+"']");
    if($currentMenu.length == 0){
        location.href = basePath +"admin/not_authorized";
    }
    $currentMenu.parent().addClass("current");
    var $parentMenu = $("a[data-id='"+parentMenuID+"']").parent();
    $parentMenu.addClass("active");
    $spans =$parentMenu.children().children("span");
    $spans.eq(1).addClass("open");
    $parentMenu.children().children().append("<span class=\"select\"></span>");
}

/**
 * 列表页公用方法
 * @param pageID
 * @param searchID
 */
function getList(pageID,searchID) {
    var index = location.hash.indexOf("#!page=");
    var page = 1;
    if (index != -1) {
        page = location.hash.substring(index + 7);
    }
    if ($("#" + pageID).val().length > 0) {
        page = $("#" + pageID).val();
    }
    toPage(page);
    if(searchID != ""){
        $("#" + searchID).click(function () {
            toPage(1);
            location.hash = "!page=1";
        });
    }
}
/**
 * 如果第一个参数为true,返回第一个消息，否则返回第二个
 * @param flag
 * @param trueMessage
 * @param falseMessage
 * @returns {*}
 */
function ifTrue(flag,trueMessage,falseMessage) {
    if(flag){
        return trueMessage;
    }
    return falseMessage;
}
/**
 * 加载普通表格的方法
 * @param tableID   表格的ID
 */
function loadTable3(data,tableID) {
    var $pagination = $("#"+tableID).parent().parent().children("div[name=pagination]");//分页的div name 必须为pagination
    if(data.pageData.length == 0){
        showTable(tableID,false);
        $pagination.html("");
        return;
    }
    $pagination.html(data.pageInfo.pageStr);
    showTable(tableID,true);
}
/**
 *
 * @param basePath
 * @param sku通过sku准确查找出商品的id name packagetype
 * @param product_id 填充页面id
 * @param product_name 填充商品名称
 * @param package_type_id 填充包装类型
 */
function getProductSKU(basePath,sku,product_id,product_name,package_type_id) {
    $.ajax({
        async:false,
        url:basePath + "ba/product/get_product_by_sku",
        type:"post",
        data:{
            "sku":sku
        },
        dataType:"json",
        success:function (data) {
            if (data.code == 200){
                if (data.message !=null){
                    $("#" + product_id).val(data.message.product_id);
                    $("#" + product_name).val(data.message.product_name);
                    if (data.message.product_name != ''){
                        $("#" + package_type_id).val(data.message.package_type_id);
                    }
                }else {
                    $("#" + product_id).val("");
                    $("#" + product_name).val("");
                    $("#" + package_type_id).val("");
                }

            }else {
                bootbox.alert(data.message);
            }
        }
    })
}
/**
 * 获取上一个月
 * 格式为yyyy-mm-dd的日期 如：2017-04-28
 * @param date
 * @returns {string}
 */
function getPreMonth(id){
    var date = new Date().format("yyyy-MM-dd");
    var arr = date.split('-');
    var year = arr[0]; //获取当前日期的年份
    var month = arr[1]; //获取当前日期的月份
    var day = arr[2]; //获取当前日期的日
    var days = new Date(year, month, 0);
    days = days.getDate(); //获取当前日期中月的天数
    var year2 = year;
    var month2 = parseInt(month) - 1;
    if (month2 == 0) {
        year2 = parseInt(year2) - 1;
        month2 = 12;
    }
    var day2 = day;
    var days2 = new Date(year2, month2, 0);
    days2 = days2.getDate();
    if (day2 > days2) {
        day2 = days2;
    }
    if (month2 < 10) {
        month2 = '0' + month2;
    }
    var t2 = year2 + '-' + month2 + '-' + day2;
    $("#" + id).val(t2);
}
/**
 * 获取当前日期格式 如2017-04-28
 * @param id
 */
function getCurrentDate(id) {
    $("#" + id).val(new Date().format("yyyy-MM-dd"));
}
/**
 * 获取前七天日期 如2017-04-28
 * @param id
 */
function getPreWeekDate(id) {
    var now = new Date();
    var preWeek = new Date(now.getTime() - 7 * 24 * 3600 * 1000);
    $("#" + id).val(preWeek.format("yyyy-MM-dd"));
}

function ifUndefinedVal(obj,undefinedVal,prefix) {
    if(obj == undefined || obj == null || obj == ""){
        obj = undefinedVal;
    }else{
        obj = prefix+"=\""+obj+"\"";
    }
    return obj;
}

(function($){
    $.fn.appendTd = function(options) {
        options.className = ifUndefinedVal(options.className,"class=\"table-col-center\"","class");
        options.onClick = ifUndefinedVal(options.onClick,"","onclick");
        options.dataID = ifUndefinedVal(options.dataID,"","data-id");
        var opts = $.extend({}, $.fn.appendTd.defaults, options);
        this.append("<td " + options.className + " " +  options.dataID+ " >" +options.text + "</td>");
        return this;
    };
    $.fn.appendTd.defaults = {text:"",className:'table-col-center',dataID:""};
    createEle = function(elementType,className,dataID) {
        className = ifUndefinedVal(className,"","class");
        dataID = ifUndefinedVal(dataID,"","data-id");
        var $e = $("<" + elementType + " " + className+ " " + dataID+ " ></" + elementType + ">");
        return $e;
    };
    $.fn.appendIconButton = function(options) {
        var opts = $.extend({}, $.fn.appendIconButton.defaults, options);
        options.aClass = ifUndefinedVal(options.aClass,"","class");
        options.onClick = ifUndefinedVal(options.onClick,"","onClick");
        options.title = "title=\"" + options.title + "\"";
        options.href = "href=\"" + options.href + "\"";
        options.iconClass = "class=\"" + options.iconClass + "\"";
        this.append("<a " + options.aClass+ " " + options.title+ "  " + options.href+ "  " + options.onClick+ " ><i " + options.iconClass+ " ></i></a> ");
        return this;
    };
    $.fn.appendIconButton.defaults = {href:"",title:"",iconClass:"",aClass:"",onClick:""};
})(jQuery);

function getQueryJSON(formObj, method) {
    var data = new Object();
    if(method != undefined){
        data["_method"] = method;
    }
    if (formObj) {
        var elementsObj = formObj.elements;
        var obj;
        if (elementsObj) {
            for (var i = 0; i < elementsObj.length; i += 1) {
                obj = elementsObj[i];
                if (obj.name != undefined && obj.name != "") {
                    data[""+obj.name+""] = obj.value;
                }
            }
        } else {
            console.log("没有elements对象!");
            return;
        }
    } else {
        console.log("form不存在!");
        return;
    }
    return JSON.parse(JSON.stringify(data));
}