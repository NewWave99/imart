/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aw.imart.controller.user;

import com.aw.imart.common.constants.Constants;
import com.aw.imart.common.util.DateTimeUtil;
import com.aw.imart.common.util.ExceptionUtil;
import com.aw.imart.common.util.JsfUtil;
import com.aw.imart.common.util.MD5Generator;
import com.aw.imart.common.util.MsgBundleLoader;
import com.aw.imart.common.util.StringUtil;
import com.aw.imart.controller.LocaleController;
import com.aw.imart.controller.MethodController;
import com.aw.imart.controller.NavigationController;
import com.aw.imart.controller.UserInfoController;
import com.aw.imart.entity.AuthLog;
import com.aw.imart.entity.AuthUser;
import com.aw.imart.entity.AuthUserRole;
import com.aw.imart.log.util.LogUtil;
import com.aw.imart.service.SystemService;
import com.aw.imart.service.UserService;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import org.apache.log4j.Logger;

@ManagedBean(name = "u001Controller")
@SessionScoped
public class U001Controller extends MethodController implements Serializable {

    private static Logger logger = LogUtil.getLogger(U001Controller.class);
    public static final String BEAN_NAME = "u001Controller";
    @EJB
    private UserService userService;
    @EJB
    private SystemService stockService;
    private String userId;
    private String userName;
    private String firstName;
    private String lastName;
    private String passwordU;
    private String confirmPasswordU;
    private String userRole;
    private List<U001Controller> dataList;
    private AuthUser authUser;
    private UserInfoController userInfo;
    private LocaleController local;
    private NavigationController navigationController;
    private String mode;
    private boolean check;

    public U001Controller() {
    }

    @PostConstruct
    @Override
    public void init() throws Exception {
        String METHOD_NAME = "init";
        try {
            userInfo = (UserInfoController) JsfUtil.getManagedBean(UserInfoController.CONTROLLER_NAME);
            local = (LocaleController) JsfUtil.getManagedBean(LocaleController.CONTROLLER_NAME);
            navigationController = (NavigationController) JsfUtil.getManagedBean(NavigationController.CONTROLLER_NAME);
            //LogUtil.infoLog(logger, this.getClass(), METHOD_NAME, userInfo.getUsername());
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
            //LogUtil.infoLog(logger, this.getClass(), METHOD_NAME, userInfo.getUsername());
            mode = "A";
            userId = stockService.genCodeByCodeType(Constants.STOCK_GEN_CODE_TYPE_USER_CODE);
            userName = "";
            firstName = "";
            lastName = "";
            passwordU = "";
            confirmPasswordU = "";
            userRole = "";
            navigationController.nextPage("user/u001_edit");
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
            //LogUtil.infoLog(logger, this.getClass(), METHOD_NAME, userInfo.getUsername());
            mode = "U";
            userId = authUser.getUserId();
            userName = authUser.getUsername();
            firstName = authUser.getFirstName();
            lastName = authUser.getLastName();
            passwordU = "";
            confirmPasswordU = "";
            if (StringUtil.isNotNullOrNotEmpty(authUser.getAuthUserRole())) {
                userRole = authUser.getAuthUserRole().getRoleName();
            }
            navigationController.nextPage("user/u001_edit");
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
            List<AuthUser> authUserList = userService.findAuthUserByStatus();
            dataList = new ArrayList<U001Controller>();
            for (int i = 0; i < authUserList.size(); i++) {
                U001Controller u001 = new U001Controller();
                u001.setCheck(false);
                u001.setAuthUser((AuthUser) authUserList.get(i));
                dataList.add(u001);
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
            for (int i = 0; i < dataList.size(); i++) {
                U001Controller u001 = (U001Controller) dataList.get(i);
                if (u001.isCheck()) {
                    userService.updateStatus(u001.getAuthUser());
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
            if (StringUtil.isNullOrEmpty(userName)) {
                error = ExceptionUtil.addLineException(error, "errors.1001", new String[]{MsgBundleLoader.getMessage("userName", MsgBundleLoader.APPLICATIONRESOURCES_PATH)});
            }
            if (StringUtil.isNullOrEmpty(userRole)) {
                error = ExceptionUtil.addLineException(error, "errors.1001", new String[]{MsgBundleLoader.getMessage("userRole", MsgBundleLoader.APPLICATIONRESOURCES_PATH)});
            }
            if (error.size() > 0) {
                JsfUtil.addErrorMessages(error);
                return;
            }
            if (mode.equals("A")) {
                if (StringUtil.isNullOrEmpty(passwordU)) {
                    error = ExceptionUtil.addLineException(error, "errors.1001", new String[]{MsgBundleLoader.getMessage("password", MsgBundleLoader.APPLICATIONRESOURCES_PATH)});
                    JsfUtil.addErrorMessages(error);
                    return;
                }
                if (StringUtil.isNullOrEmpty(confirmPasswordU)) {
                    error = ExceptionUtil.addLineException(error, "errors.1001", new String[]{MsgBundleLoader.getMessage("password", MsgBundleLoader.APPLICATIONRESOURCES_PATH)});
                    JsfUtil.addErrorMessages(error);
                    return;
                }
                if (!passwordU.equalsIgnoreCase(confirmPasswordU)) {
                    error = ExceptionUtil.addLineException(error, "errors.1002", new String[]{""});
                    JsfUtil.addErrorMessages(error);
                    return;
                } else {
                    authUser = new AuthUser();
                    authUser.setUserId(userId);
                    authUser.setUsername(userName);
                    authUser.setPassword(MD5Generator.md5(passwordU));
                    authUser.setFirstName(firstName);
                    authUser.setLastName(lastName);
                    authUser.setActive(true);
                    authUser.setStatus(true);
                    authUser.setTheme("ui-lightness");
                    authUser.setLocale(local.getLocale().toString());
                    authUser.setCreatedBy(userInfo.getUsername());
                    authUser.setCreatedDt(DateTimeUtil.currentDate());
                    authUser.setRevisedBy(userInfo.getUsername());
                    authUser.setRevisedDt(DateTimeUtil.currentDate());

                    AuthUserRole authUserRole = new AuthUserRole();
                    authUserRole.setUserId(authUser.getUserId());
                    authUserRole.setRoleName(userRole);
                    authUser.setAuthUserRole(authUserRole);
                    authUserRole.setAuthUser(authUser);

                    authUser.setAuthLogList(new ArrayList<AuthLog>());
                    userService.createAuthUser(authUser);
                }
            } else {
                if (StringUtil.isNotNullOrNotEmpty(passwordU)) {
                    if (StringUtil.isNullOrEmpty(confirmPasswordU)) {
                        error = ExceptionUtil.addLineException(error, "errors.1001", new String[]{MsgBundleLoader.getMessage("confirmPasswordU", MsgBundleLoader.APPLICATIONRESOURCES_PATH)});
                        JsfUtil.addErrorMessages(error);
                        return;
                    } else {
                        if (!passwordU.equalsIgnoreCase(confirmPasswordU)) {
                            error = ExceptionUtil.addLineException(error, "errors.1002", new String[]{""});
                            JsfUtil.addErrorMessages(error);
                            return;
                        } else {
                            authUser.setPassword(MD5Generator.md5(passwordU));
                            authUser.setPasswoedChangeDt(DateTimeUtil.currentDate());
                        }
                    }
                }
                authUser.setUsername(userName);
                authUser.setFirstName(firstName);
                authUser.setLastName(lastName);
                authUser.getAuthUserRole().setRoleName(userRole);
                userService.editAuthUser(authUser);
            }
            findAll();
            navigationController.nextPage("user/u001");
        } catch (Exception ex) {
            LogUtil.errorLog(logger, this.getClass(), METHOD_NAME, ex, userInfo.getUsername());
            List<String> error = new ArrayList<String>();
            error = ExceptionUtil.addLineException(error, "errors.2001", new String[]{ex.getMessage()});
            JsfUtil.addErrorMessages(error);
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

    public void selectAll() {
        for (int i = 0; i < dataList.size(); i++) {
            U001Controller u001Controller = (U001Controller) dataList.get(i);
            u001Controller.setCheck(check);
        }
    }

    public static Logger getLogger() {
        return logger;
    }

    public static void setLogger(Logger logger) {
        U001Controller.logger = logger;
    }

    public String getPasswordU() {
        return passwordU;
    }

    public void setPasswordU(String passwordU) {
        this.passwordU = passwordU;
    }

    public String getConfirmPasswordU() {
        return confirmPasswordU;
    }

    public void setConfirmPasswordU(String confirmPasswordU) {
        this.confirmPasswordU = confirmPasswordU;
    }

    public List<U001Controller> getDataList() {
        return dataList;
    }

    public void setDataList(List<U001Controller> dataList) {
        this.dataList = dataList;
    }

    public AuthUser getAuthUser() {
        return authUser;
    }

    public void setAuthUser(AuthUser authUser) {
        this.authUser = authUser;
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

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getUserRole() {
        return userRole;
    }

    public void setUserRole(String userRole) {
        this.userRole = userRole;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
}
