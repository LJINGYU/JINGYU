package com.chinook5.controller.base;

import com.chinook5.bean.basic.User;
import com.chinook5.controller.converter.CustomDateConverter;
import com.chinook5.util.SessionKey;
import org.apache.log4j.Logger;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

public class BaseController extends CustomDateConverter {

    /**
     * 得到request对象
     */
    public HttpServletRequest getRequest() {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
        return request;
    }

    /**
     * 得到SystemUser
     */
    public User loginByUserNameAndPassword(){
        return (User) this.getRequest().getSession().getAttribute(SessionKey.SESSION_ADMIN);
    }

}
