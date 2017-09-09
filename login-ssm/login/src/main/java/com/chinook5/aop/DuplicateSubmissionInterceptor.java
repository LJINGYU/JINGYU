package com.chinook5.aop;

/**
 * Created by Mori on 2017/5/31.
 */

import com.chinook5.util.ResponseContentType;
import com.chinook5.util.ResponseMessage;
import com.chinook5.util.ResponseResult;
import com.chinook5.util.StatusCode;
import com.google.gson.Gson;
import org.springframework.core.NamedThreadLocal;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.PrintWriter;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Map;

/**
 * 一个用户 相同url 同时提交 相同数据 验证
 * 主要通过 session中保存到的url 和 请求参数。如果和上次没执行完，则是重复提交表单
 */
public class DuplicateSubmissionInterceptor extends HandlerInterceptorAdapter{
    public static final String REPEAT_KEY = "MORI_REPEAT_KEY";
    private NamedThreadLocal<ProcessHandle> processHandle = new NamedThreadLocal<>("ProcessHandle-ThreadLocal");

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        ProcessHandle handle = new ProcessHandle();
        if(handler instanceof HandlerMethod){
            HandlerMethod handlerMethod = (HandlerMethod) handler;
            Method method = handlerMethod.getMethod();
            DuplicateSubmission annotation = method.getAnnotation(DuplicateSubmission.class);
            if(annotation != null){
                if(repeatDataValidator(request)){
                    handle.setAnnotation(true);
                    handle.setProcess(false);
                    processHandle.set(handle);
                    response.setContentType(ResponseContentType.APPLICATION_JSON);
                    try(PrintWriter out = response.getWriter()){
                        out.println(new ResponseResult(StatusCode.REPEAT,ResponseMessage.REPEAT_SUBMIT));
                    }
                    return false;
                }
                handle.setAnnotation(true);
                handle.setProcess(true);
                processHandle.set(handle);
                return true;
            }
        }
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        super.postHandle(request, response, handler, modelAndView);
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        if(validateProcess()){
            request.getSession().removeAttribute(REPEAT_KEY);
        }
        super.afterCompletion(request, response, handler, ex);
    }
    private boolean validateProcess() {
       ProcessHandle handle = processHandle.get();
       return handle != null&& handle.getAnnotation().equals(true) && handle.getProcess().equals(true);
    }
    /**
     * 验证同一个url数据是否相同提交 ,相同返回true
     *
     * @param httpServletRequest
     * @return
     */
    public boolean repeatDataValidator(HttpServletRequest httpServletRequest) {
        Gson gson = new Gson();
        String params = gson.toJson(httpServletRequest.getParameterMap());
        String url = httpServletRequest.getRequestURI();
        Map<String,String> map = new HashMap<>();
        map.put(url,params);
        String nowUrlParams = map.toString();
        HttpSession session = httpServletRequest.getSession();
        Object preUrlParams = session.getAttribute(REPEAT_KEY);
        if(preUrlParams == null){
            session.setAttribute(REPEAT_KEY,nowUrlParams);
            return false;
        }
        if(preUrlParams.toString().equals(nowUrlParams)){
            return true;
        }
        session.setAttribute(REPEAT_KEY,nowUrlParams);
        return false;
    }
}