package com.chinook5.service.basic;

import com.chinook5.bean.basic.SystemUser;
import com.chinook5.util.Page;
import com.chinook5.util.PageData;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * Created by Amos on 2017/4/21.
 */
@Service
public interface SystemUserService {


    List<PageData> getSystemUserListPage(Page p) throws Exception;

    int insertSystemUser(SystemUser systemUser, MultipartFile photo) throws Exception;

    int getSystemUserByLoginID(String systemUserLoginID) throws Exception;

    Integer deleteSystemUser(int systemUserID) throws Exception;

}

