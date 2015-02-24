/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aw.imart.controller.order;

import com.aw.imart.common.constants.Constants;
import com.aw.imart.common.constants.ReportConstant;
import com.aw.imart.common.util.DateTimeUtil;
import com.aw.imart.common.util.ExceptionUtil;
import com.aw.imart.common.util.JsfUtil;
import com.aw.imart.common.util.MsgBundleLoader;
import com.aw.imart.common.util.ReportUtil;
import com.aw.imart.common.util.StringUtil;
import com.aw.imart.controller.LocaleController;
import com.aw.imart.controller.MethodController;
import com.aw.imart.controller.NavigationController;
import com.aw.imart.controller.UserInfoController;
import com.aw.imart.entity.AuthUser;
import com.aw.imart.entity.OrderDetail;
import com.aw.imart.entity.Shipping;
import com.aw.imart.log.util.LogUtil;
import com.aw.imart.reportbean.Invice002ReportBean;
import com.aw.imart.service.InvoiceService;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import org.apache.log4j.Logger;
import java.math.BigDecimal;
import java.util.Collection;
import java.util.HashMap;

/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */


@ManagedBean(name = "invoice001Controller")
@SessionScoped
public class Invoice001Controller extends MethodController implements Serializable {

    private static Logger logger = LogUtil.getLogger(Invoice001Controller.class);
    public static final String BEAN_NAME = "invoice001Controller";

    @EJB
    private InvoiceService invoiceService;
    
    private Shipping shipping;
    private List<Invoice001Controller> dataList;
    private Integer seq;
    
    private String shippingID;
    private String fristName;
    private String lastName;
    private BigDecimal shippingPriceNet;


    private AuthUser authUser;
    private UserInfoController userInfo;
    private LocaleController local;
    private NavigationController navigationController;
    private String mode;
    
   
    public Invoice001Controller() {
       
    }

    @PostConstruct
    @Override
    public void init() throws Exception {
        String METHOD_NAME = "init";
        try {
            userInfo = (UserInfoController) JsfUtil.getManagedBean(UserInfoController.CONTROLLER_NAME);
            local = (LocaleController) JsfUtil.getManagedBean(LocaleController.CONTROLLER_NAME);
            navigationController = (NavigationController) JsfUtil.getManagedBean(NavigationController.CONTROLLER_NAME);

            findAll();
        } catch (Exception ex) {
            LogUtil.errorLog(logger, this.getClass(), METHOD_NAME, ex, userInfo.getUsername());
            List<String> error = new ArrayList<String>();
            error = ExceptionUtil.addLineException(error, "errors.2010", new String[]{ex.getMessage()});
            JsfUtil.addErrorMessages(error);
        }
    }

    @Override
    public void insert() throws Exception {
    }

    @Override
    public void find() throws Exception {
       
    }

    @Override
    public void findAll() throws Exception {
         String METHOD_NAME = "findAll";
        try {
            LogUtil.infoLog(logger, this.getClass(), METHOD_NAME, userInfo.getUsername());
            
            shipping=new Shipping();
            shipping.setUserID(userInfo.getAuthUser());
            shipping.setShippingStatus(Constants.PAYMENT_CORRECT);
            
            List<Shipping> shippingList = invoiceService.findByInvoice(shipping);
            dataList = new ArrayList<Invoice001Controller>();
            seq=1; 
            for (int i = 0; i < shippingList.size(); i++) {
                Invoice001Controller inv001 = new Invoice001Controller();
                inv001.setSeq(seq);
                Shipping shipping_obj=(Shipping) shippingList.get(i);
                inv001.setShipping(shipping_obj);
                BigDecimal priceNet=new BigDecimal(0);
                for (int q = 0; q < shipping_obj.getOrderDetailList().size(); q++) {
                    OrderDetail order_detail=(OrderDetail) shipping_obj.getOrderDetailList().get(q);
                    priceNet=priceNet.add(order_detail.getOrderdetailPriceTotal());
                }
                inv001.setShippingPriceNet(priceNet);
                
                dataList.add(inv001);
                seq=seq+1;
            }
        } catch (Exception ex) {
            LogUtil.errorLog(logger, this.getClass(), METHOD_NAME, ex, userInfo.getUsername());
            List<String> error = new ArrayList<String>();
            error = ExceptionUtil.addLineException(error, "errors.2010", new String[]{ex.getMessage()});
            JsfUtil.addErrorMessages(error);
        }
    }
    
     public void findByCriteria() throws Exception {
       String METHOD_NAME = "findByCriteria";
        try {
            userInfo = (UserInfoController) JsfUtil.getManagedBean(UserInfoController.CONTROLLER_NAME);
            local = (LocaleController) JsfUtil.getManagedBean(LocaleController.CONTROLLER_NAME);
            navigationController = (NavigationController) JsfUtil.getManagedBean(NavigationController.CONTROLLER_NAME);

            Shipping  find_pro =new Shipping();
            find_pro.setShippingID(shippingID);
            find_pro.setName(fristName);
            find_pro.setLastName(lastName);
            
            List<Shipping> shippingList = invoiceService.findByCriteria(find_pro);
            dataList = new ArrayList<Invoice001Controller>();
            seq=1;
            for (int i = 0; i < shippingList.size(); i++) {
                Invoice001Controller inv001 = new Invoice001Controller();
                inv001.setSeq(seq);
                Shipping shipping_obj=(Shipping) shippingList.get(i);
                inv001.setShipping(shipping_obj);
                BigDecimal priceNet=new BigDecimal(0);
                for (int q = 0; q < shipping_obj.getOrderDetailList().size(); q++) {
                    OrderDetail order_detail=(OrderDetail) shipping_obj.getOrderDetailList().get(q);
                    priceNet=priceNet.add(order_detail.getOrderdetailPriceTotal());
                }
                inv001.setShippingPriceNet(priceNet);
                
                dataList.add(inv001);
                seq=seq+1;
            }
        } catch (Exception ex) {
            LogUtil.errorLog(logger, this.getClass(), METHOD_NAME, ex, userInfo.getUsername());
            List<String> error = new ArrayList<String>();
            error = ExceptionUtil.addLineException(error, "errors.2010", new String[]{ex.getMessage()});
            JsfUtil.addErrorMessages(error);
        }
    }

    @Override
    public void delete() throws Exception {
    }

    @Override
    public void update() throws Exception { 
    }
    
  
    @Override
    public void cancel() throws Exception {
    }

    @Override
    public void reportPDF() throws Exception {
        String METHOD_NAME = "reportPDF";
        try {
            LogUtil.infoLog(logger, this.getClass(), METHOD_NAME, userInfo.getUsername());
            ReportUtil reportUtil = new ReportUtil();
            Collection reportList = new ArrayList();
            HashMap parameter = new HashMap();

            int qty_total=0;
            BigDecimal price_total=new BigDecimal(0);
            if (shipping.getOrderDetailList().size() > 0) {
                for (int i = 0; i < shipping.getOrderDetailList().size(); i++) {
                    OrderDetail detail = (OrderDetail) shipping.getOrderDetailList().get(i);
                    Invice002ReportBean inv002ReportBean = new Invice002ReportBean();
                    inv002ReportBean.setSeq(String.valueOf(i + 1));
                    inv002ReportBean.setProDetail(detail.getProduct().getProductDesc());
                    inv002ReportBean.setProQty(StringUtil.numberFormat(detail.getOrderDetailAmount(), "#,##0"));
                    inv002ReportBean.setProUnitPrice(StringUtil.numberFormat(detail.getOrderDetailPrice(), "#,##0.00"));
                    inv002ReportBean.setProAmount(StringUtil.numberFormat(detail.getOrderdetailPriceTotal(), "#,##0.00"));
                    
                    qty_total=qty_total+detail.getOrderDetailAmount();
                    price_total=price_total.add(detail.getOrderdetailPriceTotal());
                    
                    reportList.add(inv002ReportBean);
                }
            }
            
            parameter.put(ReportConstant.PUR_INVOICE_NO, StringUtil.getIsNull(shipping.getShippingID()));
            String statu_payment="";
            if(shipping.getShippingStatus()==1){
                statu_payment=MsgBundleLoader.getMessage("paymentWait", MsgBundleLoader.APPLICATIONRESOURCES_PATH);
            }else if(shipping.getShippingStatus()==1){
                statu_payment=MsgBundleLoader.getMessage("paymentfiled", MsgBundleLoader.APPLICATIONRESOURCES_PATH);
            }else{
                statu_payment=MsgBundleLoader.getMessage("paymentComplete", MsgBundleLoader.APPLICATIONRESOURCES_PATH);
            }
            parameter.put(ReportConstant.PUR_PAYMENT, statu_payment);
            parameter.put(ReportConstant.PUR_PREORDER_NO, StringUtil.getIsNull(shipping.getShippingID()));
            parameter.put(ReportConstant.PUR_DATE, DateTimeUtil.dateToString(shipping.getShippingDate(), "dd/MM/yyyy HH:mm"));
            parameter.put(ReportConstant.PUR_CUS_CODE, StringUtil.getIsNull(shipping.getUserID().getUserId()));
            parameter.put(ReportConstant.PUR_CUS_NAME, StringUtil.getIsNull(shipping.getName()+" "+shipping.getLastName()));
            parameter.put(ReportConstant.PUR_CUS_ADDRESS, StringUtil.getIsNull(shipping.getAddress()+" "+shipping.getKhet()+" "+shipping.getKwang()+" "+
                    shipping.getProvince()+" "+shipping.getZipcode()));
            parameter.put(ReportConstant.PUR_CUS_TELEPHONE, StringUtil.getIsNull(shipping.getTelephone()));
            parameter.put(ReportConstant.PUR_CUS_EMAIL, StringUtil.getIsNull(shipping.getEmail()));

            parameter.put(ReportConstant.PUR_TOTAL_QTY, StringUtil.numberFormat(qty_total, "#,##0"));
            parameter.put(ReportConstant.PUR_TOTAL_AMOUNT, StringUtil.numberFormat(price_total, "#,##0.00"));
         
            parameter.put(ReportConstant.PUR_GRAND_TOTAL, StringUtil.numberFormat(price_total, "#,##0.00"));
            reportUtil.export(ReportConstant.PRE002_JASPER, ReportConstant.PUR002_CODE, parameter, reportList);
            
        } catch (Exception ex) {
            LogUtil.errorLog(logger, this.getClass(), METHOD_NAME, ex, userInfo.getUsername());
            List<String> error = new ArrayList<String>();
            error = ExceptionUtil.addLineException(error, "errors.2001", new String[]{ex.getMessage()});
            JsfUtil.addErrorMessages(error);
        }
    }

    @Override
    public void reportExcel() throws Exception {
    }

    public String getShippingID() {
        return shippingID;
    }

    public void setShippingID(String shippingID) {
        this.shippingID = shippingID;
    }

    public String getFristName() {
        return fristName;
    }

    public void setFristName(String fristName) {
        this.fristName = fristName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

   
    
    public static Logger getLogger() {
        return logger;
    }

    public static void setLogger(Logger logger) {
        Invoice001Controller.logger = logger;
    }

    public Shipping getShipping() {
        return shipping;
    }

    public void setShipping(Shipping shipping) {
        this.shipping = shipping;
    }


    public List<Invoice001Controller> getDataList() {
        return dataList;
    }

    public void setDataList(List<Invoice001Controller> dataList) {
        this.dataList = dataList;
    }


    public AuthUser getAuthUser() {
        return authUser;
    }

    public void setAuthUser(AuthUser authUser) {
        this.authUser = authUser;
    }

    public LocaleController getLocal() {
        return local;
    }

    public void setLocal(LocaleController local) {
        this.local = local;
    }

    public String getMode() {
        return mode;
    }

    public void setMode(String mode) {
        this.mode = mode;
    }

    public Integer getSeq() {
        return seq;
    }

    public void setSeq(Integer seq) {
        this.seq = seq;
    }

    public BigDecimal getShippingPriceNet() {
        return shippingPriceNet;
    }

    public void setShippingPriceNet(BigDecimal shippingPriceNet) {
        this.shippingPriceNet = shippingPriceNet;
    }

    
}
