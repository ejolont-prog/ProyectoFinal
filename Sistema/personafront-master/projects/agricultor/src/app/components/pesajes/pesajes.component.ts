import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pesajes',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './pesajes.component.html',
  styleUrl: './pesajes.component.css'
})
export class PesajesComponent {
  displayedColumns: string[] = ['id', 'cuenta', 'peso', 'parcialidades', 'fecha', 'estado', 'acciones'];

  dataSource = [
    { id: 'PES-101', cuenta: 'ACC-5521', peso: '2,500 kg', parcialidades:'1', estado: 'Completado', fecha: '12/03/2026' }
  ];
}
