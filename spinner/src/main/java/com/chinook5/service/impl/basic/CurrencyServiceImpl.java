package com.chinook5.service.impl.basic;

import com.chinook5.bean.basic.Currency;
import com.chinook5.dao.DaoSupport;
import com.chinook5.service.basic.CurrencyService;
import com.chinook5.util.DBLog;
import com.chinook5.util.Page;
import com.chinook5.util.PageData;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;

/**
 * Created by ViJay on 4/6/2017.
 * ClassName  CurrencyServiceImpl
 */
@Service
public class CurrencyServiceImpl implements CurrencyService {

    @Resource
    private DaoSupport dao;

    @Override
    public List<PageData> getCurrencyListPage(Page p) throws Exception {
        return (List<PageData>) dao.findForList("CurrencyMapper.getCurrencyListPage", p);
    }

    @Override
    public int getCurrencyIDByCode(String currencyCode) throws Exception {
        if (StringUtils.isEmpty(currencyCode)) {
            return -1;
        }
        Integer currencyID = (Integer) dao.findForObject("CurrencyMapper.getCurrencyIDByCurrencyCodeInAll",currencyCode);
        if (currencyID == null){ //不存在
            return -1;
        }
        return currencyID;
    }

    @Override
    @DBLog(description = "新增货币类型")
    public int insertCurrency(Currency currency) throws Exception {

        String currencyCode = currency.getCurrencyCode();
        Integer currencyID = getCurrencyIDByCode(currencyCode);
        if (currencyID > 0){ //currencyCode重复
            return -1;
        }
        dao.save("CurrencyMapper.insertCurrency",currency);
        Integer id = currency.getCurrencyID();
        if (id == null){
            return -1;
        }
        return id;
    }

    @Override
    @DBLog(description = "修改货币类型")
    public int updateCurrency(Currency currency) throws Exception {
        int id = getCurrencyIDByCode(currency.getCurrencyCode());
        if (id > 0 && id != currency.getCurrencyID()) {//ID存在且不等于本身，说明重复
            return -1;
        }
        return (int) dao.update("CurrencyMapper.updateCurrency",currency);
    }

    @Override
    public PageData getCurrency(int currencyID) throws Exception {
        return (PageData) dao.findForObject("CurrencyMapper.getCurrencyInfoByID",currencyID);
    }

    @Override
    @DBLog(description = "删除货币类型")
    public int deleteCurrency(int currencyID) throws Exception {
       /* HashMap map = new HashMap();
        map.put("currencyID",currencyID);
        map.put("modifyBy",modifyBy);*/
        return (int) dao.update("CurrencyMapper.deleteCurrencyByID",currencyID);
    }

    @Override
    public List<PageData> getCurrencyListForSpinner() throws Exception {
        return (List<PageData>) dao.findForList("CurrencyMapper.getCurrencyListForSpinner",null);
    }
}
