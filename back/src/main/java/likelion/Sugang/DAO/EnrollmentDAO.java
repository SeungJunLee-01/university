package likelion.Sugang.DAO;

import likelion.Sugang.DTO.EnrollmentDTO;
import likelion.Sugang.Entity.CourseEntity;
import likelion.Sugang.Entity.EnrollmentEntity;
import likelion.Sugang.Entity.UserEntity;
import likelion.Sugang.Repository.CourseRepository;
import likelion.Sugang.Repository.EnrollmentRepository;
import likelion.Sugang.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.stream.Collectors;

@Repository
@RequiredArgsConstructor
public class EnrollmentDAO {

    private final EnrollmentRepository enrollmentRepository;
    private final UserRepository userRepository;
    private final CourseRepository courseRepository;

    // 수강 신청
    public EnrollmentDTO addEnrollment(EnrollmentDTO enrollmentDTO) {
        UserEntity student = userRepository.findById(enrollmentDTO.getStudentId())
                .orElseThrow(() -> new RuntimeException("학생을 찾을 수 없습니다"));

        CourseEntity course = courseRepository.findById(enrollmentDTO.getCourseId())
                .orElseThrow(() -> new RuntimeException("과목을 찾을 수 없습니다"));

        EnrollmentEntity enrollment = EnrollmentEntity.builder()
                .studentId(student)
                .courseId(course)
                .build();

        EnrollmentEntity saved = enrollmentRepository.save(enrollment);
        return saved.toDTO();
    }
}