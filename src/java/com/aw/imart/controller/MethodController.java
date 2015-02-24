package com.aw.imart.controller;

import com.aw.imart.common.util.JsfUtil;
import java.io.Serializable;


/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */

public abstract class MethodController implements Serializable {

    public void openEditPage(String page) {
        NavigationController obj = (NavigationController) JsfUtil.getManagedBean(NavigationController.CONTROLLER_NAME);
        obj.nextPage(page);
    }

    public void openViewPage(String page) {
        NavigationController obj = (NavigationController) JsfUtil.getManagedBean(NavigationController.CONTROLLER_NAME);
        obj.nextPage(page);
    }

    public void openCreatePage(String page) {
        NavigationController obj = (NavigationController) JsfUtil.getManagedBean(NavigationController.CONTROLLER_NAME);
        obj.nextPage(page);
    }

    public abstract void init() throws Exception;

    public abstract void findAll() throws Exception;

    public abstract void find() throws Exception;

    public abstract void insert() throws Exception;

    public abstract void update() throws Exception;

    public abstract void delete() throws Exception;

    public abstract void cancel() throws Exception;

    public abstract void reportPDF() throws Exception;

    public abstract void reportExcel() throws Exception;
}
