package com.aw.imart.auth.services;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.GrantedAuthorityImpl;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.aw.imart.auth.session.UserDetailsFacadeLocal;
import com.aw.imart.common.util.MsgBundleLoader;


/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */


@Service("userDetailsService")
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserDetailsFacadeLocal userDetailsDAO;

    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException, DataAccessException {

        com.aw.imart.auth.bean.User user = userDetailsDAO.findByUsername(username);

        if (user == null) {
            throw new UsernameNotFoundException(MsgBundleLoader.getMessage("error.login.username.not-found"));
        }

        @SuppressWarnings("unused")
        Collection<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
        authorities.add(new GrantedAuthorityImpl(user.getAuthRole().getRoleName()));

        boolean enabled = user.getActive();
        boolean accountNonExpired = true;
        boolean credentialsNonExpired = true;
        boolean accountNonLocked = true;

        org.springframework.security.core.userdetails.User userDetails = new User(username, user.getPassword(), enabled, accountNonExpired, credentialsNonExpired, accountNonLocked, authorities);
        return userDetails;
    }
}
