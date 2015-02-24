package com.aw.imart.common.bean;

public class ProductOutDetailBean {

    private boolean check;
    private int seq;
    private String proOutCode;
    private Integer proInId;
    private String proInCode;
    private String proOutProColor;
    private String proOutProColorDesc;
    private Double proOutQty;
    private String proOutProUnit;
    private String proOutProUnitDesc;
    private Double proOutSurplus;
    private String proOutRemark;
    private boolean flagSurplus;

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

    public String getProOutCode() {
        return proOutCode;
    }

    public void setProOutCode(String proOutCode) {
        this.proOutCode = proOutCode;
    }

    public Integer getProInId() {
        return proInId;
    }

    public void setProInId(Integer proInId) {
        this.proInId = proInId;
    }

    public String getProInCode() {
        return proInCode;
    }

    public void setProInCode(String proInCode) {
        this.proInCode = proInCode;
    }

    public String getProOutProColor() {
        return proOutProColor;
    }

    public void setProOutProColor(String proOutProColor) {
        this.proOutProColor = proOutProColor;
    }

    public Double getProOutQty() {
        return proOutQty;
    }

    public void setProOutQty(Double proOutQty) {
        this.proOutQty = proOutQty;
    }

    public String getProOutProUnit() {
        return proOutProUnit;
    }

    public void setProOutProUnit(String proOutProUnit) {
        this.proOutProUnit = proOutProUnit;
    }

    public Double getProOutSurplus() {
        return proOutSurplus;
    }

    public void setProOutSurplus(Double proOutSurplus) {
        this.proOutSurplus = proOutSurplus;
    }

    public String getProOutRemark() {
        return proOutRemark;
    }

    public void setProOutRemark(String proOutRemark) {
        this.proOutRemark = proOutRemark;
    }

    public String getProOutProColorDesc() {
        return proOutProColorDesc;
    }

    public void setProOutProColorDesc(String proOutProColorDesc) {
        this.proOutProColorDesc = proOutProColorDesc;
    }

    public String getProOutProUnitDesc() {
        return proOutProUnitDesc;
    }

    public void setProOutProUnitDesc(String proOutProUnitDesc) {
        this.proOutProUnitDesc = proOutProUnitDesc;
    }

    public boolean isFlagSurplus() {
        return flagSurplus;
    }

    public void setFlagSurplus(boolean flagSurplus) {
        this.flagSurplus = flagSurplus;
    }
}
