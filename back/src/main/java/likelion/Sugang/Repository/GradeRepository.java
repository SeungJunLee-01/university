package likelion.Sugang.Repository;

import likelion.Sugang.Entity.CourseEntity;
import likelion.Sugang.Entity.GradeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GradeRepository extends JpaRepository<GradeEntity, CourseEntity> {
    List<GradeEntity> findByCourseId(CourseEntity courseId);

    List<GradeEntity> findByStudentIdUserId(Integer studentId);
}
