<%--
  Created by IntelliJ IDEA.
  User: Mori
  Date: 2017/3/6
  Time: 10:21
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<html>
<head>
    <title>货币信息</title>
    <%@include file="../public/head.jsp"%>
   </head>
<body>
<%--<jsp:include page="../public/top.jsp"></jsp:include>--%>
<section id="page">
   <%-- <jsp:include page="../public/left.jsp"></jsp:include>--%>
    <script type="text/javascript">
        /*selectMenu(127,126);*/
    </script>
    <div id="main-content">
        <div class="container">
            <div class="row">
                <div id="content" class="col-lg-12">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="page-header">
                                <ul class="breadcrumb">
                                    <li>
                                        <i class="fa fa-home"></i>
                                        <a href="ba/home/index">首页</a>
                                    </li>
                                    <li>
                                        <a href="ba/currency/list">货币管理</a>
                                    </li>
                                    <li>
                                        货币信息
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="box border primary">
                                <div class="box-title">
                                    <h4>
                                        <i class="fa fa-table"></i>
                                        货币信息
                                    </h4>
                                </div>
                                <div class="row">
                                    <form id="currencyForm" class="form-horizontal"  style="padding: 10px;">
                                        <input type="hidden" value="${currency.currency_id}" id="currencyID"/>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label  class="col-sm-4 control-label">货币编码</label>
                                                <div class="col-sm-6">
                                                    <input type="text" id="currencyCode" placeholder="请输入货币编码" value="${currency.currency_code}" maxlength="5" class="form-control validate" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label  class="col-sm-4 control-label">货币名称</label>
                                                <div class="col-sm-6">
                                                    <input type="text" id="currencyName" placeholder="请输入货币名称" value="${currency.currency_name}" class="form-control validate" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label  class="col-sm-4 control-label">汇率</label>
                                                <div class="col-sm-6">
                                                    <div class="input-group">
                                                    <input type="text" id="rate" placeholder="请输入汇率" value="${currency.rate}" onkeyup="extractNumber(this,2,false)" class="form-control validate" />
                                                    <span class="input-group-addon">%</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label  class="col-sm-4 control-label">汇率更新日期</label>
                                                <div class="col-sm-6">
                                                    <input id="rateUpdateDate" placeholder="请输入汇率更新日期" value="<fmt:formatDate  value='${currency.rate_update_date}' type='date'/>" type="text" class="form-control" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label  class="col-sm-4 control-label">排序号</label>
                                                <div class="col-sm-6">
                                                    <input type="text" id="serialNo" placeholder="请输入排序号" value="${currency.serial_no}" onkeyup="extractNumber(this,0,false)" class="form-control validate" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label  class="col-sm-4 control-label">备注</label>
                                                <div class="col-sm-6">
                                                    <input type="text" id="remark" placeholder="请输入备注 " value="${currency.remark}" class="form-control" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-12">
                                            <div class="box-body big">
                                                <div class="form-group">
                                                    <div class="col-sm-offset-0 col-sm-12">
                                                        <button type="button" class="btn btn-primary" id="save">
                                                            <i class="fa fa-save"></i> 保存
                                                        </button>
                                                        <a type="button" class="btn btn-default" href="ba/currency/list">
                                                            <i class="fa fa-arrow-circle-left"></i> 返回
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<script type="text/javascript">
        var currencyID = $("#currencyID").val();
        $("#currencyCode").blur(function () {
            checkExist("currencyID","currencyCode","ba/currency/validate_currency_code");
        });
        $(function () {
            $("#rateUpdateDate").datetimepicker({
                pickTime: false,
                todayBtn: true,
                autoclose: true,
                minView: '2',
                forceParse: false,
                format: "yyyy-mm-dd"
            });
        });

        $("#save").click(function() {
            if (!check()) {
                return;
            }
            bootbox.confirm("确定要保存吗?", function (result) {
                if (result) {
                    currencySave();
                }
            });
        });

        //校验过程都保证都校验完成
        function check() {
            var flag = true;
            if(!validate({form_id: 'currencyForm'})){ //不通过
                flag = false;
            }
            if(!checkExist("currencyID","currencyCode","ba/currency/validate_currency_code")){ //重复
                flag = false;
            }
            return flag;
        }

        function currencySave() {
            var currencyCode = $("#currencyCode").val();
            var currencyName = $("#currencyName").val();
            var rate = $("#rate").val();
            var rateUpdateDate = $("#rateUpdateDate").val();
            var serialNo = $("#serialNo").val();
            var remark = $("#remark").val();
            if(currencyID == ""){//新增
                $.ajax({
                    url: basePath + 'ba/currency/save_currency',
                    type: 'post',
                    async:true,//表示异步
                    data:{
                        "currencyID":currencyID,
                        "currencyCode": currencyCode,
                        "currencyName": currencyName,
                        "rate": rate,
                        "rateUpdateDate": rateUpdateDate,
                        "serialNo": serialNo,
                        "remark": remark
                    },
                    beforeSend:function()
                    {
                        openLoading();
                    },
                    success: function (data) {
                        closeLoading();
                        if(data.code == '200'){ //成功
                            bootbox.dialog({
                                message: data.message.message,
                                buttons: {
                                    OK: {
                                        label: "确定",
                                        className: "btn-primary",
                                        callback: function (){
                                            location.href = basePath+"ba/currency/"+data.message.currencyID;
                                        }
                                    }
                                }
                            });
                        }else { //失败
                            bootbox.alert(data.message);
                        }
                    }
                });
            }else{
                $.ajax({ //修改
                    url: basePath +"ba/currency/"+currencyID,
                    type: 'POST',
                    async:true,//表示异步
                    data:{
                        "_method":"PUT",
                        "currencyCode": currencyCode,
                        "currencyName": currencyName,
                        "rate": rate,
                        "rateUpdateDate": rateUpdateDate,
                        "serialNo": serialNo,
                        "remark": remark
                    },
                    beforeSend:function()
                    {
                        openLoading();
                    },
                    success: function (data) {
                        bootbox.alert(data.message);
                        closeLoading();
                    }
                });
            }
        }
</script>
</body>
</html>
