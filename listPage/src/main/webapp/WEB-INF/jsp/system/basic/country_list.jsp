<%--
  Created by IntelliJ IDEA.
  User: Mori
  Date: 2017/3/6
  Time: 9:13
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<html>
<head>
    <title>生产国家</title>
    <%@include file="../public/head.jsp"%>
</head>
<body>
<%--<jsp:include page="../public/top.jsp"></jsp:include>--%>
<input id="currentPage" type="hidden" value="${pd.page}"/>
<section id="page">
    <%--<jsp:include page="../public/left.jsp"></jsp:include>--%>
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
                                        国家
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
                                        国家
                                    </h4>
                                </div>
                                <div style="padding: 10px;">
                                    <div class="padding-bottom-20">
                                        <a href="ba/country/detail">
                                            <button class="btn btn-primary ">
                                                <i class="fa fa-plus-circle"></i> 新建国家
                                            </button>
                                        </a>
                                        <div class="form-inline query-title-control" style="padding: 10px;">
                                            <div class="form-group">
                                                <div>国家编码:</div>
                                                <input  type="text" id="countryCode"  placeholder="请输入国家编码" class="form-control" style="width:180px;" >
                                            </div>
                                            <div class="form-group">
                                                <div>国家名称:</div>
                                                <input  type="text" id="countryName"  placeholder="请输入国家名称" class="form-control" style="width:180px;" >
                                            </div>
                                            <div class="form-group">
                                                <button  type="button" id="search" class="btn btn-success form-control form-filter-button">查询</button>
                                            </div>
                                        </div>
                                        <div class="box border primary">
                                            <table class="table table-striped" id="tableList">
                                                <thead>
                                                <tr>
                                                    <th class="table-col-center">国家编码</th>
                                                    <th class="table-col-center col-auto-hide-half">国家短编码</th>
                                                    <th class="table-col-left">国家</th>
                                                    <th class="table-col-left">国家短名称</th>
                                                    <th class="table-col-center col-auto-hide">排序号</th>
                                                    <th class="table-col-center">操作</th>
                                                </tr>
                                                </thead>
                                                <tbody id="tbodyList">

                                                </tbody>
                                            </table>
                                        </div>
                                        <%--分页-Start--%>
                                        <div style="text-align:center;" id="pagination"></div>
                                        <%--分页-End--%>
                                    </div>
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
    $(function (){
        getList("currentPage","search");
    });

    function toPage(page) {
        var countryName = $("#countryName").val();
        var countryCode = $("#countryCode").val();
        $.ajax({
            url: basePath+'ba/country/get_country_page',
            type: 'post',
            data: {
                "page": page,
                "countryName":countryName,
                "countryCode":countryCode
            },
            async: false,
            dataType: 'json',
            beforeSend:function()
            {
                openLoading();
            },
            success: function (data) {
                loadTable(data,"tableList","tbodyList");
                $.each(data.pageData, function (i, item) {
                    var tr = " <tr>"+
                            "<td class=\"table-col-center\">"+item.country_code+"</td>" +
                            "<td class=\"table-col-center col-auto-hide-half\">"+item.short_code+"</td>" +
                            "<td class=\"table-col-left\">"+item.country_name+"</td>" +
                            "<td class=\"table-col-left\">"+item.short_name+"</td>" +
                            "<td class=\"table-col-center col-auto-hide\">"+ifNull(item.serial_no,'')+"</td>" +
                            "<td class=\"table-col-center\">" +
                            "<span>" +
                            "<a title='编辑' href=\"ba/country/"+item.country_id+"\"><i class=\"fa fa-edit\"></i></a> "+
                            "<a title='删除' onclick='deleteCountry("+item.country_id+");' href=\"javascript:void(0);\" ><i class=\"fa fa-trash\"></i></a>"+
                            "</span>"+
                            "</td>"+
                            "</tr>";
                    $("#tbodyList").append(tr);
                });
                closeLoading();
                $("#pagination").html(data.pageInfo.pageStr);
            }
        });

    }

    var deleteCountry = function (countryID) {
        bootbox.confirm("确定要删除该国家吗？", function (result) {
            if(result) {
                $.ajax({
                    url : basePath+"ba/country/"+countryID,
                    type:"post",
                    data:{
                        _method : "delete"
                    },
                    beforeSend:function()
                    {
                        openLoading();
                    },
                    success:function (data) {
                        if(data.code == '200'){
                            bootbox.dialog({
                                message: data.message,
                                buttons: {
                                    OK: {
                                        label: "确定",
                                        className: "btn-primary",
                                        callback: function (){
                                            location.reload();
                                        }
                                    }
                                }
                            });
                        }else {
                            bootbox.alert(data.message);
                        }
                        closeLoading();
                    }
                });
            }
        });
    }
</script>
</body>
</html>
