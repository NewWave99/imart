/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aw.imart.dao;

import com.aw.imart.entity.AuthUser;
import java.util.List;
import javax.ejb.Local;

/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */

@Local
public interface AuthUserFacadeLocal {

    void create(AuthUser authUser) throws Exception;

    void edit(AuthUser authUser) throws Exception;

    void editPassword(AuthUser authUser) throws Exception;

    void editLocale(AuthUser authUser) throws Exception;

    void editTheme(AuthUser authUser) throws Exception;

    void remove(AuthUser authUser) throws Exception;

    AuthUser find(Object id) throws Exception;

    AuthUser findByUsername(String username) throws Exception;

    List<AuthUser> findAll() throws Exception;

    List<AuthUser> findByStatus() throws Exception;

    List<AuthUser> findRange(int[] range) throws Exception;

    void updateStatus(AuthUser authUser) throws Exception;

    int count() throws Exception;
}
