package com.chinook5.service.basic;

import com.chinook5.bean.basic.Currency;
import com.chinook5.util.Page;
import com.chinook5.util.PageData;

import java.util.List;

/**
 * Created by ViJay on 4/6/2017.
 * interfaceName  CurrencyService
 */
public interface CurrencyService {

    /**
     * 货币列表分页接口
     * @return
     * @throws Exception
     */
    List<PageData> getCurrencyListPage(Page p) throws Exception;


    /**
     * 根据货币编码获取对应的货币Id
     * @param currencyCode
     * @return
     * 备注返回值currencyID = -1 表示不存在该currency_code的货币类型
     */
    int getCurrencyIDByCode(String currencyCode) throws Exception;

    /**
     * 新建货币接口
     * @param currency
     * @return
     */
    int insertCurrency(Currency currency) throws Exception;

    /**
     * 更新货币类型接口
     * @param currency
     * @return
     */
    int updateCurrency(Currency currency) throws Exception;

    /**
     * 根据currencyID获取对应的Currency信息
     * @param currencyID
     * @return
     */
    PageData getCurrency(int currencyID) throws Exception;

    /**
     * 根据currencyID删除货币接口
     * @param currencyID
     * @return
     * @throws Exception
     */
    int deleteCurrency(int currencyID) throws Exception;

    /**
     * 货币类型选择列表
     * @return
     * @throws Exception
     */
    List<PageData> getCurrencyListForSpinner() throws Exception;
}
