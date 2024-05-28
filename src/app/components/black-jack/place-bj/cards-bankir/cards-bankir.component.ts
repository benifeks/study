import { Component } from '@angular/core';
import { BlackJackService } from 'src/app/services/black-jack/black-jack.service';

@Component({
  selector: 'app-cards-bankir',
  templateUrl: './cards-bankir.component.html',
  styleUrls: ['./cards-bankir.component.scss'],
})
export class CardsBankirComponent {
  public constructor(public blackJackService: BlackJackService) {}
}
