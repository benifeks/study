import { Component } from '@angular/core';
import { BlackJackService } from 'src/app/services/black-jack/black-jack.service';

@Component({
  selector: 'app-info-bj',
  templateUrl: './info-bj.component.html',
  styleUrls: ['./info-bj.component.scss'],
})
export class InfoBjComponent {
  public constructor(public blackJackService: BlackJackService) {}
}
