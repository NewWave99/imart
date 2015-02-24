package com.aw.imart.auth.bean;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "sys_auth_user")
@NamedQueries({
    @NamedQuery(name = "User.findAll", query = "SELECT a FROM User a")})
public class User implements Serializable {
    
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 36)
    @Column(name = "USER_ID")
    private String userId;
    @Basic(optional = false)
    @NotNull
    @Size(max = 32)
    @Column(name = "USERNAME")
    private String username;
    @Basic(optional = false)
    @NotNull
    @Size(max = 64)
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
    @OneToOne(cascade = CascadeType.ALL, mappedBy = "authUser")
    private SecurityRole authRole;

    public User() {
    }
    public User(String userId) {
        this.userId = userId;
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

    public SecurityRole getAuthRole() {
        return authRole;
    }

    public void setAuthRole(SecurityRole authRole) {
        this.authRole = authRole;
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


}