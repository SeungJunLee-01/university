package likelion.Sugang.Entity;

import jakarta.persistence.*;
import likelion.Sugang.DTO.GradeDTO;
import lombok.*;

@Entity
@Table(name = "GradeEntity") // 테이블명 명시 (선택)
@Builder
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class GradeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer gradeId;

    @Column
    private Integer middleScore;

    @Column
    private Integer finalScore;

    @Column
    private Integer assignment;

    @Column
    private Integer attendance;

    @Column
    private String letterGrade;

    // 학생:성적 = 1:N 관계 (N 쪽)
    @ManyToOne
    @JoinColumn(name = "studentId", referencedColumnName = "userId")
    private UserEntity studentId;

    // 강의:성적 = 1:N 관계 (N 쪽)
    @ManyToOne
    @JoinColumn(name = "courseId", referencedColumnName = "courseId")
    private CourseEntity courseId;

    public GradeDTO toDTO() {
        return GradeDTO.builder()
                .studentId(studentId.getUserId())
                .gradeId(gradeId)
                .courseId(courseId.getCourseId())
                .middleScore(middleScore)
                .finalScore(finalScore)
                .assignment(assignment)
                .attendance(attendance)
                .letterGrade(letterGrade)
                .build();
    }
}