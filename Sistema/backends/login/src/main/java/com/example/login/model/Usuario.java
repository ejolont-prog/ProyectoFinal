package com.example.login.model;

import jakarta.persistence.*;
import lombok.Data;
import java.io.Serializable;

@Entity
@Data
@Table(name = "usuarios") // Es recomendable que la tabla se llame usuarios
public class Usuario implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String rol; // Aquí irá "AGRICULTOR", "INGENIO", etc.

    private String nombre;
    private String apellido;
}