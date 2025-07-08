package likelion.Sugang.Controller;

import likelion.Sugang.DTO.CourseDTO;
import likelion.Sugang.Service.CourseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
}
