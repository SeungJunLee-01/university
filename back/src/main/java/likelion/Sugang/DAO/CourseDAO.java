package likelion.Sugang.DAO;

import likelion.Sugang.DTO.CourseDTO;
import likelion.Sugang.Entity.CourseEntity;
import likelion.Sugang.Entity.UserEntity;
import likelion.Sugang.Enum.UserType;
import likelion.Sugang.Repository.CourseRepository;
import likelion.Sugang.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;
//
@Component
@RequiredArgsConstructor
public class CourseDAO {
    private final CourseRepository courseRepository;
    private final UserRepository userRepository;

    //수업 추가
    public CourseDTO addCourse(Integer courseCode, String courseName, String semester, Integer credits, Integer userId) {
        // 1. 교수(사용자) 조회
        UserEntity professor = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("해당 교수(userId=" + userId + ")가 존재하지 않습니다."));
        // 2. CourseEntity 생성 및 저장
        CourseEntity course = CourseEntity.builder()
                .courseCode(courseCode)
                .courseName(courseName)
                .semester(semester)
                .credits(credits)
                .userId(professor) // UserEntity 주입
                .build();

        // 3. 저장 후 DTO 반환
        return courseRepository.save(course).toDTO();
    }


    //수업삭제
    public void deleteCourse(Integer courseId) {
        courseRepository.deleteById(courseId);
    }

    //교수ID 조회
    public List<CourseDTO> getCoursesByProfessor(Integer userId) {
        // 1. 교수 존재 확인
        UserEntity professor = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("해당 교수(userId=" + userId + ")가 존재하지 않습니다."));

        // 2. 수업 목록 조회
        List<CourseEntity> courseList = courseRepository.findAllByUserId(professor);

        // 3. DTO로 변환
        return courseList.stream()
                .map(CourseEntity::toDTO)
                .toList();
    }

}