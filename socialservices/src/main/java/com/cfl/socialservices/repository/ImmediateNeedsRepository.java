package com.cfl.socialservices.repository;

import com.cfl.socialservices.domain.ImmediateNeeds;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImmediateNeedsRepository extends CrudRepository<ImmediateNeeds, Integer> {
    ImmediateNeeds findByStudentId (Integer studentId);
}
