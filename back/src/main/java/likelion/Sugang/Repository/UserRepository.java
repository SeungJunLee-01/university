package likelion.Sugang.Repository;

import likelion.Sugang.Entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import likelion.Sugang.Enum.UserType; // enum import 추가

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {

    List<UserEntity> findByType(UserType type);

    Optional<UserEntity> findByUserIdAndType(Integer userId, UserType type);
}
