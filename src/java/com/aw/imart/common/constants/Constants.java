package com.aw.imart.common.constants;

public final class Constants {

    public static final String NUMBER_PATTERN = "#,###";
    public static final String DOUBLE_PATTERN = "#,###.00";
    public static final String DATE_PATTERN = "dd/MM/yyyy";
    public static final String DATE_TIME_PATTERN = "dd/MM/yyyy HH:mm";
    public static final String DATATABLE_ROWS_PER_PAGE_TEMPLATE = "10,20,50,100";
    public static final String DATATABLE_PAGINATOR_TEMPLATE = "{CurrentPageReport}  {FirstPageLink} {PreviousPageLink} {PageLinks} {NextPageLink} {LastPageLink} {RowsPerPageDropdown}";
    public static final String DATATABLE_ROWS = "20";
    public static final String DATATABLE_PAGINATOR_POSITION = "bottom";
    public static final String DATATABLE_ROW_INDEX_VAR = "rowNumber";
    public static final String STOCK_GEN_CODE_TYPE_USER_CODE = "USER_CODE";
    public static final String STOCK_GEN_CODE_TYPE_EXT_CODE = "EXT_CODE";
    public static final boolean MAXRESULTS = false;
    public static final Integer MAXRESULTS_FOR_DB = 500;
    public static final String UPDATE_FORM = "@(form)";
    public static final String UPDATE_POPUP_FORM = "popup_form";
    public static final Double VAT_VALUE = 0.07;
    
    public static final String RAME_GEN_CODE_TYPE_PRODUCT_CODE = "PRODUCT_CODE";
    public static final String RAME_GEN_CODE_TYPE_SHIPPING_CODE = "INV_CODE";
    
    public static final Integer PAYMENT_PENDING=1; 
    public static final Integer PAYMENT_INCORRECT=2;
    public static final Integer PAYMENT_CORRECT=3;
    
    public static final Integer ORDER_LIMIT=10;

    private Constants() {
    }
}