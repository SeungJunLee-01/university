package likelion.Sugang.Service;

import likelion.Sugang.DAO.UserDAO;
import likelion.Sugang.DTO.UserDTO;
import likelion.Sugang.Entity.UserEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserDAO userDAO;

    public UserDTO getStudentProfile(Integer userId) {
        UserEntity student = userDAO.findStudentById(userId)
                .orElseThrow(() -> new IllegalArgumentException("해당 학생이 존재하지 않습니다."));

        return student.toDTO();
    }

    public UserDTO registerUser(UserDTO userDTO) {
        // 저장 로직 없이 DTO 그대로 반환
        return userDTO;
    }
}
