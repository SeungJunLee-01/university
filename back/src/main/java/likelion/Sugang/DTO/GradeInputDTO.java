package likelion.Sugang.DTO;

import lombok.*;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class GradeInputDTO {
    private Integer studentId;
    private int middleScore;
    private int finalScore;
    private int assignment;
    private int attendance;
}
