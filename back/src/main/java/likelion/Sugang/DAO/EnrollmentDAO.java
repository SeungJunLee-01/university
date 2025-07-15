package likelion.Sugang.DAO;

import likelion.Sugang.DTO.EnrollmentDTO;
import likelion.Sugang.Entity.CourseEntity;
import likelion.Sugang.Entity.EnrollmentEntity;
import likelion.Sugang.Entity.UserEntity;
import likelion.Sugang.Repository.CourseRepository;
import likelion.Sugang.Repository.EnrollmentRepository;
import likelion.Sugang.Repository.UserRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.stream.Collectors;

@Repository
public class EnrollmentDAO {

    private final EnrollmentRepository enrollmentRepository;
    private final UserRepository userRepository;
    private final CourseRepository courseRepository;

    public EnrollmentDAO(EnrollmentRepository enrollmentRepository, UserRepository userRepository, CourseRepository courseRepository){
        this.enrollmentRepository = enrollmentRepository;
        this.userRepository = userRepository;
        this.courseRepository = courseRepository;
    }

    public EnrollmentDTO addEnrollment(EnrollmentDTO enrollmentDTO) {
        UserEntity user = userRepository.findById(enrollmentDTO.getStudentId())
                .orElseThrow(() -> new RuntimeException("Student not found"));

        CourseEntity course = courseRepository.findById(enrollmentDTO.getCourseId())
                .orElseThrow(() -> new RuntimeException("Course not found"));

        EnrollmentEntity enrollmentEntity = EnrollmentEntity.builder()
                .studentId(user)
                .courseId(course)
                .build();

        EnrollmentEntity saved = enrollmentRepository.save(enrollmentEntity);
        return saved.toDTO();
    }

    public List<EnrollmentDTO> getEnrollmentsByStudentId(Integer studentId){
        UserEntity student = userRepository.findById(studentId)
                .orElseThrow(() -> new RuntimeException("Student not found"));

        List<EnrollmentEntity> enrollments = enrollmentRepository.findByStudentId(student);

        return enrollments.stream()
                .map(EnrollmentEntity::toDTO)
                .collect(Collectors.toList());
    }
}
