/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package com.aw.imart.dao;

import com.aw.imart.common.constants.Constants;
import com.aw.imart.common.util.StringUtil;
import com.aw.imart.entity.Shipping;
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
public class ShippingFacadeDAO extends AbstractFacade<Shipping> implements ShippingFacadeDAOLocal {
    
    @PersistenceContext(unitName = "imart-warPU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public ShippingFacadeDAO() {
        super(Shipping.class);
    }

    @Override
    public Shipping findByPaymentStatus(Shipping shipping) throws Exception {
        Query q = em.createQuery("select o from Shipping o where o.userID.userId = ?1 and o.shippingStatus=?2");
        q.setParameter(1, StringUtil.getIsNull(shipping.getUserID().getUserId()));
        q.setParameter(2, shipping.getShippingStatus());

        try {
            return (Shipping) q.getSingleResult();
        } catch (NoResultException e) {
            return null;
        }
    }

    @Override
    public void delete(Shipping shipping) throws Exception {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<Shipping> findPayment(Shipping shipping) throws Exception {
        Query q = em.createQuery("select o from Shipping o where o.shippingStatus = ?1 ");
        q.setParameter(1, shipping.getShippingStatus());
        return q.getResultList();
    }

    @Override
    public List<Shipping> findByInvoice(Shipping shipping) throws Exception {
        Query q = em.createQuery("select o from Shipping o where o.userID.userId = ?1 and o.shippingStatus=?2");
        q.setParameter(1, StringUtil.getIsNull(shipping.getUserID().getUserId()));
        q.setParameter(2, shipping.getShippingStatus());
        if (Constants.MAXRESULTS) {
            q.setMaxResults(Constants.MAXRESULTS_FOR_DB);
        }
        return q.getResultList();
     }

    @Override
    public List<Shipping> findByCriteria(Shipping shipping) throws Exception {
        StringBuilder sb = new StringBuilder();
        sb.append("select o from Shipping o where o.shippingID like ?1");
    
        if (StringUtil.isNotNullOrNotEmpty(shipping.getName())) {
            sb.append(" and o.name like '").append(shipping.getName()).append("%'");
        }
        if (StringUtil.isNotNullOrNotEmpty(shipping.getLastName())) {
            sb.append(" and o.lastName like '").append(shipping.getLastName()).append("%'");
        }

        sb.append(" and  o.shippingStatus=3 order by o.createDate desc ");
        Query q = em.createQuery(sb.toString());
        q.setParameter(1, StringUtil.getIsNull(shipping.getShippingID())+"%");
        if (Constants.MAXRESULTS) {
            q.setMaxResults(Constants.MAXRESULTS_FOR_DB);
        }
        return q.getResultList();
    }

    @Override
    public void updatePayment(Shipping shipping) throws Exception {
        Query q = em.createQuery("UPDATE Shipping o SET o.name=?1,o.lastName=?2,o.address=?3,o.khet=?4,o.kwang=?5,"
                + "o.province=?6,o.zipcode=?7,o.shippingStatus=?8,o.telephone=?9,o.email=?10,o.shippingDate=?11  WHERE o.shippingID = ?12");
        q.setParameter(1, shipping.getName());
        q.setParameter(2, shipping.getLastName());
        q.setParameter(3, shipping.getAddress());
        q.setParameter(4, shipping.getKhet());
        q.setParameter(5, shipping.getKwang());
        q.setParameter(6, shipping.getProvince());
        q.setParameter(7, shipping.getZipcode());
        q.setParameter(8, shipping.getShippingStatus());
        q.setParameter(9, shipping.getTelephone());
        q.setParameter(10, shipping.getEmail());
        q.setParameter(11, shipping.getShippingDate());
        q.setParameter(12, shipping.getShippingID());
        
        q.executeUpdate();
    }

    @Override
    public Shipping findByPK(Shipping shipping) throws Exception {
        Query q = em.createQuery("select o from Shipping o where o.shippingID=?1");
        q.setParameter(1, StringUtil.getIsNull(shipping.getShippingID()));
        try {
            return (Shipping) q.getSingleResult();
        } catch (NoResultException e) {
            return null;
        }
    }

   

}
