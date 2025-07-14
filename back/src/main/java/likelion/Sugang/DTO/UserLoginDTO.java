package likelion.Sugang.DTO;

import lombok.*;

@Builder
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UserLoginDTO {
    private Integer userId;
    private String password;
}
//