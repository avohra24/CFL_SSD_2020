package com.cfl.socialservices.domain;

public class Response {

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Boolean status;
    public String message;

    public Response(Boolean s, String m) {
        status = s;
        message = m;
    }

}
