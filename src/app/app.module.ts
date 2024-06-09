import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCommonModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatSortModule } from '@angular/material/sort';

import { BlackJackService } from './services/black-jack/black-jack.service';
import { UsersService } from './services/table/users.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlackJackComponent } from './components/black-jack/black-jack.component';
import { TableComponent } from './components/table/table.component';
import { HorsesComponent } from './components/horses/horses.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/HeaderAndFooter/header/header.component';
import { FooterComponent } from './components/HeaderAndFooter/footer/footer.component';
import { UsersComponent } from './components/table/users/users.component';
import { DetailsUserComponent } from './components/table/details-user/details-user.component';
import { TableMaterialComponent } from './components/table/table-material/table-material.component';
import { MyTableComponent } from './components/table/my-table/my-table.component';
import { HorsesAssemblyComponent } from './components/horses/horses-assembly/horses-assembly.component';
import { DiceComponent } from './components/horses/horses-assembly/dice/dice.component';
import { PlaceComponent } from './components/horses/horses-assembly/place/place.component';
import { InfoComponent } from './components/horses/horses-assembly/info/info.component';
import { InfoBjComponent } from './components/black-jack/info-bj/info-bj.component';
import { ControlBjComponent } from './components/black-jack/control-bj/control-bj.component';
import { CardsBankirComponent } from './components/black-jack/place-bj/cards-bankir/cards-bankir.component';
import { CardsPlayerComponent } from './components/black-jack/place-bj/cards-player/cards-player.component';
import { DeckComponent } from './components/black-jack/place-bj/deck/deck.component';

@NgModule({
  declarations: [
    AppComponent,
    BlackJackComponent,
    TableComponent,
    HorsesComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    UsersComponent,
    DetailsUserComponent,
    TableMaterialComponent,
    MyTableComponent,
    HorsesAssemblyComponent,
    DiceComponent,
    PlaceComponent,
    InfoComponent,
    InfoBjComponent,
    ControlBjComponent,
    CardsBankirComponent,
    CardsPlayerComponent,
    DeckComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCommonModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSortModule,
  ],
  providers: [
    UsersService,
    BlackJackService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
