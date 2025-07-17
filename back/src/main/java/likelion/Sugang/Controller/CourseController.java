package likelion.Sugang.Controller;

import likelion.Sugang.DTO.CourseDTO;
import likelion.Sugang.Service.CourseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/course")
@RequiredArgsConstructor
public class CourseController {
    private final CourseService courseService;

    //수업 추가
    @PostMapping("/add")
    public ResponseEntity<CourseDTO> addCourse(@RequestParam Integer courseCode,@RequestParam String courseName, @RequestParam String semester, @RequestParam Integer credits, @RequestParam Integer userId) {
        CourseDTO courseEntity = courseService.addCourse(courseCode,courseName, semester, credits, userId);
        return ResponseEntity.status(HttpStatus.CREATED).body(courseEntity);
    }

    //수업 삭제
    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteCourse(@RequestParam Integer courseId) {
        courseService.deleteCourse(courseId);
        return ResponseEntity.ok("삭제 성공");          
    }

    // 교수 id로 수업 조회
    @GetMapping("/{userId}")
    public ResponseEntity<List<CourseDTO>> getCoursesByProfessor(@PathVariable Integer userId) {
        List<CourseDTO> courses = courseService.getCoursesByProfessor(userId);
        return ResponseEntity.ok(courses);
    }
}