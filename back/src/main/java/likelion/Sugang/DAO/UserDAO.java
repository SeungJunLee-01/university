package likelion.Sugang.DAO;

import likelion.Sugang.DTO.UserDTO;
import likelion.Sugang.Entity.UserEntity;
import likelion.Sugang.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import java.util.List;

@Component
@RequiredArgsConstructor
public class UserDAO {
    private final UserRepository userRepository;

    public UserDTO adduser(String user_name,Long user_birth,String user_sex,String user_department,Long type) {
        return userRepository.save(UserEntity.builder()
                .user_name(user_name)
                .user_birth(user_birth)
                .user_sex(user_sex)
                .user_department(user_department)
                .type(type)
                .build()).toDTO();
    }
}
