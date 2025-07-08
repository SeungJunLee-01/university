package likelion.Sugang.DAO;

import likelion.Sugang.DTO.UserDTO;
import likelion.Sugang.Entity.UserEntity;
import likelion.Sugang.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import java.util.List;
import java.util.Optional;

@Component
@RequiredArgsConstructor
public class UserDAO {


    private final UserRepository userRepository; //final 붙여야함.

    public Optional<UserEntity> findStudentById(Integer userId) {
        return userRepository.findByUserIdAndType(userId, 1);
    }

    public Optional<UserEntity> findProfessorById(Integer userId) {
        return userRepository.findByUserIdAndType(userId, 0);
    }

    public Optional<UserEntity> findById(Integer userId) {
        return userRepository.findById(userId);
    }

    public UserEntity save(UserEntity userEntity) {
        return userRepository.save(userEntity);
    }
}
