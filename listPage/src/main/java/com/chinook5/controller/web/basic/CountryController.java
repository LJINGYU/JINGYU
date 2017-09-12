package com.chinook5.controller.web.basic;

import com.chinook5.bean.basic.Country;
import com.chinook5.controller.base.BaseController;
import com.chinook5.service.basic.CountryService;
import com.chinook5.util.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by LIUJINGYU 2017/9/10.
 */
@Controller("baCountryController")
@RequestMapping("ba/country")
public class CountryController extends BaseController {

    @Resource
    private CountryService countryService;

    /**
     *国家列表
     * @return
     */
    @RequestMapping(value = "list",method = RequestMethod.GET)
    public ModelAndView list() {
        return new ModelAndView("system/basic/country_list");
    }

    /**
     * 国家列表分页数据
     * @param currentPage
     * @return
     */
    @RequestMapping(value = "get_country_page", method = RequestMethod.POST, produces = ResponseContentType.APPLICATION_JSON)
    @ResponseBody
    public Map<String, Object> pageList(@RequestParam(value = "page", defaultValue = "1") Integer currentPage) {
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            PageData pd = this.getPageData();
            Page p = Page.getPage(currentPage, pd);
            List<PageData> data = countryService.getCountryListPage(p);
            Page.PageStr(p);
            map.put("pageData", data);
            map.put("pageInfo", p);
        } catch (Exception e) {
            logger.error(e.toString());
        }
        return map;
    }

    /**
     * 新建国家信息页面
     * @return
     */
    @RequestMapping(value = "detail",method = RequestMethod.GET)
    public ModelAndView detail() {
        return new ModelAndView("system/basic/country_detail");
    }

    /**
     * 页面根据country_code校验该国家编码是否存在
     * @param countryCode
     * @return
     */
    @RequestMapping(value = "validate_country_code", method = RequestMethod.POST,produces = ResponseContentType.APPLICATION_JSON)
    @ResponseBody
    public ResponseResult validateCountryCode(
            @RequestParam(value = "ID",required = false) Integer countryID,
            @RequestParam(value = "Name") String countryCode){
        try {

            if(!PublicUtil.validateIsRepeatName(countryCode,countryID,countryService::getCountryIDByCode)){
                return new ResponseResult(StatusCode.SUCCESS, ResponseMessage.CODE_SUCCESS);
            }
        } catch (Exception e) {
            logger.error(e.toString());
        }
        return new ResponseResult(StatusCode.ERROR, ResponseMessage.CODE_ERROR);
    }

    /**
     * 执行新增方法
     * @param country
     * @return
     */
    @RequestMapping(value = "save_country",method = RequestMethod.POST)
    @ResponseBody
    public ResponseResult createCountry(Country country){

        try{
            country.setCreatedDate(new Date());
            int countryID = countryService.insertCountry(country);
            if(countryID > 0){
                Map<String,Object> map = new HashMap<>();
                map.put("countryID",countryID);
                map.put("message", ResponseMessage.SAVE_SUCCESS);
                return new ResponseResult(StatusCode.SUCCESS, map);
            }
        } catch (Exception e) {
            logger.error(e.toString());
        }
        return new ResponseResult(StatusCode.ERROR, ResponseMessage.ERROR);
    }

    /**
     * 执行修改
     * @return
     */
    @RequestMapping(value = "{id}",method = RequestMethod.PUT)
    @ResponseBody
    public ResponseResult updateCountryDetail(@PathVariable int id , Country country) {
        try{
            country.setCountryID(id);
            country.setModifyDate(new Date());
            if(countryService.updateCountry(country) > 0){
                return new ResponseResult(StatusCode.SUCCESS, ResponseMessage.SAVE_SUCCESS);//修改成功
            }
        } catch (Exception e) {
            logger.error(e.toString());
        }
        return new ResponseResult(StatusCode.ERROR, ResponseMessage.ERROR); //系统异常错误
    }


    /**
     * 生产国家详细编辑页面
     * @return
     */
    @RequestMapping(value = "{id}",method = RequestMethod.GET)
    public ModelAndView countryDetail(@PathVariable int id) {
        ModelAndView mv = new ModelAndView("system/basic/country_detail");
        try {
            PageData country = countryService.getCountry(id);
            mv.addObject("country",country);
        } catch (Exception e) {
            logger.error(e.toString());
        }
        return mv;
    }


    /**
     * 删除生产国家
     * @param id
     * @return
     */
    @RequestMapping(value = "{id}", method = RequestMethod.DELETE, produces = ResponseContentType.APPLICATION_JSON)
    @ResponseBody
    public ResponseResult deleteCurrency(@PathVariable int id) {
        try {
            if (countryService.deleteCountry(id) > 0) {
                return new ResponseResult(StatusCode.SUCCESS, ResponseMessage.DELETE_SUCCESS);
            }
        } catch (Exception e) {
            logger.error(e.toString());
        }
        return new ResponseResult(StatusCode.ERROR, ResponseMessage.ERROR);
    }


}
