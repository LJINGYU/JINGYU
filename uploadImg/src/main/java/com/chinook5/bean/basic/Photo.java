package com.chinook5.bean.basic;

import java.io.Serializable;
import java.util.Date;

public class Photo implements Serializable {

    private static final long serialVersionUID = 1721417678561506775L;
    private Integer photoID;

    private Integer photoTypeID;

    private String photoName;

    private String photoPath;

    private Integer storeID;

    private Integer salesChannelID;

    private Boolean publicToAll;

    private String linkUrl;

    private Integer width;

    private Integer height;

    private Integer serialNo;

    private String createdBy;

    private Date createdDate;

    private String modifyBy;

    private Date modifyDate;

    private Boolean deleted;

    private String remark;

    public Photo() {
    }

    public Photo(Integer photoID, Integer photoTypeID, String photoName, String photoPath, Integer storeID, Integer salesChannelID, Boolean publicToAll, String linkUrl, Integer width, Integer height, Integer serialNo, String createdBy, Date createdDate, String modifyBy, Date modifyDate, Boolean deleted, String remark) {
        this.photoID = photoID;
        this.photoTypeID = photoTypeID;
        this.photoName = photoName;
        this.photoPath = photoPath;
        this.storeID = storeID;
        this.salesChannelID = salesChannelID;
        this.publicToAll = publicToAll;
        this.linkUrl = linkUrl;
        this.width = width;
        this.height = height;
        this.serialNo = serialNo;
        this.createdBy = createdBy;
        this.createdDate = createdDate;
        this.modifyBy = modifyBy;
        this.modifyDate = modifyDate;
        this.deleted = deleted;
        this.remark = remark;
    }

    public Integer getPhotoID() {
        return photoID;
    }

    public void setPhotoID(Integer photoID) {
        this.photoID = photoID;
    }

    public Integer getPhotoTypeID() {
        return photoTypeID;
    }

    public void setPhotoTypeID(Integer photoTypeID) {
        this.photoTypeID = photoTypeID;
    }

    public String getPhotoName() {
        return photoName;
    }

    public void setPhotoName(String photoName) {
        this.photoName = photoName;
    }

    public String getPhotoPath() {
        return photoPath;
    }

    public void setPhotoPath(String photoPath) {
        this.photoPath = photoPath;
    }

    public Integer getStoreID() {
        return storeID;
    }

    public void setStoreID(Integer storeID) {
        this.storeID = storeID;
    }

    public Integer getSalesChannelID() {
        return salesChannelID;
    }

    public void setSalesChannelID(Integer salesChannelID) {
        this.salesChannelID = salesChannelID;
    }

    public Boolean getPublicToAll() {
        return publicToAll;
    }

    public void setPublicToAll(Boolean publicToAll) {
        this.publicToAll = publicToAll;
    }

    public String getLinkUrl() {
        return linkUrl;
    }

    public void setLinkUrl(String linkUrl) {
        this.linkUrl = linkUrl;
    }

    public Integer getWidth() {
        return width;
    }

    public void setWidth(Integer width) {
        this.width = width;
    }

    public Integer getHeight() {
        return height;
    }

    public void setHeight(Integer height) {
        this.height = height;
    }

    public Integer getSerialNo() {
        return serialNo;
    }

    public void setSerialNo(Integer serialNo) {
        this.serialNo = serialNo;
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

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }
}