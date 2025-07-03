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

public class Student_infoEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column
    private Integer status;
    @Column
    private Integer id;
}
