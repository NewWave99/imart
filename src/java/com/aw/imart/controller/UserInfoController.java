package com.aw.imart.controller;

import com.aw.imart.common.theme.AvailableThemes;
import com.aw.imart.common.theme.UserSettings;
import com.aw.imart.common.util.DateTimeUtil;
import com.aw.imart.common.util.JsfUtil;
import com.aw.imart.common.util.MD5Generator;
import com.aw.imart.entity.AuthUser;
import com.aw.imart.entity.AuthLog;
import com.aw.imart.service.UserService;
import java.io.Serializable;
import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;
import java.util.Observable;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.context.ExternalContext;
import javax.faces.context.FacesContext;
import javax.servlet.http.HttpServletRequest;
import org.apache.commons.lang3.StringUtils;

/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */

@ManagedBean(name = UserInfoController.CONTROLLER_NAME)
@SessionScoped
public class UserInfoController extends Observable implements Serializable {
    
    public static final String CONTROLLER_NAME = "userInfoController";
    @EJB
    private UserService userService;
    private String username;
    private AuthUser authUser;
    private String password1;
    private String password2;
    public int tabIndex = 0;
    
    public UserInfoController() {
    }
    
    @PostConstruct
    public void init() {
        try {
            
            username = JsfUtil.getExternalContext().getUserPrincipal().getName();
            authUser = userService.findAuthUserByUsername(username);
            
            String l = authUser.getLocale();
            String theme = authUser.getTheme();
            
            if (!StringUtils.isEmpty(l)) {
                LocaleController localeController = (LocaleController) JsfUtil.getManagedBean(LocaleController.CONTROLLER_NAME);
                localeController.changeLocale(l.substring(0, 2));
                FacesContext.getCurrentInstance().getViewRoot().setLocale(localeController.getLocale());
            }
            
            if (!StringUtils.isEmpty(theme)) {
                UserSettings userSettings = (UserSettings) JsfUtil.getManagedBean(UserSettings.CONTROLLER_NAME);
                userSettings.setCurrentTheme(AvailableThemes.getInstance().getThemeForName(theme));
                ExternalContext context = FacesContext.getCurrentInstance().getExternalContext();
                String defaultPath = FacesContext.getCurrentInstance().getViewRoot().getViewId();
                defaultPath = defaultPath.substring(0, defaultPath.lastIndexOf(".")).concat(".jsf");
                
                context.redirect(context.getRequestContextPath() + defaultPath);
                FacesContext.getCurrentInstance().responseComplete();
            }
            
            HttpServletRequest req = (HttpServletRequest) JsfUtil.getExternalContext().getRequest();
            AuthLog authLog = new AuthLog();
            authLog.setUserId(authUser);
            authLog.setAuthIp(req.getRemoteAddr());
            authLog.setSessionId(req.getSession().getId());
            authLog.setCreatedDt(DateTimeUtil.currentDate());
            userService.createAuthLog(authLog);
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    
    public void swapMenuTab(int index) {
        tabIndex = index;
    }
    
    public void editPassword() {
        try {
            if (StringUtils.isEmpty(password1) || StringUtils.isEmpty(password2)) {
                JsfUtil.addErrorMessage("Error", "Password can be not empty");
                return;
            }
            
            if (!password1.equals(password2)) {
                JsfUtil.addErrorMessage("Error", "Password and confirm password isn's equal");
                return;
            }
            
            if (password1.length() < 3) {
                JsfUtil.addErrorMessage("Error", "Password length less than 3 charector");
                return;
            }
            
            try {
                authUser.setPassword(MD5Generator.md5(password1));
            } catch (NoSuchAlgorithmException ex) {
            } catch (UnsupportedEncodingException ex) {
            }
            
            userService.editPassword(authUser);
            resetPassword();
            JsfUtil.addSuccessMessage("Success", "Change password completed");
        } catch (Exception ex) {
            Logger.getLogger(UserInfoController.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
    public void resetPassword() {
        password1 = null;
        password2 = null;
    }
    
    public String getUsername() {
        return username;
    }
    
    public void setUsername(String username) {
        this.username = username;
    }
    
    public AuthUser getAuthUser() {
        return authUser;
    }
    
    public void setAuthUser(AuthUser authUser) {
        this.authUser = authUser;
    }
    
    public int getTabIndex() {
        return tabIndex;
    }
    
    public void setTabIndex(int tabIndex) {
        this.tabIndex = tabIndex;
    }
    
    public String getPassword1() {
        return password1;
    }
    
    public void setPassword1(String password1) {
        this.password1 = password1;
    }
    
    public String getPassword2() {
        return password2;
    }
    
    public void setPassword2(String password2) {
        this.password2 = password2;
    }
}
