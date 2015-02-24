package com.aw.imart.auth.controller;

import com.aw.imart.common.util.JsfUtil;
import com.aw.imart.common.util.MD5Generator;
import com.aw.imart.common.util.MsgBundleLoader;
import java.io.IOException;
import java.io.Serializable;

import javax.faces.bean.ManagedBean;
import javax.faces.context.ExternalContext;
import javax.faces.context.FacesContext;
import javax.servlet.ServletException;
import org.apache.commons.lang3.StringUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Scope;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.WebAttributes;
import org.springframework.security.web.savedrequest.DefaultSavedRequest;
import org.springframework.stereotype.Component;

/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */

@ManagedBean(name = "authenticationController")
@Component
@Scope(value = "session")
public class AuthenticationController implements Serializable {

    @Autowired
    @Qualifier("authenticationManager")
    protected AuthenticationManager authenticationManager;
    private String username;
    private String password;

    public AuthenticationController() {
        //username = "aekasit";
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUsername() {
        return username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPassword() {
        return password;
    }

    /**
     * @return @throws IOException
     * @throws ServletException
     */
    public void login() throws IOException, ServletException {
        try {
            if (JsfUtil.getExternalContext().getUserPrincipal() != null) {
                ExternalContext context = FacesContext.getCurrentInstance().getExternalContext();
                context.redirect(context.getRequestContextPath());
                FacesContext.getCurrentInstance().responseComplete();
            }

            if (StringUtils.isEmpty(username)) {
                JsfUtil.addErrorMessage(MsgBundleLoader.getMessage("error.title"), MsgBundleLoader.getMessage("login.exception.username"));
                return;
            }
            if (StringUtils.isEmpty(password)) {
                JsfUtil.addErrorMessage(MsgBundleLoader.getMessage("error.title"), MsgBundleLoader.getMessage("login.exception.password"));
                return;
            }

            Authentication request = new UsernamePasswordAuthenticationToken(this.username, MD5Generator.md5(this.password));
            Authentication result = authenticationManager.authenticate(request);
            SecurityContextHolder.getContext().setAuthentication(result);

            ExternalContext context = FacesContext.getCurrentInstance().getExternalContext();
            DefaultSavedRequest defaultSavedRequest = (DefaultSavedRequest) context.getSessionMap().get(WebAttributes.SAVED_REQUEST);
            context.redirect(defaultSavedRequest.getRedirectUrl());
            FacesContext.getCurrentInstance().responseComplete();

        } catch (Exception e) {
            JsfUtil.addErrorMessage(MsgBundleLoader.getMessage("error.title"), MsgBundleLoader.getMessage("error.login.bad-credentials"));
        }
    }

    public String logout() throws IOException {
        this.username = "";
        this.password = "";
        ExternalContext context = FacesContext.getCurrentInstance().getExternalContext();
        context.redirect(context.getRequestContextPath() + "/j_spring_security_logout");
        FacesContext.getCurrentInstance().responseComplete();
        return null;
    }
}
