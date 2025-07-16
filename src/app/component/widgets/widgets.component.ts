import { Component, input } from '@angular/core';
import { Widget } from '../../models/dashboard';
import { NgComponentOutlet } from '@angular/common';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-widgets',
  imports: [NgComponentOutlet,CommonModule],
  templateUrl: './widgets.component.html',
  styleUrl: './widgets.component.scss'
})
export class WidgetsComponent {

  data= input.required<Widget>();
}
