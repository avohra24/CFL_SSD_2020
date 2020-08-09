package com.cfl.socialservices.repository;

import com.cfl.socialservices.domain.Housing;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HousingRepository extends CrudRepository<Housing, Integer> {
    Housing findByStudentId(Integer studentId);
}
