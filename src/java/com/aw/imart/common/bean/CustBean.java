package com.aw.imart.common.bean;

/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */

public class CustBean {

    private String firstName;
    private String lastName;
    private String sex;
    private String cardId;
    private String expireDt;
    private String nationality;
    private String mobile;
    private String cardType;

    public CustBean() {
    }

    public CustBean(String firstName, String lastName, String sex, String cardId, String expireDt, String nationality, String mobile, String cardType) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.sex = sex;
        this.cardId = cardId;
        this.expireDt = expireDt;
        this.nationality = nationality;
        this.mobile = mobile;
        this.cardType = cardType;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getCardId() {
        return cardId;
    }

    public void setCardId(String cardId) {
        this.cardId = cardId;
    }

    public String getExpireDt() {
        return expireDt;
    }

    public void setExpireDt(String expireDt) {
        this.expireDt = expireDt;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getCardType() {
        return cardType;
    }

    public void setCardType(String cardType) {
        this.cardType = cardType;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }
}