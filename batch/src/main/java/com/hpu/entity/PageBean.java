package com.hpu.entity;

import java.util.List;

/**
 * 分页实体类
 * @Author
 * @Date2016
 */
public class PageBean<T> {
    private int currentPage;//当前页数
    private int pageSize;//每页显示记录数
    private int totalCount;//总记录数
    private int totalPage;//总页数
    private List<T> lists;//每页显示数据

    public PageBean() {
    }

    public PageBean(int currentPage, int pageSize, int totalCount, int totalPage, List<T> lists) {
        this.currentPage = currentPage;
        this.pageSize = pageSize;
        this.totalCount = totalCount;
        this.totalPage = totalPage;
        this.lists = lists;
    }

    public int getCurrentPage() {
        return currentPage;
    }

    public void setCurrentPage(int currentPage) {
        this.currentPage = currentPage;
    }

    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }

    public int getTotalCount() {
        return totalCount;
    }

    public void setTotalCount(int totalCount) {
        this.totalCount = totalCount;
    }

    public int getTotalPage() {
        return totalPage;
    }

    public void setTotalPage(int totalPage) {
        this.totalPage = totalPage;
    }

    public List<T> getLists() {
        return lists;
    }

    public void setLists(List<T> lists) {
        this.lists = lists;
    }
}
