package likelion.Sugang.Repository;

import likelion.Sugang.Entity.EnrollmentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EnrollmentRepository extends JpaRepository <EnrollmentEntity, Long>{
}
