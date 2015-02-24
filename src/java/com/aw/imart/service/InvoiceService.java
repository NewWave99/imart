/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package com.aw.imart.service;

import com.aw.imart.entity.Shipping;
import java.util.List;
import javax.ejb.Local;

/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */

@Local
public interface InvoiceService {

     List<Shipping> findByInvoice(Shipping shipping) throws Exception;
     
     List<Shipping> findByCriteria(Shipping shipping) throws Exception;
}
