package likelion.Sugang.DTO;

import lombok.*;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private Integer user_id;
    private String name;
    private Integer birth;
    private String sex;
    private String student_department;
    private String status;
    private Integer type;
}
