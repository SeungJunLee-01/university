package likelion.Sugang.Repository;

import likelion.Sugang.Entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {

    // type으로 교수(0), 학생(1) 전체 리스트 조회
    List<UserEntity> findByType(Integer type);

    // 특정 id의 학생 조회 (type = 1)
    Optional<UserEntity> findByUserIdAndType(Integer userId, Integer type);
}
