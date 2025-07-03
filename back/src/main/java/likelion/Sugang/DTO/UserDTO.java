package likelion.Sugang.DTO;

import jakarta.persistence.Column;
import lombok.*;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private Long user_id;
    private String user_name;
    private Long user_birth;
    private String user_sex;
    private String user_department;
    private Long type;
}
