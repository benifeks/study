import { Component } from '@angular/core';
import { BlackJackService } from 'src/app/services/black-jack/black-jack.service';

@Component({
  selector: 'app-cards-player',
  templateUrl: './cards-player.component.html',
  styleUrls: ['./cards-player.component.scss'],
})
export class CardsPlayerComponent {
  public constructor(public blackJackService: BlackJackService) {}
}
