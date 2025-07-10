package likelion.Sugang.Service;

import jakarta.annotation.PostConstruct;
import likelion.Sugang.DAO.UserDAO;
import likelion.Sugang.DTO.UserDTO;
import likelion.Sugang.DTO.UserLoginDTO;
import likelion.Sugang.Entity.UserEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import likelion.Sugang.Enum.UserType;


import java.util.Optional;

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
        // DTO -> Entity 변환
        UserEntity userEntity = UserEntity.builder()
                .userId(userDTO.getUserId())
                .name(userDTO.getName())
                .birth(userDTO.getBirth())
                .sex(userDTO.getSex())
                .studentDepartment(userDTO.getStudentDepartment())
                .status(userDTO.getStatus())
                .type(userDTO.getType())
                .password(userDTO.getPassword())
                .build();

        UserEntity savedEntity = userDAO.save(userEntity);

        return savedEntity.toDTO();
    }

    public UserDTO login(UserLoginDTO userDTO) {
        Optional<UserEntity> userOpt = userDAO.findById(userDTO.getUserId());

        if (userOpt.isEmpty()) {
            return null;  // 유저 없음
        }

        UserEntity user = userOpt.get();

        if (user.getType() == null || user.getType() != UserType.STUDENT) {
            return null;
        }

        if (user.getPassword() == null || !user.getPassword().equals(userDTO.getPassword())) {
            return null;  // 비밀번호 불일치
        }

        return userDAO.findStudentById(userDTO.getUserId())
                .orElseThrow(() -> new RuntimeException("뭔가 잘못됨"))
                .toDTO();
    }
}
