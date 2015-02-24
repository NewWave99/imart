/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aw.imart.controller.order;

import com.aw.imart.common.constants.Constants;
import com.aw.imart.common.util.DateTimeUtil;
import com.aw.imart.common.util.ExceptionUtil;
import com.aw.imart.common.util.JsfUtil;
import com.aw.imart.common.util.MsgBundleLoader;
import com.aw.imart.common.util.StringUtil;
import com.aw.imart.common.util.UploadUtil;
import com.aw.imart.controller.LocaleController;
import com.aw.imart.controller.MethodController;
import com.aw.imart.controller.NavigationController;
import com.aw.imart.controller.UserInfoController;
import com.aw.imart.entity.AuthUser;
import com.aw.imart.entity.Product;
import com.aw.imart.entity.ProductType;
import com.aw.imart.log.util.LogUtil;
import com.aw.imart.service.ProductService;
import com.aw.imart.service.UserService;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import org.apache.log4j.Logger;
import com.aw.imart.service.SystemService;
import java.math.BigDecimal;
import java.util.Locale;
import org.apache.log4j.Priority;
import org.primefaces.context.RequestContext;
import org.primefaces.model.UploadedFile;

/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */

@ManagedBean(name = "product001Controller")
@SessionScoped
public class Product001Controller extends MethodController implements Serializable {

    private static Logger logger = LogUtil.getLogger(Product001Controller.class);
    public static final String BEAN_NAME = "product001Controller";

    @EJB
    private ProductService productService;
    @EJB
    private SystemService systemService;
    
    private Product product;
    private List<Product001Controller> dataList;
    private Integer seq;

    private String productID;
    private String productTypeID;
    private String productName;
    private BigDecimal discount;
    private BigDecimal price;
    private String picture;
    private Integer amount;
    private String productDesc;
    private String sttus;
    private Date createDate;
    private String createBy;
    private Date modifyDate;
    private String modifyBy;
    private UploadedFile file;
    private String imgPath;
    private String imgDb;

   
    private AuthUser authUser;
    private UserInfoController userInfo;
    private LocaleController local;
    private NavigationController navigationController;
    private String mode;
    private boolean check;
    
   
    public Product001Controller() {
       
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
         String METHOD_NAME = "insert";
        try {
            LogUtil.infoLog(logger, this.getClass(), METHOD_NAME, userInfo.getUsername());
            RequestContext context = RequestContext.getCurrentInstance();
            this.mode = "A";
            this.productID="";
            this.productTypeID="";
            this.productName="";
            this.discount=new BigDecimal(0);
            this.price=new BigDecimal(0);
            this.picture="";
            this.amount=0;
            this.productDesc="";
            this.sttus="";
            this.imgPath="";
            
            navigationController.nextPage("product/pro001_add");
            //context.update(Constants.UPDATE_FORM);
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
            LogUtil.infoLog(logger, this.getClass(), METHOD_NAME, userInfo.getUsername());
            mode = "U";
            
            this.productID=product.getProductID();
            this.productTypeID=product.getProductTypeID().getProductTypeID();
            this.productName=product.getProductName();
            this.discount=product.getDiscount();
            this.price=product.getPrice();
            this.amount=product.getAmount();
            this.productDesc=product.getProductDesc();
            this.imgPath = UploadUtil.getFilePath(product.getPicture());
            this.imgDb = product.getPicture();
           
            navigationController.nextPage("product/pro001_edit");
        } catch (Exception ex) {
            LogUtil.errorLog(logger, this.getClass(), METHOD_NAME, ex, userInfo.getUsername());
            List<String> error = new ArrayList<String>();
            error = ExceptionUtil.addLineException(error, "errors.2010", new String[]{ex.getMessage()});
            JsfUtil.addErrorMessages(error);
            logger.log(Priority.ERROR, ex);
        }
    }

    public void findByCriteria() throws Exception {
       String METHOD_NAME = "findByCriteria";
        try {
            userInfo = (UserInfoController) JsfUtil.getManagedBean(UserInfoController.CONTROLLER_NAME);
            local = (LocaleController) JsfUtil.getManagedBean(LocaleController.CONTROLLER_NAME);
            navigationController = (NavigationController) JsfUtil.getManagedBean(NavigationController.CONTROLLER_NAME);

            Product  find_pro =new Product();
            find_pro.setProductID(this.getProductID());
            find_pro.setProductName(this.getProductName());
            
            List<Product> productList = productService.findByCriteria(find_pro);
            dataList = new ArrayList<Product001Controller>();
            seq=1;
            for (int i = 0; i < productList.size(); i++) {
                Product001Controller pro001 = new Product001Controller();
                pro001.setSeq(seq);
                pro001.setProduct((Product) productList.get(i));
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
    public void findAll() throws Exception {
         String METHOD_NAME = "findAll";
        try {
            LogUtil.infoLog(logger, this.getClass(), METHOD_NAME, userInfo.getUsername());
            List<Product> productList = productService.findProductAll();
            dataList = new ArrayList<Product001Controller>();
            seq=1;
            for (int i = 0; i < productList.size(); i++) {
                Product001Controller pro001 = new Product001Controller();
                pro001.setSeq(seq);
                pro001.setProduct((Product) productList.get(i));
                pro001.setPicture(UploadUtil.getFilePath(productList.get(i).getPicture()));
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
    public void delete() throws Exception {
        String METHOD_NAME = "delete";
        try {
            LogUtil.infoLog(logger, this.getClass(), METHOD_NAME, userInfo.getUsername());
            for (int i = dataList.size() - 1; i >= 0; i--) {
                Product001Controller pro001 = (Product001Controller) dataList.get(i);
                if (pro001.isCheck()) {
                    productService.deleteProduct(pro001.getProduct());
                }
            }
              
            findAll();
        } catch (Exception ex) {
            LogUtil.errorLog(logger, this.getClass(), METHOD_NAME, ex, userInfo.getUsername());
            List<String> error = new ArrayList<String>();
            error = ExceptionUtil.addLineException(error, "errors.2001", new String[]{ex.getMessage()});
            JsfUtil.addErrorMessages(error);
        }
    }

    @Override
    public void update() throws Exception {
        String METHOD_NAME = "update";
        try {
            LogUtil.infoLog(logger, this.getClass(), METHOD_NAME, userInfo.getUsername());
            List<String> error = new ArrayList<String>();
            if (StringUtil.isNullOrEmpty(productName)) {
                error = ExceptionUtil.addLineException(error, "errors.1001", new String[]{MsgBundleLoader.getMessage("productName", MsgBundleLoader.APPLICATIONRESOURCES_PATH)});
            }
            if (StringUtil.isNullOrEmpty(productTypeID)) {
                error = ExceptionUtil.addLineException(error, "errors.1001", new String[]{MsgBundleLoader.getMessage("productType", MsgBundleLoader.APPLICATIONRESOURCES_PATH)});
            }
            if(price == null  || price.compareTo(BigDecimal.ZERO) == 0){
                error = ExceptionUtil.addLineException(error, "errors.1001", new String[]{MsgBundleLoader.getMessage("productPrice", MsgBundleLoader.APPLICATIONRESOURCES_PATH)});
            }
            if(amount == null  || amount <= 0){
                error = ExceptionUtil.addLineException(error, "errors.1001", new String[]{MsgBundleLoader.getMessage("productAmount", MsgBundleLoader.APPLICATIONRESOURCES_PATH)});
            }
            
            if (error.size() > 0) {
                JsfUtil.addErrorMessages(error);
                return;
            }
            product = new Product();
            ProductType product_type=new ProductType();
            product_type.setProductTypeID(productTypeID);
            product.setProductTypeID(product_type);
            product.setProductName(productName);
            product.setDiscount(new BigDecimal(0));
            product.setPrice(price);
            product.setAmount(amount);
            product.setProductDesc(productDesc);
            product.setStatus("Active");
           
            product.setPicture(imgDb);
            if (mode.equals("A")) {
                 product.setProductID(systemService.genCodeByCodeType(Constants.RAME_GEN_CODE_TYPE_PRODUCT_CODE));
                 product.setCreateDate(DateTimeUtil.currentDate(Locale.US));
                 product.setCreateBy(userInfo.getUsername());
             
                 productService.createProduct(product);
            } else {
                  product.setProductID(productID);
                  product.setModifyDate(DateTimeUtil.currentDate(Locale.US));
                  product.setModifyBy(userInfo.getUsername());
                
                 productService.editProduct(product);
            }
            this.productName="";
            this.productID="";
            findAll();
            navigationController.nextPage("product/pro001");
        } catch (Exception ex) {
            LogUtil.errorLog(logger, this.getClass(), METHOD_NAME, ex, userInfo.getUsername());
            List<String> error = new ArrayList<String>();
            error = ExceptionUtil.addLineException(error, "errors.2001", new String[]{ex.getMessage()});
            JsfUtil.addErrorMessages(error);
        }
        
    }
    
    public void selectAll() {
        for (int i = 0; i < dataList.size(); i++) {
            Product001Controller product001Controller = (Product001Controller) dataList.get(i);
            product001Controller.setCheck(check);
        }
    }
    @Override
    public void cancel() throws Exception {
    }

    @Override
    public void reportPDF() throws Exception {
    }

    @Override
    public void reportExcel() throws Exception {
    }

     public void upload() {
        String METHOD_NAME = "upload";
        try {
            LogUtil.infoLog(logger, this.getClass(), METHOD_NAME, userInfo.getUsername());
            RequestContext context = RequestContext.getCurrentInstance();
            imgPath = "";
            imgDb = "";
            if (StringUtil.isNotNullOrNotEmpty(file)) {
                List<String> error = new ArrayList<String>();
//                if (StringUtil.isNullOrEmpty(productName)) {
//                    error = ExceptionUtil.addLineException(error, "errors.1001", new String[]{MsgBundleLoader.getMessage("productName", MsgBundleLoader.APPLICATIONRESOURCES_PATH)});
//                }
//                if (error.size() > 0) {
//                    JsfUtil.addErrorMessages(error);
//                    return;
//                }
                
              imgDb = UploadUtil.uploadFile(file, "product", null, DateTimeUtil.dateToString(DateTimeUtil.currentDate(Locale.US),"yyyyMMddHHmmss"));
              imgPath = UploadUtil.getFilePath(imgDb);
            }
           
           Thread.sleep(1400);
           context.update(Constants.UPDATE_FORM); 
        } catch (Exception ex) {
            LogUtil.errorLog(logger, this.getClass(), METHOD_NAME, ex, userInfo.getUsername());
            List<String> error = new ArrayList<String>();
            error = ExceptionUtil.addLineException(error, "errors.2001", new String[]{ex.getMessage()});
            JsfUtil.addErrorMessages(error);
        }
    }
    
    
    public static Logger getLogger() {
        return logger;
    }

    public static void setLogger(Logger logger) {
        Product001Controller.logger = logger;
    }


    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public List<Product001Controller> getDataList() {
        return dataList;
    }

    public void setDataList(List<Product001Controller> dataList) {
        this.dataList = dataList;
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

    public BigDecimal getDiscount() {
        return discount;
    }

    public void setDiscount(BigDecimal discount) {
        this.discount = discount;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public String getProductDesc() {
        return productDesc;
    }

    public void setProductDesc(String productDesc) {
        this.productDesc = productDesc;
    }

    public String getSttus() {
        return sttus;
    }

    public void setSttus(String sttus) {
        this.sttus = sttus;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public String getCreateBy() {
        return createBy;
    }

    public void setCreateBy(String createBy) {
        this.createBy = createBy;
    }

    public Date getModifyDate() {
        return modifyDate;
    }

    public void setModifyDate(Date modifyDate) {
        this.modifyDate = modifyDate;
    }

    public String getModifyBy() {
        return modifyBy;
    }

    public void setModifyBy(String modifyBy) {
        this.modifyBy = modifyBy;
    }

    public UploadedFile getFile() {
        return file;
    }

    public void setFile(UploadedFile file) {
        this.file = file;
    }

    public String getImgPath() {
        return imgPath;
    }

    public void setImgPath(String imgPath) {
        this.imgPath = imgPath;
    }

    public String getImgDb() {
        return imgDb;
    }

    public void setImgDb(String imgDb) {
        this.imgDb = imgDb;
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

    public boolean isCheck() {
        return check;
    }

    public void setCheck(boolean check) {
        this.check = check;
    }

    
}
