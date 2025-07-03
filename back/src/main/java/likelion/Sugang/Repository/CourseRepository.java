package likelion.Sugang.Repository;

import likelion.Sugang.Entity.CourseEntity;
import likelion.Sugang.Entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface CourseRepository extends JpaRepository<CourseEntity, Integer> {
}
