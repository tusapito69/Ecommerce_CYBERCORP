import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './component/producto/producto.component';
import { CarritoComponent } from './component/carrito/carrito.component';

const routes: Routes = [
  { path: '', component: ProductoComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
