/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aw.imart.service;

import com.aw.imart.entity.AuthLog;
import com.aw.imart.entity.AuthRole;
import com.aw.imart.entity.AuthUser;
import java.util.List;
import javax.ejb.Local;


/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */

@Local
public interface UserService {

    void createAuthUser(AuthUser authUser) throws Exception;
    
    void createAuthLog(AuthLog authLog) throws Exception;

    void editAuthUser(AuthUser authUser) throws Exception;

    void editPassword(AuthUser authUser) throws Exception;

    void editLocale(AuthUser authUser) throws Exception;

    void editTheme(AuthUser authUser) throws Exception;

    void removeAuthUser(AuthUser authUser) throws Exception;

    void updateStatus(AuthUser authUser) throws Exception;

    AuthUser findAuthUser(Object id) throws Exception;

    AuthUser findAuthUserByUsername(String username) throws Exception;

    List<AuthUser> findAuthUserAll() throws Exception;

    List<AuthUser> findAuthUserByStatus() throws Exception;

    List<AuthRole> findAuthRoleAll() throws Exception;
}
