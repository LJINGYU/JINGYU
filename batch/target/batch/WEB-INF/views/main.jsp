<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta http-equiv="X-UA-Compatible"content="IE=9; IE=8; IE=7; IE=EDGE" />
	<title>内容列表页面</title>
	<link href="<%= basePath %>resources/css/all.css" rel="stylesheet" type="text/css" />
	<script src="<%= basePath %>resources/js/common/jquery-1.8.0.min.js"></script>
	<script src="<%= basePath %>resources/js/back/list.js"></script>
</head>
<body style="background: #e1e9eb;">
<form action="query" id="mainForm">
	<input type="hidden" name="currentPage" id="currentPage" value="${page.currentPage}"/>

	<div class="right">
		<div class="current">当前位置：<a href="javascript:void(0)" style="color:#6E6E6E;">内容管理</a> &gt; 内容列表</div>
		<div class="rightCont">
			<p class="g_title fix">内容列表 <a class="btn03" href="add">新 增</a>&nbsp;&nbsp;&nbsp;&nbsp;<a class="btn03" href="javascript:void(0)" onclick="deleteBatch()">删 除</a></p>
			<table class="tab1">
				<tbody>
				<tr>
					<td width="90" align="right">用户名：</td>
					<td>
						<input name="username" type="text" class="allInput" value="${username}"/>
					</td>
					<td width="90" align="right">角色：</td>
					<td>
						<input name="rolename" type="text" class="allInput" value="${rolename}"/>
					</td>
					<td width="85" align="right"><input type="submit" class="tabSub" value="查 询" /></td>
				</tr>
				</tbody>
			</table>
			<div class="zixun fix">
				<c:if test="${empty requestScope.pagemsg}">
					没有任何用户信息！
				</c:if>
				<table class="tab2" width="100%">
					<tbody>
					<tr>
						<th><%--<input type="checkbox" id="all"  onclick=""/>--%></th>
						<td>编号</td>
						<td>用户名</td>
						<td>密码</td>
						<td>邮件</td>
						<td>联系电话</td>
						<td>职位</td>
						<td>Edit</td>
						<td>Delete</td>
					</tr>
					<c:forEach items="${requestScope.pagemsg.lists}" var="u">
						<tr>
							<th><input type="checkbox" id="all" name="id"  value="${u.id }" onclick=""/></th>
							<th>${u.id }</th>
							<th>${u.username }</th>
							<th>${u.password }</th>
							<th>${u.email }</th>
							<th>${u.phone }</th>
							<th>${u.rolename }</th>
							<th><a href="edit?id=${u.id}">Edit</a></th>
							<th><a href="delete?id=${u.id}" onclick="return confirm('确定要删除吗')">Delete</a></th>
						</tr>
					</c:forEach>
					</tbody>
				</table>

				<div class='page fix'>
					<span>第${requestScope.pagemsg.currentPage }/ ${requestScope.pagemsg.totalPage}页</span>&nbsp;&nbsp;
					<span>总记录数：${requestScope.pagemsg.totalCount }&nbsp;&nbsp;每页显示:${requestScope.pagemsg.pageSize}</span>&nbsp;&nbsp;
					<span>
						<c:if test="${requestScope.pagemsg.currentPage != 1}">
						   <a href="${pageContext.request.contextPath }/main?currentPage=1" class='first'>[首页]</a>&nbsp;&nbsp;
						   <a href="${pageContext.request.contextPath }/main?currentPage=${requestScope.pagemsg.currentPage-1}" class='pre'>[上一页]</a>&nbsp;&nbsp;
					   </c:if>

					   <c:if test="${requestScope.pagemsg.currentPage != requestScope.pagemsg.totalPage}">
						   <a href="${pageContext.request.contextPath }/main?currentPage=${requestScope.pagemsg.currentPage+1}" class='next'>[下一页]</a>&nbsp;&nbsp;
						   <a href="${pageContext.request.contextPath }/main?currentPage=${requestScope.pagemsg.totalPage}" class='last'>[尾页]</a>&nbsp;&nbsp;
					   </c:if>
                   </span>
				</div>
			</div>
		</div>
	</div>
</form>
<script type="text/javascript">
    /**
     * 调用后台批量删除方法
     */
    function deleteBatch() {
		alert("确定删除所有吗？");
//      console.log(basePath);
        $("#mainForm").attr("action","/deleteBatch");
        $("#mainForm").submit();
    }
</script>
</body>
</html>