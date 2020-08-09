package com.cfl.socialservices.service;

import com.cfl.socialservices.domain.BooleanResponse;
import com.cfl.socialservices.repository.BooleanResponseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
public class BooleanResponseService {

    @Autowired
    private BooleanResponseRepository booleanResponseRepository;

    public HashMap<Integer, String> findAllBooleanResponses() {
        Iterable<BooleanResponse> data = booleanResponseRepository.findAll();
        HashMap<Integer, String> map = new HashMap<>();
        for (BooleanResponse el : data){
            map.put(el.getId(), el.getName());
        }
        return map;
    }

}
