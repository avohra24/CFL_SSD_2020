package com.cfl.socialservices.service;

import com.cfl.socialservices.domain.ImmediateNeeds;
import com.cfl.socialservices.domain.Response;
import com.cfl.socialservices.domain.Student;
import com.cfl.socialservices.repository.ImmediateNeedsRepository;
import com.cfl.socialservices.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImmediateNeedsService {

    @Autowired
    private ImmediateNeedsRepository immediateNeedsRepository;

    public Iterable<ImmediateNeeds> findAllStudents(){
        return immediateNeedsRepository.findAll();
    }

    public Response createNewStudent(ImmediateNeeds immediateNeeds) {

        try{

            immediateNeeds.setId(null);
            immediateNeedsRepository.save(immediateNeeds);
            return new Response(true, "Created Immediate Needs Successfully");
        }catch (Exception e){
            return new Response(false, e.getMessage());
        }
    }

}
