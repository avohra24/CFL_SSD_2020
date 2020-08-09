package com.cfl.socialservices.service;

import com.cfl.socialservices.domain.Gender;
import com.cfl.socialservices.domain.Race;
import com.cfl.socialservices.repository.RaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
public class RaceService {

    @Autowired
    private RaceRepository raceRepository;

    public HashMap<Integer, String> findAllRaces() {
        Iterable<Race> data = raceRepository.findAll();
        HashMap<Integer, String> map = new HashMap<>();
        for (Race el : data){
            map.put(el.getId(), el.getName());
        }
        return map;
    }

}
