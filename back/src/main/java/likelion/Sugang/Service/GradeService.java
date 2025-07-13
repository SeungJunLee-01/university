package likelion.Sugang.Service;

import jakarta.transaction.Transactional;
import likelion.Sugang.DTO.Grade_distributionDTO;
import likelion.Sugang.Entity.GradeEntity;
import likelion.Sugang.Entity.Grade_distributionEntity;
import likelion.Sugang.Repository.EnrollmentRepository;
import likelion.Sugang.Repository.GradeRepository;
import likelion.Sugang.Repository.Grade_distributionRepository;
import likelion.Sugang.Repository.UserRepository;

import java.util.ArrayList;
import java.util.List;

public class GradeService {

    private final GradeRepository gradeRepository = null;
    private final Grade_distributionRepository grade_distributionRepository = null;
    private final EnrollmentRepository enrollmentRepository = null;
    private final UserRepository userRepository = null;

    @Transactional
    public void assignGradesForCourse(Integer courseId, List<Grade_distributionDTO> gradeInputs) {
        // 1. 과목에 해당하는 성적 비율 정보 불러오기
        Grade_distributionEntity distribution = Grade_distributionEntity.findByCourseId(courseId)
                .orElseThrow(() -> new RuntimeException("Grade distribution not found"));

        int middleW = distribution.getMiddleWeight();
        int finalW = distribution.getFinalWeight();
        int assignmentW = distribution.getAssignmentWeight();
        int attendanceW = distribution.getAttendanceWeight();

        // 2. 점수 계산 및 Grades 엔티티 리스트 생성
        List<GradeEntity> gradesList = new ArrayList<>();

        for (Grade_distributionDTO input : gradeInputs) {
            long totalScore = Math.round(
                    input.getMiddleScore() * middleW / 100.0 +
                            input.getFinalScore() * finalW / 100.0 +
                            input.getAssignment() * assignmentW / 100.0 +
                            input.getAttendance() * attendanceW / 100.0
            );

            Grades grade = new Grades();
            grade.setCourseId(courseId);
            grade.setStudentId(input.getStudentId());
            grade.setMiddleScore(input.getMiddleScore());
            grade.setFinalScore(input.getFinalScore());
            grade.setAssignment(input.getAssignment());
            grade.setAttendance(input.getAttendance());
            grade.setTotalScore(totalScore);

            gradesList.add(grade);
        }

        // 3. totalScore 기준 정렬
        gradesList.sort((a, b) -> Long.compare(b.getTotalScore(), a.getTotalScore()));

        // 4. letterGrade 부여
        int n = gradesList.size();
        for (int i = 0; i < n; i++) {
            Grades g = gradesList.get(i);
            double ratio = (i + 1) / (double)n;

            String gradeLetter;
            if (ratio <= 0.1) gradeLetter = "A+";
            else if (ratio <= 0.3) gradeLetter = "B+";
            else if (ratio <= 0.5) gradeLetter = "C+";
            else if (ratio <= 0.8) gradeLetter = "D+";
            else gradeLetter = "F";

            g.setLetterGrade(gradeLetter);
        }

        // 5. 저장
        gradeRepository.saveAll(gradesList);
    }
}

