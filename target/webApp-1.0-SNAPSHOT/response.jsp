<%-- 
    Document   : response
    Created on : 5 Eki 2025, 17:23:22
    Author     : sekanbilaldurmus
--%>


<%@page import="veri.WordCreator"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>JSP Page</title>
</head>
<body>
    <h1>Hello World!</h1>
    <jsp:useBean id="ilkCekirdek" scope="session" class="veri.WordCreator" />
    Merhaba 
    <%
        String paragraf = request.getParameter("metinAlani");
        String dosyaAdi = request.getParameter("dosyaAdi");
                out.print(paragraf);
   ilkCekirdek.yeniOlustur(paragraf,dosyaAdi,6);

    %>
    
   
     siteme hosgeldin
     
</body>
</html>
