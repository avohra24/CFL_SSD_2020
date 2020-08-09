package com.cfl.socialservices.repository;

import com.cfl.socialservices.domain.EnglishFluency;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EnglishFluencyRepository extends CrudRepository<EnglishFluency, Integer> {
    EnglishFluency findByStudentId(Integer studentId);
}
