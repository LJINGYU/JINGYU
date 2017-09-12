package com.chinook5.service.basic;

import com.chinook5.bean.basic.Country;
import com.chinook5.util.Page;
import com.chinook5.util.PageData;

import java.util.List;

/**
 * Created by LIUJINGYU 2017/9/10.
 * interfaceName  CountryService
 */
public interface CountryService {

    /**
     * 生产国家列表分页接口
     * @return
     * @throws Exception
     */
    List<PageData> getCountryListPage(Page p) throws Exception;


    /**
     * 根据国家编码获取对应的countryID
     * @param countryCode
     * @return
     * 备注返回值countryID = -1 表示不存在该country_code的货币类型
     */
    int getCountryIDByCode(String countryCode) throws Exception;

    /**
     * 新建生产国家接口
     * @param country
     * @return
     */
    int insertCountry(Country country) throws Exception;

    /**
     * 更新生成国家接口
     * @param country
     * @return
     */
    int updateCountry(Country country) throws Exception;

    /**
     * 根据countryID获取对应的Country信息
     * @param countryID
     * @return
     */
    PageData getCountry(int countryID) throws Exception;

    /**
     * 根据countryID删除生成国家
     * @param countryID
     * @param
     * @return
     * @throws Exception
     */
    int deleteCountry(int countryID) throws Exception;

    /**
     * 国家列表(下拉框)
     * @return
     * @throws Exception
     */
    //List<PageData> getCountryForSpinner() throws Exception;

    /**
     * 根据国家简称获取国家ID
     * @param countryName
     * @return
     * @throws Exception
     */
    Integer getCountryIDByName(String countryName) throws Exception;
}
