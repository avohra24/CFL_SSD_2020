package com.cfl.socialservices.web;

import com.cfl.socialservices.domain.Gender;
import com.cfl.socialservices.domain.Race;
import com.cfl.socialservices.domain.RelationshipStatus;
import com.cfl.socialservices.service.BooleanResponseService;
import com.cfl.socialservices.service.GenderService;
import com.cfl.socialservices.service.RaceService;
import com.cfl.socialservices.service.RelationshipStatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.management.relation.Relation;
import javax.print.Doc;
import java.util.Dictionary;
import java.util.HashMap;

@Controller
@RequestMapping(path="/common")
public class CommonController {

    @Autowired
    private GenderService genderService;

    @Autowired
    private RelationshipStatusService relationshipStatusService;

    @Autowired
    private RaceService raceService;

    @Autowired
    private BooleanResponseService booleanResponseService;

    @GetMapping(path="/load")
    public ResponseEntity<?> getAllInitialData() {
        HashMap<String, Object> initialData = new HashMap<>();
        HashMap<Integer, String> genders =  genderService.findAllGenders();
        HashMap<Integer, String> races = raceService.findAllRaces();
        HashMap<Integer, String> relationshipStatuses = relationshipStatusService.findAllRelationshipStatus();
        HashMap<Integer, String> booleanResponses = booleanResponseService.findAllBooleanResponses();
        initialData.put("gender", genders);
        initialData.put("race", races);
        initialData.put("relationshipStatus", relationshipStatuses);
        initialData.put("booleanResponses", booleanResponses);
        return new ResponseEntity<HashMap<String, Object>>(initialData, HttpStatus.OK);
    }
}
