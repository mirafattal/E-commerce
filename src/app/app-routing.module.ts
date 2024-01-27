import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/main/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './core/guards/auth.guard';
import { loginGuard } from './core/guards/login.guard';
import { PersonDetailsComponent } from './components/person/person-detail/person-detail.component';
import { ElectronicsComponent } from './components/Supplies/electronics/electronics.component';
import { GardenComponent } from './components/Supplies/garden/garden.component';
import { HealthproductsComponent } from './components/Supplies/healthproducts/healthproducts.component';
import { PetsproductComponent } from './components/Supplies/petsproduct/petsproduct.component';
import { SchoolproductsComponent } from './components/Supplies/schoolproducts/schoolproducts.component';
import { VehiclesComponent } from './components/Supplies/vehicles/vehicles.component';
import { ProductDetailsComponent } from './components/product/product-detail/product-detail.component';
import { CartComponent } from './components/main/cart/cart.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
  path: 'dashboard',
  component: DashboardComponent,
  canActivate: [authGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [loginGuard]
  },
  {
    path: 'Person',
    component: PersonDetailsComponent,
    canActivate: [authGuard]
  },
  {
    path: 'Cart',
    component: CartComponent,
    canActivate: [authGuard]
  },
  {
  path: 'Product',
  component: ProductDetailsComponent,
  canActivate: [authGuard]
  },
  {
    path: 'Electronics',
    component: ElectronicsComponent,
  },
  {
    path: 'garden',
    component: GardenComponent,
  },
  {
    path: 'healthproducts',
    component: HealthproductsComponent,
  },
  {
    path: 'petsproduct',
    component: PetsproductComponent,
  },
  {
    path: 'schoolproducts',
    component: SchoolproductsComponent,
  },
  {
    path: 'vehicles',
    component: VehiclesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
