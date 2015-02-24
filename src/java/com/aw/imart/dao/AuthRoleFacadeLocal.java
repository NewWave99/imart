/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aw.imart.dao;

import com.aw.imart.entity.AuthRole;
import java.util.List;
import javax.ejb.Local;


/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */

@Local
public interface AuthRoleFacadeLocal {

    void create(AuthRole authRole) throws Exception;

    void edit(AuthRole authRole) throws Exception;

    void remove(AuthRole authRole) throws Exception;

    AuthRole find(Object id) throws Exception;

    List<AuthRole> findAll() throws Exception;

    List<AuthRole> findRange(int[] range) throws Exception;

    int count() throws Exception;
}
