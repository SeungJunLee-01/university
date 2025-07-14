package likelion.Sugang.Repository;

import likelion.Sugang.Entity.Student_infoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Student_infoRepository extends JpaRepository<Student_infoEntity,Long> {
}
//