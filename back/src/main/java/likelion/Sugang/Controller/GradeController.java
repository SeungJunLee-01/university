package likelion.Sugang.Controller;

import likelion.Sugang.DTO.GradeCheckDTO;
import likelion.Sugang.DTO.GradeInputDTO;
import likelion.Sugang.Service.GradeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/grades")
@RequiredArgsConstructor
public class GradeController {

    private final GradeService gradeService;

    // POST /grades/{courseId}
    @PostMapping("/{courseId}")
    public ResponseEntity<String> assignGrades(
            @PathVariable Integer courseId,
            @RequestBody List<GradeInputDTO> gradeInputs
    ) {
        gradeService.assignGradesForCourse(courseId, gradeInputs);
        return ResponseEntity.ok("Grades assigned successfully.");
    }

    //성적 확인
    @GetMapping("/check/{studentId}")
    public ResponseEntity<List<GradeCheckDTO>> checkGrades(@PathVariable Integer studentId) {
        List<GradeCheckDTO> grades = gradeService.getStudentGradeChecks(studentId);
        return ResponseEntity.ok(grades);
    }
}
