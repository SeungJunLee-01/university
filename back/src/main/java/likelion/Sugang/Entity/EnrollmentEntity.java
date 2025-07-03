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

    @ManyToOne
    @JoinColumn(name = "student_id",referencedColumnName = "user_id")
    private UserEntity user_id;

    @ManyToOne
    @JoinColumn(name = "course_id",referencedColumnName = "user_id")
    private CourseEntity course_id;

    public EnrollmentDTO toDTO(){
        return EnrollmentDTO.builder()
                .enrollment_id(enrollment_id)
                .student_id(user_id.getUser_id())
                .course_id(course_id.getCourse_id())
                .build();
    }
}