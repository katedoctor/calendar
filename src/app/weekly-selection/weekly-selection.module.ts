import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeeklySelectionComponent } from './weekly-selection.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [WeeklySelectionComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [WeeklySelectionComponent]
})
export class WeeklySelectionModule { }
