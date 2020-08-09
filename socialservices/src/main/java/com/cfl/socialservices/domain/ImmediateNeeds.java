package com.cfl.socialservices.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ImmediateNeeds {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Integer id;

    private Integer studentId;

    private Integer familyMembersNeedHelp;

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

    public Integer getFamilyMembersNeedHelp() {
        return familyMembersNeedHelp;
    }

    public void setFamilyMembersNeedHelp(Integer familyMembersNeedHelp) {
        this.familyMembersNeedHelp = familyMembersNeedHelp;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }
}
