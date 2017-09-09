package com.chinook5.controller.common;

import com.chinook5.bean.basic.User;
import com.chinook5.controller.base.BaseController;
import com.chinook5.service.basic.UserService;
import com.chinook5.util.ResponseMessage;
import com.chinook5.util.SessionKey;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by LIUJINGYU 2017/9/8.
 */
@Controller
@RequestMapping("admin")
public class UserController extends BaseController {
    @Resource
    private UserService userService;
    /**
     * 跳转到后台的登录页面
     * @return
     */
    @RequestMapping(value = "login",method = RequestMethod.GET)
    public ModelAndView login(){
        ModelAndView mv = new ModelAndView("system/public/login");
        return mv;
    }
    /**
     * 处理登录请求
     * @param username 用户名
     * @param password 密码
     * @return
     */
    @RequestMapping(value = "check_login",method = RequestMethod.POST)
    @ResponseBody
    public Map checkLogin(@RequestParam("username")String username,@RequestParam("password") String password,HttpServletRequest request){
        Map<String,Object> map = new HashMap<>();
        try {
            User user = userService.loginByUserNameAndPassword(username,password,request);
            System.out.println(user);
            if(user != null){
                map.put("message","success");
                //map.put("message",ResponseMessage.SUCCESS);
                return map;
            }else{
                map.put("message", ResponseMessage.LOGIN_ERROR);
                return map;
            }
        } catch (Exception e) {
            e.printStackTrace();
            map.put("message",ResponseMessage.LOGIN_ERROR);
            return map;
        }
    }
    /**
     * 注销后台登录
     */
    @RequestMapping(value = "logout",method =RequestMethod.GET )
    public ModelAndView logout(HttpServletRequest request){
        ModelAndView mv = new ModelAndView("redirect:/admin/login");
        //销毁session
        request.getSession().removeAttribute(SessionKey.SESSION_ADMIN);
        return mv;
    }
    @RequestMapping(value = "not_authorized",method = RequestMethod.GET)
    public ModelAndView logout(){
        ModelAndView mv = new ModelAndView("not_authorized");
        return  mv;
    }
    @RequestMapping(value = "index",method = RequestMethod.GET)
    public ModelAndView index() {
        ModelAndView mv = new ModelAndView("system/public/index");
        return mv;
    }
}
