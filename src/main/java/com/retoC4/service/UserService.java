/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.retoC4.service;

import com.retoC4.model.User;
import com.retoC4.repository.UserRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author dibier
 */
@Service
public class UserService {
    @Autowired
    private UserRepository repository;
    
    public List<User> getAll() {
        return repository.getAll();
    }
    
    public Optional<User> getUser(int id) {
        return repository.getUser(id);
    }
    
    public User registrar(User user) {
        if(user.getId() == null) {
            if(existeEmail(user.getEmail()) == false) {
                return repository.save(user);
            } else {
                return user;
            }
        } else {
            return user;
        }
    }
    
    public boolean existeEmail(String email) {
        return repository.existeEmail(email);
    }
    
    public User autenticarUsuario(String email, String password) {
        Optional<User> usuario = repository.autenticarUsuario(email, password);
        if(usuario.isEmpty()) {
            return new User(email, password, "NO DEFINIDO");
        } else {
            return usuario.get();
        }
    }
}
