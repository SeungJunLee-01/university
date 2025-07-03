package likelion.Sugang.Entity;

import jakarta.persistence.*;
import likelion.Sugang.DTO.UserDTO;
import lombok.*;

@Entity
@Table(name = "course")
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CourseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer course_id;

    @Column
    private String course_name;
    // 연관관계 매핑: 다대일
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)  // 외래키 칼럼 이름 지정
    private UserEntity user;


}
