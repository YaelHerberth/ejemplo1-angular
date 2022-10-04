import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperaBasComponent } from './formularios/opera-bas/opera-bas.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { CinepolisComponent } from './cinepolis/cinepolis.component';

const routes: Routes = [
  {path:'productos', component: ProductListComponent},
  {path:'multiplicacion', component: OperaBasComponent},
  {path:'cinepolis', component: CinepolisComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
