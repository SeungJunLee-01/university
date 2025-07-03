package likelion.Sugang.Entity;

import jakarta.persistence.*;
import likelion.Sugang.DTO.CourseDTO;
import likelion.Sugang.DTO.UserDTO;
import lombok.*;

import java.util.List;

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
    private Integer userid;

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
                .userid(userid)
                .name(name)
                .birth(birth)
                .sex(sex)
                .student_department(student_department)
                .status(status)
                .type(type)
                .build();
    }

    // 1:1 매핑 - Student_infoEntity
    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "student_info_id", referencedColumnName = "user_id") // 외래키
    private Student_infoEntity studentInfo;


}
