import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HorsesService } from 'src/app/services/horses/horses.service';
import { AllResults, DicesValue } from 'src/app/models/horses/horsesModels';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss'],
})
export class DiceComponent {
  @Output() dicesDrop: EventEmitter<DicesValue> =
    new EventEmitter<DicesValue>();
  @Input() allResults: AllResults;

  public constructor(public horsesService: HorsesService) {}

  public rollTheDice(startValue?: number): void {
    let dicesValue: DicesValue = this.horsesService.rollTheDice(startValue);
    this.dicesDrop.emit(dicesValue);
  }
}
