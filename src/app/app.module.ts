import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/main/toolbar/toolbar.component';
import { DashboardComponent } from './components/main/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SquarePipe } from './core/pipes/square.pipe';
import { HighlightDirective } from './core/directives/highlight.directive';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from './shared/shared.module';
import { ToastrModule } from 'ngx-toastr';
import { SidebarComponent } from './components/main/sidebar/sidebar.component';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ElectronicsComponent } from './components/Supplies/electronics/electronics.component';
import { HomeComponent } from './components/main/home/home.component';
import { PetsproductComponent } from './components/Supplies/petsproduct/petsproduct.component';
import { LanguageComponent } from './components/main/language/language.component';
import { VehiclesComponent } from './components/Supplies/vehicles/vehicles.component';
import { HealthproductsComponent } from './components/Supplies/healthproducts/healthproducts.component';
import { SchoolproductsComponent } from './components/Supplies/schoolproducts/schoolproducts.component';
import { GardenComponent } from './components/Supplies/garden/garden.component';
import { PersonManagementComponent } from './components/person/person-management/person-management.component';
import { PersonDetailsComponent } from './components/person/person-detail/person-detail.component';
import { ConfirmationDialogComponent } from './shared/component/confirmation-dialog/confirmation-dialog.component';
import {MatSelectModule} from '@angular/material/select';
import { ProductDetailsComponent } from './components/product/product-detail/product-detail.component';
import { ProductManagementComponent } from './components/product/product-management/product-management.component';
import { CartComponent } from './components/main/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    DashboardComponent,
    SquarePipe,
    HighlightDirective,
    LoginComponent, SidebarComponent, 
    ElectronicsComponent, HomeComponent, PetsproductComponent, LanguageComponent,
    VehiclesComponent, HealthproductsComponent,
    SchoolproductsComponent, GardenComponent, PersonManagementComponent, 
    PersonDetailsComponent, ConfirmationDialogComponent, ProductDetailsComponent, 
    ProductManagementComponent, CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    SharedModule,
    MatTableModule,
    CdkTableModule,
    MatToolbarModule,
    MatMenuModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    ToastrModule.forRoot(

    )
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
