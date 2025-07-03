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
    private Long user_id;

    @Column
    private String user_name;

    @Column
    private Long user_birth;

    @Column
    private String user_sex;

    @Column
    private String user_department;

    @Column
    private Long type;

    public UserDTO toDTO(){
        return UserDTO.builder()
                .user_id(user_id)
                .user_name(user_name)
                .user_birth(user_birth)
                .user_sex(user_sex)
                .user_department(user_department)
                .type(type)
                .build();
    }
}
