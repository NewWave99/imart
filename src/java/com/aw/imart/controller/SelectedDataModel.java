/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aw.imart.controller;

import java.util.List;
import javax.faces.model.ListDataModel;
import org.primefaces.model.SelectableDataModel;

/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */

public class SelectedDataModel extends ListDataModel<SelectedData> implements SelectableDataModel<SelectedData> {

    public SelectedDataModel() {
    }

    public SelectedDataModel(List<SelectedData> data) {
        super(data);
    }

    @Override
    public Object getRowKey(SelectedData t) {
        return t.getValue();
    }

    @Override
    public SelectedData getRowData(String rowKey) {
        List<SelectedData> datas = (List<SelectedData>) getWrappedData();
        for (SelectedData data : datas) {
            if (data.getValue().equals(rowKey)) {
                return data;
            }
        }
        return null;
    }
}
