package likelion.Sugang.Controller;

import likelion.Sugang.DTO.Grade_distributionDTO;
import likelion.Sugang.Service.Grade_distributionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/grade-distribution")
@RequiredArgsConstructor
public class Grade_distributionController {

    private final Grade_distributionService grade_distributionService;

    @PostMapping("/{courseId}")
    public ResponseEntity<String> createDistribution(
            @PathVariable Integer courseId,
            @RequestBody Grade_distributionDTO dto
    ) {
        grade_distributionService.createDistribution(courseId, dto);
        return ResponseEntity.ok("Grade distribution registered successfully.");
    }
}
