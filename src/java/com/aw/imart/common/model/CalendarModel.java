package com.aw.imart.common.model;

import java.io.Serializable;
import javax.annotation.PostConstruct;
import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;

/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */

@ManagedBean
@ApplicationScoped
public class CalendarModel implements Serializable {
    public CalendarModel() {
    }

    @PostConstruct
    public void init() {
    }
}