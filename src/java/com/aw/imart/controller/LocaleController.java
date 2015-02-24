package com.aw.imart.controller;

import com.aw.imart.common.util.DateTimeUtil;
import com.aw.imart.common.util.JsfUtil;
import com.aw.imart.common.util.LoaderConfig;
import com.aw.imart.entity.AuthUser;
import com.aw.imart.dao.AuthUserFacadeLocal;
import java.io.Serializable;
import java.util.Date;
import java.util.Locale;
import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.context.FacesContext;
import javax.servlet.http.HttpServletRequest;


/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */

@ManagedBean(name = LocaleController.CONTROLLER_NAME)
@SessionScoped
public class LocaleController implements Serializable {

    public static final String CONTROLLER_NAME = "localeController";
    private Locale locale;
    private String localeAddress;
    private Date currentDt;
    private UserInfoController userInfo;
    @EJB
    private AuthUserFacadeLocal authUserFacade;

    public LocaleController() {
    }

    @PostConstruct
    public void init() {
        String l = LoaderConfig.getConfig("default_locale");
        locale = new Locale(l.substring(0, 2), l.substring(3, 5));
        FacesContext.getCurrentInstance().getViewRoot().setLocale(locale);

        HttpServletRequest req = (HttpServletRequest) JsfUtil.getExternalContext().getRequest();
        localeAddress = req.getRemoteAddr();
        currentDt = DateTimeUtil.currentDate();
    }

    public void changeLocale(String l) {
        if (l.toLowerCase().equals("th")) {
            locale = new Locale("th", "TH");
        }

        if (l.toLowerCase().equals("en")) {
            locale = new Locale("en", "US");
        }

        FacesContext.getCurrentInstance().getViewRoot().setLocale(locale);
        //MenuController menuController = (MenuController) JsfUtil.getManagedBean(MenuController.CONTROLLER_NAME);
        //menuController.load();
    }

    public void changeLocaleByUser(String l) {
        if (l.toLowerCase().equals("th")) {
            locale = new Locale("th", "TH");
        }

        if (l.toLowerCase().equals("en")) {
            locale = new Locale("en", "US");
        }

        if (userInfo == null) {
            userInfo = (UserInfoController) JsfUtil.getManagedBean(UserInfoController.CONTROLLER_NAME);
        }

        try {
            AuthUser auth = userInfo.getAuthUser();
            auth.setLocale(locale.toString());
            authUserFacade.editLocale(auth);

            FacesContext.getCurrentInstance().getViewRoot().setLocale(locale);
            //MenuController menuController = (MenuController) JsfUtil.getManagedBean(MenuController.CONTROLLER_NAME);
            //menuController.load();

        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    public Locale getLocale() {
        return locale;
    }

    public void setLocale(Locale locale) {
        this.locale = locale;
    }

    public String getLocaleAddress() {
        return localeAddress;
    }

    public void setLocaleAddress(String localeAddress) {
        this.localeAddress = localeAddress;
    }

    public Date getCurrentDt() {
        return currentDt;
    }

    public void setCurrentDt(Date currentDt) {
        this.currentDt = currentDt;
    }
}
