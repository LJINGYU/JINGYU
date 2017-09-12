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
    <title>国家信息</title>
    <%@include file="../public/head.jsp"%>
    <script type="text/javascript" src="system/js/select.js"></script>
    </head>
<body>
<%--<jsp:include page="../public/top.jsp"></jsp:include>--%>
<section id="page">
<%--    <jsp:include page="../public/left.jsp"></jsp:include>--%>
    <script type="text/javascript">
        /*selectMenu(128,126);*/
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
                                        <a href="ba/country/list">国家
                                        </a>
                                    </li>
                                    <li>
                                        国家信息
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
                                        国家信息
                                    </h4>
                                </div>
                                <div class="row">
                                    <form id="countryForm"  class="form-horizontal"  style="padding: 10px;">
                                        <input type="hidden" value="${country.country_id}" id="countryID"/>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label  class="col-sm-4 control-label">国家编码</label>
                                                <div class="col-sm-6">
                                                    <input type="text" id="countryCode" value="${country.country_code}" class="form-control validate" placeholder="请输入国家编码" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label  class="col-sm-4 control-label">国家短编码</label>
                                                <div class="col-sm-6">
                                                    <input type="text" id="shortCode" value="${country.short_code}" placeholder="请输入国家短编码" class="form-control validate" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label  class="col-sm-4 control-label">国家名称</label>
                                                <div class="col-sm-6">
                                                    <input type="text" id="countryName" value="${country.country_name}" placeholder="请输入国家名称" class="form-control validate" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label  class="col-sm-4 control-label">国家简称</label>
                                                <div class="col-sm-6">
                                                    <input type="text" id="shortName" value="${country.short_name}" placeholder="请输入国家简称" class="form-control" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label  class="col-sm-4 control-label">高价值标准</label>
                                                <div class="col-sm-6">
                                                    <input type="text" id="highValueAmount" value="${country.high_value_amount}" onkeyup="extractNumber(this,2,false)" placeholder="请输入高价值清关标准" class="form-control" />
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <label  class="col-sm-4 control-label">排序号</label>
                                                <div class="col-sm-6">
                                                    <input type="text" id="serialNo" value="${country.serial_no}" placeholder="请输入排序号" onkeyup="extractNumber(this,0,false)" class="form-control" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label  class="col-sm-4 control-label">备注</label>
                                                <div class="col-sm-6">
                                                    <input type="text" id="remark" value="${country.remark}" placeholder="请输入备注" class="form-control" />
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
                                                        <a type="button" class="btn btn-default" href="ba/country/list">
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
    var countryID = $("#countryID").val();

    $("#countryCode").blur(function (){
        checkExist("countryID","countryCode","ba/country/validate_country_code");
    });

    $("#save").click(function() {
        if (!check()) {
            return;
        }
        bootbox.confirm("确定要保存吗?", function (result) {
            if (result) {
                countrySave();
            }
        });
    });

    //校验过程都保证都校验完成
    function check() {
        var flag = true;
        if(!validate({form_id: 'countryForm'})){ //不通过
            flag = false;
        }
        if(!checkExist("countryID","countryCode","ba/country/validate_country_code")){ //重复
            flag = false;
        }
       return flag;
    }

    function countrySave() {
        var countryCode = $("#countryCode").val();
        var shortCode = $("#shortCode").val();
        var countryName = $("#countryName").val();
        var shortName = $("#shortName").val();
        var wordCode = $("#wordCode").val();
        var continent = $("#continent").val();
        var highValueAmount = $("#highValueAmount").val();
        var serialNo = $("#serialNo").val();
        var remark = $("#remark").val();
        //新增
        if(countryID == ""){
            $.ajax({
                url: basePath + 'ba/country/save_country',
                type: 'post',
                async:true,//表示异步
                data:{
                    "countryID":countryID,
                    "countryCode": countryCode,
                    "shortCode": shortCode,
                    "countryName": countryName,
                    "shortName": shortName,
                    "wordCode": wordCode,
                    "continent": continent,
                    "highValueAmount": highValueAmount,
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
                                        location.href = basePath+"ba/country/"+data.message.countryID;
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
            //修改
            $.ajax({
                url: basePath +"ba/country/"+countryID,
                type: 'POST',
                async:true,//表示异步
                data:{
                    "_method":"PUT",
                    "countryCode": countryCode,
                    "shortCode": shortCode,
                    "countryName": countryName,
                    "shortName": shortName,
                    "wordCode": wordCode,
                    "continent": continent,
                    "highValueAmount": highValueAmount,
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
