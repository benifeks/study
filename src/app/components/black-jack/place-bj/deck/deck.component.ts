import { Component } from '@angular/core';
import { BlackJackService } from 'src/app/services/black-jack/black-jack.service';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss'],
})
export class DeckComponent {
  public deck: string[] = [
    this.blackJackService.hiddenCard,
    this.blackJackService.hiddenCard,
    this.blackJackService.hiddenCard,
  ];
  public constructor(public blackJackService: BlackJackService) {}
}
