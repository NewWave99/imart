/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aw.imart.dao;

import com.aw.imart.entity.AuthLog;
import java.util.List;
import javax.ejb.Local;

/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */

@Local
public interface AuthLogFacadeLocal {

    void create(AuthLog authLog) throws Exception;

    void edit(AuthLog authLog) throws Exception;

    void remove(AuthLog authLog) throws Exception;

    AuthLog find(Object id) throws Exception;

    List<AuthLog> findAll() throws Exception;

    List<AuthLog> findRange(int[] range) throws Exception;

    int count() throws Exception;
}
