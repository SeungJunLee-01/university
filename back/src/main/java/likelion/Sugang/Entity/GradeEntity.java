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
    private Integer grade_id;

    @Column
    private Integer score;

    @Column
    private String letter_grade;

    // 학생:성적 = 1:N 관계 (N 쪽)
    @ManyToOne
    @JoinColumn(name = "student_id", referencedColumnName = "user_id")
    private UserEntity user_id;

    // 강의:성적 = 1:N 관계 (N 쪽)
    @ManyToOne
    @JoinColumn(name = "course_id", referencedColumnName = "course_id")
    private CourseEntity course_id;

    public GradeDTO toDTO() {
        return GradeDTO.builder()
                .student_id(user_id.getUser_id())
                .grade_id(grade_id)
                .course_id(course_id.getCourse_id())
                .score(score)
                .letter_grade(letter_grade)
                .build();
    }
}
