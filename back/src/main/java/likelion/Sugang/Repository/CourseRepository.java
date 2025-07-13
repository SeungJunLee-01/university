package likelion.Sugang.Repository;

import likelion.Sugang.Entity.CourseEntity;
import likelion.Sugang.Entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface CourseRepository extends JpaRepository<CourseEntity, Integer> {
    // 교수의 userId를 기준으로 모든 수업 조회
    List<CourseEntity> findAllByUserId_UserId(Integer profId);
}