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
    private Integer score;
    private String letterGrade;
}
