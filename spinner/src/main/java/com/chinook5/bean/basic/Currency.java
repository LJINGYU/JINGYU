package com.chinook5.bean.basic;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

/**
 * Created by ViJay on 4/6/2017.
 * ClassName  Currency
 */
public class Currency implements Serializable {

    private static final long serialVersionUID = 8793933764115679619L;
    private Integer currencyID;     //货币ID
    private String currencyCode;    //货币代码
    private String currencyName;    //货币名称
    private BigDecimal rate;            //汇率
    private Date rateUpdateDate;    //汇率更新时间
    private Integer serialNo;       //排序号
    private String remark;          // 备注
    private String createdBy;       //创建人
    private Date createdDate;       //创建时间
    private String modifyBy;        //修改人
    private Date modifyDate;        //修改时间
    private Boolean deleted;        //是否删除

    public Currency() {
    }

    public Currency(Integer currencyID, String currencyCode, String currencyName, BigDecimal rate, Date rateUpdateDate, Integer serialNo, String remark, String createdBy, Date createdDate, String modifyBy, Date modifyDate, Boolean deleted) {
        this.currencyID = currencyID;
        this.currencyCode = currencyCode;
        this.currencyName = currencyName;
        this.rate = rate;
        this.rateUpdateDate = rateUpdateDate;
        this.serialNo = serialNo;
        this.remark = remark;
        this.createdBy = createdBy;
        this.createdDate = createdDate;
        this.modifyBy = modifyBy;
        this.modifyDate = modifyDate;
        this.deleted = deleted;
    }

    public Integer getCurrencyID() {
        return currencyID;
    }

    public void setCurrencyID(Integer currencyID) {
        this.currencyID = currencyID;
    }

    public String getCurrencyCode() {
        return currencyCode;
    }

    public void setCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
    }

    public String getCurrencyName() {
        return currencyName;
    }

    public void setCurrencyName(String currencyName) {
        this.currencyName = currencyName;
    }

    public BigDecimal getRate() {
        return rate;
    }

    public void setRate(BigDecimal rate) {
        this.rate = rate;
    }

    public Date getRateUpdateDate() {
        return rateUpdateDate;
    }

    public void setRateUpdateDate(Date rateUpdateDate) {
        this.rateUpdateDate = rateUpdateDate;
    }

    public Integer getSerialNo() {
        return serialNo;
    }

    public void setSerialNo(Integer serialNo) {
        this.serialNo = serialNo;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public String getModifyBy() {
        return modifyBy;
    }

    public void setModifyBy(String modifyBy) {
        this.modifyBy = modifyBy;
    }

    public Date getModifyDate() {
        return modifyDate;
    }

    public void setModifyDate(Date modifyDate) {
        this.modifyDate = modifyDate;
    }

    public Boolean getDeleted() {
        return deleted;
    }

    public void setDeleted(Boolean deleted) {
        this.deleted = deleted;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Currency currency = (Currency) o;

        if (currencyID != null ? !currencyID.equals(currency.currencyID) : currency.currencyID != null) return false;
        if (currencyCode != null ? !currencyCode.equals(currency.currencyCode) : currency.currencyCode != null)
            return false;
        if (currencyName != null ? !currencyName.equals(currency.currencyName) : currency.currencyName != null)
            return false;
        if (rate != null ? !rate.equals(currency.rate) : currency.rate != null) return false;
        if (rateUpdateDate != null ? !rateUpdateDate.equals(currency.rateUpdateDate) : currency.rateUpdateDate != null)
            return false;
        if (serialNo != null ? !serialNo.equals(currency.serialNo) : currency.serialNo != null) return false;
        if (remark != null ? !remark.equals(currency.remark) : currency.remark != null) return false;
        if (createdBy != null ? !createdBy.equals(currency.createdBy) : currency.createdBy != null) return false;
        if (createdDate != null ? !createdDate.equals(currency.createdDate) : currency.createdDate != null)
            return false;
        if (modifyBy != null ? !modifyBy.equals(currency.modifyBy) : currency.modifyBy != null) return false;
        if (modifyDate != null ? !modifyDate.equals(currency.modifyDate) : currency.modifyDate != null) return false;
        return deleted != null ? deleted.equals(currency.deleted) : currency.deleted == null;

    }

    @Override
    public int hashCode() {
        int result = currencyID != null ? currencyID.hashCode() : 0;
        result = 31 * result + (currencyCode != null ? currencyCode.hashCode() : 0);
        result = 31 * result + (currencyName != null ? currencyName.hashCode() : 0);
        result = 31 * result + (rate != null ? rate.hashCode() : 0);
        result = 31 * result + (rateUpdateDate != null ? rateUpdateDate.hashCode() : 0);
        result = 31 * result + (serialNo != null ? serialNo.hashCode() : 0);
        result = 31 * result + (remark != null ? remark.hashCode() : 0);
        result = 31 * result + (createdBy != null ? createdBy.hashCode() : 0);
        result = 31 * result + (createdDate != null ? createdDate.hashCode() : 0);
        result = 31 * result + (modifyBy != null ? modifyBy.hashCode() : 0);
        result = 31 * result + (modifyDate != null ? modifyDate.hashCode() : 0);
        result = 31 * result + (deleted != null ? deleted.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "Currency{" +
                "currencyID=" + currencyID +
                ", currencyCode='" + currencyCode + '\'' +
                ", currencyName='" + currencyName + '\'' +
                ", rate=" + rate +
                ", rateUpdateDate=" + rateUpdateDate +
                ", serialNo=" + serialNo +
                ", remark='" + remark + '\'' +
                ", createdBy='" + createdBy + '\'' +
                ", createdDate=" + createdDate +
                ", modifyBy='" + modifyBy + '\'' +
                ", modifyDate=" + modifyDate +
                ", deleted=" + deleted +
                '}';
    }
}
