package com.aw.imart.controller;

import com.aw.imart.common.util.JsfUtil;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;
import javax.faces.context.ExternalContext;
import javax.faces.context.FacesContext;


/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */

@ManagedBean(name = "loginController")
@RequestScoped
public class LoginController {

    public static final String BEAN_NAME = "loginController";

    public LoginController() {
    }

    @PostConstruct
    public void init() {
    }

    public void checkLogin() {
        try {
            if (JsfUtil.getExternalContext().getUserPrincipal() != null) {
                ExternalContext context = FacesContext.getCurrentInstance().getExternalContext();
                context.redirect(context.getRequestContextPath());
                FacesContext.getCurrentInstance().responseComplete();
            }
        } catch (IOException ex) {
            Logger.getLogger(LoginController.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}
