package com.aw.imart.common.theme;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */

public class AvailableThemes {

    private final HashMap<String, Theme> themesAsMap;
    private final List<Theme> themes;
    private static AvailableThemes instance = null;

    public static AvailableThemes getInstance() {
        if (instance == null) {
            instance = new AvailableThemes();
        }

        return instance;
    }

    private AvailableThemes() {
        final List<String> themeNames = new ArrayList<String>();
        themeNames.add("black-tie");
        themeNames.add("blitzer");
        themeNames.add("bootstrap");
        themeNames.add("excite-bike");
        themeNames.add("flick");
        themeNames.add("glass-x");
        themeNames.add("home");
        themeNames.add("hot-sneaks");
        themeNames.add("overcast");
        themeNames.add("pepper-grinder");
        themeNames.add("rocket");
        themeNames.add("sam");
        themeNames.add("smoothness");
        themeNames.add("south-street");
        themeNames.add("start");
        themeNames.add("sunny");
        themeNames.add("ui-lightness");
        
        themesAsMap = new HashMap<String, Theme>();
        themes = new ArrayList<Theme>();

        for (final String themeName : themeNames) {
            final Theme theme = new Theme();
            theme.setName(themeName);
            theme.setImage("/resources/images/themeswitcher/" + themeName + ".png");

            themes.add(theme);
            themesAsMap.put(theme.getName(), theme);
        }
    }

    public final List<Theme> getThemes() {
        return themes;
    }

    public Theme getThemeForName(final String name) {
        return themesAsMap.get(name);
    }
}
