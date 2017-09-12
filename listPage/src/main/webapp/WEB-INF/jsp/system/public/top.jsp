<%--
  Created by IntelliJ IDEA.
  User: 张春阳
  Date: 2017/2/24
  Time: 9:20
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ page trimDirectiveWhitespaces="true" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
            + path + "/";
%>
<header class="navbar clearfix navbar-fixed-top" id="header">
        <script>
            function switchSystem(system_id) {
                $("#system_id").val(system_id);
                $("#exchageMenu").submit();
            }
        </script>
    <div class="container">
        <div class="navbar-brand">
            <a href="#"><img src="<%=basePath%>/system/img/logo/logo.png" alt="Logo" class="img-responsive" height="30" width="120"></a>
            <div id="sidebar-collapse" class="sidebar-collapse btn">
                <i class="fa fa-bars"></i>
            </div>
        </div>
        <ul class="nav navbar-nav pull-left hidden-xs" id="navbar-left">
            <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    <i class="fa fa-leaf"></i>
                    <span class="name"> 换肤</span>
                    <i class="fa fa-angle-down"></i>
                </a>
                <ul class="dropdown-menu skins">
                    <li class="dropdown-title">
                        <span><i class="fa fa-leaf"></i> 主题皮肤</span>
                    </li>
                    <li><a data-skin="default">天使蓝(默认)</a></li>
                    <li><a data-skin="night">碧湖蓝</a></li>
                    <li><a data-skin="earth">玫瑰金</a></li>
                    <li><a data-skin="utopia">钻雕金</a></li>
                    <li><a data-skin="nature">草木绿</a></li>
                    <li><a data-skin="graphite">曜石黑</a></li>
                </ul>
            </li>
        </ul>
        <c:if test="${sessionScope.SESSION_SYSTEM_USER_SYSTEM.size()>1}">
            <form action="<%=basePath%>home/index" method="post" id="exchageMenu" hidden>
                <input id="system_id" type="hidden" name="system_id">
            </form>
            <ul class="nav navbar-nav pull-left hidden-xs" id="navbar-left">
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                        <i class="fa fa-cog"></i>
                        <span class="name"> ${sessionScope.CURRENT_SYSTEM}</span>
                        <i class="fa fa-angle-down"></i>
                    </a>
                    <ul class="dropdown-menu skins">
                        <c:forEach items="${sessionScope.SESSION_SYSTEM_USER_SYSTEM}" var="pd">
                            <li><a id="system_id${pd.system_id}" href="javascript:switchSystem('${pd.system_id}')">${pd.system_name}</a></li>
                        </c:forEach>
                    </ul>
                </li>
            </ul>
        </c:if>
        <ul class="nav navbar-nav pull-right">
            <li class="dropdown user pull-right" id="header-user">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    <c:if test="${sessionScope.SESSION_ADMIN.profilePhoto != null}">
                        <img class="table-image" src="${sessionScope.SESSION_ADMIN.profilePhoto}">
                    </c:if>
                    <c:if test="${sessionScope.SESSION_ADMIN.profilePhoto == null}">
                        <img class="table-image" src="system/img/profile_default.png">
                    </c:if>
                    <span class="username">${sessionScope.SESSION_ADMIN.loginID} </span>
                    <i class="fa fa-angle-down"></i>
                </a>
                <ul class="dropdown-menu">
                    <li><a  data-toggle="modal" data-target="#message"><i class="fa fa-user" ></i> 用户信息</a></li>
                    <li><a  data-toggle="modal" data-target="#password-div"><i class="fa fa-lock" ></i> 修改密码</a></li>
                    <li><a href="admin/logout"><i class="fa fa-power-off"></i> 注销登录</a></li>
                </ul>
            </li>
        </ul>
    </div>



</header>