package com.aw.imart.common.util;

import java.util.List;

public class RowsBean {

    private String rowShow;
    private String dataShow;
    private List<ColumnBean> column;

    public String getRowShow() {
        return rowShow;
    }

    public void setRowShow(String rowShow) {
        this.rowShow = rowShow;
    }

    public String getDataShow() {
        return dataShow;
    }

    public void setDataShow(String dataShow) {
        this.dataShow = dataShow;
    }

    public List<ColumnBean> getColumn() {
        return column;
    }

    public void setColumn(List<ColumnBean> column) {
        this.column = column;
    }
}
