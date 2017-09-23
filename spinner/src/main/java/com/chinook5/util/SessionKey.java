package com.chinook5.util;

/**
 * Created by Mori on 2017/2/22.
 * 保存sessionkey
 */
public class SessionKey {
    public static final String SESSION_M_CUSTOMER = "SESSION_M_CUSTOMER";//手机商城用户
    public static final String SESSION_M_DISTRIBUTER = "SESSION_M_DISTRIBUTER";//手机商城用户(分销商)
    public static final String SESSION_M_STORE_ID = "SESSION_M_STORE_ID";//手机商城ID
    public static final String SESSION_M_REGISTER_CODE_DATE = "SESSION_M_REGISTER_CODE_DATE";//手机商城登录验证码上次发送时间
    public static final String SESSION_M_FORGET_PASSWORD_CODE_DATE = "SESSION_M_FORGET_PASSWORD_CODE_DATE";//手机商城找回密码验证码上次发送时间
    public static final String SESSION_M_REGISTER_MOBILE = "SESSION_M_REGISTER_MOBILE";//手机商城注册手机号
    public static final String SESSION_M_REGISTER_MOBILE_VERIFY = "SESSION_M_REGISTER_MOBILE_VERIFY";//手机商城注册手机号验证状态
    public static final String SESSION_M_FORGET_MOBILE_VERIFY = "SESSION_M_FORGET_MOBILE_VERIFY";//手机商城忘记密码手机号验证状态
    public static final String SESSION_M_FORGET_MOBILE = "SESSION_M_FORGET_MOBILE";//手机商城忘记密码手机号

    public static final String SESSION_ADMIN = "SESSION_ADMIN";                       //后台登录的管理员账号
    public static final String SESSION_SYSTEM_MENU = "SESSION_SYSTEM_MENU";         //左侧菜单
    public static final String SESSION_SYSTEM_USER_SYSTEM = "SESSION_SYSTEM_USER_SYSTEM";         //登录用户可以访问的系统
    public static final String CURRENT_SYSTEM = "CURRENT_SYSTEM";         //当前所访问的系统
    public static final String CURRENT_SYSTEM_ID = "CURRENT_SYSTEM_ID";         //当前所访问的系统


}
