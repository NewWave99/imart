package com.aw.imart.controller;

import com.aw.imart.common.constants.Constants;
import java.io.Serializable;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import org.primefaces.component.datatable.DataTable;

/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */

@ManagedBean(name = "datatableController")
@SessionScoped
public class DatatableController implements Serializable {

    public static final String BEAN_NAME = "datatableController";
    private DataTable defaultDataTable;

    public DataTable getDefaultDataTable() {
        defaultDataTable = new DataTable();
        defaultDataTable.setRows(10);
        defaultDataTable.setPaginator(true);
        defaultDataTable.setPaginatorPosition(Constants.DATATABLE_PAGINATOR_POSITION);
        defaultDataTable.setPaginatorTemplate(Constants.DATATABLE_PAGINATOR_TEMPLATE);
        defaultDataTable.setRowsPerPageTemplate(Constants.DATATABLE_ROWS_PER_PAGE_TEMPLATE);
        defaultDataTable.setRowIndexVar(Constants.DATATABLE_ROW_INDEX_VAR);
        defaultDataTable.setEmptyMessage("");
        return defaultDataTable;
    }

    public void setDefaultDataTable(DataTable defaultDataTable) {
        this.defaultDataTable = defaultDataTable;
    }
}
