package com.cfl.socialservices.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class EnglishFluency {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Integer id;

    private Integer studentId;

    private Integer question_1;

    private Integer question_2;

    private Integer question_3;

    private Integer question_4;

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

    public Integer getQuestion_1() {
        return question_1;
    }

    public void setQuestion_1(Integer question_1) {
        this.question_1 = question_1;
    }

    public Integer getQuestion_2() {
        return question_2;
    }

    public void setQuestion_2(Integer question_2) {
        this.question_2 = question_2;
    }

    public Integer getQuestion_3() {
        return question_3;
    }

    public void setQuestion_3(Integer question_3) {
        this.question_3 = question_3;
    }

    public Integer getQuestion_4() {
        return question_4;
    }

    public void setQuestion_4(Integer question_4) {
        this.question_4 = question_4;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }
}
