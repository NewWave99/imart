/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package com.aw.imart.dao;

import com.aw.imart.entity.OrderDetail;
import java.util.List;
import javax.ejb.Local;

/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */

@Local
public interface OrderDetailFacadeDAOLocal {
    
    OrderDetail findByPK(OrderDetail orderDtial) throws Exception;
    
    void create(OrderDetail orderDtial) throws Exception;

    void edit(OrderDetail orderDtial) throws Exception;
    
    void delete(OrderDetail orderDtial) throws Exception;
}
