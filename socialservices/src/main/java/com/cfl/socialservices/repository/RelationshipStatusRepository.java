package com.cfl.socialservices.repository;

        import com.cfl.socialservices.domain.RelationshipStatus;
        import org.springframework.data.repository.CrudRepository;
        import org.springframework.stereotype.Repository;

@Repository
public interface RelationshipStatusRepository extends CrudRepository<RelationshipStatus, Integer> {
}
