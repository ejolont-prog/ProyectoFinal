import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AgricultorComponent } from './pages/agricultor/agricultor.component';
import { BeneficioComponent } from './pages/beneficio/beneficio.component';
import { PesoCabalComponent } from './pages/peso-cabal/peso-cabal.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'agricultor', component: AgricultorComponent },
    { path: 'beneficio', component: BeneficioComponent },
    { path: 'peso-cabal', component: PesoCabalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
