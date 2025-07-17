package likelion.Sugang.Entity;

import jakarta.persistence.*;
import likelion.Sugang.DTO.UserDTO;
import likelion.Sugang.Enum.UserType;
import lombok.*;

@Entity
@Table(name = "user")
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class UserEntity {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Integer userId;

    @Column
    private Integer userNumber;

    @Column
    private String password;

    @Column
    private String name;

    @Column
    private Integer birth;

    @Column
    private String sex;

    @Column
    private String studentDepartment;

    @Column
    private String status;

    @Enumerated(EnumType.STRING) // DB에 "STUDENT" 같은 문자열로 저장됨
    @Column
    private UserType type;

    public UserDTO toDTO(){
        return UserDTO.builder()
                .userId(userId)
                .userNumber(userNumber)
                .password(password)
                .name(name)
                .birth(birth)
                .sex(sex)
                .studentDepartment(studentDepartment)
                .status(status)
                .type(type)
                .build();
    }
}
