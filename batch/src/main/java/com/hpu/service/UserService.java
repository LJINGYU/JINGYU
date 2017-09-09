package com.hpu.service;

import com.hpu.entity.PageBean;
import com.hpu.entity.User;

import java.util.List;

/**
 * User类业务层接口
 * @author
 * @Date
 */
public interface UserService {
        User selectByPrimaryKey(Integer id);
        User loginByUserNameAndPassword(User record);
        PageBean<User> findByPage(int currentPage);
        List<User> selectUserList();
        int selectCount();
        int deleteByPrimaryKey(Integer id);
        int insertSelective(User record);
        int updateByPrimaryKeySelective(User record);
        List<User> queryUserWith(User record);
        int deleteBatch(String[] ids);

}
