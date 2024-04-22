import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { QuienesComponent } from './quienes/quienes.component';
import { DondeComponent } from './donde/donde.component';
import { ComentariosComponent } from './comentarios/comentarios.component';

export const routes: Routes = [
    {path:"inicio", component:InicioComponent},
    {path:"quienes", component:QuienesComponent},
    {path:"donde", component:DondeComponent},
    {path:"comentarios", component:ComentariosComponent}
];
