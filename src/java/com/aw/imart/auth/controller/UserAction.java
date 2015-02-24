package com.aw.imart.auth.controller;

import java.io.Serializable;
import javax.faces.bean.ManagedBean;

/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */

@ManagedBean(name = "userAction")
public class UserAction implements Serializable{

    public UserAction() {
    }

    public String action(String action) {
        return action;
    }
}
