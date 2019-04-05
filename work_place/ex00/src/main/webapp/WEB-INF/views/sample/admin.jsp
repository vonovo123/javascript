<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h1>/sample/admin page</h1>

<p>principal : <sec:authentication property="principal"/></p>
<p>MemberVO : <sec:authentication property="principal.member"/></p>
<p>userName : <sec:authentication property="principal.member.userName"/></p>
<p>userID : <sec:authentication property="principal.username"/></p>
<p>User Auth List : <sec:authentication property="principal.member.authList"/></p>

<a href="/customLogout">Logout</a>
</body>
</html>