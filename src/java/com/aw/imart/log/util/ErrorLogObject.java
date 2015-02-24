package com.aw.imart.log.util;

public class ErrorLogObject extends BaseLogObject {

    Exception e;

    public ErrorLogObject(String className, String message, Exception e) {
        super(className, 4, message);
        e.printStackTrace();
        this.e = new Exception();
        this.e = e;
    }

    public String getLogMessage() {
        String errorMessage = "";
        if (e != null) {
            errorMessage = (new StringBuilder(String.valueOf(errorMessage))).append(e.toString()).toString();
            if (e.getMessage() != null) {
                errorMessage = (new StringBuilder(String.valueOf(errorMessage))).append(" ").append(e.getMessage()).toString();
            }
        }
        return (new StringBuilder(String.valueOf(message))).append(" ").append(errorMessage).append("\n").append(getStackTrace(e)).toString();
    }

    private String getStackTrace(Exception e) {
        StringBuffer buff = (new StringBuffer("STACK_TRACE[")).append("\n");
        StackTraceElement ste[] = e.getStackTrace();
        StackTraceElement astacktraceelement[] = ste;
        int i = 0;
        for (int j = astacktraceelement.length; i < j; i++) {
            StackTraceElement s = astacktraceelement[i];
            buff.append(s.toString()).append("\n");
        }
        buff.append("]");
        return (new StringBuilder("ERROR_MSG[")).append(message).append("] ").append(buff.toString()).toString();
    }
}
