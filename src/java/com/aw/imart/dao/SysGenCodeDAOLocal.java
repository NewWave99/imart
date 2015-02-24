/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aw.imart.dao;

import com.aw.imart.entity.SysGenCode;
import java.util.List;
import javax.ejb.Local;


/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */

@Local
public interface SysGenCodeDAOLocal {

    void create(SysGenCode sysGenCode) throws Exception;

    void edit(SysGenCode sysGenCode) throws Exception;

    void remove(SysGenCode sysGenCode) throws Exception;

    SysGenCode find(Object id) throws Exception;

    List<SysGenCode> findAll() throws Exception;

    List<SysGenCode> findRange(int[] range) throws Exception;

    int count() throws Exception;
    
    SysGenCode findByType(String codeType) throws Exception;
    
}
