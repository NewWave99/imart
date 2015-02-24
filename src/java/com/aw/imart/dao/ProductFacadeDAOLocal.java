/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package com.aw.imart.dao;

import com.aw.imart.entity.Product;
import com.aw.imart.entity.ProductType;
import java.util.List;
import javax.ejb.Local;

/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */

@Local
public interface ProductFacadeDAOLocal {
    List<Product> findAll()throws Exception;
    
    List<ProductType>  findProductTypeAll() throws Exception;
            
    List<Product> findByCriteria(Product product) throws Exception;
  
    void create(Product product) throws Exception;

    void edit(Product product) throws Exception;
    
    void delete(Product product) throws Exception;
    
    void updateAmount(Product product) throws Exception;
}
