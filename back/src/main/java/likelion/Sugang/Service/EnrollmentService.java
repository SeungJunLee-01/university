package likelion.Sugang.Service;

import likelion.Sugang.DAO.EnrollmentDAO;
import likelion.Sugang.DTO.EnrollmentDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EnrollmentService {

    private final EnrollmentDAO enrollmentDAO;

    public EnrollmentService(EnrollmentDAO enrollmentDAO) {
        this.enrollmentDAO = enrollmentDAO;
    }

    public EnrollmentDTO addEnrollment(EnrollmentDTO enrollmentDTO){
        return enrollmentDAO.addEnrollment(enrollmentDTO);
    }

    public List<EnrollmentDTO> getEnrollmentsByStudentId(Integer studentId){
        return enrollmentDAO.getEnrollmentsByStudentId(studentId);
    }

}