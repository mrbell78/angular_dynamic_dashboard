import { Component, HostBinding, input, OnInit, signal } from '@angular/core';
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
export class WidgetsComponent  implements OnInit {
   ngOnInit() {
    const rows = this.data().rows ?? 1;
    const columns = this.data().column ?? 1;
    this.gridArea = `span ${rows} / span ${columns}`;
    console.log("Grid Area Set To:", this.gridArea);
  }
  data= input.required<Widget>();
  showOptions = signal(false);
   @HostBinding('style.grid-area') gridArea!: string;
}
