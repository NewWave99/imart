package com.aw.imart.log.util;

public class BaseLogObject implements LogObject {

    public String className;
    public int logLevel;
    public String message;

    public BaseLogObject(String className, int logLevel, String message) {
        this.className = "GENERAL_LOG";
        this.logLevel = 0;
        this.message = "";
        this.className = className;
        this.logLevel = logLevel;
        this.message = message;
    }

    @Override
    public String getClassName() {
        return className;
    }

    @Override
    public int getLogLevel() {
        return logLevel;
    }

    @Override
    public String getLogMessage() {
        return (new StringBuilder("MESSAGE[")).append(message).append("]").toString();
    }
}
