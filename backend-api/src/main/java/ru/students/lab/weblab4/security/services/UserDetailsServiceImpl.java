package ru.students.lab.weblab4.security.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import ru.students.lab.weblab4.models.UserEntity;
import ru.students.lab.weblab4.repositories.UserRepository;

/**
 * Implementation to fetch the UserEntity instance using the username
 * */
@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        UserEntity user = userRepository.findByUsername(s)
                .orElseThrow(() ->
                        new UsernameNotFoundException("Not found user with this username: " + s));

        return new User(user.getUsername(), user.getPassword(), AuthorityUtils.NO_AUTHORITIES);
    }
}
