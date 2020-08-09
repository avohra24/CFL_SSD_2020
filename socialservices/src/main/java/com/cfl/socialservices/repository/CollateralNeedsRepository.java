package com.cfl.socialservices.repository;


import com.cfl.socialservices.domain.CollateralNeeds;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CollateralNeedsRepository extends CrudRepository<CollateralNeeds, Integer> {
    CollateralNeeds findByStudentId(Integer studentId);
}
