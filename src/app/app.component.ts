import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WidgetsComponent } from './component/widgets/widgets.component';
import { Widget } from './models/dashboard';
import { SubscriberComponent } from './pages/dashboard/widget/subscriber/subscriber.component';
import { DashboardserviceService } from './services/dashboardservice.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatCardModule,
    MatButtonModule,
    WidgetsComponent

  ],
  providers: [DashboardserviceService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dashboard';
  //store = Inject(DashboardserviceService);
   widgets: Widget[] = [];
  constructor(private service:DashboardserviceService){
      this.widgets = this.service.widgets();
  };

 
  
}
