package com.aw.imart.common.bean;

import java.util.Date;

public class ProductOutBean {

    private boolean check;
    private int seq;
    private String prooutCode;
    private Date prooutDate;
    private String prooutOrderno;
    private String prooutCustomer;
    private String prooutProCode;
    private Double prooutTotalQty;
    private Double prooutTotalNum;
    private String prooutProType;
    private String prooutProUser;
    private String prooutApprove;
    private String prooutApproveUser;

    public boolean isCheck() {
        return check;
    }

    public void setCheck(boolean check) {
        this.check = check;
    }

    public int getSeq() {
        return seq;
    }

    public void setSeq(int seq) {
        this.seq = seq;
    }

    public String getProoutCode() {
        return prooutCode;
    }

    public void setProoutCode(String prooutCode) {
        this.prooutCode = prooutCode;
    }

    public Date getProoutDate() {
        return prooutDate;
    }

    public void setProoutDate(Date prooutDate) {
        this.prooutDate = prooutDate;
    }

    public String getProoutOrderno() {
        return prooutOrderno;
    }

    public void setProoutOrderno(String prooutOrderno) {
        this.prooutOrderno = prooutOrderno;
    }

    public String getProoutCustomer() {
        return prooutCustomer;
    }

    public void setProoutCustomer(String prooutCustomer) {
        this.prooutCustomer = prooutCustomer;
    }

    public String getProoutProCode() {
        return prooutProCode;
    }

    public void setProoutProCode(String prooutProCode) {
        this.prooutProCode = prooutProCode;
    }

    public Double getProoutTotalQty() {
        return prooutTotalQty;
    }

    public void setProoutTotalQty(Double prooutTotalQty) {
        this.prooutTotalQty = prooutTotalQty;
    }

    public Double getProoutTotalNum() {
        return prooutTotalNum;
    }

    public void setProoutTotalNum(Double prooutTotalNum) {
        this.prooutTotalNum = prooutTotalNum;
    }

    public String getProoutProType() {
        return prooutProType;
    }

    public void setProoutProType(String prooutProType) {
        this.prooutProType = prooutProType;
    }

    public String getProoutProUser() {
        return prooutProUser;
    }

    public void setProoutProUser(String prooutProUser) {
        this.prooutProUser = prooutProUser;
    }

    public String getProoutApprove() {
        return prooutApprove;
    }

    public void setProoutApprove(String prooutApprove) {
        this.prooutApprove = prooutApprove;
    }

    public String getProoutApproveUser() {
        return prooutApproveUser;
    }

    public void setProoutApproveUser(String prooutApproveUser) {
        this.prooutApproveUser = prooutApproveUser;
    }
}
