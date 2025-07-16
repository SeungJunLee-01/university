package likelion.Sugang.Entity;

import jakarta.persistence.*;
import likelion.Sugang.DTO.Student_infoDTO;
import lombok.*;

@Entity
@Table(name = "Student_info")
@Builder
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor

public class Student_infoEntity {
    @Id
    @Column(name = "studentInfoId")
    private Integer studentInfoId;

    @OneToOne
    @MapsId
    @JoinColumn(name = "studentInfoId", referencedColumnName = "userId")
    private UserEntity userId;

    @Column
    private Integer status;

    public Student_infoDTO toDTO() {
        return Student_infoDTO.builder()
                .studentInfoId(userId.getUserId())
                .status(status)
                .build();
    }
}
