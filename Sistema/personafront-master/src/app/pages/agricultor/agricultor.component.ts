import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-agricultor',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatBadgeModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule
  ],
  templateUrl: './agricultor.component.html',
  styleUrl: './agricultor.component.css'
})
export class AgricultorComponent {

  productos = [
    { nombre: 'Registrar Pesajes', icon: 'scale' },
    { nombre: 'Crear Parcialidades', icon: 'inventory_2' },
    { nombre: 'Registrar Transporte', icon: 'local_shipping' },
    { nombre: 'Registrar Transportistas', icon: 'person' }
  ];

}
