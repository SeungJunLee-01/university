package likelion.Sugang.Entity;

import jakarta.persistence.*;
import likelion.Sugang.DTO.UserDTO;
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
    private Integer userId;

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

    @Column
    private Integer type;
    //ㅇㅇ
    public UserDTO toDTO(){
        return UserDTO.builder()
                .userId(userId)
                .name(name)
                .birth(birth)
                .sex(sex)
                .studentDepartment(studentDepartment)
                .status(status)
                .type(type)
                .build();
    }
}
