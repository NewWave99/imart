/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package com.aw.imart.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;


/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */

@Entity
@Table(name = "shipping")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Shipping.findAll", query = "SELECT s FROM Shipping s"),
    @NamedQuery(name = "Shipping.findByShippingID", query = "SELECT s FROM Shipping s WHERE s.shippingID = :shippingID"),
    @NamedQuery(name = "Shipping.findByShippingStatus", query = "SELECT s FROM Shipping s WHERE s.shippingStatus = :shippingStatus"),
    @NamedQuery(name = "Shipping.findByShippingDate", query = "SELECT s FROM Shipping s WHERE s.shippingDate = :shippingDate"),
    @NamedQuery(name = "Shipping.findByName", query = "SELECT s FROM Shipping s WHERE s.name = :name"),
    @NamedQuery(name = "Shipping.findByLastName", query = "SELECT s FROM Shipping s WHERE s.lastName = :lastName"),
    @NamedQuery(name = "Shipping.findByAddress", query = "SELECT s FROM Shipping s WHERE s.address = :address"),
    @NamedQuery(name = "Shipping.findByKhet", query = "SELECT s FROM Shipping s WHERE s.khet = :khet"),
    @NamedQuery(name = "Shipping.findByKwang", query = "SELECT s FROM Shipping s WHERE s.kwang = :kwang"),
    @NamedQuery(name = "Shipping.findByProvince", query = "SELECT s FROM Shipping s WHERE s.province = :province"),
    @NamedQuery(name = "Shipping.findByZipcode", query = "SELECT s FROM Shipping s WHERE s.zipcode = :zipcode"),
    @NamedQuery(name = "Shipping.findByTelephone", query = "SELECT s FROM Shipping s WHERE s.telephone = :telephone"),
    @NamedQuery(name = "Shipping.findByEmail", query = "SELECT s FROM Shipping s WHERE s.email = :email"),
    @NamedQuery(name = "Shipping.findByCreateBy", query = "SELECT s FROM Shipping s WHERE s.createBy = :createBy"),
    @NamedQuery(name = "Shipping.findByCreateDate", query = "SELECT s FROM Shipping s WHERE s.createDate = :createDate"),
    @NamedQuery(name = "Shipping.findByModifyDate", query = "SELECT s FROM Shipping s WHERE s.modifyDate = :modifyDate"),
    @NamedQuery(name = "Shipping.findByModifyBy", query = "SELECT s FROM Shipping s WHERE s.modifyBy = :modifyBy")})
public class Shipping implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 20)
    @Column(name = "shippingID")
    private String shippingID;
    @Basic(optional = false)
    @NotNull
    @Column(name = "shippingStatus")
    private int shippingStatus;
    @Column(name = "shippingDate")
    @Temporal(TemporalType.TIMESTAMP)
    private Date shippingDate;
    @Size(max = 255)
    @Column(name = "name")
    private String name;
    @Size(max = 255)
    @Column(name = "lastName")
    private String lastName;
    @Size(max = 255)
    @Column(name = "address")
    private String address;
    @Size(max = 100)
    @Column(name = "khet")
    private String khet;
    @Size(max = 100)
    @Column(name = "kwang")
    private String kwang;
    @Size(max = 100)
    @Column(name = "province")
    private String province;
    @Size(max = 10)
    @Column(name = "zipcode")
    private String zipcode;
    @Size(max = 50)
    @Column(name = "telephone")
    private String telephone;
    // @Pattern(regexp="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?", message="Invalid email")//if the field contains email address consider using this annotation to enforce field validation
    @Size(max = 100)
    @Column(name = "email")
    private String email;
    @Size(max = 255)
    @Column(name = "createBy")
    private String createBy;
    @Column(name = "createDate")
    @Temporal(TemporalType.TIMESTAMP)
    private Date createDate;
    @Column(name = "modifyDate")
    @Temporal(TemporalType.TIMESTAMP)
    private Date modifyDate;
    @Size(max = 255)
    @Column(name = "modifyBy")
    private String modifyBy;
    @JoinColumn(name = "userID", referencedColumnName = "USER_ID")
    @ManyToOne(optional = false)
    private AuthUser userID;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "shipping")
    private List<OrderDetail> orderDetailList;

    public Shipping() {
    }

    public Shipping(String shippingID) {
        this.shippingID = shippingID;
    }

    public Shipping(String shippingID, int shippingStatus) {
        this.shippingID = shippingID;
        this.shippingStatus = shippingStatus;
    }

    public String getShippingID() {
        return shippingID;
    }

    public void setShippingID(String shippingID) {
        this.shippingID = shippingID;
    }

    public int getShippingStatus() {
        return shippingStatus;
    }

    public void setShippingStatus(int shippingStatus) {
        this.shippingStatus = shippingStatus;
    }

    public Date getShippingDate() {
        return shippingDate;
    }

    public void setShippingDate(Date shippingDate) {
        this.shippingDate = shippingDate;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getKhet() {
        return khet;
    }

    public void setKhet(String khet) {
        this.khet = khet;
    }

    public String getKwang() {
        return kwang;
    }

    public void setKwang(String kwang) {
        this.kwang = kwang;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getZipcode() {
        return zipcode;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCreateBy() {
        return createBy;
    }

    public void setCreateBy(String createBy) {
        this.createBy = createBy;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public Date getModifyDate() {
        return modifyDate;
    }

    public void setModifyDate(Date modifyDate) {
        this.modifyDate = modifyDate;
    }

    public String getModifyBy() {
        return modifyBy;
    }

    public void setModifyBy(String modifyBy) {
        this.modifyBy = modifyBy;
    }

    public AuthUser getUserID() {
        return userID;
    }

    public void setUserID(AuthUser userID) {
        this.userID = userID;
    }

    @XmlTransient
    public List<OrderDetail> getOrderDetailList() {
        return orderDetailList;
    }

    public void setOrderDetailList(List<OrderDetail> orderDetailList) {
        this.orderDetailList = orderDetailList;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (shippingID != null ? shippingID.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Shipping)) {
            return false;
        }
        Shipping other = (Shipping) object;
        if ((this.shippingID == null && other.shippingID != null) || (this.shippingID != null && !this.shippingID.equals(other.shippingID))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.aw.imart.entity.Shipping[ shippingID=" + shippingID + " ]";
    }

}
