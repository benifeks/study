import { Component, Input } from '@angular/core';
import { Horse } from 'src/app/models/horses/horsesModels';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent {
  @Input() totalMileage: number;
  @Input() counter: number;
  @Input() horses: Horse[];
}
