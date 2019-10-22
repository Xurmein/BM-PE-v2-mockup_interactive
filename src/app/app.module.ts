import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatCommonModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatDialogModule,
  MatTooltipModule,
  MatMenuModule,
  MatExpansionModule,
  MatListModule,
  MatIconModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { PeFabComponent } from './pe-fab/pe-fab.component';
import { PersonasListComponent } from './personas-list/personas-list.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';

@NgModule({
  declarations: [
    AppComponent,
    PeFabComponent,
    PersonasListComponent,
    ChatWindowComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatExpansionModule,
    MatDialogModule,
    MatTooltipModule,
    MatListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
