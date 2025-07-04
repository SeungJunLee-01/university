package likelion.Sugang.Controller;

import likelion.Sugang.DTO.EnrollmentDTO;
import likelion.Sugang.Repository.EnrollmentRepository;
import likelion.Sugang.Service.EnrollmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/enrollments")
public class EnrollmentController {

    private final EnrollmentService enrollmentService;

    public EnrollmentController(EnrollmentService enrollmentService) {
        this.enrollmentService = enrollmentService;
    }
    //수강 등록
    @PostMapping("/addEnrollment")
    public EnrollmentDTO enrollment(@RequestBody EnrollmentDTO enrollmentDTO){
        return enrollmentService.addEnrollment(enrollmentDTO);
    }
    //수강 등록 확인
    @GetMapping()
    public List<EnrollmentDTO> getEnrollment(@PathVariable Integer studentId){
        return enrollmentService.getEnrollmentsByStudentId(studentId);
    }
}