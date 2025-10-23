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
    
    <jsp:useBean id="ilkCekirdek" scope="session" class="veri.WordCreator" />
   
    <%
        // Orijinal parametreler
        String paragraf = request.getParameter("metinAlani");
        String dosyaAdi = request.getParameter("dosyaAdi");
        String fontSize = request.getParameter("fontSize"); 
        String fontFamily = request.getParameter("form");
        
        // YENİ: Stil parametrelerini al
        String isBoldStr = request.getParameter("isBold");
        String isItalicStr = request.getParameter("isItalic");
        String isUnderlineStr = request.getParameter("isUnderline");
        String alignment = request.getParameter("alignment"); // "left", "center", "right"
        String textColor = request.getParameter("textColor"); // "#FF0000" formatında

        // Parametreleri Java'nın anlayacağı tiplere dönüştür
        int fontSizeInt = Integer.valueOf(fontSize);
        boolean isBold = Boolean.parseBoolean(isBoldStr);
        boolean isItalic = Boolean.parseBoolean(isItalicStr);
        boolean isUnderline = Boolean.parseBoolean(isUnderlineStr);
        
        // Renk kodundan '#' işaretini kaldır (Apache POI '#' olmadan ister)
        String docxColor = textColor.substring(1); // "FF0000"

        if(dosyaAdi == null || dosyaAdi.trim().equals("")){
            out.println("<h1>Hata: Dosya adı boş bırakılamaz!</h1>");
        } else {
            try {
                // YENİ: Güncellenmiş metoda tüm parametreleri gönder
                ilkCekirdek.yeniOlustur(paragraf, dosyaAdi, fontSizeInt, fontFamily, 
                                        isBold, isItalic, isUnderline, alignment, docxColor);
                
                out.println("<h1>Dosyanız başarıyla oluştu!</h1>");
                out.println("<p>'" + dosyaAdi + ".docx' adlı dosyanız başarıyla oluşturuldu.</p>");
                
            } catch (Exception e) {
                out.println("<h1>Hata: Dosya oluşturulurken bir sorun oluştu.</h1>");
                e.printStackTrace(response.getWriter());
            }
        }
    %>
    
    <a href="index.html">Geri Dön</a>
     
</body>
</html>