<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="com.chinook5.util.SessionKey" %>
<%@ page import="com.chinook5.bean.basic.SystemMenu" %>
<%@ page import="java.util.List" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page trimDirectiveWhitespaces="true" %>
<!-- 首次参数传入菜单 -->
<div id="sidebar" class="sidebar">
    <div class="sidebar-menu nav-collapse">
        <ul>
            <c:forEach items="${leftMenu}" var="menu">
            <li class="has-sub">
                <a data-id="${menu.systemMenuID}" href="javascript:;">
                    <i class="${menu.iconUrl}"></i>
                    <span class="menu-text">${menu.menuName }</span>
                    <span class="arrow"></span>
                </a>
                <ul class="sub">
                    <c:forEach var="sub" items="${menu.childMenus}">
                        <li class="">
                            <a  data-id="${sub.systemMenuID}" data-url="${sub.navigateUrl}" href="${sub.navigateUrl}">
                                <span class="sub-menu-text">${sub.menuName}</span>
                            </a>
                        </li>
                    </c:forEach>
                </ul>
                </c:forEach>
        </ul>
        <!-- /SIDEBAR MENU
        <from id="fNavigate" action="" type="post" >
            <input type="hidden" id="NavigateCurrentID" name="currentID" value=""/>
            <input type="hidden" id="NavigateParentID" name="parentID" value=""/>
        </from> -->
    </div>
</div>
<%--修改密碼--%>
<div class="modal fade" id="password-div" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                    &times;
                </button>
                <h4 class="modal-title">
                    用户密码
                </h4>
            </div>
            <div class="modal-body">
                <form class="form-horizontal" id="form-password">
                    <div class="form-group">
                        <label class="col-sm-4 control-label">会员账号：</label>
                        <div class="col-sm-6">
                            <div class="input-group">

                                <label class="control-label form-content-label">  ${sessionScope.SESSION_ADMIN.loginID}</label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-4 control-label">密码： </label>
                        <div class="col-sm-6">

                                <input type="password" class="form-control validate" id="user-password"  placeholder="请输入用户密码">

                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-4 control-label">确认密码：</label>
                        <div class="col-sm-6">

                                <input type="password" class="form-control validate" id="user-confirmPassword"  placeholder="请输入用户确认密码">

                        </div>
                    </div>

                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭
                </button>
                <button type="button" class="save-password btn btn-primary">
                    保存
                </button>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal -->
</div>
<%--修改用戶信息--%>
<div class="modal fade" id="message" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                    &times;
                </button>
                <h4 class="modal-title">
                    用户信息
                </h4>
            </div>
            <div class="modal-body">
                <form class="form-horizontal" id="form-user-message">
                    <div class="form-group">
                        <label class="col-sm-4 control-label">会员账号：</label>
                        <div class="col-sm-6">
                            <div class="input-group">

                                    <label class="control-label form-content-label">  ${sessionScope.SESSION_ADMIN.loginID}</label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-4 control-label">姓名：</label>
                        <div class="col-sm-6">

                                <input  type="hidden" name="systemUserID" id="UsersystemUserID" value="${sessionScope.SESSION_ADMIN.systemUserID}">
                                <input type="text" class="form-control validate" id="userFirstName"  placeholder="请输入用户姓名" value="${sessionScope.SESSION_ADMIN.firstName}">

                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-4 control-label">Email：</label>
                        <div class="col-sm-6">

                                <input class="form-control validate" id="admin-email"  name="email" placeholder="请输入用户Email" value="${sessionScope.SESSION_ADMIN.email}">

                        </div>
                    </div>

                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭
                </button>
                <button type="button" class="save-user-message btn btn-primary">
                 保存
                </button>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal -->
</div>
<script>
    /*修改用户密码相关信息*/
    $(".save-password").click(function () {
        var flag = validate({
            form_id: 'form-password'
        });
        var password=$("#user-password").val();
        var confirmPassword=$("#user-confirmPassword").val();
        if(password!=confirmPassword){
            $("#user-confirmPassword").tips({msg:"密码与确认密码不一致！"});
            flag=false;
        }
        if(flag){
            bootbox.confirm("确定要保存吗?", function(result) {
                if(result){
                    saveUserPassword();
                }
            });
        }
    });
    /*提交用户密码相关信息*/
    var saveUserPassword=function () {
         $.ajax({
             url:basePath+"ba/system/user/change_password",
             data:{"systemUserID":${sessionScope.SESSION_ADMIN.systemUserID},
                 "password":$("#user-password").val(),
                 "_method":"POST"
             },
             type:'POST',
             dataType: 'json',
             success:function (data) {
                 if(data.code=="200"){
                     bootbox.confirm("保存成功！",function(result){
                         if(result){
                             window.location.href=basePath;
                         }
                     });

                 }else{
                     bootbox.alert(data.message);
                 }
             }

         })
    }
    /*验证用户信息相关*/
    $(".save-user-message").click(function () {
        var flag = validate({
            form_id: 'form-user-message'
        });
        var email=$("#admin-email").val();
        var required=true;
        if(!checkEmail("admin-email",required)){
            $("#admin-email").tips({msg:"请输入正确的Email格式！"});
            flag=false;
        }

        if(flag){
            bootbox.confirm("确定要保存吗?", function(result) {
                if(result){
                    saveUserMessage();
                }
            });
        }
    });
    /*提交用户信息相关*/
    var saveUserMessage=function(){
        $.ajaxFileUpload({
            url:basePath+"ba/system/user/updateMessage",
            data:{
                email:$("#admin-email").val(),
                firstName:$("#userFirstName").val(),
                systemUserID:$("#UsersystemUserID").val(),
                "_method":"PUT"
            },
            type:'POST',
            dataType: 'json',
            success:function (data) {
                if(data.code=="200"){
                    bootbox.confirm("保存成功！",function(result){
                        if(result){
                            window.location.href=basePath;
                        }
                    });

                }else{
                    bootbox.alert(data.message);
                }
            }

        })
    }
</script>