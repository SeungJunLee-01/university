package likelion.Sugang.Service;

import jakarta.transaction.Transactional;
import likelion.Sugang.DAO.GradeCheckDAO;
import likelion.Sugang.DTO.GradeCheckDTO;
import likelion.Sugang.DTO.GradeInputDTO;
import likelion.Sugang.Entity.CourseEntity;
import likelion.Sugang.Entity.GradeEntity;
import likelion.Sugang.Entity.Grade_distributionEntity;
import likelion.Sugang.Entity.UserEntity;
import likelion.Sugang.Repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor // Lombok 어노테이션으로 생성자 자동 생성
public class GradeService {

    private final GradeCheckDAO gradeCheckDAO;
    private final GradeRepository gradeRepository;
    private final Grade_distributionRepository grade_distributionRepository;
    private final UserRepository userRepository;
    private final CourseRepository courseRepository;

    @Transactional
    public void assignGradesForCourse(Integer courseId, List<GradeInputDTO> gradeInputs) {
        // 1. course 조회 먼저
        CourseEntity course = courseRepository.findById(courseId)
                .orElseThrow(() -> new RuntimeException("Course not found"));

        // 2. distribution 조회
        Grade_distributionEntity distribution = grade_distributionRepository.findByCourseId(course)
                .orElseThrow(() -> new RuntimeException("Grade distribution not found"));

        int middleW = distribution.getMiddleWeight();
        int finalW = distribution.getFinalWeight();
        int assignmentW = distribution.getAssignmentWeight();
        int attendanceW = distribution.getAttendanceWeight();

        List<GradeEntity> gradesList = new ArrayList<>();

        for (GradeInputDTO input : gradeInputs) {
            UserEntity student = userRepository.findById(input.getStudentId())
                    .orElseThrow(() -> new RuntimeException("Student not found"));

            long totalScore = Math.round(
                    input.getMiddleScore() * middleW / 100.0 +
                            input.getFinalScore() * finalW / 100.0 +
                            input.getAssignment() * assignmentW / 100.0 +
                            input.getAttendance() * attendanceW / 100.0
            );

            GradeEntity grade = new GradeEntity();
            grade.setStudentId(student);
            grade.setCourseId(course);
            grade.setMiddleScore(input.getMiddleScore());
            grade.setFinalScore(input.getFinalScore());
            grade.setAssignment(input.getAssignment());
            grade.setAttendance(input.getAttendance());
            grade.setTotalScore(totalScore);

            gradesList.add(grade);
        }

        gradesList.sort((a, b) -> Long.compare(b.getTotalScore(), a.getTotalScore()));

        int n = gradesList.size();
        for (int i = 0; i < n; i++) {
            GradeEntity g = gradesList.get(i);
            double ratio = (i + 1) / (double)n;

            String gradeLetter;
            if (ratio <= 0.1) gradeLetter = "A+";
            else if (ratio <= 0.3) gradeLetter = "B+";
            else if (ratio <= 0.5) gradeLetter = "C+";
            else if (ratio <= 0.8) gradeLetter = "D+";
            else gradeLetter = "F";

            g.setLetterGrade(gradeLetter);
        }

        gradeRepository.saveAll(gradesList);
    }

    //성적 확인

    public List<GradeCheckDTO> getStudentGradeChecks(Integer studentId) {
        return gradeCheckDAO.getGradeChecksByStudentId(studentId);
    }



}