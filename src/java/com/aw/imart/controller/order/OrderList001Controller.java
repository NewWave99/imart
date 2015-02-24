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
import com.aw.imart.common.util.UploadUtil;
import com.aw.imart.controller.LocaleController;
import com.aw.imart.controller.MethodController;
import com.aw.imart.controller.NavigationController;
import com.aw.imart.controller.UserInfoController;
import com.aw.imart.entity.AuthUser;
import com.aw.imart.entity.OrderDetail;
import com.aw.imart.entity.OrderDetailPK;
import com.aw.imart.entity.Product;
import com.aw.imart.entity.ProductType;
import com.aw.imart.entity.Shipping;
import com.aw.imart.log.util.LogUtil;
import com.aw.imart.reportbean.Invice002ReportBean;
import com.aw.imart.service.OrderService;
import com.aw.imart.service.ProductService;
import com.aw.imart.service.SystemService;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.logging.Level;
import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.model.SelectItem;
import org.apache.log4j.Logger;

/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */


@ManagedBean(name = "orderList001Controller")
@SessionScoped
public class OrderList001Controller extends MethodController implements Serializable {

    private static Logger logger = LogUtil.getLogger(OrderList001Controller.class);
    public static final String BEAN_NAME = "orderList001Controller";
  
    @EJB
    private ProductService productService;
    @EJB
    private SystemService systemService;
    @EJB
    private OrderService orderService;
   
    
    private Product product;
    private List<OrderList001Controller> dataList;
    private Integer seq;
    private String productID;
    private String productTypeID;
    private String productName;
    
    //detail
    private Shipping shipping;
    private OrderDetail orderDetail;
    private OrderDetailPK orderDetailPK;
    private Integer amount;
    private List<SelectItem> amountList;
    private String imgPath;
    private Integer product_amount;
    
    //cart
    private Integer cart_total;
    private List<OrderList001Controller> dataOrderList;
    private BigDecimal shippingPriceNet;
    private BigDecimal discount=new BigDecimal(0.00); 
    
    //payment
    private String sendFistName;
    private String sendLastName;
    private String sendTelephone;
    private String sendEmail;
    private String sendAddress;
    private String sendKhet;
    private String sendKwang;
    private String sendProvince;
    private String sendZipcode;
    
    private String invoiceNo;
    private String shippingID;
    
    private String userRole;
    private AuthUser authUser;
    private UserInfoController userInfo;
    private LocaleController local;
    private NavigationController navigationController;
    private String mode;
    
    public OrderList001Controller() {
     
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
    public void findAll() throws Exception {
        String METHOD_NAME = "findAll";
        try {
            LogUtil.infoLog(logger, this.getClass(), METHOD_NAME, userInfo.getUsername());
            List<Product> productList = orderService.findProductAll();
            dataList = new ArrayList<OrderList001Controller>();
            seq=0;
            for (int i = 0; i < productList.size(); i++) {
                OrderList001Controller pro001 = new OrderList001Controller();
                Product product_detail=(Product) productList.get(i);
                product_detail.setPicture(UploadUtil.getFilePath(productList.get(i).getPicture()));
                pro001.setProduct(product_detail);

                dataList.add(pro001);
                seq=seq+1;
            }
            shipping =new Shipping();
            shipping.setUserID(userInfo.getAuthUser());
            shipping.setShippingStatus(Constants.PAYMENT_PENDING);
            
            Shipping shipping_obj=orderService.findByPaymentStatus(shipping);
            BigDecimal priceNet=new BigDecimal(0);
            if(StringUtil.isNotNullOrNotEmpty(shipping_obj)){
                dataOrderList = new ArrayList<OrderList001Controller>();
                for (int i = 0; i < shipping_obj.getOrderDetailList().size(); i++) {
                    OrderList001Controller ordD001 = new OrderList001Controller();
                    OrderDetail order_detail=(OrderDetail) shipping_obj.getOrderDetailList().get(i);
                    Product product_detail=order_detail.getProduct();
                    product_detail.setPicture(UploadUtil.getFilePath(order_detail.getProduct().getPicture()));
                    order_detail.setProduct(product_detail);

                    ordD001.setOrderDetail(order_detail);
                    priceNet=priceNet.add(order_detail.getOrderdetailPriceTotal());

                    dataOrderList.add(ordD001);
                }
                this.shippingPriceNet=priceNet;
                this.cart_total=shipping_obj.getOrderDetailList().size();
            }else{
                this.dataOrderList=null;
                this.cart_total=null;
            }
        } catch (Exception ex) {
            LogUtil.errorLog(logger, this.getClass(), METHOD_NAME, ex, userInfo.getUsername());
            List<String> error = new ArrayList<String>();
            error = ExceptionUtil.addLineException(error, "errors.2010", new String[]{ex.getMessage()});
            JsfUtil.addErrorMessages(error);
        }
    }

    @Override
    public void find() throws Exception {
        String METHOD_NAME = "find";
        try {
            userInfo = (UserInfoController) JsfUtil.getManagedBean(UserInfoController.CONTROLLER_NAME);
            local = (LocaleController) JsfUtil.getManagedBean(LocaleController.CONTROLLER_NAME);
            navigationController = (NavigationController) JsfUtil.getManagedBean(NavigationController.CONTROLLER_NAME);
            
            this.amount=1;
            this.imgPath = UploadUtil.getFilePath(product.getPicture());
            
            shipping =new Shipping();
            shipping.setShippingStatus(Constants.PAYMENT_PENDING);
            List<Shipping> spp_pay_list=orderService.findPayment(shipping);
            int hold_pay=0;
            for (int i = 0; i < spp_pay_list.size(); i++) {
                 Shipping shp_detial=(Shipping)spp_pay_list.get(i);
                  for (int q = 0; q < shp_detial.getOrderDetailList().size(); q++) {
                      OrderDetail ord_detail=(OrderDetail)shp_detial.getOrderDetailList().get(q);
                      if(product.getProductID().equals(ord_detail.getOrderDetailPK().getProductID())){
                          hold_pay=hold_pay+ord_detail.getOrderDetailAmount();
                      }
                  }
            }
            int amount_=product.getAmount()-hold_pay;
            product.setAmount((amount_)>0?(amount_):0);
            this.product_amount=amount_;//condition front
            
            navigationController.nextPage("order/ord_001_detail");
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

            Product  find_pro =new Product();
            ProductType productType=new ProductType();
            productType.setProductTypeID(this.productTypeID);
            find_pro.setProductTypeID(productType);
            find_pro.setProductID(this.getProductID());
            find_pro.setProductName(this.getProductName());
            
            List<Product> productList = orderService.findByCriteria(find_pro);
            dataList = new ArrayList<OrderList001Controller>();
            seq=0;
            for (int i = 0; i < productList.size(); i++) {
                OrderList001Controller pro001 = new OrderList001Controller();
                Product product_detail=(Product) productList.get(i);
                product_detail.setPicture(UploadUtil.getFilePath(productList.get(i).getPicture()));
                pro001.setProduct(product_detail);

                dataList.add(pro001);
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
    public void insert() throws Exception {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void update() throws Exception {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
    public void insertOrder() throws Exception {
        String METHOD_NAME = "insertOrder";
        try {
            LogUtil.infoLog(logger, this.getClass(), METHOD_NAME, userInfo.getUsername());
            List<String> error = new ArrayList<String>();
            if (StringUtil.isNullOrEmpty(amount)) {
                error = ExceptionUtil.addLineException(error, "errors.1001", new String[]{MsgBundleLoader.getMessage("productAmount", MsgBundleLoader.APPLICATIONRESOURCES_PATH)});
            }

            if (error.size() > 0) {
                JsfUtil.addErrorMessages(error);
                return;
            }
            
            shipping =new Shipping();
            shipping.setUserID(userInfo.getAuthUser());
            shipping.setShippingStatus(Constants.PAYMENT_PENDING);
            
            orderDetail=new OrderDetail();
            orderDetailPK =new OrderDetailPK();
            orderDetailPK.setProductID(product.getProductID());
            orderDetail.setOrderDetailPK(orderDetailPK);
            orderDetail.setOrderDetailAmount(amount);
            orderDetail.setOrderDetailPrice(product.getPrice());
            orderDetail.setOrderdetailPriceTotal(product.getPrice().multiply(new BigDecimal(amount)));
            
            Shipping shipping_obj=orderService.findByPaymentStatus(shipping);
            if(StringUtil.isNullOrEmpty(shipping_obj)){
                //insert order first
                 String inv_id=systemService.genCodeByCodeType(Constants.RAME_GEN_CODE_TYPE_SHIPPING_CODE);
                 shipping.setShippingID(inv_id);
                 shipping.setCreateDate(DateTimeUtil.currentDate(Locale.US));
                 shipping.setCreateBy(userInfo.getUsername());
                 orderService.createShipping(shipping);
                 
                 //detail
                 orderDetailPK.setShippingID(inv_id);
                 orderDetail.setOrderDetailPK(orderDetailPK);
                 orderService.createOrderDetial(orderDetail);
            }else{
               //update 
                orderDetailPK.setShippingID(shipping_obj.getShippingID());
                orderDetail.setOrderDetailPK(orderDetailPK);
                
                shipping =new Shipping();
                HashMap ck_orderdetail=new HashMap();
                if(StringUtil.isNotNullOrNotEmpty(shipping_obj)){
                    for (int q = 0; q < shipping_obj.getOrderDetailList().size(); q++) {
                        OrderDetail ord_detail=(OrderDetail)shipping_obj.getOrderDetailList().get(q);
                        if(product.getProductID().equals(ord_detail.getOrderDetailPK().getProductID())){
                             orderDetail.setOrderDetailAmount(ord_detail.getOrderDetailAmount()+amount);
                        }
                        ck_orderdetail.put(q, ord_detail.getOrderDetailPK().getProductID());
                    }
                    if(!ck_orderdetail.containsValue(product.getProductID())){
                      if(shipping_obj.getOrderDetailList().size()+1 > Constants.ORDER_LIMIT) {
                          error = ExceptionUtil.addLineException(error, "errors.1010", new String[]{String.valueOf(Constants.ORDER_LIMIT)});
                      }
                      if (error.size() > 0) {
                         JsfUtil.addErrorMessages(error);
                         return;
                      }
                    }
                    orderDetail.setOrderDetailPrice(product.getPrice());
                    orderDetail.setOrderdetailPriceTotal(product.getPrice().multiply(new BigDecimal(orderDetail.getOrderDetailAmount())));
                    orderService.editOrderDetail(orderDetail);
                }
            }
            
            this.productTypeID="";
            this.productID="";
            this.productName="";
            
            findAll();
            
            navigationController.nextPage("order/ord_001_cate");
        } catch (Exception ex) {
            LogUtil.errorLog(logger, this.getClass(), METHOD_NAME, ex, userInfo.getUsername());
            List<String> error = new ArrayList<String>();
            error = ExceptionUtil.addLineException(error, "errors.2001", new String[]{ex.getMessage()});
            JsfUtil.addErrorMessages(error);
        }
    }
    
    public void deleteProductDetail() throws Exception {
        String METHOD_NAME = "deleteProductDetail";
        try {
            LogUtil.infoLog(logger, this.getClass(), METHOD_NAME, userInfo.getUsername());
            
            orderService.deleteOrderDetail(orderDetail);
            
            findAll();
            navigationController.nextPage("order/ord_002_cart");
        } catch (Exception ex) {
            LogUtil.errorLog(logger, this.getClass(), METHOD_NAME, ex, userInfo.getUsername());
            List<String> error = new ArrayList<String>();
            error = ExceptionUtil.addLineException(error, "errors.2001", new String[]{ex.getMessage()});
            JsfUtil.addErrorMessages(error);
        }
    }
    
     public void findPaymentDetail() throws Exception {
        String METHOD_NAME = "findPaymentDetail";
        try {
             LogUtil.infoLog(logger, this.getClass(), METHOD_NAME, userInfo.getUsername());
             
             this.sendFistName="";
             this.sendLastName="";
             this.sendTelephone="";
             this.sendEmail="";
             this.sendAddress="";
             this.sendKhet="";
             this.sendKwang="";
             this.sendProvince="";
             this.sendZipcode="";
             
             shipping =new Shipping();
             shipping.setUserID(userInfo.getAuthUser());
             shipping.setShippingStatus(Constants.PAYMENT_PENDING);
            
             shipping=orderService.findByPaymentStatus(shipping);
             
             navigationController.nextPage("order/ord_003_send");
        } catch (Exception ex) {
            LogUtil.errorLog(logger, this.getClass(), METHOD_NAME, ex, userInfo.getUsername());
            List<String> error = new ArrayList<String>();
            error = ExceptionUtil.addLineException(error, "errors.2010", new String[]{ex.getMessage()});
            JsfUtil.addErrorMessages(error);
        }
    }
     
    public void paymentOrder() throws Exception {
        String METHOD_NAME = "paymentOrder";
        try {
            LogUtil.infoLog(logger, this.getClass(), METHOD_NAME, userInfo.getUsername());
            List<String> error = new ArrayList<String>();
            if (StringUtil.isNullOrEmpty(sendFistName)) {
                error = ExceptionUtil.addLineException(error, "errors.1001", new String[]{MsgBundleLoader.getMessage("firstName", MsgBundleLoader.APPLICATIONRESOURCES_PATH)});
            }
            if (StringUtil.isNullOrEmpty(sendLastName)) {
                error = ExceptionUtil.addLineException(error, "errors.1001", new String[]{MsgBundleLoader.getMessage("lastName", MsgBundleLoader.APPLICATIONRESOURCES_PATH)});
            }
            if (StringUtil.isNullOrEmpty(sendTelephone)) {
                error = ExceptionUtil.addLineException(error, "errors.1001", new String[]{MsgBundleLoader.getMessage("telephone", MsgBundleLoader.APPLICATIONRESOURCES_PATH)});
            }
            if (StringUtil.isNullOrEmpty(sendEmail)) {
                error = ExceptionUtil.addLineException(error, "errors.1001", new String[]{MsgBundleLoader.getMessage("email", MsgBundleLoader.APPLICATIONRESOURCES_PATH)});
            }
            if (StringUtil.isNullOrEmpty(sendAddress)) {
                error = ExceptionUtil.addLineException(error, "errors.1001", new String[]{MsgBundleLoader.getMessage("address", MsgBundleLoader.APPLICATIONRESOURCES_PATH)});
            }
            if (StringUtil.isNullOrEmpty(sendKhet)) {
                error = ExceptionUtil.addLineException(error, "errors.1001", new String[]{MsgBundleLoader.getMessage("subDistrict", MsgBundleLoader.APPLICATIONRESOURCES_PATH)});
            }
            if (StringUtil.isNullOrEmpty(sendKwang)) {
                error = ExceptionUtil.addLineException(error, "errors.1001", new String[]{MsgBundleLoader.getMessage("disttrict", MsgBundleLoader.APPLICATIONRESOURCES_PATH)});
            }
            if (StringUtil.isNullOrEmpty(sendProvince)) {
                error = ExceptionUtil.addLineException(error, "errors.1001", new String[]{MsgBundleLoader.getMessage("province", MsgBundleLoader.APPLICATIONRESOURCES_PATH)});
            }
            if (StringUtil.isNullOrEmpty(sendZipcode)) {
                error = ExceptionUtil.addLineException(error, "errors.1001", new String[]{MsgBundleLoader.getMessage("postcode", MsgBundleLoader.APPLICATIONRESOURCES_PATH)});
            }
            

            if (error.size() > 0) {
                JsfUtil.addErrorMessages(error);
                return;
            }
    
            Shipping shipping_update =new Shipping();
            shipping_update.setShippingID(shipping.getShippingID());
            shipping_update.setName(sendFistName);
            shipping_update.setLastName(sendLastName);
            shipping_update.setTelephone(sendTelephone);
            shipping_update.setEmail(sendEmail);
            shipping_update.setAddress(sendAddress);
            shipping_update.setKhet(sendKhet);
            shipping_update.setKwang(sendKwang);
            shipping_update.setProvince(sendProvince);
            shipping_update.setZipcode(sendZipcode);
            shipping_update.setShippingStatus(Constants.PAYMENT_CORRECT);
            shipping_update.setShippingDate(DateTimeUtil.currentDate(Locale.US));
            
            for (int q = 0; q < shipping.getOrderDetailList().size(); q++) {
                OrderDetail ord_detail=(OrderDetail)shipping.getOrderDetailList().get(q);
                int total=ord_detail.getProduct().getAmount()-ord_detail.getOrderDetailAmount();
                Product pro_update=new Product();
                pro_update.setProductID(ord_detail.getProduct().getProductID());
                pro_update.setAmount(total);
                    
                productService.updateAmount(pro_update);
            }
            //update sendAddress and paymentStatus=3
            orderService.updatePayment(shipping_update);
            
            this.shippingID=shipping.getShippingID();
            
            findAll();
            
            navigationController.nextPage("order/ord_004_complete");
        } catch (Exception ex) {
            LogUtil.errorLog(logger, this.getClass(), METHOD_NAME, ex, userInfo.getUsername());
            List<String> error = new ArrayList<String>();
            error = ExceptionUtil.addLineException(error, "errors.2001", new String[]{ex.getMessage()});
            JsfUtil.addErrorMessages(error);
        }
    }
    
    @Override
    public void delete() throws Exception {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void cancel() throws Exception {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void reportPDF() throws Exception {
        String METHOD_NAME = "reportPDF";
        try {
            LogUtil.infoLog(logger, this.getClass(), METHOD_NAME, userInfo.getUsername());
            ReportUtil reportUtil = new ReportUtil();
            Collection reportList = new ArrayList();
            HashMap parameter = new HashMap();
            
            Shipping shipping_find =new Shipping();
            shipping_find.setShippingID(shippingID);
            
            shipping_find=orderService.findByPK(shipping_find);

            int qty_total=0;
            BigDecimal price_total=new BigDecimal(0);
            if (shipping_find.getOrderDetailList().size() > 0) {
                for (int i = 0; i < shipping_find.getOrderDetailList().size(); i++) {
                    OrderDetail detail = (OrderDetail) shipping_find.getOrderDetailList().get(i);
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
            if(shipping_find.getShippingStatus()==1){
                statu_payment=MsgBundleLoader.getMessage("paymentWait", MsgBundleLoader.APPLICATIONRESOURCES_PATH);
            }else if(shipping_find.getShippingStatus()==1){
                statu_payment=MsgBundleLoader.getMessage("paymentfiled", MsgBundleLoader.APPLICATIONRESOURCES_PATH);
            }else{
                statu_payment=MsgBundleLoader.getMessage("paymentComplete", MsgBundleLoader.APPLICATIONRESOURCES_PATH);
            }
            parameter.put(ReportConstant.PUR_PAYMENT, statu_payment);
            parameter.put(ReportConstant.PUR_PREORDER_NO, StringUtil.getIsNull(shipping_find.getShippingID()));
            parameter.put(ReportConstant.PUR_DATE, DateTimeUtil.dateToString(shipping_find.getShippingDate(), "dd/MM/yyyy HH:mm"));
            parameter.put(ReportConstant.PUR_CUS_CODE, StringUtil.getIsNull(shipping_find.getUserID().getUserId()));
            parameter.put(ReportConstant.PUR_CUS_NAME, StringUtil.getIsNull(shipping_find.getName()+" "+shipping_find.getLastName()));
            parameter.put(ReportConstant.PUR_CUS_ADDRESS, StringUtil.getIsNull(shipping_find.getAddress()+" "+shipping_find.getKhet()+" "+shipping_find.getKwang()+" "+
                    shipping_find.getProvince()+" "+shipping_find.getZipcode()));
            parameter.put(ReportConstant.PUR_CUS_TELEPHONE, StringUtil.getIsNull(shipping_find.getTelephone()));
            parameter.put(ReportConstant.PUR_CUS_EMAIL, StringUtil.getIsNull(shipping_find.getEmail()));

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
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
     public List<SelectItem> cmbAmountList() {
        amountList = new ArrayList<SelectItem>();
        for (int i = 1; i <= product.getAmount(); i++) {
            amountList.add(new SelectItem(i, String.valueOf(i)));
        }
        return amountList;
    }

    public static Logger getLogger() {
        return logger;
    }

    public static void setLogger(Logger logger) {
        OrderList001Controller.logger = logger;
    }

    public List<OrderList001Controller> getDataList() {
        return dataList;
    }

    public void setDataList(List<OrderList001Controller> dataList) {
        this.dataList = dataList;
    }

    public String getUserRole() {
        return userRole;
    }

    public void setUserRole(String userRole) {
        this.userRole = userRole;
    }

    public AuthUser getAuthUser() {
        return authUser;
    }

    public void setAuthUser(AuthUser authUser) {
        this.authUser = authUser;
    }

    public UserInfoController getUserInfo() {
        return userInfo;
    }

    public void setUserInfo(UserInfoController userInfo) {
        this.userInfo = userInfo;
    }

    public LocaleController getLocal() {
        return local;
    }

    public void setLocal(LocaleController local) {
        this.local = local;
    }

    public NavigationController getNavigationController() {
        return navigationController;
    }

    public void setNavigationController(NavigationController navigationController) {
        this.navigationController = navigationController;
    }

    public String getMode() {
        return mode;
    }

    public void setMode(String mode) {
        this.mode = mode;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Integer getSeq() {
        return seq;
    }

    public void setSeq(Integer seq) {
        this.seq = seq;
    }

    public String getProductID() {
        return productID;
    }

    public void setProductID(String productID) {
        this.productID = productID;
    }

    public String getProductTypeID() {
        return productTypeID;
    }

    public void setProductTypeID(String productTypeID) {
        this.productTypeID = productTypeID;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getImgPath() {
        return imgPath;
    }

    public void setImgPath(String imgPath) {
        this.imgPath = imgPath;
    }

  
    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }


    public List<SelectItem> getAmountList() {
       try {
            amountList = cmbAmountList();
        } catch (Exception ex) {
            java.util.logging.Logger.getLogger(OrderList001Controller.class.getName()).log(Level.SEVERE, null, ex);
        }
         
        return amountList;
    }

    public void setAmountList(List<SelectItem> amountList) {
        this.amountList = amountList;
    }

    public Integer getProduct_amount() {
        return product_amount;
    }

    public void setProduct_amount(Integer product_amount) {
        this.product_amount = product_amount;
    }

    public Shipping getShipping() {
        return shipping;
    }

    public void setShipping(Shipping shipping) {
        this.shipping = shipping;
    }

    public OrderDetail getOrderDetail() {
        return orderDetail;
    }

    public void setOrderDetail(OrderDetail orderDetail) {
        this.orderDetail = orderDetail;
    }

    public OrderDetailPK getOrderDetailPK() {
        return orderDetailPK;
    }

    public void setOrderDetailPK(OrderDetailPK orderDetailPK) {
        this.orderDetailPK = orderDetailPK;
    }

    public Integer getCart_total() {
        return cart_total;
    }

    public void setCart_total(Integer cart_total) {
        this.cart_total = cart_total;
    }

    public List<OrderList001Controller> getDataOrderList() {
        return dataOrderList;
    }

    public void setDataOrderList(List<OrderList001Controller> dataOrderList) {
        this.dataOrderList = dataOrderList;
    }

    public BigDecimal getShippingPriceNet() {
        return shippingPriceNet;
    }

    public void setShippingPriceNet(BigDecimal shippingPriceNet) {
        this.shippingPriceNet = shippingPriceNet;
    }

 

    public BigDecimal getDiscount() {
        return discount;
    }

    public void setDiscount(BigDecimal discount) {
        this.discount = discount;
    }

    public String getSendFistName() {
        return sendFistName;
    }

    public void setSendFistName(String sendFistName) {
        this.sendFistName = sendFistName;
    }

    public String getSendLastName() {
        return sendLastName;
    }

    public void setSendLastName(String sendLastName) {
        this.sendLastName = sendLastName;
    }

    public String getSendAddress() {
        return sendAddress;
    }

    public void setSendAddress(String sendAddress) {
        this.sendAddress = sendAddress;
    }

    public String getSendKhet() {
        return sendKhet;
    }

    public void setSendKhet(String sendKhet) {
        this.sendKhet = sendKhet;
    }

    public String getSendKwang() {
        return sendKwang;
    }

    public void setSendKwang(String sendKwang) {
        this.sendKwang = sendKwang;
    }

    public String getSendProvince() {
        return sendProvince;
    }

    public void setSendProvince(String sendProvince) {
        this.sendProvince = sendProvince;
    }

    public String getSendZipcode() {
        return sendZipcode;
    }

    public void setSendZipcode(String sendZipcode) {
        this.sendZipcode = sendZipcode;
    }

    public String getSendTelephone() {
        return sendTelephone;
    }

    public void setSendTelephone(String sendTelephone) {
        this.sendTelephone = sendTelephone;
    }

    public String getSendEmail() {
        return sendEmail;
    }

    public void setSendEmail(String sendEmail) {
        this.sendEmail = sendEmail;
    }

    public String getInvoiceNo() {
        return invoiceNo;
    }

    public void setInvoiceNo(String invoiceNo) {
        this.invoiceNo = invoiceNo;
    }

    public String getShippingID() {
        return shippingID;
    }

    public void setShippingID(String shippingID) {
        this.shippingID = shippingID;
    }

  
    
}
