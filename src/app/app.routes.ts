import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TransacaoComponent } from './transacao/transacao.component';

export const routes: Routes = [
      { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'transacao', component: TransacaoComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' }, // Default route

];
