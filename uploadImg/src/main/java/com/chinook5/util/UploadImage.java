package com.chinook5.util;

import com.chinook5.util.PhotoType;
import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.WebResource;
import org.apache.commons.io.FilenameUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;
import java.util.zip.DataFormatException;

/**
 * Created by LIUJINGYU 2017/9/11.
 */
public class UploadImage {

    public static String uploadPic(MultipartFile pic , Integer photo_type_id) {
        //获取扩展名的方法
        String extension = FilenameUtils.getExtension(pic.getOriginalFilename());
        //图片的名称生成策略，根据时间
        DateFormat df = new SimpleDateFormat("yyyyMMddHHmmssSSS");
        //图片的一部分
        String format = df.format(new Date());
        //随机三位数
        Random random = new Random();
        for(int i = 0;i<3;i++){
            format += random.nextInt(10);
        }
        //实例化jersey实例
        Client client = new Client();
        //保存到数据库
        String path = format+"."+extension;
        //另一台tomcat的请求参数
        String imageUploadAddress = Const.IMAGE_UPLOAD_ADDRESS;
        switch (photo_type_id){
            case PhotoType.STORE_LOGO:
                //商城logo文件夹下
                imageUploadAddress += "store_logo/";
                break;

            case PhotoType.BRAND_LOGO :
                //品牌logo文件夹下
                imageUploadAddress += "brand_logo/";
                break;
            case PhotoType.PROFILE_PHOTO :
                //用户头像文件夹下
                imageUploadAddress += "profile_photo/";
                break;
            case  PhotoType.PRODUCT_PHOTO:
                //商品图片文件夹下
                imageUploadAddress += "product/";
                break;
            case PhotoType.UEDITOR :
                //商品图片文件夹下
                imageUploadAddress += "ueditor/";
                break;
            case PhotoType.ADV :
                //商品图片文件夹下
                imageUploadAddress += "adv/";
                break;
            case 10 :
                //出库图片文件夹下
                imageUploadAddress += "check_out/";
                break;
            case PhotoType.MEDIA_PHOTO  :
                //出库图片文件夹下
                imageUploadAddress += "media/";
                break;
            case PhotoType.PRODUCT_COMMENT  :
                //商品评价图片文件夹下
                imageUploadAddress += "product_comment/";
                break;
            case PhotoType.QR_CODE  :
                //二维码
                imageUploadAddress += "qr_code/";
                break;
        }
        String url = imageUploadAddress + path;
        File file = new File(url);
        if(!file.exists()){
            //先得到文件的上级目录，并创建上级目录，在创建文件
            file.getParentFile().mkdir();
            try {
                //创建文件夹
                file.mkdirs();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        //设置请求路径
        WebResource resource = client.resource(url);
        //发送开始基于put提交
        try {
            resource.put(String.class,pic.getBytes());
        } catch (IOException e) {
            e.printStackTrace();
        }
        return url;
    }
    //二维码生成策略如上
}
