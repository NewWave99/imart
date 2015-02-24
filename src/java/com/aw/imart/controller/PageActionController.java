package com.aw.imart.controller;

import com.aw.imart.common.util.JsfUtil;


/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */

public abstract class PageActionController {

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
}
