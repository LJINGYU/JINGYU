package com.chinook5.bean.basic;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

/**
 * Created by ViJay on 4/10/2017.
 * ClassName  Country
 */
public class Country implements Serializable {

    private static final long serialVersionUID = -7481779159389540049L;

    private Integer countryID;      //国家ID
    private String countryCode;     //国家编码
    private String shortCode;       //国家短编码
    private String countryName;     //国家名称
    private String shortName;       //国家简称
    private String wordCode;        //语种
    private String continent;       //所属洲
    private Integer currencyID;     //货币类型
    private BigDecimal highValueAmount; //高价值标准
    private Integer serialNo;       //排序号
    private String remark;          // 备注
    private String createdBy;       //创建人
    private Date createdDate;       //创建时间
    private String modifyBy;        //修改人
    private Date modifyDate;        //修改时间
    private Boolean deleted;        //是否删除

    public Country() {
    }

    public Country(Integer countryID, String countryCode, String shortCode, String countryName, String shortName, String wordCode, String continent, Integer currencyID, BigDecimal highValueAmount, Integer serialNo, String remark, String createdBy, Date createdDate, String modifyBy, Date modifyDate, Boolean deleted) {
        this.countryID = countryID;
        this.countryCode = countryCode;
        this.shortCode = shortCode;
        this.countryName = countryName;
        this.shortName = shortName;
        this.wordCode = wordCode;
        this.continent = continent;
        this.currencyID = currencyID;
        this.highValueAmount = highValueAmount;
        this.serialNo = serialNo;
        this.remark = remark;
        this.createdBy = createdBy;
        this.createdDate = createdDate;
        this.modifyBy = modifyBy;
        this.modifyDate = modifyDate;
        this.deleted = deleted;
    }

    public Integer getCountryID() {
        return countryID;
    }

    public void setCountryID(Integer countryID) {
        this.countryID = countryID;
    }

    public String getCountryCode() {
        return countryCode;
    }

    public void setCountryCode(String countryCode) {
        this.countryCode = countryCode;
    }

    public String getShortCode() {
        return shortCode;
    }

    public void setShortCode(String shortCode) {
        this.shortCode = shortCode;
    }

    public String getCountryName() {
        return countryName;
    }

    public void setCountryName(String countryName) {
        this.countryName = countryName;
    }

    public String getShortName() {
        return shortName;
    }

    public void setShortName(String shortName) {
        this.shortName = shortName;
    }

    public String getWordCode() {
        return wordCode;
    }

    public void setWordCode(String wordCode) {
        this.wordCode = wordCode;
    }

    public String getContinent() {
        return continent;
    }

    public void setContinent(String continent) {
        this.continent = continent;
    }

    public Integer getCurrencyID() {
        return currencyID;
    }

    public void setCurrencyID(Integer currencyID) {
        this.currencyID = currencyID;
    }

    public BigDecimal getHighValueAmount() {
        return highValueAmount;
    }

    public void setHighValueAmount(BigDecimal highValueAmount) {
        this.highValueAmount = highValueAmount;
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

        Country country = (Country) o;

        if (countryID != null ? !countryID.equals(country.countryID) : country.countryID != null) return false;
        if (countryCode != null ? !countryCode.equals(country.countryCode) : country.countryCode != null) return false;
        if (shortCode != null ? !shortCode.equals(country.shortCode) : country.shortCode != null) return false;
        if (countryName != null ? !countryName.equals(country.countryName) : country.countryName != null) return false;
        if (shortName != null ? !shortName.equals(country.shortName) : country.shortName != null) return false;
        if (wordCode != null ? !wordCode.equals(country.wordCode) : country.wordCode != null) return false;
        if (continent != null ? !continent.equals(country.continent) : country.continent != null) return false;
        if (currencyID != null ? !currencyID.equals(country.currencyID) : country.currencyID != null) return false;
        if (highValueAmount != null ? !highValueAmount.equals(country.highValueAmount) : country.highValueAmount != null)
            return false;
        if (serialNo != null ? !serialNo.equals(country.serialNo) : country.serialNo != null) return false;
        if (remark != null ? !remark.equals(country.remark) : country.remark != null) return false;
        if (createdBy != null ? !createdBy.equals(country.createdBy) : country.createdBy != null) return false;
        if (createdDate != null ? !createdDate.equals(country.createdDate) : country.createdDate != null) return false;
        if (modifyBy != null ? !modifyBy.equals(country.modifyBy) : country.modifyBy != null) return false;
        if (modifyDate != null ? !modifyDate.equals(country.modifyDate) : country.modifyDate != null) return false;
        return deleted != null ? deleted.equals(country.deleted) : country.deleted == null;

    }

    @Override
    public int hashCode() {
        int result = countryID != null ? countryID.hashCode() : 0;
        result = 31 * result + (countryCode != null ? countryCode.hashCode() : 0);
        result = 31 * result + (shortCode != null ? shortCode.hashCode() : 0);
        result = 31 * result + (countryName != null ? countryName.hashCode() : 0);
        result = 31 * result + (shortName != null ? shortName.hashCode() : 0);
        result = 31 * result + (wordCode != null ? wordCode.hashCode() : 0);
        result = 31 * result + (continent != null ? continent.hashCode() : 0);
        result = 31 * result + (currencyID != null ? currencyID.hashCode() : 0);
        result = 31 * result + (highValueAmount != null ? highValueAmount.hashCode() : 0);
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
        return "Country{" +
                "countryID=" + countryID +
                ", countryCode='" + countryCode + '\'' +
                ", shortCode='" + shortCode + '\'' +
                ", countryName='" + countryName + '\'' +
                ", shortName='" + shortName + '\'' +
                ", wordCode='" + wordCode + '\'' +
                ", continent='" + continent + '\'' +
                ", currencyID=" + currencyID +
                ", highValueAmount=" + highValueAmount +
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
