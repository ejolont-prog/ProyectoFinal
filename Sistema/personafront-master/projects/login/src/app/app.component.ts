import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// 1. IMPORTANTE: Agregar Validators a la importación
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
// 2. IMPORTANTE: Agregar MatSelectModule
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule // 3. IMPORTANTE: Agregar al array de imports
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required], // Agregué validación
      password: ['', Validators.required], // Agregué validación
      rol: ['pesocabal', Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      console.log("Enviando al backend:", this.loginForm.value);
    } else {
      console.log("Formulario inválido");
    }
  }
}
