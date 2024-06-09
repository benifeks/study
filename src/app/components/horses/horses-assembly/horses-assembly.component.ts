import { Component, OnInit } from '@angular/core';
import { Horse } from 'src/app/models/horses/horsesModels';

// Fabric method
const createNewHorse = (color: string): Horse => {
  return {
    color,
    mileage: 0,
    diceValue: 1,
  }
}

@Component({
  selector: 'app-horses-assembly',
  templateUrl: './horses-assembly.component.html',
  styleUrls: ['./horses-assembly.component.scss'],
})
export class HorsesAssemblyComponent implements OnInit {
  public colors = ['Red', 'Green', 'Blue'];
  public color = '';
  public horses: Horse[] = [];
  public totalMileage = 0;
  public counter = 0;

  public ngOnInit(): void {
    this.horses = this.colors.map(createNewHorse);
  }

  public reset(): void {
    this.ngOnInit();
    this.totalMileage = 0;
    this.counter = 0;
    this.color = '';
  }

  public add(): void {
    this.colors.unshift(this.color);
    this.reset();
  }

  public updateResults(): void {
    this.horses.forEach((horse: Horse) => {
      horse.diceValue = Math.floor(Math.random() * 6) + 1;
      horse.mileage += horse.diceValue;
    });

    this.totalMileage = this.horses.reduce((acc, horse: Horse) => {
      acc += horse.mileage;
      return acc;
    }, this.totalMileage);

    this.counter++;
  }
}
