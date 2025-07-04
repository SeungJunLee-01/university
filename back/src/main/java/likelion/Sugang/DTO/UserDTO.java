package likelion.Sugang.DTO;

import lombok.*;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private Integer userId;
    private String password;
    private String name;
    private Integer birth;
    private String sex;
    private String studentDepartment;
    private String status;
    private Integer type;
}
