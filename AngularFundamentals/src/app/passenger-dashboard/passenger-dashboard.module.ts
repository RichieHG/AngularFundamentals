import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";

// Containers
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";

//Components
import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component";
import { PassengerDetailComponent } from "./components/passenger-detail/passenger-detail.component";

//Service
import { PassengerDashboardService } from "./passenger-dashboard.service";
import { LocalDataServerService } from "../local-data-server/local-data-server.service";

@NgModule({
  declarations:[
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent
  ],
  imports: [
    //Angular Modules
    CommonModule,
    HttpClientModule
    // HttpClientInMemoryWebApiModule,
    // HttpClientInMemoryWebApiModule.forRoot(LocalDataServerService)
  ],
  exports:[
    PassengerDashboardComponent
  ],
  providers: [
    PassengerDashboardService
  ]
})
export class PassengerDashboardModule{}
