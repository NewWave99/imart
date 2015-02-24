package com.aw.imart.common.util;

import java.util.Random;

/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */

public class NationalID {

    public static boolean validate(String digit) {
        digit = digit.replaceAll("-", "");
        int sum = 0;
        sum += Integer.parseInt(digit.substring(0, 1)) * 13;
        sum += Integer.parseInt(digit.substring(1, 2)) * 12;
        sum += Integer.parseInt(digit.substring(2, 3)) * 11;
        sum += Integer.parseInt(digit.substring(3, 4)) * 10;
        sum += Integer.parseInt(digit.substring(4, 5)) * 9;
        sum += Integer.parseInt(digit.substring(5, 6)) * 8;
        sum += Integer.parseInt(digit.substring(6, 7)) * 7;
        sum += Integer.parseInt(digit.substring(7, 8)) * 6;
        sum += Integer.parseInt(digit.substring(8, 9)) * 5;
        sum += Integer.parseInt(digit.substring(9, 10)) * 4;
        sum += Integer.parseInt(digit.substring(10, 11)) * 3;
        sum += Integer.parseInt(digit.substring(11, 12)) * 2;
        int lastDigit = Integer.parseInt(digit.substring(12, 13));

        sum = sum % 11;
        if (sum == 0) {
            sum = 1;
        } else if (sum == 1) {
            sum = 0;
        } else {
            sum = 11 - sum;
        }

        return (lastDigit == sum);
    }

    public static void main(String[] args) {
        System.out.println("" + generateIdCard());
    }

    public static String generateIdCard() {
        Random r = new Random();
        int lastbit = r.nextInt(9) + 1;
        String[] bit = new String[13];

        while (true) {
            int sum = 0;
            int j = 0;
            for (int i = 13; i > 1; i--) {
                int n = r.nextInt(9);
                bit[j] = String.valueOf(n);
                sum += n * i;
                j++;
            }

            sum = sum % 11;
            if (sum == 0) {
                sum = 1;
            } else if (sum == 1) {
                sum = 0;
            } else {
                sum = 11 - sum;
            }
            if (sum == lastbit) {
                bit[12] = String.valueOf(lastbit);
                String string = "";
                for (int i = 0; i < bit.length; i++) {
                    string += bit[i];
                }
                return string;
            }
        }
    }
}