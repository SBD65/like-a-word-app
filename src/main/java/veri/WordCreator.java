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



public class WordCreator {

    public WordCreator() {
    }
     
    public String görüntüle(String dosyaYolu){
           
        try (FileInputStream fis = new FileInputStream(dosyaYolu);
             // 1. Belgeyi Yükle (Anahtar Sınıf!)
             XWPFDocument document = new XWPFDocument(fis)) {
            
            // 2. Tüm Paragrafların Listesini Al
            List<XWPFParagraph> paragraphs = document.getParagraphs();
            
            System.out.println("--- Belge İçeriği ---");

            // 3. Paragrafları Döngüye Al ve Metni Çek
            for (XWPFParagraph p : paragraphs) {
                // Her paragrafın düz metin içeriğini çekeriz.
                // Eğer paragrafta metin yoksa (boş satır), boş string döner.
                String metin = p.getText();
                
                if (!metin.isEmpty()) {
                   return metin;
                }
            }

            System.out.println("--- Okuma Tamamlandı ---");

        } catch (Exception e) {
            e.printStackTrace();
        }
return null;
    }

    
   
    public void yeniOlustur(String girilenMetin,String dosyaAdi,int fontSize){
          XWPFDocument document = new XWPFDocument();

        // 2. Belgeye yeni bir paragraf ekle
        XWPFParagraph paragraph = document.createParagraph();
        
        // 3. Paragrafa metin eklemek için bir "Run" oluştur
        XWPFRun run = paragraph.createRun();
        
        // 4. Metni yaz ve kalın (bold) yap
        
        run.setText(girilenMetin);
        run.setBold(true);
        run.setFontSize(fontSize);
        run.setTextPosition(0);

        // 5. Belgeyi fiziksel bir dosyaya kaydet
        try (FileOutputStream out = new FileOutputStream("Dosyalar/"+dosyaAdi+".docx")) {
           
            document.write(out);
            System.out.println("Başarılı! \""+dosyaAdi+"\" oluşturuldu.");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    
  

}