package likelion.Sugang.Service;

import likelion.Sugang.DAO.UserDAO;
import likelion.Sugang.DTO.UserDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor

public class UserService {
    private final UserDAO userDAO;

    public UserDTO adduser(String user_name,Long user_birth,String user_sex,String user_department,Long type) {
        return userDAO.adduser(user_name,user_birth,user_sex,user_department,type);
    }


}
