<%--
  Created by IntelliJ IDEA.
  User: 张春阳
  Date: 2017/2/24
  Time: 9:15
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
            + path + "/";
%>
<%@ page trimDirectiveWhitespaces="true"%>
<base href="<%=basePath%>"/>
<link rel="icon" href="system/img/logo/chinook.ico" type="image/x-icon">
<link rel="shortcut icon" href="system/img/logo/chinook.ico" type="image/x-icon">
<link rel="stylesheet" type="text/css" href="system/css/font-awesome/css/font-awesome.css">
<link rel="stylesheet" type="text/css" href="system/css/themes/default.css" id="skin-switcher">
<link rel="stylesheet" type="text/css" href="system/css/cloud-admin.css">
<link rel="stylesheet" type="text/css" href="system/css/customer.css">
<link rel="stylesheet" type="text/css" href="system/css/fonts-useso.css">
<link rel="stylesheet" type="text/css" href="system/css/responsive.css">
<link rel="stylesheet" type="text/css" href="system/js/bootstrap-daterangepicker/datetimepicker.css">
<link rel="stylesheet" type="text/css" href="system/js/select2/select2.min.css"/>
<script src="system/js/jquery-1.9.1/jquery.min.js"></script>
<!--提示框-->
<script type="text/javascript" src="system/js/jquery.tips.js"></script>
<script src="system/js/jquery-ui-1.10.3.custom/js/jquery-ui-1.10.3.custom.min.js"></script>

<script src="system/bootstrap-dist/js/bootstrap.js"></script>
<script src="system/js/bootbox/bootbox.min.js"></script>

<script src="system/js/bootstrap-daterangepicker/bootstrap-datetimepicker.min.js"></script>
<!-- SELECT2 -->
<script type="text/javascript" src="system/js/select2/select2.min.js"></script>
<!-- 时间选择器 -->
<script src="system/js/bootstrap-daterangepicker/moment.min.js"></script>
<script src="system/js/bootstrap-daterangepicker/daterangepicker.min.js"></script>
<!-- SLIMSCROLL -->
<script type="text/javascript" src="system/js/jQuery-slimScroll-1.3.0/jquery.slimscroll.min.js"></script>
<script type="text/javascript" src="system/js/jQuery-slimScroll-1.3.0/slimScrollHorizontal.min.js"></script>
<!-- COOKIE -->
<script type="text/javascript" src="system/js/jQuery-Cookie/jquery.cookie.min.js"></script>

<!-- CUSTOM SCRIPT -->
<script src="system/js/script.js"></script>
<script src="system/js/ajaxLoading.js"></script>
<script src="system/js/public.js"></script>
<!--弹框相关-->
<script src="system/js/bootboxAuto.js"></script>
<!--基础管理系统验证-->
<script src="system/js/basic/validate.js"></script>
<script>
    var basePath = "<%=basePath%>";
    $.ajaxSetup({
        contentType: "application/x-www-form-urlencoded;charset=utf-8",
        complete: function (XMLHttpRequest, textStatus) {
            var sessionstatus = XMLHttpRequest.getResponseHeader("sessionstatus"); // 通过XMLHttpRequest取得响应头，sessionstatus，
            if (sessionstatus == "timeout") {
                // 如果超时就处理 ，指定要跳转的页面
                window.location.replace(basePath + "admin/login");
            }
        }
    });
    $(function () {
        bootbox.setDefaults("locale", "zh_CN");
        App.setPage("widgets_box");
        App.init();
    });
</script>