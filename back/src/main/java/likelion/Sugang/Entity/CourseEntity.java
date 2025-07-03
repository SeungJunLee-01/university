package likelion.Sugang.Entity;

import jakarta.persistence.*;
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
    private Integer course_id;

    @Column
    private String course_name;

    @Column
    private String semester;

    // 교수:강의 = 1:N 관계 (N 쪽)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "prof_id", referencedColumnName = "user_id", nullable = false) // 교수의 ID
    private UserEntity user_id;
}
