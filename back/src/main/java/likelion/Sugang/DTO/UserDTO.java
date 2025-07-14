package likelion.Sugang.DTO;

import likelion.Sugang.Enum.UserType;
import lombok.*;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private Integer userId;
    private Integer userNumber;
    private String password;
    private String name;
    private Integer birth;
    private String sex;
    private String studentDepartment;
    private String status;
    private UserType type;
}
//