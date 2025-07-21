import { Component, computed, HostBinding, input, OnInit, signal } from '@angular/core';
import { Widget } from '../../models/dashboard';
import { NgComponentOutlet } from '@angular/common';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { WidgetOptionsComponent } from '../widget-options/widget-options.component';
@Component({
  selector: 'app-widgets',
  imports: [NgComponentOutlet,CommonModule,MatIconModule,MatButtonModule,WidgetOptionsComponent],
  templateUrl: './widgets.component.html',
  styleUrl: './widgets.component.css'
})
export class WidgetsComponent  {
 
  // @HostBinding('style.grid-area') gridArea!: string;
  data= input.required<Widget>();
  showOptions = signal(false);
   

      // computed signal reacting to data changes
  gridArea = computed(() => {
    const rows = this.data().rows ?? 1;
    const columns = this.data().column ?? 1;
    return `span ${rows} / span ${columns}`;
  });


   // Bind the computed signal's value to host style
  @HostBinding('style.grid-area')
  get gridAreaStyle() {
    return this.gridArea();
  }



   // computed background color (example: from data().backgroundColor or default)
  backgroundColor = computed(() => {
    return this.data().backgroundColor ?? '#003f5c';
  });

  // computed text color (example: from data().color or default)
  textColor = computed(() => {
    return this.data().color ?? 'whitesmoke';
  });


    @HostBinding('style.background-color')
  get backgroundColorStyle() {
    return this.backgroundColor();
  }

  @HostBinding('style.color')
  get textColorStyle() {
    return this.textColor();
  }

}
