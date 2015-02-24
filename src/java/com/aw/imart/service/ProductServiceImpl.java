/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package com.aw.imart.service;

import com.aw.imart.dao.ProductFacadeDAOLocal;
import com.aw.imart.entity.Product;
import com.aw.imart.entity.ProductType;
import java.util.List;
import javax.ejb.EJB;
import javax.ejb.Stateless;

/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */

@Stateless
public class ProductServiceImpl implements ProductService {

    @EJB
    private ProductFacadeDAOLocal productFacade;

    
    @Override
    public List<Product> findProductAll() throws Exception {
       return productFacade.findAll();
    }

    @Override
    public List<Product> findByCriteria(Product customer) throws Exception {
        return productFacade.findByCriteria(customer);
    }

    @Override
    public void createProduct(Product product) throws Exception {
         productFacade.create(product);
    }

    @Override
    public void editProduct(Product product) throws Exception {
        productFacade.edit(product);
    }

    @Override
    public void deleteProduct(Product product) throws Exception {
        productFacade.delete(product);
    }

    // Add business logic below. (Right-click in editor and choose
    // "Insert Code > Add Business Method")

    @Override
    public List<ProductType> findProductTypeAll() throws Exception {
        return productFacade.findProductTypeAll();
    }

    @Override
    public void updateAmount(Product product) throws Exception {
        productFacade.updateAmount(product);
    }

}
