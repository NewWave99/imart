package com.aw.imart.common.util;

import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.faces.context.ExternalContext;
import javax.faces.context.FacesContext;
import javax.servlet.ServletContext;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;

/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */

public class ReportUtil<T> {

    private JasperPrint jasperPrint;
    private FacesContext context;
    private ServletContext servletContext;
    private String jasperRealPath;
    public static final String JASPER_REPORT_PATH = "/resources/jasper/";
    public static final String SEPARATOR = "/";
    public static final String PREFIX = ".jasper";
    public static final String PREFIX_PDF = ".pdf";

    public ReportUtil() {
    }

    private String getReporLocale(String reportName) {
        FacesContext fc = FacesContext.getCurrentInstance();
        Locale locale = fc.getViewRoot().getLocale();
        return (locale.getLanguage().equals("th")) ? reportName + "_th_TH" : locale.getLanguage().equals("en") ? reportName + "_en_US" : null;
    }

    public void export(String jasperName, String pdfCode, HashMap hashMap, Collection beanList) {
        //jasperName = getReporLocale(jasperName);
        try {
            context = FacesContext.getCurrentInstance();
            servletContext = (ServletContext) context.getExternalContext().getContext();
            jasperRealPath = servletContext.getRealPath(JASPER_REPORT_PATH + jasperName + PREFIX);

            String pdfName = pdfCode.concat("-").concat(DateTimeUtil.dateToString(DateTimeUtil.currentDate(), "yyyyMMddHHmmss"));

            JRBeanCollectionDataSource beanCollectionDataSource = new JRBeanCollectionDataSource(beanList);
            jasperPrint = JasperFillManager.fillReport(jasperRealPath, hashMap, beanCollectionDataSource);

            ExternalContext externalContext = context.getExternalContext();
            externalContext.setResponseHeader("Content-Disposition", "attachment; filename=" + pdfName + PREFIX_PDF);

            JasperExportManager.exportReportToPdfStream(jasperPrint, externalContext.getResponseOutputStream());

            context.getApplication().getStateManager().saveView(context);
            context.responseComplete();

        } catch (Exception ex) {
            Logger.getLogger(ReportUtil.class.getName()).log(Level.SEVERE, null, ex);
            JsfUtil.addErrorMessage(ex, ex.getMessage());
        }
    }

    public void exportSubReport(String module, String[] jasperName, String pdfCode, HashMap hashMap, List beanList) {
        String jasperN = getReporLocale((String) jasperName[0]);
        try {
            context = FacesContext.getCurrentInstance();
            servletContext = (ServletContext) context.getExternalContext().getContext();
            jasperRealPath = servletContext.getRealPath(JASPER_REPORT_PATH + module + SEPARATOR + jasperN + PREFIX);

            if (jasperName != null) {
                for (int i = 1; i < jasperName.length; i++) {
                    hashMap.put("subreport" + (i), servletContext.getRealPath(JASPER_REPORT_PATH + module + SEPARATOR + getReporLocale((String) jasperName[i]) + PREFIX));
                    hashMap.put("subreportDataSource" + (i), new JRBeanCollectionDataSource((Collection) beanList.get(i)));
                }
            }

            String pdfName = pdfCode.concat("-").concat(DateTimeUtil.dateToString(DateTimeUtil.currentDate(), "yyyyMMddHHmmss"));

            JRBeanCollectionDataSource beanCollectionDataSource = new JRBeanCollectionDataSource((Collection) beanList.get(0));
            jasperPrint = JasperFillManager.fillReport(jasperRealPath, hashMap, beanCollectionDataSource);

            ExternalContext externalContext = context.getExternalContext();
            externalContext.setResponseHeader("Content-Disposition", "attachment; filename=" + pdfName + PREFIX_PDF);

            JasperExportManager.exportReportToPdfStream(jasperPrint, externalContext.getResponseOutputStream());

            context.getApplication().getStateManager().saveView(context);
            context.responseComplete();

        } catch (Exception ex) {
            Logger.getLogger(ReportUtil.class.getName()).log(Level.SEVERE, null, ex);
            JsfUtil.addErrorMessage(ex, ex.getMessage());
        }
    }

    public void printReport(String jasperName, String pdfCode, HashMap hashMap, Collection beanList) {
//        jasperName = getReporLocale(jasperName);
//        try {
//            context = FacesContext.getCurrentInstance();
//            servletContext = (ServletContext) context.getExternalContext().getContext();
//            jasperRealPath = servletContext.getRealPath(JASPER_REPORT_PATH + jasperName + PREFIX);
//
//            //String pdfName = pdfCode.concat("-").concat(DateTimeUtil.dateToString(DateTimeUtil.currentDate(), "yyyyMMddHHmmss"));
//
//            JRBeanCollectionDataSource beanCollectionDataSource = new JRBeanCollectionDataSource(beanList);
//            jasperPrint = JasperFillManager.fillReport(jasperRealPath, hashMap, beanCollectionDataSource);
//
//            PrinterJob job = RasterPrinterJob.getPrinterJob();
//            PrintService[] services = PrintServiceLookup.lookupPrintServices(null, null);
//            int selectedService = 0;
//            for (int i = 0; i < services.length; i++) {
//                if (services[i].getName().toUpperCase().contains("hp LaserJet 1320 PCL 5")) {
//                    selectedService = i;
//                }
//            }
//            job.setPrintService(services[selectedService]);
//            PrintRequestAttributeSet printRequestAttributeSet = new HashPrintRequestAttributeSet();
//            //MediaSizeName mediaSizeName = MediaSize.findMedia(4, 1, MediaPrintableArea.INCH);
//            //printRequestAttributeSet.add(mediaSizeName);
//            printRequestAttributeSet.add(new Copies(1));
//            PrintServiceAttributeSet printServiceAttributeSet = new HashPrintServiceAttributeSet();
//            printServiceAttributeSet.add(new PrinterName("hp LaserJet 1320 PCL 5", Locale.getDefault()));
//            JRPrintServiceExporter exporter = new JRPrintServiceExporter();
//            exporter.setParameter(JRExporterParameter.JASPER_PRINT, jasperPrint);
//            exporter.setParameter(JRPrintServiceExporterParameter.PRINT_SERVICE, services[selectedService]);
//            exporter.setParameter(JRPrintServiceExporterParameter.PRINT_SERVICE_ATTRIBUTE_SET, services[selectedService].getAttributes());
//            exporter.setParameter(JRPrintServiceExporterParameter.PRINT_REQUEST_ATTRIBUTE_SET, printRequestAttributeSet);
//            exporter.setParameter(JRPrintServiceExporterParameter.DISPLAY_PAGE_DIALOG, Boolean.FALSE);
//            exporter.setParameter(JRPrintServiceExporterParameter.DISPLAY_PRINT_DIALOG, Boolean.FALSE);
//            exporter.exportReport();
//        } catch (Exception ex) {
//            Logger.getLogger(ReportUtil.class.getName()).log(Level.SEVERE, null, ex);
//            JsfUtil.addErrorMessage(ex, ex.getMessage());
//        }
    }

    public void printBarCode(String jasperName, String pdfCode, HashMap hashMap, Collection beanList) {
        jasperName = getReporLocale(jasperName);
        try {
            context = FacesContext.getCurrentInstance();
            servletContext = (ServletContext) context.getExternalContext().getContext();
            jasperRealPath = servletContext.getRealPath(JASPER_REPORT_PATH + jasperName + PREFIX);

            String pdfName = pdfCode.concat("-").concat(DateTimeUtil.dateToString(DateTimeUtil.currentDate(), "yyyyMMddHHmmss"));

            JRBeanCollectionDataSource beanCollectionDataSource = new JRBeanCollectionDataSource(beanList);
            jasperPrint = JasperFillManager.fillReport(jasperRealPath, hashMap, beanCollectionDataSource);

//            PrinterJob job = RasterPrinterJob.getPrinterJob();
//            PrintService[] services = PrintServiceLookup.lookupPrintServices(null, null);
//            int selectedService = 0;
//            for (int i = 0; i < services.length; i++) {
//                if (services[i].getName().toUpperCase().contains("hp LaserJet 1320 PCL 5")) {
//                    selectedService = i;
//                }
//            }
//            System.out.println("job:" + job);
//            job.setPrintService(services[selectedService]);
//            PrintRequestAttributeSet printRequestAttributeSet = new HashPrintRequestAttributeSet();
//            MediaSizeName mediaSizeName = MediaSize.findMedia(4, 1, MediaPrintableArea.INCH);
//            printRequestAttributeSet.add(mediaSizeName);
//            printRequestAttributeSet.add(new Copies(1));
//            PrintServiceAttributeSet printServiceAttributeSet = new HashPrintServiceAttributeSet();
//            printServiceAttributeSet.add(new PrinterName("hp LaserJet 1320 PCL 5", Locale.getDefault()));
//            JRPrintServiceExporter exporter = new JRPrintServiceExporter();
//            exporter.setParameter(JRExporterParameter.JASPER_PRINT, jasperPrint);
//            exporter.setParameter(JRPrintServiceExporterParameter.PRINT_SERVICE, services[selectedService]);
//            exporter.setParameter(JRPrintServiceExporterParameter.PRINT_SERVICE_ATTRIBUTE_SET, services[selectedService].getAttributes());
//            exporter.setParameter(JRPrintServiceExporterParameter.PRINT_REQUEST_ATTRIBUTE_SET, printRequestAttributeSet);
//            exporter.setParameter(JRPrintServiceExporterParameter.DISPLAY_PAGE_DIALOG, Boolean.FALSE);
//            exporter.setParameter(JRPrintServiceExporterParameter.DISPLAY_PRINT_DIALOG, Boolean.TRUE);
//            exporter.exportReport();

            //context.getApplication().getStateManager().saveView(context);
            //context.responseComplete();
        } catch (Exception ex) {
            Logger.getLogger(ReportUtil.class.getName()).log(Level.SEVERE, null, ex);
            JsfUtil.addErrorMessage(ex, ex.getMessage());
        }
    }

    public void exportBarCode(String jrxmlName, String pdfCode, HashMap hashMap, Collection beanList) {
        //jasperName = getReporLocale(jasperName);
        try {
            context = FacesContext.getCurrentInstance();
            servletContext = (ServletContext) context.getExternalContext().getContext();
            jasperRealPath = servletContext.getRealPath(JASPER_REPORT_PATH + jrxmlName + ".jrxml");
            JasperReport jasperReport = JasperCompileManager.compileReport(jasperRealPath);

            String pdfName = pdfCode.concat("-").concat(DateTimeUtil.dateToString(DateTimeUtil.currentDate(), "yyyyMMddHHmmss"));

            JRBeanCollectionDataSource beanCollectionDataSource = new JRBeanCollectionDataSource(beanList);
            jasperPrint = JasperFillManager.fillReport(jasperReport, new HashMap(), beanCollectionDataSource);

            ExternalContext externalContext = context.getExternalContext();
            externalContext.setResponseHeader("Content-Disposition", "attachment; filename=" + pdfName + PREFIX_PDF);

            JasperExportManager.exportReportToPdfStream(jasperPrint, externalContext.getResponseOutputStream());

            context.getApplication().getStateManager().saveView(context);
            context.responseComplete();

        } catch (Exception ex) {
            Logger.getLogger(ReportUtil.class.getName()).log(Level.SEVERE, null, ex);
            JsfUtil.addErrorMessage(ex, ex.getMessage());
        }
    }
}
