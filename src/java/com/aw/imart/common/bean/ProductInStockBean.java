package com.aw.imart.common.bean;

public class ProductInStockBean {

    private boolean check;
    private int seq;
    private String proinProCode;
    private String proInProColor;
    private String proInProColorDesc;
    private Double proinTotalQty;
    private Double proinTotalNum;
    private String proinProType;
    private String proinProTypeDesc;

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

    public String getProinProCode() {
        return proinProCode;
    }

    public void setProinProCode(String proinProCode) {
        this.proinProCode = proinProCode;
    }

    public String getProInProColor() {
        return proInProColor;
    }

    public void setProInProColor(String proInProColor) {
        this.proInProColor = proInProColor;
    }

    public String getProInProColorDesc() {
        return proInProColorDesc;
    }

    public void setProInProColorDesc(String proInProColorDesc) {
        this.proInProColorDesc = proInProColorDesc;
    }

    public Double getProinTotalQty() {
        return proinTotalQty;
    }

    public void setProinTotalQty(Double proinTotalQty) {
        this.proinTotalQty = proinTotalQty;
    }

    public Double getProinTotalNum() {
        return proinTotalNum;
    }

    public void setProinTotalNum(Double proinTotalNum) {
        this.proinTotalNum = proinTotalNum;
    }

    public String getProinProType() {
        return proinProType;
    }

    public void setProinProType(String proinProType) {
        this.proinProType = proinProType;
    }

    public String getProinProTypeDesc() {
        return proinProTypeDesc;
    }

    public void setProinProTypeDesc(String proinProTypeDesc) {
        this.proinProTypeDesc = proinProTypeDesc;
    }
}
