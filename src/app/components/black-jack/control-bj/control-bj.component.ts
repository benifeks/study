import { Component } from '@angular/core';
import { Cards } from 'src/app/models/black-jack/black-jackModels';
import { BlackJackService } from 'src/app/services/black-jack/black-jack.service';

@Component({
  selector: 'app-control-bj',
  templateUrl: './control-bj.component.html',
  styleUrls: ['./control-bj.component.scss'],
})
export class ControlBjComponent {
  public takeCardLink: string = '';

  public constructor(public blackJackService: BlackJackService) {}

  public shuffleDeck(link: string) {
    this.blackJackService.setStartValues();
    this.blackJackService.getCards(link).subscribe((deck) => {
      this.takeCardLink = `https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=2`;
      this.blackJackService.takeCardStatus =
        !this.blackJackService.takeCardStatus;
        this.blackJackService.showResultPlayer = '---';
        this.blackJackService.showResultBankir = '---';
    });
  }

  public makeMove(link: string) {
    this.blackJackService.getCards(link).subscribe((cards: Cards) => {
      this.blackJackService.takeCards(cards);
    });
  }

  public passPlayer(link: string) {
    this.blackJackService.getCards(link).subscribe((cards: Cards) => {
      this.blackJackService.pass(cards);
      this.blackJackService.showCards();
    });
  }
}
