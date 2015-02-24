/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package com.aw.imart.service;

import com.aw.imart.dao.ShippingFacadeDAOLocal;
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
public class InvoiceServiceImpl implements InvoiceService {
    
    @EJB
    private ShippingFacadeDAOLocal shippingFacade;


    @Override
    public List<Shipping> findByInvoice(Shipping shipping) throws Exception {
       List<Shipping> shipping_obj=shippingFacade.findByInvoice(shipping);
       for(int i=0;i<shipping_obj.size();i++){
            Shipping shp_obj=(Shipping)shipping_obj.get(i);
            shp_obj.getOrderDetailList().toString();
       }
       return  shipping_obj;
    }

    @Override
    public List<Shipping> findByCriteria(Shipping shipping) throws Exception {
        List<Shipping> shipping_obj=shippingFacade.findByCriteria(shipping);
       for(int i=0;i<shipping_obj.size();i++){
            Shipping shp_obj=(Shipping)shipping_obj.get(i);
            shp_obj.getOrderDetailList().toString();
       }
       return  shipping_obj;
    }


}
