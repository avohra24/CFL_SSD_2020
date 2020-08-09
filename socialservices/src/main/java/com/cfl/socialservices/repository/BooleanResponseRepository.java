package com.cfl.socialservices.repository;

        import com.cfl.socialservices.domain.BooleanResponse;
        import org.springframework.data.repository.CrudRepository;
        import org.springframework.stereotype.Repository;

@Repository
public interface BooleanResponseRepository extends CrudRepository<BooleanResponse, Integer> {
}
