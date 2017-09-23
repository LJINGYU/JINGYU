package com.chinook5.controller.web.basic;


import com.chinook5.bean.basic.Currency;
import com.chinook5.controller.base.BaseController;
import com.chinook5.service.basic.CurrencyService;
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
 * Created by Mori on 2017/3/15.
 */
@Controller("baCurrencyController")
@RequestMapping("ba/currency")
public class CurrencyController extends BaseController {


    @Resource
    private CurrencyService currencyService;

    /**
     *货币列表
     * @return
     */
    @RequestMapping(value = "list",method = RequestMethod.GET)
    public ModelAndView list() {
        return new ModelAndView("system/basic/currency_list");
    }

    /**
     * 货币列表分页数据
     * @param currentPage
     * @return
     */
    @RequestMapping(value = "get_currency_page", method = RequestMethod.POST, produces = ResponseContentType.APPLICATION_JSON)
    @ResponseBody
    public Map<String, Object> pageList(@RequestParam(value = "page", defaultValue = "1") Integer currentPage) {
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            PageData pd = this.getPageData();
            Page p = Page.getPage(currentPage, pd);
            List<PageData> data = currencyService.getCurrencyListPage(p);
            Page.PageStr(p);
            map.put("pageData", data);
            map.put("pageInfo", p);
        } catch (Exception e) {
            logger.error(e.toString());
        }
        return map;
    }

    /**
     * 新建货币信息页面
     * @return
     */
    @RequestMapping(value = "detail",method = RequestMethod.GET)
    public ModelAndView detail() {
        //页面跳转前生成token
        //this.setSubmitToken(this.getRequest());
        ModelAndView mv = new ModelAndView("system/basic/currency_detail");
        return mv;
    }

    /**
     * 前台根据currency_code校验该货币类型是否存在
     * @param currencyCode
     * @return
     */
    @RequestMapping(value = "validate_currency_code", method = RequestMethod.POST,produces = ResponseContentType.APPLICATION_JSON)
    @ResponseBody
    public ResponseResult validateCurrencyCode(
            @RequestParam(value = "ID",required = false) Integer currencyID,
            @RequestParam(value = "Name") String currencyCode){
        try {
            if (!PublicUtil.validateIsRepeatName(currencyCode,currencyID,currencyService::getCurrencyIDByCode)){
                return new ResponseResult(StatusCode.SUCCESS, ResponseMessage.CODE_SUCCESS);
            }
        } catch (Exception e) {
            logger.error(e.toString());
        }
        return new ResponseResult(StatusCode.ERROR, ResponseMessage.CODE_ERROR);
    }

    /**
     * 执行新增方法
     * @param currency
     * @return
     */
    @RequestMapping(value = "save_currency",method = RequestMethod.POST)
    @ResponseBody
    public ResponseResult createCurrency(Currency currency){
        //进入数据提交方法先验证重复提交
//        boolean isRepeat = this.isRepeatSubmit(this.getRequest());
//        if (isRepeat){
//            //如果重复提交则直接返回一个ResponseResult
//            return new ResponseResult(StatusCode.ERROR, ResponseMessage.REPEAT_SUBMIT);
//        }
//       this.getRequest().getSession().removeAttribute(SessionKey.FORM_SUBMIT_TOKEN);
            //SystemUser systemUser = this.getSystemUser();
            try{
                //currency.setCreatedBy(systemUser.getSystemUserID().toString());
                currency.setCreatedDate(new Date());
                int currencyID = currencyService.insertCurrency(currency);
                if(currencyID > 0){
                    Map<String,Object> map = new HashMap<>();
                    map.put("currencyID",currencyID);
                    map.put("message", ResponseMessage.SAVE_SUCCESS);
                    return new ResponseResult(StatusCode.SUCCESS, map);
                }
            } catch (Exception e) {
                logger.error(e.toString());
            }
        return new ResponseResult(StatusCode.ERROR, ResponseMessage.ERROR);
    }

    /**
     * 货币信息修改
     * @return
     */
    @RequestMapping(value = "{id}",method = RequestMethod.PUT)
    @ResponseBody
    public ResponseResult updateCurrencyDetail(@PathVariable int id , Currency currency) {
      //  SystemUser systemUser = this.getSystemUser();
        try{
            currency.setCurrencyID(id);
        //    currency.setModifyBy(systemUser.getSystemUserID().toString());
            currency.setModifyDate(new Date());
            if(currencyService.updateCurrency(currency) > 0){
                return new ResponseResult(StatusCode.SUCCESS, ResponseMessage.SAVE_SUCCESS);//修改成功
            }
        } catch (Exception e) {
            logger.error(e.toString());
        }
        return new ResponseResult(StatusCode.ERROR, ResponseMessage.ERROR); //系统异常错误
    }


    /**
     * 货币信息详细编辑页面
     * @return
     */
    @RequestMapping(value = "{id}",method = RequestMethod.GET)
    public ModelAndView currencyDetail(@PathVariable int id) {
        //页面跳转前生成token
        //this.setSubmitToken(this.getRequest());
        ModelAndView mv = new ModelAndView("system/basic/currency_detail");
        try {
            PageData currency = currencyService.getCurrency(id);
            mv.addObject("currency",currency);
        } catch (Exception e) {
            logger.error(e.toString());
        }
        return mv;
    }


    /**
     * 删除货币类型
     * @param id
     * @return
     */
    @RequestMapping(value = "{id}", method = RequestMethod.DELETE, produces = ResponseContentType.APPLICATION_JSON)
    @ResponseBody
    public ResponseResult deleteCurrency(@PathVariable int id) {
        //SystemUser systemUser = this.getSystemUser();
      //  String modifyBy = systemUser.getSystemUserID().toString();
        try {
            if (currencyService.deleteCurrency(id) > 0) {
                return new ResponseResult(StatusCode.SUCCESS, ResponseMessage.DELETE_SUCCESS);
            }
        } catch (Exception e) {
            logger.error(e.toString());
        }
        return new ResponseResult(StatusCode.ERROR, ResponseMessage.ERROR);
    }

    /**
     * 获取常见货币类型列表做下拉选择
     * @return
     */
    @RequestMapping(value = "getCurrencyListForSpinner",method = RequestMethod.POST)
    @ResponseBody
    public   List<PageData>  getFaqTypeListForSpinner(){
        List<PageData> currencys=null;
        try {
            currencys=currencyService.getCurrencyListForSpinner();
        } catch (Exception e) {
            logger.error(e.toString());
        }
        return currencys;
    }

}
