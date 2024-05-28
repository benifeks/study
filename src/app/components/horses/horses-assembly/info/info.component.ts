import { Component, Input } from '@angular/core';
import { AllResults } from 'src/app/models/horses/horsesModels';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent {
  @Input() allResults: AllResults;
}
