export interface Deck {
  success: boolean;
  deck_id: string;
  remaining: number;
  shuffled: boolean;
}

export interface Cards {
  success: boolean;
  deck_id: string;
  cards: Card[];
  remaining: 50;
}

export interface Card {
  code: string;
  image: string;
  images: {
    svg: string;
    png: string;
  };
  suit: string;
  value: string;
}

export interface CardValues {
  image: string;
  value: number;
}

export interface WorkCards {
  cardsPlayer: CardValues[];
  cardsBankir: CardValues[];
  cardsBankirHidden: string[];
}
