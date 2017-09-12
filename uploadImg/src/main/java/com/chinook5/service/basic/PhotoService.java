package com.chinook5.service.basic;

import com.chinook5.bean.basic.Photo;

import java.util.List;

/**
 * Created by LIUJINGYU 2017/9/11
 */
public interface PhotoService {

    /**
     * 跟据Photo不为null的属性新增photo，返回新增后自增id
     */
    int insertPhotoSelective(Photo photo) throws Exception ;

}
