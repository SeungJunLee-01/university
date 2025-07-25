package likelion.Sugang.DTO;

import lombok.*;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class GradeDTO {

    private Integer gradeId;
    private Integer courseId;
    private Integer studentId;
    private Integer middleScore;
    private Integer finalScore;
    private Integer assignment;
    private Integer attendance;
    private Long totalScore;
    private String letterGrade;
}