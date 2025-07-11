package likelion.Sugang.DAO;

import likelion.Sugang.DTO.CourseDTO;
import likelion.Sugang.Entity.CourseEntity;
import likelion.Sugang.Entity.UserEntity;
import likelion.Sugang.Repository.CourseRepository;
import likelion.Sugang.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class CourseDAO {
    private final CourseRepository courseRepository;
    private final UserRepository userRepository; // 교수 조회를 위한 리포지토리 주입

    public CourseDTO addCourse(String courseName, String semester, Integer credits, Integer profId) {
        UserEntity professor = userRepository.findById(profId)
                .orElseThrow(() -> new IllegalArgumentException("해당 교수 ID가 존재하지 않습니다: " + profId));

        CourseEntity course = CourseEntity.builder()
                .courseName(courseName)
                .semester(semester)
                .credits(credits)
                .userId(professor) // 여기!
                .build();

        return courseRepository.save(course).toDTO();
    }

    public List<CourseEntity> findAllByProfId(Integer profId) {
        return courseRepository.findAllByUserId_UserId(profId);
    }
}
