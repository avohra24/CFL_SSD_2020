package com.cfl.socialservices.service;

import com.cfl.socialservices.domain.Gender;
import com.cfl.socialservices.repository.GenderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
public class GenderService {

    @Autowired
    private GenderRepository genderRepository;

    public HashMap<Integer, String> findAllGenders() {
        Iterable<Gender> data = genderRepository.findAll();
        HashMap<Integer, String> map = new HashMap<>();
        for (Gender el : data){
            map.put(el.getId(), el.getName());
        }
        return map;
    }

}
