package com.chinook5.controller.base;


import com.chinook5.controller.converter.CustomDateConverter;
import com.chinook5.util.PageData;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;

public class BaseController extends CustomDateConverter {


    protected Logger logger = LoggerFactory.getLogger(this.getClass());;
    private static final long serialVersionUID = 6357869213649815390L;

  //  @Resource
   // private SystemActionService systemActionService;

    /**
     * 得到PageData
     */
    public PageData getPageData() {
        return new PageData(this.getRequest());
    }

    /**
     * 得到SystemUser
     */
 /*   public SystemUser getSystemUser() {
        return (SystemUser) this.getRequest().getSession().getAttribute(SessionKey.SESSION_ADMIN);
    }
*/
    /**
     * 得到request对象
     */
    public HttpServletRequest getRequest() {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
        return request;
    }

    public String getIPAddress() {
        HttpServletRequest request = this.getRequest();
        String ip = request.getHeader("x-forwarded-for");
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("Proxy-Client-IP");
        }
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("WL-Proxy-Client-IP");
        }
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getRemoteAddr();
        }
        return ip.equals("0:0:0:0:0:0:0:1") ? "127.0.0.1" : ip;
    }

   /* public Boolean addSystemAction(String description) {
        try {
            SystemUser user = this.getSystemUser();
            SystemAction systemAction = new SystemAction();
            systemAction.setSystemID(user.getSystemID());
            systemAction.setStoreID(user.getStoreID());
            systemAction.setSystemUserID(user.getSystemUserID());
            systemAction.setIpAddress(this.getIPAddress());
            systemAction.setDescription(description);
            systemActionService.addSystemAction(systemAction);
            return true;
        } catch (Exception e) {
            return false;
        }
    }*/

    public static void logBefore(Logger logger, String interfaceName) {
        logger.info("");
        logger.info("start");
        logger.info(interfaceName);
    }

    public static void logAfter(Logger logger) {
        logger.info("end");
        logger.info("");
    }
}
