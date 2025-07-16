import { Injectable, signal } from '@angular/core';
import { Widget } from '../models/dashboard';
import { SubscriberComponent } from '../pages/dashboard/widget/subscriber/subscriber.component';
import { ViewsComponent } from '../pages/dashboard/widget/views/views.component';

@Injectable({
  providedIn: 'root'
})
export class DashboardserviceService {

  widgets= signal<Widget[]>([
    {
        id:1,
        label:"Reuseable Component",
        content: SubscriberComponent
      },
      {
        id:2,
        label:"Views",
        content: ViewsComponent
      }
  ]);

  constructor() { }
}
