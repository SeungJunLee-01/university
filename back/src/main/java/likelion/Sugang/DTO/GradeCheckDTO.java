package likelion.Sugang.DTO;

import lombok.*;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
//성적확인 DTO
public class GradeCheckDTO {
    private String name;
    private String courseName;
    private String semester;
    private String grade;
    private Double score;
}
