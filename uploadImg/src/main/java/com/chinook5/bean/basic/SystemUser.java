package com.chinook5.bean.basic;

import java.io.Serializable;
import java.util.Date;

/**
 * Created by Mori on 2017/3/7.
 */
public class SystemUser implements Serializable {

    private static final long serialVersionUID = 6393900547140967121L;
    private Integer systemUserID;

    private Integer systemID;

    private String loginID;

    private String password;

    private String firstName;

    private String middleName;

    private String lastName;

    private String email;

    private Integer profilePhotoID;

    private String profilePhoto;

    private String userType;

    private Integer statusID;

    private String createdBy;

    private Date createdDate;

    private String modifyBy;

    private Date modifyDate;

    private String remark;

    private Boolean deleted;

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

    public Integer getSystemUserID() {
        return systemUserID;
    }

    public void setSystemUserID(Integer systemUserID) {
        this.systemUserID = systemUserID;
    }

    public Integer getSystemID() {
        return systemID;
    }

    public void setSystemID(Integer systemID) {
        this.systemID = systemID;
    }

    public String getLoginID() {
        return loginID;
    }

    public void setLoginID(String loginID) {
        this.loginID = loginID;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getProfilePhotoID() {
        return profilePhotoID;
    }

    public void setProfilePhotoID(Integer profilePhotoID) {
        this.profilePhotoID = profilePhotoID;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }

    public Integer getStatusID() {
        return statusID;
    }

    public void setStatusID(Integer statusID) {
        this.statusID = statusID;
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

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public Boolean getDeleted() {
        return deleted;
    }

    public void setDeleted(Boolean deleted) {
        this.deleted = deleted;
    }

    public String getProfilePhoto() {
        return profilePhoto;
    }

    public void setProfilePhoto(String profilePhoto) {
        this.profilePhoto = profilePhoto;
    }
}
