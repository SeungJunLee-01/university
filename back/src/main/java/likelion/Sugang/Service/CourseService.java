package likelion.Sugang.Service;

import likelion.Sugang.DAO.CourseDAO;
import likelion.Sugang.DTO.CourseDTO;
import likelion.Sugang.Entity.CourseEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CourseService {
    private final CourseDAO courseDAO;

    public CourseDTO addCourse(String courseName, String semester, Integer credits, Integer profId) {
        return courseDAO.addCourse(courseName,semester,credits,profId);
    }

    public List<CourseDTO> getAllCoursesByProfessorId(Integer profId) {
        List<CourseEntity> courses = courseDAO.findAllByProfId(profId);
        return courses.stream()
                .map(CourseEntity::toDTO)
                .collect(Collectors.toList());
    }

    public void deleteCourse(Integer courseId) {
        courseDAO.deleteCourse(courseId);
    }

}
