/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aw.imart.entity;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
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
@Table(name = "sys_auth_log")
@NamedQueries({
    @NamedQuery(name = "AuthLog.findAll", query = "SELECT a FROM AuthLog a")})
public class AuthLog implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "ID")
    private Integer id;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 32)
    @Column(name = "AUTH_IP")
    private String authIp;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 40)
    @Column(name = "SESSION_ID")
    private String sessionId;
    @Basic(optional = false)
    @NotNull
    @Column(name = "CREATED_DT")
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdDt;
    @JoinColumn(name = "USER_ID", referencedColumnName = "USER_ID")
    @ManyToOne(optional = false)
    private AuthUser userId;

    public AuthLog() {
    }

    public AuthLog(Integer id) {
        this.id = id;
    }

    public AuthLog(Integer id, String authIp, String sessionId, Date createdDt) {
        this.id = id;
        this.authIp = authIp;
        this.sessionId = sessionId;
        this.createdDt = createdDt;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getAuthIp() {
        return authIp;
    }

    public void setAuthIp(String authIp) {
        this.authIp = authIp;
    }

    public String getSessionId() {
        return sessionId;
    }

    public void setSessionId(String sessionId) {
        this.sessionId = sessionId;
    }

    public Date getCreatedDt() {
        return createdDt;
    }

    public void setCreatedDt(Date createdDt) {
        this.createdDt = createdDt;
    }

    public AuthUser getUserId() {
        return userId;
    }

    public void setUserId(AuthUser userId) {
        this.userId = userId;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof AuthLog)) {
            return false;
        }
        AuthLog other = (AuthLog) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.aw.imart.entity.AuthLog[ id=" + id + " ]";
    }
    
}
