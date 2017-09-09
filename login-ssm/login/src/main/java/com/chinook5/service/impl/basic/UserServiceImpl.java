package com.chinook5.service.impl.basic;

import com.chinook5.bean.basic.User;
import com.chinook5.dao.DaoSupport;
import com.chinook5.service.basic.UserService;
import com.chinook5.util.MD5;
import com.chinook5.util.SessionKey;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;
@Service
public class UserServiceImpl implements UserService{
    @Resource
    private DaoSupport dao;
    @Override
    public User loginByUserNameAndPassword(String username, String password, HttpServletRequest request) throws Exception {
        Map<String,Object> map = new HashMap<>();
        map.put("username",username);
       // map.put("password", MD5.md5(password));
        map.put("password",password);
        User user = (User) dao.findForObject("UserMapper.loginByUserNameAndPassword",map);
        if(user != null){
            request.getSession().setAttribute(SessionKey.SESSION_ADMIN,user);
        }
        return user;
    }

   /* @Override
    public User getUser(String username, String password, HttpServletRequest request) throws Exception {
        Map<String,Object> map = new HashMap<>();
        map.put("username",username);
       // map.put("password", MD5.md5(password));
        map.put("password",password);
        User user = (User) dao.findForObject("UserMapper.loginByUserNameAndPassword",map);
        if(user != null){
            request.getSession().setAttribute(SessionKey.SESSION_ADMIN,user);
        }
        return user;
    }
*/
}
