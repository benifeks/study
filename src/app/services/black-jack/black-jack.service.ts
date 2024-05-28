import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  WorkCards,
  Cards,
  CardValues,
} from 'src/app/models/black-jack/black-jackModels';

@Injectable()
export class BlackJackService {
  public takeCardStatus: boolean = true;
  public passStatus: boolean = true;
  public resultPlayer: number = 0;
  public resultBankir: number = 0;
  public showResultPlayer: string | number = '---';
  public showResultBankir: string | number = '---';
  public resultMessage: string = 'ПЕРЕМЕШАЙТЕ КОЛОДУ';

  public hiddenCard: string = 'https://deckofcardsapi.com/static/img/back.png';
  public workCards: WorkCards = {
    cardsPlayer: [],
    cardsBankir: [],
    cardsBankirHidden: [],
  };

  public constructor(private http: HttpClient) {}

  public getCards(url: string) {
    return this.http.get<Cards>(url);
  }

  public setStartValues() {
    this.workCards.cardsPlayer = [];
    this.workCards.cardsBankir = [];
    this.workCards.cardsBankirHidden = [];
    this.resultMessage = 'ИГРА... ВОЗЬМИТЕ КАРТУ';
    this.resultPlayer = 0;
    this.resultBankir = 0;
  }

  public convertValue(value: string) {
    let valueNumber;
    if (value === 'ACE') {
      valueNumber = 11;
      return valueNumber;
    }
    if (value === 'KING') {
      valueNumber = 4;
      return valueNumber;
    }
    if (value === 'QUEEN') {
      valueNumber = 3;
      return valueNumber;
    }
    if (value === 'JACK') {
      valueNumber = 2;
      return valueNumber;
    }
    valueNumber = value;
    return valueNumber;
  }

  public countScores(cards: CardValues[]): number {
    return cards.reduce(
      (accumulator: number, currentCard: CardValues) =>
        accumulator + currentCard.value,
      0
    );
  }

  public takeCardPlayer(data: Cards) {
    this.passStatus = false;
    this.workCards.cardsPlayer.push({
      image: data.cards[0].image,
      value: +this.convertValue(data.cards[0].value),
    });
    this.resultPlayer = this.countScores(this.workCards.cardsPlayer);
    this.showResultPlayer = this.resultPlayer;
  }

  public takeCardBankir(data: Cards) {
    if (this.resultBankir < 16) {
      this.workCards.cardsBankir.push({
        image: data.cards[1].image,
        value: +this.convertValue(data.cards[1].value),
      });
      this.resultBankir = this.countScores(this.workCards.cardsBankir);
      this.workCards.cardsBankirHidden.push(this.hiddenCard);
    }
    if (this.resultBankir >= 16) {
      this.showResultBankir = 'ПАС';
    }
    if (this.resultBankir > 21) {
      this.resultMessage = 'ВЫ ВЫИГРАЛИ!!! Bankir - ПЕРЕБОР!!!';
      this.showCards();
      return;
    }
  }

  public takeCards(cards: Cards) {
    this.takeCardPlayer(cards);
    if (this.resultPlayer > 21) {
      this.resultMessage = 'ПЕРЕБОР!!! ВЫ ПРОИГРАЛИ...';
      this.showCards();
      return;
    }
    if (this.resultPlayer === 21) {
      this.resultMessage = 'Player - 21!!! ВЫ ВЫИГРАЛИ!!!';
      this.showCards();
      return;
    }
    this.takeCardBankir(cards);
    if (this.resultBankir === 21) {
      this.resultMessage = 'Bankir - "21"!!! ВЫ ПРОИГРАЛИ...';
      this.showCards();
      return;
    }
  }

  public showCards() {
    this.showResultBankir = this.resultBankir;
    this.takeCardStatus = !this.takeCardStatus;
    this.passStatus = !this.passStatus;
    this.workCards.cardsBankirHidden = this.workCards.cardsBankir.map(
      (card: CardValues) => {
        return card.image;
      }
    );
  }

  public pass(cards: Cards) {
    this.launchTakeCardBankir(cards);
    if (this.resultBankir > 21) {
      this.resultMessage = 'ВЫ ВЫИГРАЛИ!!! Bankir - ПЕРЕБОР!!!';
      return;
    }
    if (this.resultBankir === this.resultPlayer) {
      this.resultMessage = 'НИЧЬЯ!!!';
      return;
    }
    if (this.resultBankir > this.resultPlayer) {
      this.resultMessage = 'ВЫ ПРОИГРАЛИ...';
      return;
    }
    if (this.resultBankir < this.resultPlayer) {
      this.resultMessage = 'ВЫ ВЫИГРАЛИ!!!';
      return;
    }
  }

  public compare() {
    if (this.resultPlayer > 21) {
      this.resultMessage = 'ПЕРЕБОР!!! ВЫ ПРОИГРАЛИ...';
    }
  }

  public launchTakeCardBankir(cards: Cards) {
    this.takeCardBankir(cards);
    if (this.resultBankir < 16) {
      this.launchTakeCardBankir(cards);
    }
  }
}
