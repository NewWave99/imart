package com.aw.imart.dao;

import com.aw.imart.common.constants.Constants;
import java.util.List;
import javax.persistence.EntityManager;

public abstract class AbstractFacade<T> {

    private Class<T> entityClass;

    public AbstractFacade(Class<T> entityClass) {
        this.entityClass = entityClass;
    }

    protected abstract EntityManager getEntityManager();

    public void create(T entity) throws Exception {
        getEntityManager().persist(entity);
    }

    public void edit(T entity) throws Exception {
        getEntityManager().merge(entity);
    }

    public void remove(T entity) throws Exception {
        getEntityManager().remove(getEntityManager().merge(entity));
    }

    public T find(Object id) throws Exception {
        return getEntityManager().find(entityClass, id);
    }

    public List<T> findAll() throws Exception {
        javax.persistence.Query q = getEntityManager().createQuery("select object(o) from " + entityClass.getSimpleName() + " as o");
        q.setMaxResults(Constants.MAXRESULTS_FOR_DB);
        return q.getResultList();
    }

    public List<T> findRange(int[] range) throws Exception {
        javax.persistence.Query q = getEntityManager().createQuery("select object(o) from " + entityClass.getSimpleName() + " as o");
        q.setMaxResults(range[1] - range[0]);
        q.setFirstResult(range[0]);
        return q.getResultList();
    }

    public int count() throws Exception {
        return ((Long) getEntityManager().createQuery("select count(o) from " + entityClass.getSimpleName() + " as o").getSingleResult()).intValue();
    }
}