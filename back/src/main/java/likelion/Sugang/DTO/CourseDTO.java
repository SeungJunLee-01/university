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
    private Integer course_id;
    private String course_name;
    private String semester;
}
