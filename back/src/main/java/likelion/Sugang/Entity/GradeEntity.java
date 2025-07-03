package likelion.Sugang.Entity;

import jakarta.persistence.*;
import likelion.Sugang.DTO.GradeDTO;
import lombok.*;

@Entity
@Table
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
    private Integer course_id;

    @Column
    private Integer student_id;
    @Column
    private Integer score;
    @Column
    private String letter_grade;

    public GradeDTO toDTO(){
        return GradeDTO.builder()
                .grade_id(grade_id)
                .course_id(course_id)
                .score(score)
                .letter_grade(letter_grade)
                .build();
    }
}

