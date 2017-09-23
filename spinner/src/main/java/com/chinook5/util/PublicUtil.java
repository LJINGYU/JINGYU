package com.chinook5.util;

import org.apache.commons.lang3.StringUtils;

import java.math.BigDecimal;
import java.util.*;

/**
 * Created by Mori on 2017/4/11.
 */
public class PublicUtil {

    public static <T extends Comparable<T>> boolean compare(List<T> a, List<T> b) {
        if (a.size() != b.size()) {
            return false;
        }
        Collections.sort(a);
        Collections.sort(b);
        for (int i = 0; i < a.size(); i++) {
            if (!a.get(i).equals(b.get(i)))
                return false;
        }
        return true;
    }

    /**
     * 验证重复name
     *
     * @param name  不能为null或""
     * @param oldID 可以为null
     * @param fc    根据name获得oldID的function
     * @return true表示重复，false表示不重复
     */
    public static boolean validateIsRepeatName(String name, Integer oldID, FunctionalCode fc) throws Exception {
        if (StringUtils.isEmpty(name)) {
            return true;
        }
        int id = fc.getIDByCondition(name);
        if (id > 0 && !Objects.equals(oldID, id)) {//ID存在且不等于本身，说明重复
            return true;
        }
        return false;
    }

    /**
     * 分页的公用部分
     *
     * @param pageFunction
     * @param pd
     * @param currentPage
     * @param functionName
     * @return
     * @throws Exception
     */
    public static Map<String, Object> getListPage(FunctionalListPage pageFunction, PageData pd, int currentPage, String functionName, String ulClassName, int showCount) throws Exception {
        Map<String, Object> map = new HashMap<String, Object>();
        Page p = Page.getPage(currentPage, pd);
        p.setShowCount(showCount);
        List<PageData> data = pageFunction.getListPage(p);
        Page.PageStr(p, functionName, ulClassName);
        map.put("pageData", data);
        map.put("pageInfo", p);
        return map;
    }

    public static Map<String, Object> getListPage(FunctionalListPage pageFunction, PageData pd, int currentPage, String functionName, String ulClassName) throws Exception {
        return getListPage(pageFunction, pd, currentPage, functionName, ulClassName, Const.PAGE);
    }

    public static Map<String, Object> getListPage(FunctionalListPage pageFunction, PageData pd, int currentPage, String functionName, int showCount) throws Exception {
        return getListPage(pageFunction, pd, currentPage, functionName, null, showCount);
    }

    public static Map<String, Object> getListPage(FunctionalListPage pageFunction, PageData pd, int currentPage) throws Exception {
        return getListPage(pageFunction, pd, currentPage, null, Const.PAGE);
    }

    public static BigDecimal roundHalfUp(BigDecimal b) {
        return b.setScale(2, BigDecimal.ROUND_HALF_UP);
    }
}
