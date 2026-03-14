import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Importaciones de Angular Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table'; // <--- Nueva importación

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule // <--- Añadir aquí
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  // Datos para las tarjetas (Iconos actualizados)
  productos = [
    { nombre: 'Pesajes', icon: 'scale', route: '/pesajes' },
    { nombre: 'Transportes', icon: 'local_shipping', route: '/transporte' },
    { nombre: 'Transportistas', icon: 'badge', route: '/transportista' }
  ];

  // Configuración de la tabla
  // Los nombres deben coincidir exactamente con los matColumnDef del HTML
  displayedColumns: string[] = ['col1', 'col2', 'col3', 'col4', 'col5', 'col6', 'acciones'];

  // Datos de ejemplo para la tabla (puedes cargarlos luego desde un servicio)
  dataSource = [
    {
      id: 'P-001',
      fecha: 'ACC-5521',
      nombre: '1,250 kg',
      producto: '3',
      cantidad: '14/03/2026',
      estado: 'Enviado'
    }
  ];
}
