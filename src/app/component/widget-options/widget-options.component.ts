import { Component, inject, input, model } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Widget } from '../../models/dashboard';
import { DashboardserviceService } from '../../services/dashboardservice.service';

@Component({
  selector: 'app-widget-options',
  imports: [MatButtonModule,MatIcon,MatButtonToggleModule],
  templateUrl: './widget-options.component.html',
  styleUrl: './widget-options.component.css'
})
export class WidgetOptionsComponent {

  data= input.required<Widget>();
  showOptions = model<boolean>(false);
  store = inject(DashboardserviceService);
}
