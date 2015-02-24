package com.aw.imart.common.util;

import java.util.HashMap;
import java.util.Locale;
import java.util.ResourceBundle;
import javax.faces.context.FacesContext;

/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */

public class LoaderConfig {

    public static final String MESSAGE_PATH = "resources.config";
    private static HashMap messageBundles = new HashMap();

    public static String getConfig(String key) {
        if (key == null) {
            return null;
        }

        try {
            Locale locale = FacesContext.getCurrentInstance().getViewRoot().getLocale();

            ResourceBundle messages = (ResourceBundle) messageBundles.get(locale.toString());

            if (messages == null) {
                messages = ResourceBundle.getBundle(MESSAGE_PATH, locale);
                messageBundles.put(locale.toString(), messages);
            }
            return messages.getString(key);
        } catch (Exception e) {
            return null;
        }
    }
}
