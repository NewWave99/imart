/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package com.aw.imart.dao;

import com.aw.imart.entity.Shipping;
import java.util.List;
import javax.ejb.Local;

/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */

@Local
public interface ShippingFacadeDAOLocal {
    
    Shipping findByPaymentStatus(Shipping shipping) throws Exception;
    
    List<Shipping> findByInvoice(Shipping shipping) throws Exception;
    
    Shipping findByPK(Shipping shipping) throws Exception;
    
    List<Shipping> findPayment(Shipping shipping) throws Exception;
    
    List<Shipping> findByCriteria(Shipping shipping) throws Exception;
   
    void create(Shipping shipping) throws Exception;

    void edit(Shipping shipping) throws Exception;
    
    void delete(Shipping shipping) throws Exception;
    
    void updatePayment(Shipping shipping) throws Exception;
}
