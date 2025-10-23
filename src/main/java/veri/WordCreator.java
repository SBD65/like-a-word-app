/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package veri;

/**
 *
 * @author sekanbilaldurmus
 */

import java.io.FileInputStream;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.apache.poi.xwpf.usermodel.XWPFParagraph;
import org.apache.poi.xwpf.usermodel.XWPFRun;
// Dosya kaydetme için:
import java.io.FileOutputStream;
import java.util.List;

// YENİ: Hizalama ve Alt Çizgi için gereken importlar
import org.apache.poi.xwpf.usermodel.ParagraphAlignment;
import org.apache.poi.xwpf.usermodel.UnderlinePatterns;

public class WordCreator {

    public WordCreator() {
    }
     
    public String görüntüle(String dosyaYolu){
           
        try (FileInputStream fis = new FileInputStream(dosyaYolu);
             XWPFDocument document = new XWPFDocument(fis)) {
            
            List<XWPFParagraph> paragraphs = document.getParagraphs();
            
            System.out.println("--- Belge İçeriği ---");
            
            // YENİ: Metinleri birleştirmek için StringBuilder
            StringBuilder tamMetin = new StringBuilder();
            
            for (XWPFParagraph p : paragraphs) {
                String metin = p.getText();
                if (metin != null) {
                    tamMetin.append(metin).append("\n"); // Paragrafları yeni satırla ekle
                }
            }
            
            System.out.println("--- Okuma Tamamlandı ---");
            return tamMetin.toString();

        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    
   
    /**
     * YENİ: Metot imzası tüm stil parametrelerini alacak şekilde güncellendi.
     */
    public void yeniOlustur(String girilenMetin, String dosyaAdi, int fontSize, String fontFamily,
                            boolean isBold, boolean isItalic, boolean isUnderline,
                            String alignment, String colorHex) {
        
        try (XWPFDocument document = new XWPFDocument()) {

            // 2. Paragrafı oluştur
            XWPFParagraph paragraph = document.createParagraph();
            
            // 3. YENİ: Paragraf Hizalamasını Ayarla
            if (alignment.equalsIgnoreCase("center")) {
                paragraph.setAlignment(ParagraphAlignment.CENTER);
            } else if (alignment.equalsIgnoreCase("right")) {
                paragraph.setAlignment(ParagraphAlignment.RIGHT);
            } else {
                // Varsayılan (left)
                paragraph.setAlignment(ParagraphAlignment.LEFT);
            }

            // 4. Paragrafa metin eklemek için "Run" oluştur
            XWPFRun run = paragraph.createRun();
            
            // 5. YENİ: Tüm stilleri "Run" üzerine uygula
            run.setText(girilenMetin);
            run.setFontFamily(fontFamily);
            run.setFontSize(fontSize);
            
            // Parametrelere göre ayarla (artık sabit değil)
            run.setBold(isBold); 
            run.setItalic(isItalic);
            
            // Renk (Hex kodu olarak, '#' olmadan)
            run.setColor(colorHex); 

            // Alt çizgi
            if (isUnderline) {
                run.setUnderline(UnderlinePatterns.SINGLE);
            }

            // 6. Belgeyi fiziksel bir dosyaya kaydet
            // Not: "Dosyalar/" klasörünün sunucunuzda mevcut ve yazılabilir olması gerekir.
            try (FileOutputStream out = new FileOutputStream("Dosyalar/" + dosyaAdi + ".docx")) {
                document.write(out);
                System.out.println("Başarılı! \"" + dosyaAdi + ".docx\" oluşturuldu.");
            }

        } catch (Exception e) {
            e.printStackTrace();
            // JSP'nin hatayı yakalayabilmesi için hatayı yeniden fırlatabiliriz
            throw new RuntimeException("Word dosyası oluşturulurken hata oluştu", e);
        }
    }
}