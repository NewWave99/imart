package com.aw.imart.dao;

import com.aw.imart.entity.AuthRole;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;


/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */

@Stateless
public class AuthRoleFacade extends AbstractFacade<AuthRole> implements AuthRoleFacadeLocal {
    @PersistenceContext(unitName = "imart-warPU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public AuthRoleFacade() {
        super(AuthRole.class);
    }

}