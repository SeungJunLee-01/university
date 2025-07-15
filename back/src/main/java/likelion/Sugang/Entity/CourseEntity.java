package likelion.Sugang.Entity;

import jakarta.persistence.*;
import likelion.Sugang.DTO.CourseDTO;
import likelion.Sugang.DTO.EnrollmentDTO;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "course")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class CourseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer courseId;

    @Column
    private Integer courseCode;

    @Column
    private String courseName;

    @Column
    private String semester;
    @Column
    private Integer credits;

    // 교수:강의 = 1:N 관계 (N 쪽)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "profId", referencedColumnName = "userId", nullable = false) // 교수의 ID
    private UserEntity userId;

    public CourseDTO toDTO(){
        return CourseDTO.builder()
                .courseId(courseId)
                .courseCode(courseCode)
                .courseName(courseName)
                .semester(semester)
                .credits(credits)
                .profId(userId.getUserId())
                .build();
    }
}