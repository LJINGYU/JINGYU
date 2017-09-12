package com.chinook5.service.impl.basic;

import com.chinook5.bean.basic.Photo;
import com.chinook5.dao.DaoSupport;
import com.chinook5.service.basic.PhotoService;
import com.chinook5.util.DBLog;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;

/**
 * Created by LIUJINGYU 2017/9/11
 */
@Service
public class PhotoServiceImpl implements PhotoService {

    @Resource
    private DaoSupport dao;

    @Override
    @DBLog(description = "新增图片")
    public int insertPhotoSelective(Photo photo) throws Exception {
        dao.save("PhotoMapper.insertSelective", photo);
        Integer photoID = photo.getPhotoID();
        if(photoID == null){
            return -1;
        }
        return photoID;
    }

}