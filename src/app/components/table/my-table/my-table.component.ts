import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/table/users.service';
import { Column } from 'src/app/models/table/usersModels';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.scss'],
})
export class MyTableComponent {
  public ascending: boolean = true;
  public statusMyTable: boolean = false;
  public showTable: string = 'show table';
  public constructor(public usersService: UsersService) {}

  public showMyTable() {
    this.statusMyTable = !this.statusMyTable;
    this.statusMyTable
      ? (this.showTable = 'hide table')
      : (this.showTable = 'show table');
  }

  public changeArrow(column: Column): void {
    this.usersService.setStartArrows();
    if (this.ascending) {
      this.usersService.sort(column, 1, -1);
      this.ascending = !this.ascending;
      column.icon = 'south';
      return;
    }

    if (!this.ascending) {
      this.usersService.sort(column, -1, 1);
      this.ascending = !this.ascending;
      column.icon = 'north';
      return;
    }
  }
}
