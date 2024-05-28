import { Component, OnInit } from '@angular/core';
import { HorsesService } from 'src/app/services/horses/horses.service';
import { AllResults, DicesValue } from 'src/app/models/horses/horsesModels';

@Component({
  selector: 'app-horses-assembly',
  templateUrl: './horses-assembly.component.html',
  styleUrls: ['./horses-assembly.component.scss'],
})
export class HorsesAssemblyComponent implements OnInit {
  public allResults: AllResults = {
    milageRed: 0,
    milageGreen: 0,
    milageBlue: 0,
    totalMileage: 0,
    counter: 0,
    arrayMarginValue: [],
    dicesValues: [],
  };

  public ngOnInit(): void {
    this.allResults.arrayMarginValue = [
      `${this.allResults.milageRed}px`,
      `${this.allResults.milageGreen}px`,
      `${this.allResults.milageBlue}px`,
    ];

    this.allResults.dicesValues = [1, 1, 1];
  }

  public constructor(public horsesService: HorsesService) {}

  public updateResults(dicesValue: DicesValue): void {
    this.allResults.dicesValues = Object.values(dicesValue);

    this.allResults.milageRed = this.horsesService.countMileage(
      this.allResults.milageRed,
      dicesValue.diceRed
    );
    this.allResults.milageGreen = this.horsesService.countMileage(
      this.allResults.milageGreen,
      dicesValue.diceGreen
    );
    this.allResults.milageBlue = this.horsesService.countMileage(
      this.allResults.milageBlue,
      dicesValue.diceBlue
    );

    this.allResults.arrayMarginValue = [
      `${this.allResults.milageRed * 5}px`,
      `${this.allResults.milageGreen * 5}px`,
      `${this.allResults.milageBlue * 5}px`,
    ];

    if (dicesValue.diceRed === 0) {
      this.allResults.totalMileage = 0;
      this.allResults.counter = 0;
      this.allResults.dicesValues = [1, 1, 1];
      return;
    }

    this.allResults.totalMileage = this.horsesService.countTotalMileage(
      this.allResults.totalMileage,
      dicesValue
    );

    this.allResults.counter = this.horsesService.increment(
      this.allResults.counter
    );
  }
}
