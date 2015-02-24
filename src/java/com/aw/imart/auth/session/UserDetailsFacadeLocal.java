package com.aw.imart.auth.session;

import com.aw.imart.auth.bean.User;

/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */

public interface UserDetailsFacadeLocal {

    User findByUsername(String username);
}
