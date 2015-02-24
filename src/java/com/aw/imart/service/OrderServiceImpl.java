/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package com.aw.imart.service;

import com.aw.imart.dao.OrderDetailFacadeDAOLocal;
import com.aw.imart.dao.ProductFacadeDAOLocal;
import com.aw.imart.dao.ShippingFacadeDAOLocal;
import com.aw.imart.entity.OrderDetail;
import com.aw.imart.entity.Product;
import com.aw.imart.entity.Shipping;
import java.util.List;
import javax.ejb.EJB;
import javax.ejb.Stateless;


/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */

@Stateless
public class OrderServiceImpl implements OrderService {

    @EJB
    private ProductFacadeDAOLocal productFacade;
    @EJB
    private ShippingFacadeDAOLocal shippingFacade;
    @EJB
    private OrderDetailFacadeDAOLocal orderDetailFacade;

    
    @Override
    public List<Product> findProductAll() throws Exception {
       return productFacade.findAll();
    }

    @Override
    public List<Product> findByCriteria(Product product) throws Exception {
       return productFacade.findByCriteria(product);
    }

    @Override
    public Shipping findByPaymentStatus(Shipping shipping) throws Exception {
        Shipping shipping_obj=shippingFacade.findByPaymentStatus(shipping);
        if(shipping_obj==null){
           return shipping_obj;
        }else{
           shipping_obj.getOrderDetailList().toString(); 
           return shipping_obj;
        }
    }

    @Override
    public void createShipping(Shipping shipping) throws Exception {
       shippingFacade.create(shipping);
    }

    @Override
    public void editShipping(Shipping shipping) throws Exception {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void deleteShipping(Shipping shipping) throws Exception {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void createOrderDetial(OrderDetail orderDtial) throws Exception {
       orderDetailFacade.create(orderDtial);
    }

    @Override
    public OrderDetail findOrderDetailByPK(OrderDetail orderDtial) throws Exception {
        return orderDetailFacade.findByPK(orderDtial);
    }

    @Override
    public List<Shipping> findPayment(Shipping shipping) throws Exception {
         List<Shipping> shipping_obj=shippingFacade.findPayment(shipping);
         for(int i=0;i<shipping_obj.size();i++){
             Shipping shp_obj=(Shipping)shipping_obj.get(i);
             shp_obj.getOrderDetailList().toString();
         }
         return  shipping_obj;
    }

    @Override
    public void editOrderDetail(OrderDetail orderDetail) throws Exception {
        orderDetailFacade.edit(orderDetail);
    }

    @Override
    public void deleteOrderDetail(OrderDetail orderDetail) throws Exception {
       orderDetailFacade.delete(orderDetail);
    }

    @Override
    public void updatePayment(Shipping shipping) throws Exception {
        shippingFacade.updatePayment(shipping);
    }

    @Override
    public Shipping findByPK(Shipping shipping) throws Exception {
        Shipping shipping_obj=shippingFacade.findByPK(shipping);
        if(shipping_obj==null){
           return shipping_obj;
        }else{
           shipping_obj.getOrderDetailList().toString(); 
           return shipping_obj;
        }
    }

   
}
