package likelion.Sugang.Repository;

import likelion.Sugang.Entity.GradeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GradeRepository extends JpaRepository<GradeEntity,Long> {
}
