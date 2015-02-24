
package com.aw.imart.common.theme;

import com.aw.imart.common.util.JsfUtil;
import com.aw.imart.common.util.LoaderConfig;
import com.aw.imart.controller.UserInfoController;
import com.aw.imart.dao.AuthUserFacadeLocal;
import java.io.Serializable;
import java.util.List;
import javax.annotation.PostConstruct;
import javax.ejb.EJB;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;

/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */

@ManagedBean(name = UserSettings.CONTROLLER_NAME)
@SessionScoped
public class UserSettings implements Serializable {

    private static final long serialVersionUID = 20111020L;
    public static final String CONTROLLER_NAME = "userSettings";
    private List<Theme> availableThemes;
    private Theme currentTheme;
    private String theme;
    @EJB
    private AuthUserFacadeLocal authUserFacade;

    public UserSettings() {
    }

    @PostConstruct
    public void init() {
        theme = LoaderConfig.getConfig("default_theme");
        currentTheme = AvailableThemes.getInstance().getThemeForName(theme);
        availableThemes = AvailableThemes.getInstance().getThemes();
    }

    public final List<Theme> getAvailableThemes() {
        return availableThemes;
    }

    public final void setAvailableThemes(List<Theme> availableThemes) {
        this.availableThemes = availableThemes;
    }

    public final Theme getCurrentTheme() {
        return currentTheme;
    }

    public final void setCurrentTheme(Theme currentTheme) {
        this.currentTheme = currentTheme;
    }

    public void editTheme() throws Exception {
        UserInfoController userInfo = (UserInfoController) JsfUtil.getManagedBean(UserInfoController.CONTROLLER_NAME);
        userInfo.getAuthUser().setTheme(currentTheme.getName());
        userInfo.swapMenuTab(0);
        authUserFacade.editTheme(userInfo.getAuthUser());
    }
}