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
    <title>index</title>
    <jsp:include page="head.jsp"></jsp:include>
</head>
<body>
<%--<jsp:include page="top.jsp"></jsp:include>--%>
<h1>Welcome Come!</h1>
</body>
</html>
