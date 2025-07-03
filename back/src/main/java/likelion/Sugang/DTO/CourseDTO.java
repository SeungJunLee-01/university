package likelion.Sugang.DTO;

import jakarta.persistence.Column;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import likelion.Sugang.Entity.UserEntity;
import lombok.*;

@Builder
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class CourseDTO {
    private Integer course_id;
    private String course_name;
    private UserEntity user;

}
