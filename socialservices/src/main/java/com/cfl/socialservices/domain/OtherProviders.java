package com.cfl.socialservices.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class OtherProviders {

    @Id
    @GeneratedValue (strategy =  GenerationType.IDENTITY)
    private Integer id;

    private Integer studentId;

    private String whatOtherAgencies;

    private String whatServicesDo;

    private Integer areYouWorkingWith;

    private String qwhere;

    private String withWhom;

    private Integer areTheseServices;

    private String comments;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getStudentId() {
        return studentId;
    }

    public void setStudentId(Integer studentId) {
        this.studentId = studentId;
    }

    public String getWhatOtherAgencies() {
        return whatOtherAgencies;
    }

    public void setWhatOtherAgencies(String whatOtherAgencies) {
        this.whatOtherAgencies = whatOtherAgencies;
    }

    public String getWhatServicesDo() {
        return whatServicesDo;
    }

    public void setWhatServicesDo(String whatServicesDo) {
        this.whatServicesDo = whatServicesDo;
    }

    public Integer getAreYouWorkingWith() {
        return areYouWorkingWith;
    }

    public void setAreYouWorkingWith(Integer areYouWorkingWith) {
        this.areYouWorkingWith = areYouWorkingWith;
    }

    public String getQwhere() {
        return qwhere;
    }

    public void setWhere(String qwhere) {
        this.qwhere = qwhere;
    }

    public String getWithWhom() {
        return withWhom;
    }

    public void setWithWhom(String withWhom) {
        this.withWhom = withWhom;
    }

    public Integer getAreTheseServices() {
        return areTheseServices;
    }

    public void setAreTheseServices(Integer areTheseServices) {
        this.areTheseServices = areTheseServices;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }
}
