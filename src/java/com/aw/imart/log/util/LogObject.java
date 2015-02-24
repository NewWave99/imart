package com.aw.imart.log.util;

public interface LogObject {

    public abstract String getClassName();

    public abstract int getLogLevel();

    public abstract String getLogMessage();
}
