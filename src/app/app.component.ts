import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WidgetsComponent } from './component/widgets/widgets.component';
import { Widget } from './models/dashboard';
import { DashboardserviceService } from './services/dashboardservice.service';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatCardModule,
    MatButtonModule,
    WidgetsComponent,
    MatIcon,
    MatMenuModule
    

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[DashboardserviceService]
})
export class AppComponent {
  title = 'dashboard';
  store = inject(DashboardserviceService);
   add(w: Widget) {
    this.store.addWidgets(w); // ✅ Safe to write signal here
  }
}
