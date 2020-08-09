package com.cfl.socialservices.repository;

import com.cfl.socialservices.domain.Gender;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GenderRepository extends CrudRepository<Gender, Integer> {
}
