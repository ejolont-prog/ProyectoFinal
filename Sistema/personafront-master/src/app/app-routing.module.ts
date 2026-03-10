import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgricultorComponent } from './pages/agricultor/agricultor.component';
import { BeneficioComponent } from './pages/beneficio/beneficio.component';
import { PesoCabalComponent } from './pages/peso-cabal/peso-cabal.component';

const routes: Routes = [
    { path: 'agricultor', component: AgricultorComponent },
    { path: 'beneficio', component: BeneficioComponent },
    { path: 'peso-cabal', component: PesoCabalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
