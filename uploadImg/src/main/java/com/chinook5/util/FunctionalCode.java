package com.chinook5.util;

/**
 * Created by Mori on 2017/4/7.
 */
@FunctionalInterface
public interface FunctionalCode {
    int  getIDByCondition(String condition) throws Exception;
}
