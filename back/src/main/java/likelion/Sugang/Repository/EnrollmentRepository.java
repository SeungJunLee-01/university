package likelion.Sugang.Repository;

import likelion.Sugang.Entity.EnrollmentEntity;
import likelion.Sugang.Entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EnrollmentRepository extends JpaRepository <EnrollmentEntity, Integer>{
    List<EnrollmentEntity> findByStudentId(UserEntity student); // ✅
}
