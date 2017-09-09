package com.chinook5.aop;

/**
 * ClassName ProcessHandle
 */
public class ProcessHandle {
    private Boolean annotation;//判断有没有注解
    private Boolean process;//判断执行

    public Boolean getAnnotation() {
        return annotation;
    }

    public void setAnnotation(Boolean annotation) {
        this.annotation = annotation;
    }

    public Boolean getProcess() {
        return process;
    }

    public void setProcess(Boolean process) {
        this.process = process;
    }
}
