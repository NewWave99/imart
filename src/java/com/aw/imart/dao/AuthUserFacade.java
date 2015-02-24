package com.aw.imart.dao;

import com.aw.imart.common.util.DateTimeUtil;
import com.aw.imart.entity.AuthUser;
import java.util.List;
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
public class AuthUserFacade extends AbstractFacade<AuthUser> implements AuthUserFacadeLocal {

    @PersistenceContext(unitName = "imart-warPU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public AuthUserFacade() {
        super(AuthUser.class);
    }

    @Override
    public AuthUser findByUsername(String username) throws Exception {
        Query q = em.createQuery("select o from AuthUser o where o.username = ?1 and o.status = ?2");
        q.setParameter(1, username);
        q.setParameter(2, true);
        try {
            return (AuthUser) q.getSingleResult();
        } catch (NoResultException e) {
            return null;
        }
    }

    @Override
    public void editPassword(AuthUser authUser) throws Exception {
        Query q = em.createQuery("update AuthUser o set o.password = ?1,o.modifiedDt = ?2,o.modifiedBy = ?3 where o.userId = ?4");
        q.setParameter(1, authUser.getPassword());
        q.setParameter(2, DateTimeUtil.currentDate());
        q.setParameter(3, authUser.getUsername());
        q.setParameter(4, authUser.getUserId());
        q.executeUpdate();
    }

    @Override
    public void editLocale(AuthUser authUser) throws Exception {
        Query q = em.createQuery("update AuthUser o set o.locale = ?1,o.revisedDt = ?2,o.revisedBy = ?3 where o.userId = ?4");
        q.setParameter(1, authUser.getLocale());
        q.setParameter(2, DateTimeUtil.currentDate());
        q.setParameter(3, authUser.getUsername());
        q.setParameter(4, authUser.getUserId());
        q.executeUpdate();
    }

    @Override
    public void editTheme(AuthUser authUser) throws Exception {
        Query q = em.createQuery("update AuthUser o set o.theme = ?1,o.revisedDt = ?2,o.revisedBy = ?3 where o.userId = ?4");
        q.setParameter(1, authUser.getTheme());
        q.setParameter(2, DateTimeUtil.currentDate());
        q.setParameter(3, authUser.getUsername());
        q.setParameter(4, authUser.getUserId());
        q.executeUpdate();
    }

    @Override
    public List<AuthUser> findByStatus() throws Exception {
        Query q = em.createQuery("select o from AuthUser o where o.status = 1");
        return q.getResultList();
    }

    @Override
    public void updateStatus(AuthUser authUser) throws Exception {
        Query q = em.createQuery("update AuthUser o set o.status = ?1,o.revisedDt = ?2,o.revisedBy = ?3 where o.userId = ?4");
        q.setParameter(1, false);
        q.setParameter(2, DateTimeUtil.currentDate());
        q.setParameter(3, authUser.getUsername());
        q.setParameter(4, authUser.getUserId());
        q.executeUpdate();
    }
}