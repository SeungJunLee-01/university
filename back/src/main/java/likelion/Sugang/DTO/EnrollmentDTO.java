package likelion.Sugang.DTO;

import lombok.*;

@Builder
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor

public class EnrollmentDTO {
    private Integer enrollmentId;
    private Integer courseId;
    private Integer studentId;
}