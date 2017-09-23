package com.chinook5.service.impl.basic;

import com.chinook5.bean.basic.Country;
import com.chinook5.dao.DaoSupport;
import com.chinook5.service.basic.CountryService;
import com.chinook5.util.DBLog;
import com.chinook5.util.Page;
import com.chinook5.util.PageData;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;

/**
 * Created by ViJay on 4/10/2017.
 * ClassName  CountryServiceImpl
 */
@Service
public class CountryServiceImpl implements CountryService {

    @Resource
    private DaoSupport dao;

    @Override
    public List<PageData> getCountryListPage(Page p) throws Exception {
        return (List<PageData>) dao.findForList("CountryMapper.getCountryListPage", p);
    }

    @Override
    public int getCountryIDByCode(String countryCode) throws Exception {
        if (StringUtils.isEmpty(countryCode)) {
            return -1;
        }
        Integer countryID = (Integer) dao.findForObject("CountryMapper.getCountryIDByCountryCodeInAll",countryCode);
        if (countryID == null){ //不存在
            return -1;
        }
        return countryID;
    }

    @Override
    @DBLog(description = "新增生产国家")
    public int insertCountry(Country country) throws Exception {
        String countryCode = country.getCountryCode();
        Integer countryID = getCountryIDByCode(countryCode);
        if (countryID > 0){ //countryCode重复
            return -1;
        }
        dao.save("CountryMapper.insertCountry",country);
        Integer id = country.getCountryID();
        if(id == null){
            return -1;
        }
        return id;
    }

    @Override
    @DBLog(description = "修改生产国家")
    public int updateCountry(Country country) throws Exception {
        int id = getCountryIDByCode(country.getCountryCode());
        if (id > 0 && id != country.getCountryID()) {//ID存在且不等于本身，说明重复
            return -1;
        }
        return (int) dao.update("CountryMapper.updateCountry",country);
    }

    @Override
    public PageData getCountry(int countryID) throws Exception {
        return (PageData) dao.findForObject("CountryMapper.getCountryInfoByID",countryID);
    }

    @Override
    @DBLog(description = "删除生产国家")
    public int deleteCountry(int countryID) throws Exception {
       /* HashMap map = new HashMap();
        map.put("countryID",countryID);
        map.put("modifyBy",modifyBy);*/
        return (int) dao.update("CountryMapper.deleteCountryByID",countryID);
    }

    @Override
    public List<PageData> getCountryForSpinner() throws Exception {
        return (List<PageData>) dao.findForList("CountryMapper.getCountryForSpinner",null);
    }

    @Override
    public Integer getCountryIDByName(String countryName) throws Exception {
        return (Integer)dao.findForObject("CountryMapper.getCountryIDByName",countryName);
    }
}
