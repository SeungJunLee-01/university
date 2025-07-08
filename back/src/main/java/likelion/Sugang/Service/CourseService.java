package likelion.Sugang.Service;

import likelion.Sugang.DAO.CourseDAO;
import likelion.Sugang.DTO.CourseDTO;
import likelion.Sugang.Entity.UserEntity;
import likelion.Sugang.Repository.CourseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CourseService {
    private final CourseDAO courseDAO;

    public CourseDTO addCourse(String courseName, String semester, Integer credits, Integer profId) {
        return courseDAO.addCourse(courseName,semester,credits,profId);
    }
}
