<%--
  Created by IntelliJ IDEA.
  User: 张春阳
  Date: 2017/3/10
  Time: 9:31
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<html>
<head>
    <title>管理员列表 - Chinook</title>
    <%@include file="../public/head.jsp" %>
    <link rel="stylesheet" href="system/js/jquery-upload/css/jquery.fileupload.css">
    <link rel="stylesheet" href="system/js/jquery-upload/css/jquery.fileupload-ui.css">
    <!-- FILE UPLOAD -->
    <link rel="stylesheet" type="text/css" href="system/js/bootstrap-fileupload/bootstrap-fileupload.min.css"/>
    <link href="system/css/uploadPreview.min.css" rel="stylesheet">

    <script type="text/javascript" src="system/js/bootstrap-fileupload/bootstrap-fileupload.min.js"></script>
    <!-- The basic File Upload plugin -->
    <script src="system/js/jquery-upload/js/jquery.fileupload.min.js"></script>

    <script src="system/js/uploadPreview.min.js" type="text/javascript"></script>
    <link rel="stylesheet" type="text/css" href="system/js/uniform/css/uniform.default.min.css">
    <script type="text/javascript" src="system/js/uniform/jquery.uniform.min.js"></script>
    <script type="text/javascript" src="system/js/select2/select2.min.js"></script>
    <script type="text/javascript" src="system/js/select.js"></script>
    <script type="text/javascript" src="system/js/public.js"></script>
    <link rel="stylesheet" type="text/css" href="system/js/select2/select2.min.css"/>
</head>
<body>
<%--<jsp:include page="../public/top.jsp"></jsp:include>--%>
<input id="currentPage" type="hidden" value="${pd.page}"/>
<section id="page">

    <%--<jsp:include page="../public/left.jsp"></jsp:include>--%>
    <script type="text/javascript">
//        selectMenu(131,126);
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
                                        管理员列表
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
                                        管理员列表
                                    </h4>
                                </div>
                                <div style="padding: 10px;">
                                    <div class="padding-bottom-20">

                                          <a href="<%=basePath%>ba/system/user/detail"> <button  class="btn btn-primary" type="button"
                                                    data-action="expand-all">
                                                <i class="fa fa-plus-circle"></i> 新建管理员
                                            </button>
                                          </a>
                                        <div class="form-inline query-title-control" style="padding: 10px;">

                                        </div>
                                        <div class="box border primary">
                                            <table class="table table-striped" id="t1">
                                                <thead>
                                                <tr>
                                                    <th class="table-col-center">管理系统</th>
                                                    <th class="table-col-center">头像</th>
                                                    <th class="table-col-left">账号</th>
                                                    <th class="table-col-left">管理员名称</th>
                                                    <th class="table-col-left">邮箱</th>
                                                    <th class="table-col-center">加入时间</th>
                                                   <th class="table-col-center">操作</th>
                                                </tr>
                                                </thead>
                                                <jsp:useBean id="now" class="java.util.Date" scope="page"/>
                                                <tbody id="tbody">

                                                </tbody>
                                            </table>
                                        </div>

                                        <div class="modal fade" id="myModal1" tabindex="-1" role="dialog"
                                             aria-labelledby="myModalLabel">
                                            <div class="modal-dialog" role="document">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <button type="button" class="close" data-dismiss="modal"
                                                                aria-label="Close"><span
                                                                aria-hidden="true">&times;</span></button>
                                                        <h4 class="modal-title" id="myModalLabel1">编辑管理员</h4>
                                                    </div>
                                                    <div class="modal-body">
                                                        <div class="row">
                                                            <form id="user">
                                                            <div class="form-horizontal">
                                                                <div class="form-group">
                                                                    <label class="col-sm-4 control-label">账号：</label>
                                                                    <div class="col-sm-6">
                                                                        <input type="hidden" id="systemUserID" name="system_user_id" class="form-control " >
                                                                        <input type="text" id="login_id" name="loginID" class="form-control validate" placeholder="请输入账号">
                                                                    </div>
                                                                </div>
                                                                <div class="form-group">
                                                                    <label class="col-sm-4 control-label">名称：</label>
                                                                    <div class="col-sm-6">

                                                                        <input type="text" id="firstName" name="firstName" class="form-control validate" placeholder="请输入名称">
                                                                    </div>
                                                                </div>
                                                                <div class="form-group">
                                                                    <label class="col-sm-4 control-label">密码：</label>
                                                                    <div class="col-sm-6">
                                                                        <input type="text" id="password" name="password" class="form-control validate" placeholder="请输入密码">
                                                                    </div>
                                                                </div>
                                                                <div class="form-group">
                                                                    <label class="col-sm-4 control-label">确认密码：</label>
                                                                    <div class="col-sm-6">
                                                                        <input type="text" id="confirm-password" name="confirm-password" class="form-control validate" placeholder="请输入确认密码">
                                                                    </div>
                                                                </div>
                                                                <div class="form-group">
                                                                    <label class="col-sm-4 control-label">头像：</label>
                                                                    <div class="col-sm-8">
                                                            <span class="btn btn-success fileinput-button">
                                                                <i class="fa fa-folder"></i>
                                                                <span> 选择图片</span>
                                                                <input type="file" name="photo" id="up">
                                                            </span>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group">
                                                                    <label class="col-sm-4 control-label">Email：</label>
                                                                    <div class="col-sm-6">
                                                                        <input type="text" id="Email" name="email" class="form-control validate" placeholder="请输入Email">
                                                                    </div>
                                                                </div>
                                                                <div id="status" class="form-group">
                                                                    <label class="col-sm-4 control-label">状态：</label>
                                                                    <div class="col-sm-6">
                                                                        <select name="statusID" id="statusID"
                                                                                class="col-md-12" ></select>
                                                                    </div>
                                                                </div>
                                                                <div id="system" class="form-group">
                                                                    <label class="col-sm-4 control-label">系统：</label>
                                                                    <div class="col-sm-6">
                                                                        <select name="systemID" id="SystemID"  class="col-md-12" >

                                                                        </select>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="user-save btn btn-primary">保存</button>
                                                        <button type="button" class="btn btn-default"
                                                                data-dismiss="modal">关闭
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div style="text-align:center;" id="pagination">
                                            <ul class="pagination pagination-lg">
                                                <li class="disabled"><a>«</a></li>
                                                <li class="active"><a onclick="toPage(1)">1</a></li>
                                                <li><a onclick="toPage(2)">2</a></li>
                                                <li class=""><a onclick="toPage(2)">»</a></li>
                                            </ul>
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
<script>
    /*查询*/
    $("#search").click(function(){
        getSystemUserListPage(1);
    });
    $(function () {
        getSystemUserListPage(1);
    });
    /*删除管理员*/
    $("body").on("click",".fa-trash",function(){
        var id=$(this).attr("data-id");
        bootbox.confirm("确定要删除吗?", function(result) {
            if (result) {
                $.ajax({
                    url:'<%=basePath%>ba/system/user/'+id,
                    data:{_method:'DELETE'},
                    type:'POST',
                    success:function (data) {
                        if(data.code=="200"){//成功
                            bootbox.alert("删除成功！");
                            getSystemUserListPage(1);
                        }
                    },
                    error:function () {
                        bootbox.alert("操作异常，请稍后再试！");
                    }
                });
            }
        });

    });

function getSystemUserListPage(page) {
    $.ajax({
        url: basePath+'ba/system/user/getSystemUserList',
        type: 'post',
        data: {
            "page": page,
            "functionName":"getSystemUserListPage"
        },
        async: false,
        dataType: 'json',
        success: function (data) {
            var tbody = $('#tbody');
            tbody.empty();
            loadTable(data, "t1", "tbody");
            $.each(data.pageData, function (i, item) {
                var system_user_name="";var email="";

                if(item.first_name!=null&&item.first_name!=="undefined"){
                    system_user_name=system_user_name+item.first_name;
                }

                if(item.email!=null&&item.email!="undefined"){
                    email=item.email;
                }
                var date= new Date(Number(item.created_date)).format("yyyy-MM-dd hh:mm:ss");
                var tr = " <tr>"+
                    "<td class=\"table-col-center\">"+ifNull(item.system_name,"") +"</td>" +
                    "<td class=\"table-col-center\">  <img class='table-image'src='"+ifNull(item.photo_path,'system/img/default_profile_photo.jpg')+"'></td>" +
                    "<td class=\"table-col-left\">"+ifNull(item.login_id,"") +"</td>" +
                    "<td class=\"table-col-left\">"+system_user_name+"</td>" +
                    "<td class=\"table-col-left\">"+ifNull(email,"")+"</td>" +
                    "<td class=\"table-col-center\">"+ifNull(date,"")+"</td>" +
                    "<td class=\"table-col-center\">" +
                    "<span>" +
                    "<i title='修改管理员密码' data-id=\""+item.system_user_id+"\" class=\"fa fa-lock\"></i> "+
                    "<i title='编辑管理员' data-id=\""+item.system_user_id+"\" class=\"fa fa-edit\"></i> "+
                    "<i title='设置管理员权限' data-id=\""+item.system_user_id+"\"  class=\"fa fa-cog\"></i> "+
                    "<i title='删除管理员' data-id='"+item.system_user_id+"' class=\"fa fa fa-trash\"></i>";

                tr += "</span>"+
                    "</td>"+
                    "</tr>";
                tbody.append(tr);
            });
            //更新分页字符串
            $("#pagination").html(data.pageInfo.pageStr);
        }
    });

}

</script>
</body>
</html>