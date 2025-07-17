package likelion.Sugang.Controller;

import likelion.Sugang.DTO.EnrollmentDTO;
import likelion.Sugang.Service.EnrollmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/enrollment")
@RequiredArgsConstructor
public class EnrollmentController {

    private final EnrollmentService enrollmentService;
    //수강 신청
    @PostMapping("/add")
    public ResponseEntity<EnrollmentDTO> addEnrollment(@RequestBody EnrollmentDTO enrollmentDTO) {
        EnrollmentDTO saved = enrollmentService.addEnrollment(enrollmentDTO);
        return ResponseEntity.ok(saved);
    }
}