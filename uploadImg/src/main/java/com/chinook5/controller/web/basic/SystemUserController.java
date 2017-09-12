package com.chinook5.controller.web.basic;

import com.chinook5.bean.basic.SystemUser;

import com.chinook5.controller.base.BaseController;
import com.chinook5.service.basic.SystemUserService;
import com.chinook5.util.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by LIUJINGYU 2017/9/12
 */
@Controller("baSystemUserController")
@RequestMapping("ba/system/user")
public class SystemUserController extends BaseController {
    @Resource
    private SystemUserService systemUserService;

    /**
     * 管理员列表
     *
     * @return
     */
    @RequestMapping(value = "list", method = RequestMethod.GET)
    public ModelAndView list() {
        return new ModelAndView("system/basic/system_user_list");
    }

    /**
     * 获取管理员分页数据列表
     *
     * @param currentPage
     * @return
     */
    @RequestMapping(value = "getSystemUserList", method = RequestMethod.POST, produces = ResponseContentType.APPLICATION_JSON)
    @ResponseBody
    public Map<String, Object> getSystemUserList(@RequestParam(value = "page", defaultValue = "1") Integer currentPage,
                                                 @RequestParam(value = "functionName") String functionName) {
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            PageData pd = this.getPageData();
            map = PublicUtil.getListPage(systemUserService::getSystemUserListPage, pd, currentPage, functionName, null);
        } catch (Exception e) {
            logger.error(e.toString());
        }
        return map;
    }

    /**
     * 新增管理员页面
     */
    @RequestMapping(value = "detail", method = RequestMethod.GET)
    public ModelAndView insert_system_user() {
        ModelAndView mv = new ModelAndView("system/basic/system_user_detail");
        return mv;
    }

    /**
     * 新增管理员操作
     *
     * @param systemUser
     * @return
     */
    @RequestMapping(value = "detail", method = RequestMethod.POST, produces = ResponseContentType.APPLICATION_JSON)
    @ResponseBody
    public ResponseResult insertSystemUser(SystemUser systemUser, MultipartFile photo) {
        try {
            //SystemUser adminUser = this.getSystemUser();
            Integer systemUserID = systemUserService.insertSystemUser(systemUser, photo);
            if (systemUserID > 0) {
                return new ResponseResult(StatusCode.SUCCESS, systemUserID);
            }
        } catch (Exception e) {
            e.printStackTrace();
            logger.error(e.toString());
        }
        return new ResponseResult(StatusCode.ERROR, ResponseMessage.ERROR);
    }

    @RequestMapping(value = "validate_system_user_loginID", method = RequestMethod.POST)
    @ResponseBody
    public ResponseResult validateSystemUserLoginID(@RequestParam(value = "ID", required = false) Integer systemUserID,
                                                    @RequestParam(value = "Name") String loginID) {
        try {
            if (!PublicUtil.validateIsRepeatName(loginID, systemUserID, systemUserService::getSystemUserByLoginID)) {
                return new ResponseResult(StatusCode.SUCCESS, ResponseMessage.NAME_DUPLICATE_SUCCESS);
            }
        } catch (Exception e) {
            logger.error(e.toString());
        }
        return new ResponseResult(StatusCode.ERROR, ResponseMessage.NAME_DUPLICATE_ERROR);
    }

    /**
     * 删除管理员操作
     * @param id
     * @return
     */
    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public ResponseResult deleteSystemUser(@PathVariable int id) {
        try {
            Integer impactRows = systemUserService.deleteSystemUser(id);
            if (id > 0) {
                return new ResponseResult(StatusCode.SUCCESS, impactRows);
            }
        } catch (Exception e) {
            logger.error(e.toString());
        }
        return new ResponseResult(StatusCode.ERROR, ResponseMessage.ERROR);
    }


}
