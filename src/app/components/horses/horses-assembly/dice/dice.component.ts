import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Horse } from 'src/app/models/horses/horsesModels';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss'],
})
export class DiceComponent {
  @Output() dicesDrop: EventEmitter<number> = new EventEmitter<number>();
  @Output() reset: EventEmitter<undefined> = new EventEmitter<undefined>();
  @Input() horses: Horse[];
}
