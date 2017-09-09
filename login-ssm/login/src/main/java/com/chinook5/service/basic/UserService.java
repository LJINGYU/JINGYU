package com.chinook5.service.basic;

import com.chinook5.bean.basic.User;

import javax.servlet.http.HttpServletRequest;

public interface UserService {
    /**
     * 用户登录
     *
     * @param username
     * @param password
     * @return
     * @throws Exception
     */
    User loginByUserNameAndPassword(String username, String password, HttpServletRequest request) throws Exception;
  //  User getUser(String username, String password, HttpServletRequest request )throws Exception;
}
