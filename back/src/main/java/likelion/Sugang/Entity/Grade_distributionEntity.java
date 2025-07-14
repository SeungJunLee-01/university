package likelion.Sugang.Entity;

import likelion.Sugang.DTO.Grade_distributionDTO;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "grade_distribution")
@Builder
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
//
public class Grade_distributionEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer distributionId;

    @OneToOne
    @MapsId
    @JoinColumn(name = "courseId", referencedColumnName = "courseId", unique = true)
    private CourseEntity courseId;

    @Column
    private Integer middleWeight;

    @Column
    private Integer finalWeight;

    @Column
    private Integer assignmentWeight;

    @Column
    private Integer attendanceWeight;

    public Grade_distributionDTO toDTO() {
        return Grade_distributionDTO.builder()
                .distributionId(distributionId)
                .courseId(courseId.getCourseId())
                .middleWeight(middleWeight)
                .finalWeight(finalWeight)
                .assignmentWeight(assignmentWeight)
                .attendanceWeight(attendanceWeight)
                .build();
    }
}