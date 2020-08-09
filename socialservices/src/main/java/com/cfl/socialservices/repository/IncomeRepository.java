package com.cfl.socialservices.repository;


import com.cfl.socialservices.domain.Income;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IncomeRepository extends CrudRepository<Income, Integer> {
    Income findByStudentId(Integer studentId);
}
