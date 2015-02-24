package com.aw.imart.auth.controller;

import java.io.Serializable;
import java.util.Iterator;

import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.context.FacesContext;

/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */

@ManagedBean(name = "errorcheck")
public class ErrorCheck implements Serializable{

    private String errorInputStyle = new StringBuilder(
            "border: 1px solid #C00;border-top-width: 1px;border-right-width: 1px;border-bottom-width: 1px;border-left-width: 1px;border-top-style: solid;border-right-style: solid;border-bottom-style: solid;border-left-style: solid;border-top-color: #C00;border-right-color: #C00;border-bottom-color: #C00;border-left-color: #C00;").toString();
    private String errorMessagesStyle = new StringBuilder(
            "color: #C00;font-weight: bold;margin: 0 0 0 5px;margin-top: 0px;margin-right: 0px;margin-bottom: 0px;margin-left: 5px;").toString();

    public void setErrorInputStyle(String errorInputStyle) {
        this.errorInputStyle = errorInputStyle;
    }

    public String getErrorInputStyle() {
        return errorInputStyle;
    }

    public void setErrorMessagesStyle(String errorMessagesStyle) {
        this.errorMessagesStyle = errorMessagesStyle;
    }

    public String getErrorMessagesStyle() {
        return errorMessagesStyle;
    }

    public String getErrorStyle(String componentId) {
        FacesContext context = FacesContext.getCurrentInstance();
        Iterator<FacesMessage> messages = context.getMessages(componentId);
        while (messages.hasNext()) {
            if (messages.next().getSeverity().compareTo(FacesMessage.SEVERITY_ERROR) >= 0) {
                return getErrorInputStyle();
            }
        }
        return null;
    }
}
