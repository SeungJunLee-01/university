package likelion.Sugang.DTO;

import jakarta.persistence.Column;
import lombok.*;

@Builder
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor

public class CourseDTO {
    private Integer courseId;
    private String courseName;
    private String semester;
    private Integer profId;
}
