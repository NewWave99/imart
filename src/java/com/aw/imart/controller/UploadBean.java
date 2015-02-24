/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aw.imart.controller;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.context.FacesContext;

@ManagedBean(name = "uploadBean")
@SessionScoped
public class UploadBean {

    private String filename;

    public String getFilename() {
        return filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    public void uploadAttachment() {
        String filename = FacesContext.getCurrentInstance().getExternalContext().getRequestParameterMap().get("filename");
        setFilename(filename);
    }
}
