package likelion.Sugang.Repository;

import likelion.Sugang.Entity.CourseEntity;
import likelion.Sugang.Entity.UserEntity;
import likelion.Sugang.Enum.UserType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface CourseRepository extends JpaRepository<CourseEntity, Integer> {
    // 교수의 userId를 기준으로 모든 수업 조회
    List<CourseEntity> findAllByUserId(UserEntity user);



}