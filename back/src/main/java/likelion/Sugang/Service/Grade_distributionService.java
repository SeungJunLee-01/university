package likelion.Sugang.Service;

import jakarta.transaction.Transactional;
import likelion.Sugang.DTO.Grade_distributionDTO;
import likelion.Sugang.Entity.CourseEntity;
import likelion.Sugang.Entity.Grade_distributionEntity;
import likelion.Sugang.Repository.CourseRepository;
import likelion.Sugang.Repository.Grade_distributionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class Grade_distributionService {

    private final CourseRepository courseRepository;
    private final Grade_distributionRepository gradeDistributionRepository;

    @Transactional
    public void createDistribution(Integer courseId, Grade_distributionDTO dto) {
        CourseEntity course = courseRepository.findById(courseId)
                .orElseThrow(() -> new RuntimeException("Course not found"));

        if (gradeDistributionRepository.findByCourseId(course).isPresent()) {
            throw new RuntimeException("Distribution already exists for this course.");
        }

        if (dto.getMiddleWeight() + dto.getFinalWeight() + dto.getAssignmentWeight() + dto.getAttendanceWeight() != 100) {
            throw new RuntimeException("Total weight must sum to 100.");
        }

        Grade_distributionEntity entity = Grade_distributionEntity.builder()
                .courseId(course)
                .middleWeight(dto.getMiddleWeight())
                .finalWeight(dto.getFinalWeight())
                .assignmentWeight(dto.getAssignmentWeight())
                .attendanceWeight(dto.getAttendanceWeight())
                .build();

        gradeDistributionRepository.save(entity);
    }
}
