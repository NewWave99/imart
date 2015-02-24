package com.aw.imart.controller;

import com.aw.imart.common.util.DateTimeUtil;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;

/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */

@ManagedBean(name = DashboardController.BEAN_NAME)
@SessionScoped
public class DashboardController {

    public static final String BEAN_NAME = "dashboardController";
    private int seq;
    private String imgPath;
    private List<DashboardController> rankingSellers;
    private List<DashboardController> rankingPoor;

    public DashboardController() {
    }

    @PostConstruct
    public void init() {
        try {
            Date dateFrom = DateTimeUtil.currentDate(60);
            Date dateTo = DateTimeUtil.currentDate();
            rankingSellers = new ArrayList<DashboardController>();
            rankingPoor = new ArrayList<DashboardController>();
        } catch (Exception ex) {
            Logger.getLogger(DashboardController.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public String getImgPath() {
        return imgPath;
    }

    public void setImgPath(String imgPath) {
        this.imgPath = imgPath;
    }

    public List<DashboardController> getRankingSellers() {
        return rankingSellers;
    }

    public void setRankingSellers(List<DashboardController> rankingSellers) {
        this.rankingSellers = rankingSellers;
    }

    public List<DashboardController> getRankingPoor() {
        return rankingPoor;
    }

    public void setRankingPoor(List<DashboardController> rankingPoor) {
        this.rankingPoor = rankingPoor;
    }

    public int getSeq() {
        return seq;
    }

    public void setSeq(int seq) {
        this.seq = seq;
    }
}
