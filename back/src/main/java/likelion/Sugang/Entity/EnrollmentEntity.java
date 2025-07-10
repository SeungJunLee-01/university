package likelion.Sugang.Entity;

import jakarta.persistence.*;
import likelion.Sugang.DTO.EnrollmentDTO;
import lombok.*;

@Entity
@Table (name = "enrollment")
@Builder
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor

public class EnrollmentEntity {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Integer enrollmentId;

    @ManyToOne
    @JoinColumn(name = "studentId",referencedColumnName = "userId")
    private UserEntity studentId;

    @ManyToOne
    @JoinColumn(name = "courseId",referencedColumnName = "courseId")
    private CourseEntity courseId;

    public EnrollmentDTO toDTO(){
        return EnrollmentDTO.builder()
                .enrollmentId(enrollmentId)
                .studentId(studentId.getUserId())
                .courseId(courseId.getCourseId())
                .build();
    }
}