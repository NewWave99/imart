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
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 *
 * @author Administrator
 */
@Entity
@Table(name = "sys_auth_user")
@NamedQueries({
    @NamedQuery(name = "AuthUser.findAll", query = "SELECT a FROM AuthUser a")})
public class AuthUser implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 36)
    @Column(name = "USER_ID")
    private String userId;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 32)
    @Column(name = "USERNAME")
    private String username;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 64)
    @Column(name = "PASSWORD")
    private String password;
    @Column(name = "PASSWOED_CHANGE_DT")
    @Temporal(TemporalType.TIMESTAMP)
    private Date passwoedChangeDt;
    @Size(max = 64)
    @Column(name = "FIRST_NAME")
    private String firstName;
    @Size(max = 64)
    @Column(name = "LAST_NAME")
    private String lastName;
    @Basic(optional = false)
    @NotNull
    @Column(name = "ACTIVE")
    private boolean active;
    @Column(name = "STATUS")
    private Boolean status;
    @Size(max = 64)
    @Column(name = "THEME")
    private String theme;
    @Size(max = 32)
    @Column(name = "LOCALE")
    private String locale;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 64)
    @Column(name = "CREATED_BY")
    private String createdBy;
    @Basic(optional = false)
    @NotNull
    @Column(name = "CREATED_DT")
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdDt;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 64)
    @Column(name = "REVISED_BY")
    private String revisedBy;
    @Basic(optional = false)
    @NotNull
    @Column(name = "REVISED_DT")
    @Temporal(TemporalType.TIMESTAMP)
    private Date revisedDt;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "userId")
    private List<AuthLog> authLogList;
    @OneToOne(cascade = CascadeType.ALL, mappedBy = "authUser")
    private AuthUserRole authUserRole;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "userID")
    private List<Shipping> shippingList;

    public AuthUser() {
    }

    public AuthUser(String userId) {
        this.userId = userId;
    }

    public List<Shipping> getShippingList() {
        return shippingList;
    }

    public void setShippingList(List<Shipping> shippingList) {
        this.shippingList = shippingList;
    }

    public AuthUser(String userId, String username, String password, boolean active, String createdBy, Date createdDt, String revisedBy, Date revisedDt) {
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.active = active;
        this.createdBy = createdBy;
        this.createdDt = createdDt;
        this.revisedBy = revisedBy;
        this.revisedDt = revisedDt;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Date getPasswoedChangeDt() {
        return passwoedChangeDt;
    }

    public void setPasswoedChangeDt(Date passwoedChangeDt) {
        this.passwoedChangeDt = passwoedChangeDt;
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

    public boolean getActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public String getTheme() {
        return theme;
    }

    public void setTheme(String theme) {
        this.theme = theme;
    }

    public String getLocale() {
        return locale;
    }

    public void setLocale(String locale) {
        this.locale = locale;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public Date getCreatedDt() {
        return createdDt;
    }

    public void setCreatedDt(Date createdDt) {
        this.createdDt = createdDt;
    }

    public String getRevisedBy() {
        return revisedBy;
    }

    public void setRevisedBy(String revisedBy) {
        this.revisedBy = revisedBy;
    }

    public Date getRevisedDt() {
        return revisedDt;
    }

    public void setRevisedDt(Date revisedDt) {
        this.revisedDt = revisedDt;
    }

    public List<AuthLog> getAuthLogList() {
        return authLogList;
    }

    public void setAuthLogList(List<AuthLog> authLogList) {
        this.authLogList = authLogList;
    }

    public AuthUserRole getAuthUserRole() {
        return authUserRole;
    }

    public void setAuthUserRole(AuthUserRole authUserRole) {
        this.authUserRole = authUserRole;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (userId != null ? userId.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof AuthUser)) {
            return false;
        }
        AuthUser other = (AuthUser) object;
        if ((this.userId == null && other.userId != null) || (this.userId != null && !this.userId.equals(other.userId))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.sscs.ramu.entity.AuthUser[ userId=" + userId + " ]";
    }
}
