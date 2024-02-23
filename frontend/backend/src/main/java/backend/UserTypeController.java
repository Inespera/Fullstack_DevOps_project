package main.java.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@RestController
@RequestMapping("/api/userTypes")
public class UserTypeController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<UserType> getAllUserTypes() {
        return userService.getAllUserTypes();
    }

    @PostMapping
    public UserType addUserType(@RequestBody UserType userType) {
        return userService.addUserType(userType);
    }

    @DeleteMapping("/{id}")
    public void deleteUserType(@PathVariable Long id) {
        userService.deleteUserType(id);
    }
}

