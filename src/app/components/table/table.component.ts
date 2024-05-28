import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  public valueButton: string = 'show';
  public show: boolean = false;

  public showTable() {
    this.show = !this.show;
    this.show ? (this.valueButton = 'hide ') : (this.valueButton = 'show ');
  }
}
