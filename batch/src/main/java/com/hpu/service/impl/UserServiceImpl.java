package com.hpu.service.impl;

import com.hpu.dao.UserDao;
import com.hpu.entity.PageBean;
import com.hpu.entity.User;
import com.hpu.service.UserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/**
 * User类业务层实现类
 * @author
 * @Date
 */
@Service("userService")
public class UserServiceImpl implements UserService {
    @Resource
    private UserDao userDao;

    public User selectByPrimaryKey(Integer id) {
        return userDao.selectByPrimaryKey(id);
    }

    public User loginByUserNameAndPassword(User record) {
        return userDao.loginByUserNameAndPassword(record);
    }

    public PageBean<User> findByPage(int currentPage) {
        HashMap<String,Object> map = new HashMap<String, Object>();
        PageBean<User> pageBean = new PageBean<User>();
        //封装当前页数
        pageBean.setCurrentPage(currentPage);
        //每页显示数据
        int pageSize=8;
        pageBean.setPageSize(pageSize);
        //封装总记录数
        int totalCount = userDao.selectCount();
        pageBean.setTotalCount(totalCount);
        //封装总页数
        double tc = totalCount;
        Double num = Math.ceil(tc/pageSize);
        pageBean.setTotalPage(num.intValue());
        map.put("start",(currentPage-1)*pageSize);
        map.put("size",pageBean.getPageSize());
        //封装每页显示的数据
        List<User> lists= userDao.findByPage(map);
        pageBean.setLists(lists);

        return pageBean;
    }

    public List<User> selectUserList() {
        return userDao.selectUserList();
    }

    public int selectCount() {
        return userDao.selectCount();
    }

    public int deleteByPrimaryKey(Integer id) {
        return userDao.deleteByPrimaryKey(id);
    }

    public int insertSelective(User record) {
        return userDao.insertSelective(record);
    }

    public int updateByPrimaryKeySelective(User record) {
        return userDao.updateByPrimaryKeySelective(record);
    }
    public List<User>  queryUserWith(User record){
        return userDao.queryUserWith(record);
    }

    public int deleteBatch(String[] ids) {
        List<Integer> idList = new ArrayList<Integer>();
        for(String id : ids) {
            idList.add(Integer.valueOf(id));
        }
        return userDao.deleteBatch(idList);
    }

}
