import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";

import { PassengerDashboardModule } from "./passenger-dashboard/passenger-dashboard.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home.component";
import { NotFoundComponent } from "./not-found.component";

const routes: Routes = [
  {
    path: '',
    // component: HomeComponent,
    redirectTo: '/passengers',
    pathMatch: 'full'
  },
  {
    path:'**',
    component: NotFoundComponent
  }
];
@NgModule({
  declarations:[
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    // Angular Modules
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
    //Custom Modules
    PassengerDashboardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule{

}
