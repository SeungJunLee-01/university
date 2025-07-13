package likelion.Sugang.DTO;

import lombok.*;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Grade_distributionDTO {
    private Integer distributionId;
    private Integer courseId;
    private Integer middleWeight;
    private Integer finalWeight;
    private Integer assignmentWeight;
    private Integer attendanceWeight;
}
