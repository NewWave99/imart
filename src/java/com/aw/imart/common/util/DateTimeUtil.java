/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aw.imart.common.util;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.Locale;
import java.util.TimeZone;
import javax.faces.context.FacesContext;

/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */

public class DateTimeUtil {

    public final static String pattern = "dd-MMM-yyyy";
    public final static String PATTERN_DB = "yyyy-MM-dd";
    public final static String SELECT_FROM_TIME = " 00:00:00";
    public final static String SELECT_TO_TIME = " 23:59:59";
    public final static long day = 1000 * 60 * 60 * 24;

    public static Date currentDate() {
        FacesContext facesContext = FacesContext.getCurrentInstance();
        Locale locale = facesContext.getViewRoot().getLocale();
        Calendar c = new GregorianCalendar(locale);
        c.setTimeInMillis(System.currentTimeMillis());
        return c.getTime();
    }
     public static Date currentDate(Locale locale) {
        FacesContext facesContext = FacesContext.getCurrentInstance();
        Calendar c = new GregorianCalendar(locale);
        c.setTimeInMillis(System.currentTimeMillis());
        return c.getTime();
    }
    
    public static Date currentDate(int d) {
        FacesContext facesContext = FacesContext.getCurrentInstance();
        Locale locale = facesContext.getViewRoot().getLocale();
        Calendar c = new GregorianCalendar(locale);
        c.setTimeInMillis(System.currentTimeMillis() - (d * day));
        return c.getTime();
    }

    public static long currentTimeMillis() {
        return System.currentTimeMillis();
    }

    public static String dateToString(Date d, String pattern) {
        SimpleDateFormat sdf = new SimpleDateFormat(pattern, Locale.US);
        return sdf.format(d);
    }

    public static String strCurrentDate() {
        FacesContext facesContext = FacesContext.getCurrentInstance();
        Locale locale = facesContext.getViewRoot().getLocale();
        Calendar c = new GregorianCalendar(locale);
        c.setTimeInMillis(System.currentTimeMillis());
        SimpleDateFormat sdf = new SimpleDateFormat(pattern, Locale.US);
        return sdf.format(c.getTime());
    }

    public static TimeZone getTimeZone() {
        TimeZone t = TimeZone.getTimeZone("Asia/Bangkok");
        return t;
    }

    public static Locale getLocale(String l) {
        return l.equals("th") ? new Locale("th", "TH") : Locale.US;
    }
}
