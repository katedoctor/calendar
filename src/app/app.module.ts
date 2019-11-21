import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DailySelectionModule} from './daily-selection/daily-selection.module';
import {WeeklySelectionModule} from './weekly-selection/weekly-selection.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DailySelectionModule,
    WeeklySelectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
