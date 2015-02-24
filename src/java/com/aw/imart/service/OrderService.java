/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package com.aw.imart.service;

import com.aw.imart.entity.OrderDetail;
import com.aw.imart.entity.Product;
import com.aw.imart.entity.Shipping;
import java.util.List;
import javax.ejb.Local;

/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */

@Local
public interface OrderService {
    
    List<Product> findProductAll() throws Exception;
    
    List<Product> findByCriteria(Product product) throws Exception;
    
    Shipping findByPK(Shipping shipping) throws Exception;
    
    Shipping findByPaymentStatus(Shipping shipping) throws Exception;
    
    OrderDetail findOrderDetailByPK(OrderDetail orderDtial) throws Exception;
    
    List<Shipping> findPayment(Shipping shipping) throws Exception;
    
    void createShipping(Shipping shipping) throws Exception;
    
    void editShipping(Shipping shipping) throws Exception;
    
    void updatePayment(Shipping shipping) throws Exception;
    
    void deleteShipping(Shipping shipping) throws Exception;
    
    void createOrderDetial(OrderDetail orderDtial) throws Exception;
    
    void editOrderDetail(OrderDetail orderDtial) throws Exception;
    
    void deleteOrderDetail(OrderDetail orderDetail) throws Exception;
    
}
