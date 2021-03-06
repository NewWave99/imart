package com.aw.imart.common.util;

import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import javax.naming.NamingException;
import javax.naming.directory.Attribute;

public class StringUtil {

    public static boolean isNullOrEmpty(String p_string) {
        boolean result = false;
        if (p_string == null || p_string.length() == 0) {
            result = true;
        }
        return result;
    }

    public static boolean isNullOrEmpty(Object oj) {
        boolean result = false;
        if (oj == null) {
            result = true;
        }
        return result;
    }

    public static boolean isNotNullOrNotEmpty(String p_string) {
        boolean result = false;
        if (p_string != null && p_string.length() != 0) {
            result = true;
        }
        return result;
    }

    public static boolean isNotNullOrNotEmpty(Object oj) {
        boolean result = false;
        if (oj != null) {
            result = true;
        }
        return result;
    }

    public static String subStrUid(String uid) {
        int s1 = uid.indexOf("=") + 1;
        int s2 = uid.indexOf(",");
        return uid.substring(s1, s2).trim();
    }

    public static String toString(Object str) {
        try {
            if (str == null) {
                return null;
            }
            Attribute att = (Attribute) str;
            return String.valueOf(att.get());
        } catch (NamingException ex) {
            return null;
        }
    }

    public static String toFirstUperCase(String str) {
        if (str == null) {
            return null;
        }

        String f1 = str.substring(0, 1);
        String f2 = str.substring(1, str.length());
        return f1.toUpperCase() + f2;
    }

    private static boolean validateNumber(String phoneNumber) {
        String phoneNum = "08[\\d]{8}|668[\\d]{8}|8[\\d]{8}";
        Pattern mask = Pattern.compile(phoneNum);
        Matcher matcher = mask.matcher(phoneNumber);
        if (!matcher.matches()) {
            return false;
        }
        return true;
    }

    public static boolean validateName(String name) {
        String pattern = "[^a-zA-Z ]";
        Pattern mask = Pattern.compile(pattern);
        Matcher m = mask.matcher(name);

        while (m.find()) {
            return false;
        }

        return true;
    }
    
    public static String numberFormat(BigDecimal input, String format) {
        String output = "0";
        if (input != null) {
            output = (new DecimalFormat(format)).format(input);
        } else {
            output = (new DecimalFormat(format)).format(0.0);
        }
        return output;
    }

    public static String numberFormat(Double input, String format) {
        String output = "0";
        if (input != null) {
            output = (new DecimalFormat(format)).format(input);
        } else {
            output = (new DecimalFormat(format)).format(0.0);
        }
        return output;
    }

    public static String numberFormat(Integer input, String format) {
        String output = "0";
        if (input != null) {
            output = (new DecimalFormat(format)).format(input);
        } else {
            output = (new DecimalFormat(format)).format(0.0);
        }
        return output;
    }

    public static String getIsNull(String input) {
        String output = "";
        if (input != null && input.length() != 0) {
            output = input;
        }
        return output;
    }

    public static void main(String[] args) {
    }
}
