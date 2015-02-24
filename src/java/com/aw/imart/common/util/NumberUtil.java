package com.aw.imart.common.util;

/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */

public class NumberUtil {

    public static double getDouble(Double input) {
        double output = 0.0;
        if (input != null) {
            output = input.doubleValue();
        }
        return output;
    }

    public static float getFloat(Double input) {
        float output = 0;
        if (input != null) {
            output = input.floatValue();
        }
        return output;
    }

    public static int getInteger(Integer input) {
        int output = 0;
        if (input != null) {
            output = input.intValue();
        }
        return output;
    }
}
