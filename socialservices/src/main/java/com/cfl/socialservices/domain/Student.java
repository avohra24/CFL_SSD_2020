package com.cfl.socialservices.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String firstName;
    private String lastName;
    private String preferredName;
    private String address;
    private String city;
    private String state;
    private String zipcode;
    private String county;
    private String phone;
    private String cellphone;
    private String email;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern="MM-dd-yyyy", timezone = "America/Chicago")
    private Date dateOfBirth;

    private Integer gender;
    private Integer hispanic;
    private String hispanicSpecify;
    private Integer race;
    private Integer relationshipStatus;

    @JsonFormat(pattern="MM-dd-yyyy", timezone = "America/Chicago")
    private Date intakeDate;

    @JsonFormat(pattern="MM-dd-yyyy", timezone = "America/Chicago")
    private Date referralDate;

    private String referredBy;

    public String getPreferredName() {
        return preferredName;
    }

    public void setPreferredName(String preferredName) {
        this.preferredName = preferredName;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getZipcode() {
        return zipcode;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }

    public String getCounty() {
        return county;
    }

    public void setCounty(String county) {
        this.county = county;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getCellphone() {
        return cellphone;
    }

    public void setCellphone(String cellphone) {
        this.cellphone = cellphone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public Integer getGender() {
        return gender;
    }

    public void setGender(Integer gender) {
        this.gender = gender;
    }

    public Integer getHispanic() {
        return hispanic;
    }

    public void setHispanic(Integer hispanic) {
        this.hispanic = hispanic;
    }

    public Integer getRace() {
        return race;
    }

    public void setRace(Integer race) {
        this.race = race;
    }

    public Integer getRelationshipStatus() {
        return relationshipStatus;
    }

    public void setRelationshipStatus(Integer relationshipStatus) {
        this.relationshipStatus = relationshipStatus;
    }

    public Date getIntakeDate() {
        return intakeDate;
    }

    public void setIntakeDate(Date intakeDate) {
        this.intakeDate = intakeDate;
    }

    public Date getReferralDate() {
        return referralDate;
    }

    public void setReferralDate(Date referralDate) {
        this.referralDate = referralDate;
    }

    public String getReferredBy() {
        return referredBy;
    }

    public void setReferredBy(String referredBy) {
        this.referredBy = referredBy;
    }

    public String getHispanicSpecify() {
        return hispanicSpecify;
    }

    public void setHispanicSpecify(String hispanicSpecify) {
        this.hispanicSpecify = hispanicSpecify;
    }
}
