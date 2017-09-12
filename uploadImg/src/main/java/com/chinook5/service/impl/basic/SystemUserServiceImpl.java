package com.chinook5.service.impl.basic;

import com.chinook5.bean.basic.Photo;
import com.chinook5.bean.basic.SystemUser;
import com.chinook5.dao.DaoSupport;
import com.chinook5.service.basic.PhotoService;
import com.chinook5.service.basic.SystemUserService;
import com.chinook5.util.*;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by LIUJINGYU 2017/9/12.
 */
@Service
public class SystemUserServiceImpl implements SystemUserService {
    @Resource
    private DaoSupport dao;
    @Resource
    private PhotoService photoService;


    @Override
    public List<PageData> getSystemUserListPage(Page p) throws Exception {
        return (List<PageData>) dao.findForList("SystemUserMapper.getSystemUserListPage", p);

    }

    @DBLog(description = "新增管理员")
    @Override
    public int insertSystemUser(SystemUser systemUser, MultipartFile photo) throws Exception {
        int id = getSystemUserByLoginID(systemUser.getLoginID());
        if (id > 0) {
            return -1;
        }
        if (!photo.isEmpty()) {
            //上传图片
            String photoPath = UploadImage.uploadPic(photo, PhotoType.BRAND_LOGO);
            //写入图片表
            Photo logo = new Photo();
            logo.setPhotoTypeID(PhotoType.PROFILE_PHOTO);//图片类型为PROFILE_PHOTO
            logo.setPhotoPath(photoPath);
            logo.setCreatedDate(new Date());
            Integer photoID = photoService.insertPhotoSelective(logo);//新增到photo表
            systemUser.setProfilePhotoID(photoID);
        }
        systemUser.setCreatedDate(new Date());
        systemUser.setModifyDate(new Date());
        if (systemUser.getPassword() != null && systemUser.getPassword() != "") {
            systemUser.setPassword(MD5.md5(systemUser.getPassword()));
        }
        dao.save("SystemUserMapper.insertSystemUser", systemUser);
        Integer SystemUserID = systemUser.getSystemUserID();
        if (SystemUserID == null) {
            return -1;
        }

        //保存用户系统
       // systemUserSystemService.insertSystemUserSystemBySystemIDAndUserID(systemUser.getSystemID(),SystemUserID,adminUser.getSystemUserID());
        return SystemUserID;
    }


    /**
     * 名称唯一性校验
     * @param systemUserLoginID
     * @return
     * @throws Exception
     */
    @Override
    public int getSystemUserByLoginID(String systemUserLoginID) throws Exception {
        if (StringUtils.isEmpty(systemUserLoginID)) {
            return -1;
        }
        Integer systemUserID = (Integer) dao.findForObject("SystemUserMapper.getSystemUserByLoginIDInAll", systemUserLoginID);
        if (systemUserID == null) {
            return -1;
        }
        return systemUserID;

    }

    @DBLog(description = "删除管理员")
    @Override
    public Integer deleteSystemUser(int systemUserID) throws Exception {
        SystemUser systemUser = new SystemUser();
        systemUser.setSystemUserID(systemUserID);
        systemUser.setModifyDate(new Date());
        return (int) dao.update("SystemUserMapper.deleteSystemUser", systemUser);
    }

}
