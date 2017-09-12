package com.chinook5.util;

import org.apache.commons.lang3.StringUtils;

import java.util.Random;

/**
 * 生成随机编码
 * Created by LIUJINGYU 2017/9/9.
 */
public class RandomCode {


    public final static int DEFAULT_LENGTH = 6;

    public final static int MAX_LENGTH = 10;

    public static String generateCode(String prefix) throws Exception {
        return generateCode(prefix, DEFAULT_LENGTH);
    }

    public static String generateCode(String prefix, int length) throws Exception {
        if (length > MAX_LENGTH) {
            throw new Exception("random max length is ten.");
        }
        int[] array = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
        Random rand = new Random();
        for (int i = 10; i > 1; i--) {
            int index = rand.nextInt(i);
            int tmp = array[index];
            array[index] = array[i - 1];
            array[i - 1] = tmp;
        }
        StringBuffer sb = new StringBuffer();
        if (!StringUtils.isEmpty(prefix)) {
            sb.append(prefix);
        }
        for (int i = 0; i < DEFAULT_LENGTH; i++) {
            sb.append(array[i]);
        }

        return sb.toString();
    }

    public static String generateCode(int length) throws Exception {
        return generateCode(null, length);
    }

    public static String generateNoRepeatCode(String prefix, FunctionalCode fc) throws Exception {
        return generateNoRepeatCode(prefix,fc,DEFAULT_LENGTH);
    }

    public static String generateNoRepeatCode(String prefix, FunctionalCode fc,int length) throws Exception {
        String code = "";
        int id;
        while (true) {
            code = generateCode(prefix,length);
            id = fc.getIDByCondition(code);//检查Code，是否已经存在
            if (id < 0) {//如果不存在
                break;
            }
        }
        return code;
    }

    public static void main(String[] args) throws Exception {
        for (int i = 0; i < 100; i++) {
            System.out.println(generateCode(Prefix.PREFIX_STORE, DEFAULT_LENGTH));
        }
    }
}
