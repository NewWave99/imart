/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aw.imart.service;

import com.aw.imart.common.util.DateTimeUtil;
import com.aw.imart.common.util.StringUtil;
import com.aw.imart.dao.SysGenCodeDAOLocal;
import com.aw.imart.entity.SysGenCode;
import java.text.DecimalFormat;
import java.text.NumberFormat;
import javax.ejb.EJB;
import javax.ejb.Stateless;


/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */

@Stateless
public class SystemServiceImpl implements SystemService {

    @EJB
    private SysGenCodeDAOLocal sysGenCodeDAO;

    @Override
    public String genCodeByCodeType(String codeType) throws Exception {
        String genCode = "";
        int value;
        SysGenCode sysGenCode = sysGenCodeDAO.findByType(codeType);
        if (sysGenCode != null) {
            NumberFormat formatter = new DecimalFormat(sysGenCode.getCodeFormat());
            if (StringUtil.isNotNullOrNotEmpty(sysGenCode.getCodeYy())) {
                if (!DateTimeUtil.dateToString(DateTimeUtil.currentDate(), "yyyy").equals(sysGenCode.getCodeYy())) {
                    sysGenCode.setCodeYy(DateTimeUtil.dateToString(DateTimeUtil.currentDate(), "yyyy"));
                }
            }
            if (StringUtil.isNotNullOrNotEmpty(sysGenCode.getCodeMm())) {
                if (!DateTimeUtil.dateToString(DateTimeUtil.currentDate(), "MM").equals(sysGenCode.getCodeMm())) {
                    sysGenCode.setCodeMm(DateTimeUtil.dateToString(DateTimeUtil.currentDate(), "MM"));
                    sysGenCode.setCodeValue(0);
                }
            }
            value = sysGenCode.getCodeValue() + 1;
            genCode = StringUtil.getIsNull(sysGenCode.getCodeHead());
            genCode = genCode + StringUtil.getIsNull(sysGenCode.getCodeYy());
            genCode = genCode + StringUtil.getIsNull(sysGenCode.getCodeMm());
            genCode = genCode + formatter.format(value);
            sysGenCode.setCodeValue(value);
            sysGenCodeDAO.edit(sysGenCode);
        }
        return genCode;
    }
}
