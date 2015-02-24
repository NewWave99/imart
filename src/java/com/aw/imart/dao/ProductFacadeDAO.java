/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package com.aw.imart.dao;

import com.aw.imart.common.constants.Constants;
import com.aw.imart.common.util.StringUtil;
import com.aw.imart.entity.Product;
import com.aw.imart.entity.ProductType;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */

@Stateless
public class ProductFacadeDAO extends AbstractFacade<Product> implements ProductFacadeDAOLocal {

    @PersistenceContext(unitName = "imart-warPU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public ProductFacadeDAO() {
        super(Product.class);
    }

    @Override
    public List<Product> findAll() throws Exception {
        Query q = em.createQuery("select o from Product o where o.status='Active' order by o.productTypeID desc ");
        return q.getResultList();
    }
    

    @Override
    public List<Product> findByCriteria(Product product) throws Exception {
        StringBuilder sb = new StringBuilder();
        sb.append("select o from Product o where o.productID like ?1");
    
        if (StringUtil.isNotNullOrNotEmpty(product.getProductTypeID().getProductTypeID())) {
            sb.append(" and o.productTypeID = '").append(product.getProductTypeID().getProductTypeID()).append("'");
        }
        if (StringUtil.isNotNullOrNotEmpty(product.getProductName())) {
            sb.append(" and o.productName like '").append(product.getProductName()).append("%'");
        }

        sb.append(" and o.status='Active' order by o.productTypeID desc ");
        Query q = em.createQuery(sb.toString());
        q.setParameter(1, StringUtil.getIsNull(product.getProductID())+"%");
        if (Constants.MAXRESULTS) {
            q.setMaxResults(Constants.MAXRESULTS_FOR_DB);
        }
        return q.getResultList();
    }

    @Override
    public void delete(Product product) throws Exception {
        Query q = em.createQuery("UPDATE Product o SET o.status='Inactive' WHERE o.productID = ?1");
        q.setParameter(1, product.getProductID());
        q.executeUpdate();
    }

    @Override
    public List<ProductType> findProductTypeAll() throws Exception {
       Query q = em.createQuery("SELECT o FROM ProductType o");
       return q.getResultList();
    }

    @Override
    public void updateAmount(Product product) throws Exception {
        Query q = em.createQuery("UPDATE Product o SET o.amount=?1 WHERE o.productID = ?2");
        q.setParameter(1, product.getAmount());
        q.setParameter(2, product.getProductID());
        q.executeUpdate();
    }

 
    
 


   
}
