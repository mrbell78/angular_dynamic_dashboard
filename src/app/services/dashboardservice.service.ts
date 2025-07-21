import { computed, Injectable, signal } from '@angular/core';
import { Widget } from '../models/dashboard';
import { SubscriberComponent } from '../pages/dashboard/widget/subscriber/subscriber.component';
import { ViewsComponent } from '../pages/dashboard/widget/views/views.component';
import { WatchtimeComponent } from '../pages/dashboard/widget/watchtime/watchtime.component';
import { RevenueComponent } from '../pages/dashboard/widget/revenue/revenue.component';




@Injectable()
export class DashboardserviceService {

  widgets= signal<Widget[]>([
    {
        id:1,
        label:"Reuseable Component",
        content: SubscriberComponent,
      },
      {
        id:2,
        label:"Views",
        content: ViewsComponent
      },
      {
        id:3,
        label:"Watch Time",
        content: WatchtimeComponent
      },
      {
        id:4,
        label:"Revenue",
        content: RevenueComponent
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
    console.log("function called started");
    const index = this.addedWidgets().findIndex(w=>w.id==id);

    if(index!==-1){
      const newWidget = [...this.addedWidgets()];
      newWidget[index] ={...newWidget[index],...widget};
      this.addedWidgets.set(newWidget);
      console.log("column is "+  newWidget[index].column);
      console.log("row is "+  newWidget[index].rows);
    }
    
  }
  
  moveWidgetToRight(id:any){
    const index = this.addedWidgets().findIndex(w=>w.id===id);

    if(index === this.addedWidgets().length-1){
      return;
    }
    const newWidget = [...this.addedWidgets()];
    [newWidget[index],newWidget[index+1]]=[{...newWidget[index+1]},{...newWidget[index]}];

    this.addedWidgets.set(newWidget);

  }

   moveWidgetToRLeft(id:any){
    const index = this.addedWidgets().findIndex(w=>w.id===id);

    if(index === 0){
      return;
    }
    const newWidget = [...this.addedWidgets()];
    [newWidget[index],newWidget[index-1]]=[{...newWidget[index-1]},{...newWidget[index]}];
    this.addedWidgets.set(newWidget);
  }

   deleteWidget(id:any){
    const index = this.addedWidgets().findIndex(w=>w.id===id);

    if(index === - 1){
      return;
    }
    const newWidget = [...this.addedWidgets()];
     newWidget.splice(index, 1);
    this.addedWidgets.set(newWidget);
  }
   
   

  constructor() { }
}
