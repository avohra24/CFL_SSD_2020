package com.cfl.socialservices.repository;

import com.cfl.socialservices.domain.Student;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StudentRepository extends CrudRepository<Student, Integer> {
}
