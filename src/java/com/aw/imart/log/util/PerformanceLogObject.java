package com.aw.imart.log.util;

public class PerformanceLogObject extends BaseLogObject {

    private long startTime;
    private long endTime;

    public PerformanceLogObject(String methodName, long startTime, long endTime) {
        super("PERFORMANCE_LOG", 2, methodName);
        this.startTime = 0L;
        this.endTime = 0L;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    @Override
    public String getLogMessage() {
        long processTime = endTime - startTime;
        return (new StringBuilder("METHOD[")).append(message).append("] PROCESS_TIME[").append(processTime).append(" ms]").toString();
    }
}
