package com.hpu.controller;

import com.hpu.entity.PageBean;
import com.hpu.entity.User;
import com.hpu.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

import javax.annotation.Resource;
import java.util.List;

@SessionAttributes("currentUser")
@Controller
public class UserController {
    @Resource
    private UserService userService;

    /**
     * 用户登录
     *
     * @param
     * @param
     * @return
     * @throws Exception
     */
    @RequestMapping("/login")
    public String login(@RequestParam("username") String username,
                        @RequestParam("password") String password, Model model) throws Exception {
        User user = new User();
        user.setUsername(username);
        user.setPassword(password);
        User userresult = userService.loginByUserNameAndPassword(user);
        if (userresult != null) {
            //登录成功
            List<User> lists = userService.selectUserList();
            model.addAttribute("userLists", lists);//回显用户信息
            model.addAttribute("currentUser", userresult.getUsername());
            return "redirect:main";
    }
        return "error";
    }

    @RequestMapping("/main")
    public String main(@RequestParam(value = "currentPage", defaultValue = "1", required = false) int currentPage, Model model) {
        PageBean<User> userPageBean = userService.findByPage(currentPage);
        model.addAttribute("pagemsg", userPageBean);
        return "main";
    }

    /**
     * 跳到编辑页面
     *
     * @param
     * @param model
     * @return
     */
    @RequestMapping(value = "/edit")
    public String editpage(@RequestParam("id") int id, Model model) {
        User user = userService.selectByPrimaryKey(id);
        model.addAttribute("returnUser", user);
        return "edit";
    }

    /**
     * 保存用户数据
     *
     * @return
     */
    @RequestMapping(value = "/save")
    public String save(User user) {
        System.out.println(user.toString());
        if (user.getId() == null) {
            //id为null是保存
            userService.insertSelective(user);
        } else {
            //有id值为修改
            userService.updateByPrimaryKeySelective(user);
        }
        return "redirect:main";
    }

    /**
     * 删除用户数据
     *
     * @param id
     * @return
     */
    @RequestMapping(value = "/delete")
    public String delete(@RequestParam("id") int id) {
        userService.deleteByPrimaryKey(id);
        return "redirect:main";
    }

    /**
     * 添加一个用户数据
     *
     * @return
     */
    @RequestMapping(value = "/add")
    public String add(Model model) {
        model.addAttribute("returnUser", new User());
        return "edit";
    }

    /**
     * 模糊查询
     */
    @RequestMapping(value = "/query")
    public String query(@RequestParam(value = "username") String username,
                        @RequestParam(value = "rolename") String rolename,
                        Model model) {
        User user = new User();
        user.setUsername(username);
        user.setRolename(rolename);
        List<User>  lists =  userService.queryUserWith(user);
        System.out.println(lists);
        PageBean<User> userPageBean = new PageBean<User>();
        userPageBean.setLists(lists);
        model.addAttribute("pagemsg", userPageBean);//回显用户信息
        return "main";
    }
    /**
     * 批量删除
     */
    @RequestMapping(value = "/deleteBatch")
    public String deleteBatch(@RequestParam(value="id")String[] id) {
        userService.deleteBatch(id);
        return "redirect:main";
    }
}

