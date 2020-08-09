package com.cfl.socialservices.repository;

import com.cfl.socialservices.domain.OtherProviders;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OtherProvidersRepository extends CrudRepository<OtherProviders, Integer> {
    OtherProviders findByStudentId(Integer studentId);
}
