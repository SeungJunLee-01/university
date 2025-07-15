package likelion.Sugang.Repository;

import likelion.Sugang.Entity.CourseEntity;
import likelion.Sugang.Entity.Grade_distributionEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface Grade_distributionRepository extends JpaRepository<Grade_distributionEntity, Integer> {
    // CourseEntity 타입으로 파라미터 변경
    Optional<Grade_distributionEntity> findByCourseId(CourseEntity course);
}
