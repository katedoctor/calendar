import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailySelectionComponent } from './daily-selection.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [DailySelectionComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [DailySelectionComponent]
})
export class DailySelectionModule { }
