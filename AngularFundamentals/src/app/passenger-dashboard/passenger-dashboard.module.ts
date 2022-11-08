//Angular Modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
// Containers
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";
import { PassengerViewerComponent } from "./containers/passenger-viewer/passenger-viewer.component";

//Components
import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component";
import { PassengerDetailComponent } from "./components/passenger-detail/passenger-detail.component";
import { PassengerFormComponent } from "./components/passenger-form/passenger-form.component";

//Service
import { PassengerDashboardService } from "./passenger-dashboard.service";
import { LocalDataServerService } from "../local-data-server/local-data-server.service";

const routes: Routes =[
  {
    path:'passengers',
    children: [
      {
        path: '',
        component: PassengerDashboardComponent
      },
      {
        path:':id',
        component: PassengerViewerComponent
      }
    ]
  }
];

@NgModule({
  declarations:[
    PassengerDashboardComponent,
    PassengerViewerComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerFormComponent
  ],
  imports: [
    //Angular Modules
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes)
    // HttpClientInMemoryWebApiModule,
    // HttpClientInMemoryWebApiModule.forRoot(LocalDataServerService)
  ],
  exports:[
    PassengerDashboardComponent,
    PassengerViewerComponent
  ],
  providers: [
    PassengerDashboardService
  ]
})
export class PassengerDashboardModule{}
