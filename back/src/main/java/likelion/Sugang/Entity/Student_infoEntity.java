package likelion.Sugang.Entity;

import jakarta.persistence.*;
import likelion.Sugang.DTO.GradeDTO;
import likelion.Sugang.DTO.Student_infoDTO;
import lombok.*;

@Entity
@Table
@Builder
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor

public class Student_infoEntity {
    @Id
    @Column(name = "studentinfo_id")
    private Integer studentinfo_id;

    @OneToOne
    @MapsId
    @JoinColumn(name = "studentinfo_id", referencedColumnName = "user_id")
    private UserEntity user;

    @Column
    private Integer status;

    public Student_infoDTO toDTO() {
        return Student_infoDTO.builder()
                .user(studentinfo_id)
                .status(status)
                .build();
    }
}
