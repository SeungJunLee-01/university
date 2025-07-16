package likelion.Sugang.Service;
import likelion.Sugang.DAO.CourseDAO;
import likelion.Sugang.DTO.CourseDTO;
import likelion.Sugang.Entity.CourseEntity;
import likelion.Sugang.Enum.UserType;
import likelion.Sugang.Repository.CourseRepository;
import likelion.Sugang.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
public class CourseService {
    private final CourseDAO courseDAO;
    private final UserRepository userRepository;
    private final CourseRepository courseRepository;

    //과목 추가
    public CourseDTO addCourse(Integer courseCode,String courseName, String semester, Integer credits, Integer userId) {
        return courseDAO.addCourse(courseCode,courseName,semester,credits,userId);
    }

    // 삭제
    public void deleteCourse(Integer courseId) {
        courseDAO.deleteCourse(courseId);
    }

    //교수ID로 조회
    public List<CourseDTO> getCoursesByProfessor(Integer userId) {
        return courseDAO.getCoursesByProfessor(userId);
    }
}




