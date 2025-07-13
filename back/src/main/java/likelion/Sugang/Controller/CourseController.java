package likelion.Sugang.Controller;

import likelion.Sugang.DTO.CourseDTO;
import likelion.Sugang.Service.CourseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/course")
@RequiredArgsConstructor
public class CourseController {
    private final CourseService courseService;

    //수업 추가
    @PostMapping
    public ResponseEntity<CourseDTO> addCourse(@RequestParam String courseName, @RequestParam String semester, @RequestParam Integer credits, @RequestParam Integer profId) {
        CourseDTO courseEntity = courseService.addCourse(courseName, semester, credits, profId);
        return ResponseEntity.status(HttpStatus.CREATED).body(courseEntity);
    }

    // 교수 ID로 수업 목록 조회
    @GetMapping("/professor/{profId}")
    public ResponseEntity<List<CourseDTO>> getCoursesByProfessorId(@PathVariable Integer profId) {
        List<CourseDTO> courses = courseService.getAllCoursesByProfessorId(profId);
        return ResponseEntity.ok(courses);
    }
}