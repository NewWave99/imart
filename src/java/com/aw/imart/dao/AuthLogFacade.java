/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aw.imart.dao;

import com.aw.imart.entity.AuthLog;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;


/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */

@Stateless
public class AuthLogFacade extends AbstractFacade<AuthLog> implements AuthLogFacadeLocal {

    @PersistenceContext(unitName = "imart-warPU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public AuthLogFacade() {
        super(AuthLog.class);
    }
}
