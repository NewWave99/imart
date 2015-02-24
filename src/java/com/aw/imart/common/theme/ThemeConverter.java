package com.aw.imart.common.theme;


import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.convert.Converter;
import javax.faces.convert.FacesConverter;

/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */

@FacesConverter("com.aw.imart.common.theme.ThemeConverter")
public class ThemeConverter implements Converter {

    @Override
    public Object getAsObject(final FacesContext context, final UIComponent component, final String value) {
        return AvailableThemes.getInstance().getThemeForName(value);
    }

    @Override
    public String getAsString(final FacesContext context, final UIComponent component, final Object value) {
        return ((Theme) value).getName();
    }
}
