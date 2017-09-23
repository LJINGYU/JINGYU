package com.chinook5.util;
import java.util.List;

/**
 * Created by Mori on 2017/4/7.
 */
@FunctionalInterface
public interface FunctionalListPage {

    List<PageData> getListPage(Page p) throws Exception;
}
