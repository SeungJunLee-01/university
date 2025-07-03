package likelion.Sugang.Entity;

import jakarta.persistence.*;
import likelion.Sugang.DTO.EnrollmentDTO;
import lombok.*;

@Entity
@Table
@Builder
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor

public class EnrollmentEntity {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Integer enrollment_id;

    @Column
    private Integer student_id;

    @Column
    private Integer course_id;

    public EnrollmentDTO toDTO(){
        return EnrollmentDTO.builder()
                .enrollment_id(enrollment_id)
                .student_id(student_id)
                .course_id(course_id)
                .build();
    }

}
