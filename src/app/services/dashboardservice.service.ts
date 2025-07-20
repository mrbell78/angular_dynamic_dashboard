import { computed, Injectable, signal } from '@angular/core';
import { Widget } from '../models/dashboard';


import { SubscribercomponentComponent } from '../pages/dashboard/widgets/subscribercomponent/subscribercomponent.component';
import { ViewscomponentComponent } from '../pages/dashboard/widgets/viewscomponent/viewscomponent.component';

@Injectable()
export class DashboardserviceService {

  widgets= signal<Widget[]>([
    {
        id:1,
        label:"Reuseable Component",
        content: SubscribercomponentComponent,
      },
      {
        id:2,
        label:"Views",
        content: ViewscomponentComponent
      }
  ]);

  addedWidgets = signal<Widget[]>([]);

 widgetsToAdd = computed(() => {
    const addedIds = this.addedWidgets().map((w: Widget) => w.id);
    return this.widgets().filter(w => !addedIds.includes(w.id));
  });


  addWidgets(w:Widget){
    this.addedWidgets.set([...this.addedWidgets(),{...w}])
  }

  updateWidget(id:number,widget:Partial<Widget>){
    const index = this.addedWidgets().findIndex(w=>w.id==id);

    if(index!==-1){
      const newWidget = [...this.addedWidgets()];
      newWidget[index] ={...newWidget[index],...widget};
      this.addedWidgets.set(newWidget);
    }
  }
  

   

  constructor() { }
}
