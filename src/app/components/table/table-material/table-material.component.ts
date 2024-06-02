import { Component } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { UsersService } from 'src/app/services/table/users.service';

@Component({
  selector: 'app-table-material',
  templateUrl: './table-material.component.html',
  styleUrls: ['./table-material.component.scss'],
})
export class TableMaterialComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'position',
    'firstName',
    'lastName',
    'gender',
    'age',
    'email',
    'city',
    'country',
  ];
  dataSource = this.usersService.dataSource;

  public constructor(
    private _liveAnnouncer: LiveAnnouncer,
    public usersService: UsersService
  ) {}

  @ViewChild(MatSort) sort: MatSort;

  public ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  public announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
