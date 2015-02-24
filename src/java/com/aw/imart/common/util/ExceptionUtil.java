package com.aw.imart.common.util;

import java.util.List;

public class ExceptionUtil {

    public static List<String> addLineException(List<String> lsr, String key, String[] args) {
        String massage = MsgBundleLoader.getMessage(key, MsgBundleLoader.ERRORRESOURCES_PATH);
        if (massage != null && massage.length() != 0) {
            if (args != null && args.length > 0) {
                for (int i = 0; i < args.length; i++) {
                    massage = massage.replace("{" + i + "}", args[i]);
                }
            }
        }
        lsr.add(massage);
        return lsr;
    }
}