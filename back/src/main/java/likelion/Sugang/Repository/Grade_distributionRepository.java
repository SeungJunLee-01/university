package likelion.Sugang.Repository;

import likelion.Sugang.Entity.Grade_distributionEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface Grade_distributionRepository extends JpaRepository<Grade_distributionEntity, Integer> {
    Optional<Grade_distributionEntity> findByCourseId(Integer courseId);
}
//