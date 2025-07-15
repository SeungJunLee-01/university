package likelion.Sugang.DAO;

import likelion.Sugang.DTO.GradeCheckDTO;
import likelion.Sugang.Entity.GradeEntity;
import likelion.Sugang.Repository.GradeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.stream.Collectors;

@Repository
@RequiredArgsConstructor

public class GradeCheckDAO {

    private final GradeRepository  gradeRepository;

    public List<GradeCheckDTO> getGradeChecksByStudentId(Integer studentId){
        List<GradeEntity> gradeEntities = gradeRepository.findByStudentIdUserId(studentId);

        return gradeEntities.stream()
                .map(grade -> GradeCheckDTO.builder()
                        .name(grade.getStudentId().getName())
                        .courseName(grade.getCourseId().getCourseName())
                        .semester(grade.getCourseId().getSemester())
                        .grade(grade.getLetterGrade())
                        .score(grade.getTotalScore().doubleValue())
                        .build())
                .collect(Collectors.toList());

    }
}
