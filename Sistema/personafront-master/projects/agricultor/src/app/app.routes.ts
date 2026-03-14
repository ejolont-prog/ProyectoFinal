import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ParcialidadesComponent } from './components/parcialidades/parcialidades.component';
import { PesajesComponent } from './components/pesajes/pesajes.component';
import { TransporteComponent } from './components/transporte/transporte.component';
import { TransportistaComponent } from './components/transportista/transportista.component';
import { NuevaparcialidadComponent } from './components/parcialidades/nuevaparcialidad/nuevaparcialidad.component';
import { VerdetalleComponent } from './components/dashboard/verdetalle/verdetalle.component';
import { CrearpesajeComponent } from './components/pesajes/crearpesaje/crearpesaje.component';
import { VerdetallepesajeComponent } from './components/pesajes/verdetallepesaje/verdetallepesaje.component';


export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard/verdetalle', component: VerdetalleComponent },
  { path: 'parcialidades', component: ParcialidadesComponent },
  { path: 'parcialidades/nueva', component: NuevaparcialidadComponent },
  { path: 'pesajes', component: PesajesComponent },
  { path: 'pesajes/verdetallepesaje', component: VerdetallepesajeComponent },
  { path: 'crearpesaje', component: CrearpesajeComponent },
  { path: 'transporte', component: TransporteComponent },
  { path: 'transportista', component: TransportistaComponent }
];
