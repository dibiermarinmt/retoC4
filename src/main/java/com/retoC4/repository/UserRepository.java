/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.retoC4.repository;

import com.retoC4.model.User;
import com.retoC4.repository.crud.UserCrud;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author dibier
 */
@Repository
public class UserRepository {
    @Autowired
    private UserCrud crud;
    
    public List<User> getAll() {
        return (List<User>) crud.findAll();
    }
    
    public Optional<User> getUser(int id) {
        return crud.findById(id);
    }
    
    public User save(User user) {
        return crud.save(user);
    }
    
    public boolean existeEmail(String email) {
        Optional<User> usuario = crud.findByEmail(email);
        return !usuario.isEmpty();
    }
    
    public Optional<User> autenticarUsuario(String email, String password) {
        return crud.findByEmailAndPassword(email, password);
    }
}
