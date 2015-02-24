package com.aw.imart.common.bean;

public class ProductInDetailBean {

    private boolean check;
    private int seq;
    private Integer id;
    private String proInCode;
    private String proInProColor;
    private String proInProColorDesc;
    private Double proInQty;
    private String proInProUnit;
    private String proInProUnitDesc;

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

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getProInCode() {
        return proInCode;
    }

    public void setProInCode(String proInCode) {
        this.proInCode = proInCode;
    }

    public String getProInProColor() {
        return proInProColor;
    }

    public void setProInProColor(String proInProColor) {
        this.proInProColor = proInProColor;
    }

    public Double getProInQty() {
        return proInQty;
    }

    public void setProInQty(Double proInQty) {
        this.proInQty = proInQty;
    }

    public String getProInProUnit() {
        return proInProUnit;
    }

    public void setProInProUnit(String proInProUnit) {
        this.proInProUnit = proInProUnit;
    }

    public String getProInProColorDesc() {
        return proInProColorDesc;
    }

    public void setProInProColorDesc(String proInProColorDesc) {
        this.proInProColorDesc = proInProColorDesc;
    }

    public String getProInProUnitDesc() {
        return proInProUnitDesc;
    }

    public void setProInProUnitDesc(String proInProUnitDesc) {
        this.proInProUnitDesc = proInProUnitDesc;
    }
}
