package likelion.Sugang.DTO;

import lombok.*;

@Builder
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor

public class EnrollmentDTO {
    private Integer enrollment_id;
    private Integer course_id;
    private Integer student_id;
}
