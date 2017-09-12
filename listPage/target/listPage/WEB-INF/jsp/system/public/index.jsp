<%--
  Created by IntelliJ IDEA.
  User: Mori
  Date: 2017/2/22
  Time: 13:16
  Modify: Spring 2017/2/22 添加分页
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
            + path + "/";
%>
<html>
<head>
    <title>User</title>

    <jsp:include page="../public/head.jsp"></jsp:include>
</head>
<body>
<jsp:include page="../public/top.jsp"></jsp:include>
<input id="currentPage" type="hidden" value="${pd.page}"/>
<section id="page">
    <jsp:include page="../public/left.jsp"></jsp:include>
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
                                        <a>Home</a>
                                    </li>
                                    <li>
                                        UserList
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
                                        User List
                                    </h4>
                                </div>
                                <div style="padding: 10px;">
                                    <div class="padding-bottom-20">
                                        <a href="<c:url value='/user/detail'/>">
                                            <button class="btn btn-primary">
                                                <i class="fa fa-pencil-square-o"> Create New User</i>
                                            </button>
                                        </a>
                                        <div class="form-inline query-title-control" style="padding: 10px;">
                                            <div class="form-group">
                                                <div>User ID:</div>
                                                <input type="text" class="form-control" style="width:180px;" placeholder="UserID">
                                            </div>

                                            <div class="form-group">
                                                Start Date:
                                                <input type="text" class="form-control" id="StartDate" name="StartDate" placeholder="Start Date">
                                            </div>
                                            <div class="form-group">
                                                EndDate:
                                                <input type="text" class="form-control" id="EndDate" name="EndDate" placeholder="End Date">
                                            </div>
                                        </div>
                                        <div class="box border primary">
                                            <table class="table table-striped" id="t1">
                                                <thead>
                                                <tr>
                                                    <th class="table-col-center">UserID</th>
                                                    <th class="table-col-center">UserName</th>
                                                    <th class="table-col-center">操作</th>
                                                </tr>
                                                </thead>
                                                <tbody id="tablelist">

                                                </tbody>
                                            </table>
                                        </div>


                                        <div style="text-align:center;" id="pagination">

                                        </div>
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
</body>
<script>
    $(function () {
        $("#StartDate").datetimepicker({
            pickTime: false,
            todayBtn: true,
            autoclose: true,
            minView: '2',
            forceParse: false,
            format: "yyyy-mm-dd"
        });

        $("#EndDate").datetimepicker({
            pickTime: false,
            todayBtn: true,
            autoclose: true,
            minView: '2',
            forceParse: false,
            format: "yyyy-mm-dd"
        });
        GetList();
    });
    function GetList() {
        var index = location.hash.indexOf("#!page=");
        var page = 1;
        if (index != -1) {
            page = location.hash.substring(index + 7);
        }
        if ($("#currentPage").val().length > 0) {
            page = $("#currentPage").val();
        }
        toPage(page);
        $("#search").click(function () {
            toPage(1);
            location.hash = "!page=1";
        });
    }
    function toPage(page) {
        $.ajax({
            url: '/user/get_user',
            type: 'post',
            data: {
                "page": page
            },
            async: false,
            dataType: 'json',
            success: function (data) {
                var divList = $('#tablelist');
                divList.empty();
                if (data.pageData.length > 0) {
                    //更新页码
                    location.hash = "!page=" + data.pageInfo.currentPage;
                    //更新列表显示的数据
                    $("#currentPage").val(data.pageInfo.currentPage);
                }
                $.each(data.pageData, function (i, item) {
                    var divContent = divContent + "<tr><td class='table-col-center'>" + item.UserID + "</td><td class='table-col-center'>" + item.UserName + "</td><td class='table-col-center'><span style='font-size: 16px;'><a href='/user/" + item.UserID + "'><i class='fa fa-edit'></i></a>  <a href='javascript:void(0);' onclick='deleteUser(this," + item.UserID + ")'><i class='fa fa-remove'></i></a></span></td></tr>";
                    divList.append(divContent);
                });
                //更新分页字符串
                $("#pagination").html(data.pageInfo.pageStr);
            }
        });

    }
    var basePath = "<%=basePath%>";
    var deleteUser = function (btn, userID) {
        if (!confirm("Are you sure delete this record?")) {
            return;
        }
        $.ajax({
            url: basePath + "/user/" + userID,
            type: "post",
            data: {
                "_method": "delete"
            },
            success: function (msg) {
                var page = $("#currentPage").val();
                if (msg.result == "success") {
                    alert(msg.content);
                    toPage(page);
                    return;
                }
                alert("System error,please try again later.");
            }
        });
    }
</script>
</html>
