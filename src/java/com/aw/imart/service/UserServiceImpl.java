/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aw.imart.service;

import com.aw.imart.dao.AuthLogFacadeLocal;
import com.aw.imart.dao.AuthRoleFacadeLocal;
import com.aw.imart.dao.AuthUserFacadeLocal;
import com.aw.imart.entity.AuthLog;
import com.aw.imart.entity.AuthRole;
import com.aw.imart.entity.AuthUser;
import java.util.List;
import javax.ejb.EJB;
import javax.ejb.Stateless;


/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */

@Stateless
public class UserServiceImpl implements UserService {

    @EJB
    private AuthUserFacadeLocal authUserFacade;
    @EJB
    private AuthLogFacadeLocal authLogFacadeLocal;
    @EJB
    private AuthRoleFacadeLocal authRoleFacade;

    @Override
    public void createAuthUser(AuthUser authUser) throws Exception {
        authUserFacade.create(authUser);
    }

    @Override
    public void createAuthLog(AuthLog authLog) throws Exception {
        authLogFacadeLocal.create(authLog);
    }

    @Override
    public void editAuthUser(AuthUser authUser) throws Exception {
        authUserFacade.edit(authUser);
    }

    @Override
    public void editPassword(AuthUser authUser) throws Exception {
        authUserFacade.editPassword(authUser);
    }

    @Override
    public void editLocale(AuthUser authUser) throws Exception {
        authUserFacade.editLocale(authUser);
    }

    @Override
    public void editTheme(AuthUser authUser) throws Exception {
        authUserFacade.editTheme(authUser);
    }

    @Override
    public void removeAuthUser(AuthUser authUser) throws Exception {
        authUserFacade.remove(authUser);
    }

    @Override
    public void updateStatus(AuthUser authUser) throws Exception {
        authUserFacade.updateStatus(authUser);
    }

    @Override
    public AuthUser findAuthUser(Object id) throws Exception {
        return authUserFacade.find(id);
    }

    @Override
    public AuthUser findAuthUserByUsername(String username) throws Exception {
        return authUserFacade.findByUsername(username);
    }

    @Override
    public List<AuthUser> findAuthUserAll() throws Exception {
        return authUserFacade.findAll();
    }

    @Override
    public List<AuthUser> findAuthUserByStatus() throws Exception {
        return authUserFacade.findByStatus();
    }

    @Override
    public List<AuthRole> findAuthRoleAll() throws Exception {
        return authRoleFacade.findAll();
    }
}
