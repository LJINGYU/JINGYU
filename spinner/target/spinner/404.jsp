<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
            + path + "/";
%>
<base href="<%=basePath%>"/>
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="icon" href="system/img/logo/chinook.ico" type="image/x-icon">
    <link rel="shortcut icon" href="system/img/logo/chinook.ico" type="image/x-icon">
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <title>Chinook - 404</title>
    <link rel="stylesheet" type="text/css" href="system/css/cloud-admin.css" >
    <link rel="stylesheet" type="text/css"  href="system/css/responsive.css" >

</head>
<body>
<!-- PAGE -->
<section id="page">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="divide-100"></div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 not-found text-center">
                <div class="error">
                    404
                </div>
            </div>
            <div class="col-md-4 col-md-offset-4 not-found text-center">
                <div class="content">
                    <h3>抱歉，您访问的页面不存在...</h3>
                    <p>

                        请再次检查URL是否正确， 您可以 <a href="admin/login">返回登录页面</a> 或者联系系统管理员。
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
</body>
</html>