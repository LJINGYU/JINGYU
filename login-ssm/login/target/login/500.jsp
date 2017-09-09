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
    <title>Chinook - 500</title>
    <link rel="stylesheet" type="text/css" href="system/css/cloud-admin.css" >
    <link rel="stylesheet" type="text/css"  href="system/css/responsive.css" >
    <link href="system/css/font-awesome/css/font-awesome.min.css" rel="stylesheet">

</head>
<body>
<section id="page">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="divide-100"></div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 not-found text-center">
                <div class="error-500">
                    500
                </div>
            </div>
            <div class="col-md-4 col-md-offset-4 not-found text-center">
                <div class="content">
                    <h3>对不起！系统繁忙或者遇到问题了。</h3>
                    <p>
                        请稍后再试或者联系管理员...
                    </p>
                    <div class="btn-group">
                        <a href="javascript:void (0)" class="btn btn-danger" onclick="history.go(-1)"><i class="fa fa-chevron-left"></i> 返回</a>
                        <a href="admin/login" class="btn btn-default">前往登录</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</body>
</html>