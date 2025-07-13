package likelion.Sugang.DAO;
import likelion.Sugang.Entity.UserEntity;
import likelion.Sugang.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import java.util.Optional;
import likelion.Sugang.Enum.UserType;
//
@Component
@RequiredArgsConstructor
public class UserDAO {
    private final UserRepository userRepository;

    public Optional<UserEntity> findStudentById(Integer userId) {
        return userRepository.findByUserIdAndType(userId, UserType.STUDENT);
    }

    public Optional<UserEntity> findProfessorById(Integer userId) {
        return userRepository.findByUserIdAndType(userId, UserType.PROFESSOR);
    }

    public Optional<UserEntity> findById(Integer userId) {
        return userRepository.findById(userId);
    }

    public UserEntity save(UserEntity userEntity) {
        return userRepository.save(userEntity);
    }
}
