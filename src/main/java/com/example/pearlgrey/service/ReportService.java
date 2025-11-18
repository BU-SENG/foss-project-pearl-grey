package com.example.pearlgrey.service;




import com.example.pearlgrey.entity.Donation;
import com.lowagie.text.Document;
import com.lowagie.text.Font;
import com.lowagie.text.FontFactory;
import com.lowagie.text.Paragraph;
import com.lowagie.text.pdf.PdfWriter;
import org.springframework.stereotype.Service;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.util.List;

@Service
public class ReportService {
    private final DonationService donationService;

    public ReportService(DonationService donationService) {
        this.donationService = donationService;
    }

    // --- CSV GENERATION ---
    public ByteArrayInputStream generateDonationsCsv() {
        StringBuilder sb = new StringBuilder();
        sb.append("Id,DonorName,ItemName,Category,Quantity,DateReceived\n");

        List<Donation> donations = donationService.getAll();

        for (Donation d : donations) {
            sb.append(d.getId()).append(",");
            sb.append(escapeCsv(d.getDonorName())).append(",");
            sb.append(escapeCsv(d.getItemName())).append(",");
            sb.append(escapeCsv(d.getCategory())).append(",");
            sb.append(d.getQuantity()).append(",");
            sb.append(d.getDateReceived() != null ? d.getDateReceived().toString() : "").append("\n");
        }
        return new ByteArrayInputStream(sb.toString().getBytes());
    }

    private String escapeCsv(String s) {
        if (s == null) return "";
        if (s.contains(",") || s.contains("\"")) {
            return "\"" + s.replace("\"", "\"\"") + "\"";
        }
        return s;
    }

    // --- PDF GENERATION ---
    public ByteArrayInputStream generateDonationsPdf() {
        List<Donation> donations = donationService.getAll();

        try (ByteArrayOutputStream out = new ByteArrayOutputStream()) {
            // 1. Create the OpenPDF Document (NOT javax.swing.text.Document)
            Document document = new Document();

            // 2. Create the Writer instance
            PdfWriter.getInstance(document, out);

            // 3. Open document to allow writing
            document.open();

            // 4. Add Content
            Font titleFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 16);
            document.add(new Paragraph("Donations Report", titleFont));
            document.add(new Paragraph(" ")); // Empty line

            for (Donation d : donations) {
                String line = String.format("Id: %d | Donor: %s | Item: %s | Cat: %s | Qty: %d | Date: %s",
                        d.getId(),
                        d.getDonorName(),
                        d.getItemName(),
                        d.getCategory(),
                        d.getQuantity(),
                        d.getDateReceived());

                document.add(new Paragraph(line));
            }

            // 5. Close document
            document.close();

            return new ByteArrayInputStream(out.toByteArray());

        } catch (Exception e) {
            throw new RuntimeException("Failed to generate PDF", e);
        }
    }
}