package likelion.Sugang.Repository;

import likelion.Sugang.DTO.Student_infoDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Student_infoRepository extends JpaRepository<Student_infoDTO,Long> {
}
