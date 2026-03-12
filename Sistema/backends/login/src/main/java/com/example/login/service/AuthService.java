package com.example.login.service; // Debe coincidir con donde guardaste el archivo

import com.example.login.dto.LoginRequest;
import com.example.login.model.Usuario;
import com.example.login.repository.UsuarioRepository;
import com.example.login.security.JwtUtil; // ¡Aquí está la magia!
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private JwtUtil jwtUtil;

    public String authenticate(LoginRequest loginRequest) {
        // 1. Aquí es donde ocurre la magia:
        // Dependiendo de loginRequest.getRol(), podrías cambiar la conexión.
        // Por ahora, buscaremos en la DB que el repositorio tenga configurada.

        Optional<Usuario> userOpt = usuarioRepository.findByUsername(loginRequest.getUsername());

        if (userOpt.isPresent()) {
            Usuario usuario = userOpt.get();

            // 2. Validar que la contraseña coincida
            // NOTA: En producción usa BCrypt para comparar contraseñas encriptadas
            if (usuario.getPassword().equals(loginRequest.getPassword())) {

                // 3. Validar que el rol que eligió en Angular coincida con su rol en DB
                if (usuario.getRol().equalsIgnoreCase(loginRequest.getRol())) {

                    // 4. Si todo está OK, generamos el "pasaporte" (Token)
                    return jwtUtil.generateToken(usuario.getUsername(), usuario.getRol());
                }
            }
        }

        return null; // Si algo falla, devolvemos null o podrías lanzar una excepción
    }
}