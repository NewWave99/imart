package com.aw.imart.controller;

import com.aw.imart.common.util.ExceptionUtil;
import com.aw.imart.common.util.JsfUtil;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;


/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */

@ManagedBean(name = NavigationController.CONTROLLER_NAME)
@SessionScoped
public class NavigationController implements Serializable {

    public static final String CONTROLLER_NAME = "navigationController";
    private String currentPage;

    public NavigationController() {
    }

    @PostConstruct
    public void init() {
        currentPage = "dashboard";
    }

    public String getCurrentPage() {
        return currentPage;
    }

    public void setCurrentPage(String currentPage) {
        this.currentPage = currentPage;
    }

    public void nextPage(String page) {
        this.currentPage = page;
    }
    
    public void nextPage(String page, String controller) {
        try {
            this.currentPage = page;
            MethodController method = (MethodController) JsfUtil.getManagedBean(controller);
            if (method != null) {
                method.cancel();
            }
        } catch (Exception ex) {
            List<String> error = new ArrayList<String>();
            error = ExceptionUtil.addLineException(error, "errors.2010", new String[]{ex.getMessage()});
            JsfUtil.addErrorMessages(error);
        }
    }
}