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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer user_id;

    @Column
    private String name;

    @Column
    private Integer birth;

    @Column
    private String sex;

    @Column
    private String student_department;

    @Column
    private String status;

    @Column
    private Integer type;

    public UserDTO toDTO(){
        return UserDTO.builder()
                .user_id(user_id)
                .name(name)
                .birth(birth)
                .sex(sex)
                .student_department(student_department)
                .status(status)
                .type(type)
                .build();
    }
}
