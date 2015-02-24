package com.aw.imart.common.bean;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Vector;
import javax.faces.model.SelectItem;

public class AreaM implements Serializable{

	private String value = "";
	private Vector child = new Vector();
        private List<SelectItem> child_menu = new ArrayList<SelectItem>();
        
        

	/**
	 * Gets the value
	 * @return Returns a String
	 */
	public String getValue() {
		return value;
	}
	/**
	 * Sets the value
	 * @param value The value to set
	 */
	public void setValue(String value) {
		this.value = value;
	}


	/**
	 * Gets the child
	 * @return Returns a Vector
	 */
	public Vector getChild() {
		return child;
	}
	/**
	 * Sets the child
	 * @param child The child to set
	 */
	public void setChild(Vector child) {
		this.child = child;
	}

    /**
     * @return the child_menu
     */
    public List<SelectItem> getChild_menu() {
        return child_menu;
    }

    /**
     * @param child_menu the child_menu to set
     */
    public void setChild_menu(List<SelectItem> child_menu) {
        this.child_menu = child_menu;
    }


}

