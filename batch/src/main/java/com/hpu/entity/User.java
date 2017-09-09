package com.hpu.entity;

/**
 * 用户实体类
 * 对应数据表tb_user
 * @author
 * @Date2016年12月13日
 */
public class User {
    private Integer id;

    private String username;

    private String password;

    private String email;

    private String phone;

    private String rolename;

    public User() {
    }

    public User( String username, String password, String email, String phone, String rolename) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.phone = phone;
        this.rolename = rolename;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getRolename() {
        return rolename;
    }

    public void setRolename(String rolename) {
        this.rolename = rolename;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                ", rolename='" + rolename + '\'' +
                '}';
    }
}
