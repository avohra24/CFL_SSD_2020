package com.cfl.socialservices.repository;

import com.cfl.socialservices.domain.Race;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RaceRepository extends CrudRepository<Race, Integer> {
}
