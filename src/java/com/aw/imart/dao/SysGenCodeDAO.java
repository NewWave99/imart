/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aw.imart.dao;

import com.aw.imart.entity.SysGenCode;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;


/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */

@Stateless
public class SysGenCodeDAO extends AbstractFacade<SysGenCode> implements SysGenCodeDAOLocal {

    @PersistenceContext(unitName = "imart-warPU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public SysGenCodeDAO() {
        super(SysGenCode.class);
    }

    @Override
    public SysGenCode findByType(String codeType) throws Exception {
        Query q = em.createQuery("select o from SysGenCode o where o.codeType = ?1");
        q.setParameter(1, codeType);
        try {
            return (SysGenCode) q.getSingleResult();
        } catch (NoResultException e) {
            return null;
        }
    }
}
