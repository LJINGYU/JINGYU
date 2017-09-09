package com.chinook5.aop;

import com.chinook5.bean.basic.User;
import com.chinook5.util.SessionKey;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.List;

/**
 * Created by mori on 2017/7/10.
 */
public class LoginInterceptor implements HandlerInterceptor {


    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object o) throws Exception {
        String contextPath = request.getContextPath();
        HttpSession session = request.getSession();
        User user = (User) session.getAttribute(SessionKey.SESSION_ADMIN);
        if(request.getHeader("x-requested-with")!= null && request.getHeader("x-requested-with").equals("XMLHttpRequest")){
            response.setHeader("sessionStatus","timeout");
        }else{
            response.sendRedirect(contextPath + "/admin/login");
        }
        return false;
    }

    @Override
    public void postHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, ModelAndView modelAndView) throws Exception {
        if(modelAndView != null){
            System.out.println("返回了biew" + modelAndView.getViewName());
        }
    }

    @Override
    public void afterCompletion(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, Exception e) throws Exception {

    }
}
