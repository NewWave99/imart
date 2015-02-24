package com.aw.imart.common.util;

import java.util.Random;
import java.util.UUID;

/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */

public class PimaryKeyUtil {

    public static String getPK36() {
        return UUID.randomUUID().toString();
    }

    public static void main(String[] args) {

        for (int i = 0; i < 200; i++) {
            System.out.println("" + getPK36());
        }
        System.out.println("" + getPK36().length());

        Random r = new Random();

        String[] a = null;

        for (int j = 0; j < 200; j++) {
            String b = "0";
            for (int i = 0; i < 9; i++) {
                if (i == 2 || i == 6) {
                    b += "-";
                }
                b += r.nextInt(9);
            }
            System.out.println("" + b);
        }



    }
}