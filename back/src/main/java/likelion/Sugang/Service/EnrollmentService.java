package likelion.Sugang.Service;

import likelion.Sugang.DAO.EnrollmentDAO;
import likelion.Sugang.DTO.EnrollmentDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EnrollmentService {

    private final EnrollmentDAO enrollmentDAO;
// 수강 신청
    public EnrollmentDTO addEnrollment(EnrollmentDTO enrollmentDTO) {
        return enrollmentDAO.addEnrollment(enrollmentDTO);
    }
}