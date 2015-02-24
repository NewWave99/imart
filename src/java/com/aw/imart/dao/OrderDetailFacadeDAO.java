/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package com.aw.imart.dao;

import com.aw.imart.common.util.StringUtil;
import com.aw.imart.entity.OrderDetail;
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
public class OrderDetailFacadeDAO extends AbstractFacade<OrderDetail> implements OrderDetailFacadeDAOLocal {

    @PersistenceContext(unitName = "imart-warPU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public OrderDetailFacadeDAO() {
        super(OrderDetail.class);
    }

    @Override
    public void delete(OrderDetail orderDtial) throws Exception {
        Query q = em.createQuery("delete OrderDetail o where o.orderDetailPK.shippingID = ?1 and o.orderDetailPK.productID = ?2");
        q.setParameter(1, orderDtial.getOrderDetailPK().getShippingID());
        q.setParameter(2, orderDtial.getOrderDetailPK().getProductID());
        q.executeUpdate();
    }

    @Override
    public OrderDetail findByPK(OrderDetail orderDtial) throws Exception {
        StringBuilder sb = new StringBuilder();
        sb.append("select o from OrderDetail o where o.orderDetailPK.shippingID = ?1 and o.orderDetailPK.productID=?2");
        
        Query q = em.createQuery(sb.toString());
        q.setParameter(1, StringUtil.getIsNull(orderDtial.getOrderDetailPK().getShippingID()));
        q.setParameter(2, StringUtil.getIsNull(orderDtial.getOrderDetailPK().getProductID()));

        try {
            return (OrderDetail) q.getSingleResult();
        } catch (NoResultException e) {
            return null;
        }
    }
    
}
