package com.cfl.socialservices.service;

import com.cfl.socialservices.domain.Race;
import com.cfl.socialservices.domain.RelationshipStatus;
import com.cfl.socialservices.repository.RelationshipStatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.management.relation.Relation;
import java.util.HashMap;

@Service
public class RelationshipStatusService {

    @Autowired
    private RelationshipStatusRepository relationshipStatusRepository;

    public HashMap<Integer, String> findAllRelationshipStatus() {
        Iterable<RelationshipStatus> data = relationshipStatusRepository.findAll();
        HashMap<Integer, String> map = new HashMap<>();
        for (RelationshipStatus el : data){
            map.put(el.getId(), el.getName());
        }
        return map;
    }

}
