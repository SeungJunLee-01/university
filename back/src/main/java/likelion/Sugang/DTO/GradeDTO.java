package likelion.Sugang.DTO;

import lombok.*;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class GradeDTO {

    private Integer grade_id;
    private Integer course_id;
    private Integer student_id;
    private Integer score;
    private String letter_grade;
}
