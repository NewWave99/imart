/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package com.aw.imart.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;


/**
 * @author MR Adisorn Jomjanyong Senior Software Developer
 * hirochi_new@hotmail.com
 * @create 21-02-2556 16:56:22
 */

@Entity
@Table(name = "order_detail")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "OrderDetail.findAll", query = "SELECT o FROM OrderDetail o"),
    @NamedQuery(name = "OrderDetail.findByShippingID", query = "SELECT o FROM OrderDetail o WHERE o.orderDetailPK.shippingID = :shippingID"),
    @NamedQuery(name = "OrderDetail.findByProductID", query = "SELECT o FROM OrderDetail o WHERE o.orderDetailPK.productID = :productID"),
    @NamedQuery(name = "OrderDetail.findByOrderDetailAmount", query = "SELECT o FROM OrderDetail o WHERE o.orderDetailAmount = :orderDetailAmount"),
    @NamedQuery(name = "OrderDetail.findByOrderDetailPrice", query = "SELECT o FROM OrderDetail o WHERE o.orderDetailPrice = :orderDetailPrice"),
    @NamedQuery(name = "OrderDetail.findByOrderdetailPriceTotal", query = "SELECT o FROM OrderDetail o WHERE o.orderdetailPriceTotal = :orderdetailPriceTotal")})
public class OrderDetail implements Serializable {
    private static final long serialVersionUID = 1L;
    @EmbeddedId
    protected OrderDetailPK orderDetailPK;
    @Column(name = "orderDetailAmount")
    private Integer orderDetailAmount;
    // @Max(value=?)  @Min(value=?)//if you know range of your decimal fields consider using these annotations to enforce field validation
    @Column(name = "orderDetailPrice")
    private BigDecimal orderDetailPrice;
    @Column(name = "orderdetailPriceTotal")
    private BigDecimal orderdetailPriceTotal;
    @JoinColumn(name = "shippingID", referencedColumnName = "shippingID", insertable = false, updatable = false)
    @ManyToOne(optional = false)
    private Shipping shipping;
    @JoinColumn(name = "productID", referencedColumnName = "productID", insertable = false, updatable = false)
    @ManyToOne(optional = false)
    private Product product;

    public OrderDetail() {
    }

    public OrderDetail(OrderDetailPK orderDetailPK) {
        this.orderDetailPK = orderDetailPK;
    }

    public OrderDetail(String shippingID, String productID) {
        this.orderDetailPK = new OrderDetailPK(shippingID, productID);
    }

    public OrderDetailPK getOrderDetailPK() {
        return orderDetailPK;
    }

    public void setOrderDetailPK(OrderDetailPK orderDetailPK) {
        this.orderDetailPK = orderDetailPK;
    }

    public Integer getOrderDetailAmount() {
        return orderDetailAmount;
    }

    public void setOrderDetailAmount(Integer orderDetailAmount) {
        this.orderDetailAmount = orderDetailAmount;
    }

    public BigDecimal getOrderDetailPrice() {
        return orderDetailPrice;
    }

    public void setOrderDetailPrice(BigDecimal orderDetailPrice) {
        this.orderDetailPrice = orderDetailPrice;
    }

    public BigDecimal getOrderdetailPriceTotal() {
        return orderdetailPriceTotal;
    }

    public void setOrderdetailPriceTotal(BigDecimal orderdetailPriceTotal) {
        this.orderdetailPriceTotal = orderdetailPriceTotal;
    }

    public Shipping getShipping() {
        return shipping;
    }

    public void setShipping(Shipping shipping) {
        this.shipping = shipping;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (orderDetailPK != null ? orderDetailPK.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof OrderDetail)) {
            return false;
        }
        OrderDetail other = (OrderDetail) object;
        if ((this.orderDetailPK == null && other.orderDetailPK != null) || (this.orderDetailPK != null && !this.orderDetailPK.equals(other.orderDetailPK))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.aw.imart.entity.OrderDetail[ orderDetailPK=" + orderDetailPK + " ]";
    }

}
