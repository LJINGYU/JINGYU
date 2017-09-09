package com.chinook5.util;

import com.google.gson.Gson;

/**
 * Created by Mori on 2017/3/31.
 */
public class ResponseResult {

    private String code;

    private Object message;

    private Object id;

    public ResponseResult() {
    }
    public ResponseResult(String code, Object message) {
        this.code = code;
        this.message = message;
    }
    public ResponseResult(String code, Object message, Object id) {
        this.code = code;
        this.message = message;
        this.id = id;
    }

    public Object getId() {
        return id;
    }
    public void setId(Object id) {
        this.id = id;
    }
    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public Object getMessage() {
        return message;
    }

    public void setMessage(Object message) {
        this.message = message;
    }

    @Override
    public String toString() {
        Gson gson = new Gson();
        return gson.toJson(this);
    }
}
