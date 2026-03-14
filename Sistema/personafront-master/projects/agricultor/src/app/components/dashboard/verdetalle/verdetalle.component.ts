import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-verdetalle',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './verdetalle.component.html',
  styleUrl: './verdetalle.component.css'
})
export class VerdetalleComponent {
  noDeCuentaAsociado: string = 'ACC-5521';

  displayedColumns: string[] = [
    'id',
    'placa',
    'transportista',
    'peso',
    'medida',
    'fecha'
  ];

  // Datos de ejemplo
  dataSourceParcialidades = [
    {
      id: 'PAR-001',
      placa: 'C-123BJK',
      transportista: 'Juan Manuel Pérez',
      peso: '450.00',
      medida: 'Kilogramos',
      fecha: '13/03/2026'
    }
  ];

  constructor() {

  }
}
