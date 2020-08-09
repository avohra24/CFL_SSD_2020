package com.cfl.socialservices.service;

import com.cfl.socialservices.domain.*;
import com.cfl.socialservices.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private ImmediateNeedsRepository immediateNeedsRepository;

    @Autowired
    private OtherProvidersRepository otherProvidersRepository;

    @Autowired
    private EnglishFluencyRepository englishFluencyRepository;

    @Autowired
    private HousingRepository housingRepository;

    @Autowired
    private CollateralNeedsRepository collateralNeedsRepository;

    @Autowired
    private IncomeRepository incomeRepository;

    public Iterable<Student> findAllStudents(){
        return studentRepository.findAll();
    }

    public StudentWrapper findStudent(Integer studentId) {
        StudentWrapper studentWrapper = new StudentWrapper();
        try {

            Optional<Student> student = studentRepository.findById(studentId);

            if (student.isPresent()) {
                studentWrapper.setPersonalInformation(student.get());

                ImmediateNeeds immediateNeeds = immediateNeedsRepository.findByStudentId(studentId);
                if (immediateNeeds == null) {
                    immediateNeeds = new ImmediateNeeds();
                }
                studentWrapper.setImmediateNeeds(immediateNeeds);

                OtherProviders otherProviders = otherProvidersRepository.findByStudentId(studentId);
                if (otherProviders == null) {
                    otherProviders = new OtherProviders();
                }
                studentWrapper.setOtherProviders(otherProviders);

                EnglishFluency englishFluency = englishFluencyRepository.findByStudentId(studentId);
                if (englishFluency == null) {
                    englishFluency = new EnglishFluency();
                }
                studentWrapper.setEnglishFluency(englishFluency);

                Housing housing = housingRepository.findByStudentId(studentId);
                if (housing == null) {
                    housing = new Housing();
                }
                studentWrapper.setHousing(housing);

                CollateralNeeds collateralNeeds = collateralNeedsRepository.findByStudentId(studentId);
                if (collateralNeeds == null) {
                    collateralNeeds = new CollateralNeeds();
                }
                studentWrapper.setCollateralNeeds(collateralNeeds);

                Income income = incomeRepository.findByStudentId(studentId);
                if (income == null) {
                    income = new Income();
                }
                studentWrapper.setIncome(income);

            }
            return studentWrapper;
        } catch (NoSuchElementException e) {
            return studentWrapper;
        }  catch (Exception e) {
            return studentWrapper;
        }


    }

    public Response createNewStudent(StudentWrapper studentWrapper) {

        try{

            Student personalInformation = studentWrapper.getPersonalInformation();

            personalInformation = studentRepository.save(personalInformation);
            studentWrapper.setPersonalInformation(personalInformation);

            Integer id = personalInformation.getId();

            ImmediateNeeds immediateNeeds = studentWrapper.getImmediateNeeds();
            immediateNeeds.setStudentId(id);
            immediateNeeds = immediateNeedsRepository.save(immediateNeeds);
            studentWrapper.setImmediateNeeds(immediateNeeds);

            OtherProviders otherProviders = studentWrapper.getOtherProviders();
            otherProviders.setStudentId(id);
            otherProviders = otherProvidersRepository.save(otherProviders);
            studentWrapper.setOtherProviders(otherProviders);

            EnglishFluency englishFluency = studentWrapper.getEnglishFluency();
            englishFluency.setStudentId(id);
            englishFluency = englishFluencyRepository.save(englishFluency);
            studentWrapper.setEnglishFluency(englishFluency);

            Housing housing = studentWrapper.getHousing();
            housing.setStudentId(id);
            housing = housingRepository.save(housing);
            studentWrapper.setHousing(housing);

            CollateralNeeds collateralNeeds = studentWrapper.getCollateralNeeds();
            collateralNeeds.setStudentId(id);
            collateralNeeds = collateralNeedsRepository.save(collateralNeeds);
            studentWrapper.setCollateralNeeds(collateralNeeds);


            return new Response(true, "Created Student Successfully");
        }catch (Exception e){
            return new Response(false, e.getMessage());
        }
    }

}
