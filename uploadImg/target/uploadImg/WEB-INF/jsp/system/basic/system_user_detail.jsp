<%--
  Created by IntelliJ IDEA.
  User: 张春阳
  Date: 2017/3/10
  Time: 9:57
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>管理员详情 - Chinook</title>
    <%@include file="../public/head.jsp" %>
    <link rel="stylesheet" href="system/js/jquery-zTree/css/zTreeStyle.css" type="text/css">
    <script type="text/javascript" src="system/js/jquery-zTree/jquery.ztree.core.js"></script>
    <script type="text/javascript" src="system/js/jquery-zTree/jquery.ztree.excheck.js"></script>
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
    <script type="text/javascript" src="system/js/jquery.museum.js"></script>
    <link rel="stylesheet" type="text/css" href="system/js/select2/select2.min.css"/>
</head>
<body>
<%--<jsp:include page="../public/top.jsp"></jsp:include>--%>
<section id="page">

   <%-- <jsp:include page="../public/left.jsp"></jsp:include>--%>
    <script type="text/javascript">
        /*selectMenu(131,126);*/
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
                                        <a href="ba/user/list">管理员列表</a>
                                    </li>
                                    <li>管理员详情</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-12">
                        <div class="box border primary">
                            <div class="box-title">
                                <h4><i class="fa fa-bars"></i>管理员详情</h4>
                            </div>

                            <div class="row">
                                <form id="user-save" class="form-horizontal" enctype="multipart/form-data">
                                    <div class="col-md-6">
                                        <div class="box-body big">
                                            <h3 class="form-title">基本信息</h3>

                                        <div class="form-group">
                                            <label class="col-sm-4 control-label">账号：</label>
                                            <div class="col-sm-6">
                                                <input type="hidden" id="systemUserID" name="systemUserID" value="${user.system_user_id}">
                                                <input type="text" onblur="validateSystemUserLoginID()" id="loginID" name="loginID" class="form-control validate" placeholder="请输入账号名称" value="${user.login_id}">
                                            </div>
                                        </div>
                                            <div class="form-group" id="updateAdminPassword">
                                                <label class="col-sm-4 control-label">密码：</label>
                                                <div class="col-sm-6">
                                                    <input type="password" id="password" name="password" class="form-control " placeholder="请输入密码" value="${user.password}">
                                                </div>
                                            </div>
                                        <div class="form-group">
                                            <label class="col-sm-4 control-label">Email：</label>
                                            <div class="col-sm-6">
                                                <input type="text" id="email" name="email" class="form-control " placeholder="请输入Email" value="${user.email}">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-4 control-label">姓名：</label>
                                            <div class="col-sm-6">
                                                <input type="text" id="firstName" name="firstName" class="form-control validate" placeholder="请输入姓名" value="${user.first_name}">
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
                                        <div class="form-group" style="padding:0">
                                            <div id="newdiv" class="col-sm-8 col-sm-offset-4">
                                                <c:if test="${user.photo_path != null}">
                                                    <img id="logo" class="table-image" src="${user.photo_path}"/>
                                                </c:if>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="box-body big">
                                            <h3 class="form-title">其他信息</h3>
                                            <div class="form-group">
                                                <label class="col-sm-4 control-label">系统ID：</label>
                                                <div class="col-sm-6">
                                                    <input disabled  type="text" id="SystemID" name="SystemID" class="form-control " placeholder="系统ID" value="1">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-sm-4 control-label">状态：</label>
                                                <div class="col-sm-6">
                                                    <input disabled  type="text" id="statusID" name="statusID" class="form-control " placeholder="状态" value="1">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-sm-4 control-label">备注：</label>
                                                <div class="col-sm-6">
                                                    <textarea id="remark" name="remark" class="form-control " placeholder="请输入备注" >
                                                        ${user.remark.trim()}
                                                    </textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="box-body big">
                                            <div class="form-group">
                                                <div class="col-sm-offset-0 col-sm-12">
                                                    <button type="button" class="save btn btn-primary">
                                                        <i class="fa fa-save"></i> 保存
                                                    </button>
                                                    <button type="button" class="btn btn-default" onclick="window.location.href='<%=basePath%>ba/system/user/list';">
                                                        <i class="fa fa-arrow-circle-left"></i> 返回
                                                    </button>
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
</section>
<script>
    //校验管理员名称重复
    function validateSystemUserLoginID() {
        return checkExist("systemUserID", "loginID", basePath + "ba/system/user/validate_system_user_loginID");
    }
    function showSystems(){
        var system=$("#SystemID").val();
        var statusID=$("#statusID").val();
//编辑管理员用户
        if('${user.system_id}'!=""){
        $("#updateAdminPassword").hide();
        }
    }
    //图片预览
    $("#up").change(function () {
        uploadPreview("up","newdiv","table-image");
        $.museum($('#newdiv img'));
    });
    //关闭弹框
    function closeAlert(){
        $("button[data-dismiss='modal']").click();
    }
    $(".save").click(function(){
        var flag=validate({
            form_id:'user-save'
        });
        var email="email";
        var required=true;
        if(!checkEmail(email,required)){
            flag=false;
        }
        if (!validateSystemUserLoginID()) {
            flag = false;
        }
        if(flag){
            bootbox.confirm("确定要保存吗?", function(result) {
                if (result) {
                    closeAlert();
                      //提交保存
                    var _method="";
                    var data={};
                    var url="";
                    var password=$("#password").val();
                    if($("#systemUserID").val()!=null&&$("#systemUserID").val()!="undefined"&&$("#systemUserID").val()!=""){
                        url="<%=basePath%>ba/system/user/"+$("#systemUserID").val();
                        data={"systemUserID":$("#systemUserID").val(),
                            "SystemID":$("#SystemID").val(),
                            "loginID":$("#loginID").val(),
                            "email":$("#email").val(),
                            "password":password,
                            "firstName":$("#firstName").val(),
                            "statusID":$("#statusID").val(),
                            "remark":$("#remark").val(),
                            "_method":"PUT"
                        };
                        if(password==null||password.length==0){
                            data={"systemUserID":$("#systemUserID").val(),
                                "SystemID":$("#SystemID").val(),
                                "loginID":$("#loginID").val(),
                                "email":$("#email").val(),
                                "statusID":$("#statusID").val(),
                                "firstName":$("#firstName").val(),
                                "remark":$("#remark").val(),
                                "_method":"PUT"
                            };
                        }

                    }else{
                        url="<%=basePath%>ba/system/user/detail";
                        data={
                            "SystemID":$("#SystemID").val(),
                            "loginID":$("#loginID").val(),
                            "password":password,
                            "email":$("#email").val(),
                            "statusID":$("#statusID").val(),
                            "firstName":$("#firstName").val(),
                            "remark":$("#remark").val(),
                            "_method":"POST"
                        };
                        if(password==null||password.length==0){
                            data={
                                "SystemID":$("#SystemID").val(),
                                "loginID":$("#loginID").val(),
                                "email":$("#email").val(),
                                "statusID":$("#statusID").val(),
                                "firstName":$("#firstName").val(),
                                "remark":$("#remark").val(),
                                "_method":"POST"
                            };
                        }
                    }

                   // var data=($("#user-save").serialize()+"&"+"selectId="+str+"&"+"_method=POST").serializeArray();
                     $.ajaxFileUpload({
                        url:url,
                         data:data,
                        type:'POST',
                         dataType: 'json',
                         secureuri: false,
                         fileElementId: ['up'],
                         success:function (data) {
                            if(data.code=="200"){
                                bootbox.confirm("保存成功！",function(result){
                                    if(result){
//                                        window.location.href=basePath+"ba/system/user/"+data.message;
                                        window.location.href=basePath+"ba/system/user/list";
                                    }
                                });

                            }else{
                                bootbox.alert(data.message);
                            }

                         },
                         error:function () {
                             bootbox.alert("操作异常，请稍后重试！");
                         }
                     });
                }
            });
        }
    });
    var setting = {
        check: {
            enable: true
        },
        data: {
            simpleData: {
                enable: true
            }
        }
    };

</script>
</body>
</html>


