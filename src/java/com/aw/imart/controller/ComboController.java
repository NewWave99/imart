/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aw.imart.controller;

import com.aw.imart.common.util.ExceptionUtil;
import com.aw.imart.common.util.JsfUtil;
import com.aw.imart.entity.AuthRole;
import com.aw.imart.entity.ProductType;
import com.aw.imart.log.util.LogUtil;
import com.aw.imart.service.ProductService;
import com.aw.imart.service.UserService;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
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

@ManagedBean(name = "comboController")
@SessionScoped
public class ComboController implements Serializable {

    private static Logger logger = LogUtil.getLogger(ComboController.class);
    public static final String BEAN_NAME = "comboController";
    @EJB
    private UserService userService;
    @EJB
    private ProductService productService;
    
    private List<SelectItem> userGroupList;
    private List<SelectItem> productTypeList;

    @PostConstruct
    public void init() throws Exception {
        String METHOD_NAME = "init";
        try {
            LogUtil.infoLog(logger, this.getClass(), METHOD_NAME, "system");

        } catch (Exception ex) {
            LogUtil.errorLog(logger, this.getClass(), METHOD_NAME, ex, "system");
            List<String> error = new ArrayList<String>();
            error = ExceptionUtil.addLineException(error, "errors.2010", new String[]{ex.getMessage()});
            JsfUtil.addErrorMessages(error);
        }
    }

    public List<SelectItem> cmbUserGroup() throws Exception {
        userGroupList = new ArrayList<SelectItem>();
        userGroupList.add(new SelectItem("", ""));
        List<AuthRole> list = userService.findAuthRoleAll();
        for (int i = 0; i < list.size(); i++) {
            AuthRole authRole = (AuthRole) list.get(i);
            userGroupList.add(new SelectItem(authRole.getRoleName(), authRole.getRoleDesc()));
        }
        return userGroupList;
    }

    public List<SelectItem> getUserGroupList() {
        try {
            userGroupList = cmbUserGroup();
        } catch (Exception ex) {
            java.util.logging.Logger.getLogger(ComboController.class.getName()).log(Level.SEVERE, null, ex);
        }
        return userGroupList;
    }

    public void setUserGroupList(List<SelectItem> userGroupList) {
        this.userGroupList = userGroupList;
    }
    
    public List<SelectItem> cmbProductType() throws Exception {
        productTypeList = new ArrayList<SelectItem>();
        productTypeList.add(new SelectItem("", ""));
        List<ProductType> list = productService.findProductTypeAll();
        for (int i = 0; i < list.size(); i++) {
            ProductType bean = (ProductType) list.get(i);
            productTypeList.add(new SelectItem(bean.getProductTypeID(), bean.getProductTypeName()));
        }
        return productTypeList;
    }

    public List<SelectItem> getProductTypeList() {
         try {
            productTypeList = cmbProductType();
        } catch (Exception ex) {
            java.util.logging.Logger.getLogger(ComboController.class.getName()).log(Level.SEVERE, null, ex);
        }
         
        return productTypeList;
    }

    public void setProductTypeList(List<SelectItem> productTypeList) {
        this.productTypeList = productTypeList;
    }
    
}
