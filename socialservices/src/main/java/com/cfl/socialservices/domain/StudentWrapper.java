package com.cfl.socialservices.domain;

public class StudentWrapper {

    private Student personalInformation;

    private ImmediateNeeds immediateNeeds;

    private OtherProviders otherProviders;

    private EnglishFluency englishFluency;

    private Housing housing;

    private CollateralNeeds collateralNeeds;

    private Income income;

    public Student getPersonalInformation() {
        return personalInformation;
    }

    public void setPersonalInformation(Student personalInformation) {
        this.personalInformation = personalInformation;
    }

    public ImmediateNeeds getImmediateNeeds() {
        return immediateNeeds;
    }

    public void setImmediateNeeds(ImmediateNeeds immediateNeeds) {
        this.immediateNeeds = immediateNeeds;
    }

    public OtherProviders getOtherProviders() {
        return otherProviders;
    }

    public void setOtherProviders(OtherProviders otherProviders) {
        this.otherProviders = otherProviders;
    }

    public EnglishFluency getEnglishFluency() {
        return englishFluency;
    }

    public void setEnglishFluency(EnglishFluency englishFluency) {
        this.englishFluency = englishFluency;
    }

    public Housing getHousing() {
        return housing;
    }

    public void setHousing(Housing housing) {
        this.housing = housing;
    }

    public CollateralNeeds getCollateralNeeds() {
        return collateralNeeds;
    }

    public void setCollateralNeeds(CollateralNeeds collateralNeeds) {
        this.collateralNeeds = collateralNeeds;
    }

    public Income getIncome() {
        return income;
    }

    public void setIncome(Income income ) {
        this.income = income;
    }
}
