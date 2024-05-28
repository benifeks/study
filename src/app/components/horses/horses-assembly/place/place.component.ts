import { Component, Input } from '@angular/core';
import { AllResults } from 'src/app/models/horses/horsesModels';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss'],
})
export class PlaceComponent {
  @Input() allResults: AllResults;
}
