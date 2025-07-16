import { Component, input } from '@angular/core';
import { Widget } from '../../models/dashboard';

@Component({
  selector: 'app-widgets',
  imports: [],
  templateUrl: './widgets.component.html',
  styleUrl: './widgets.component.scss'
})
export class WidgetsComponent {

  data= input.required<Widget>();
}
