import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import * as moment from 'moment';
import * as range from 'lodash.range';

export interface CalendarDate {
  mDate: moment.Moment;
  selected?: boolean;
  today?: boolean;
}

@Component({
  selector: 'app-weekly-selection',
  templateUrl: './weekly-selection.component.html',
  styleUrls: ['./weekly-selection.component.scss']
})
export class WeeklySelectionComponent implements OnInit {
  public currentDate: moment.Moment;
  public namesOfDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  public weeks: Array<CalendarDate[]> = [];

  public selectedDate;
  public selectedStartWeek;
  public selectedEndWeek;
  public show: boolean;

  @ViewChild('calendar', {static: true}) calendar;

  @HostListener('document:click', ['$event'])
  clickOut(event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.show = false;
    }
  }

  constructor(private eRef: ElementRef) {
  }

  ngOnInit() {
    this.currentDate = moment();
    this.selectedStartWeek = moment().weekday(-7);
    this.selectedEndWeek = moment().weekday(-1);
    this.selectedDate = `${this.selectedStartWeek.format('DD/MM/YYYY')} - ${this.selectedEndWeek.format('DD/MM/YYYY')}`;
    this.generateCalendar();
  }

  private generateCalendar(): void {
    const dates = this.fillDates(this.currentDate);
    const weeks = [];
    while (dates.length > 0) {
      weeks.push(dates.splice(0, 7));
    }
    this.weeks = weeks;
  }

  private fillDates(currentMoment: moment.Moment) {
    // index first day of month in week
    const firstOfMonth = moment(currentMoment).startOf('month').day();
    // index last day of month  in week
    const lastOfMonth = moment(currentMoment).endOf('month').day();

    const firstDayOfGrid = moment(currentMoment).startOf('month').subtract(firstOfMonth, 'days');
    // get last start of week + week
    const lastDayOfGrid = moment(currentMoment).endOf('month').subtract(lastOfMonth, 'days').add(7, 'days');

    const startCalendar = firstDayOfGrid.date();


    return range(startCalendar, startCalendar + lastDayOfGrid.diff(firstDayOfGrid, 'days')).map((date) => {
      const newDate = moment(firstDayOfGrid).date(date);
      return {
        today: this.isToday(newDate),
        selected: this.isSelected(newDate),
        mDate: newDate,
      };
    });
  }

  public prevMonth(): void {
    this.currentDate = moment(this.currentDate).subtract(1, 'months');
    this.generateCalendar();
  }

  public nextMonth(): void {
    this.currentDate = moment(this.currentDate).add(1, 'months');
    this.generateCalendar();
  }

  public isDisabledMonth(currentDate): boolean {
    const today = moment();
    return moment(currentDate).isBefore(today, 'months');
  }

  private isToday(date: moment.Moment): boolean {
    return moment().format('YYYY-MM-DD') === moment(date).format('YYYY-MM-DD');
  }

  private isSelected(date: moment.Moment): boolean {
    return moment(date).isBefore(this.selectedEndWeek) && moment(date).isAfter(this.selectedStartWeek)
      || moment(date.format('YYYY-MM-DD')).isSame(this.selectedStartWeek.format('YYYY-MM-DD'))
      || moment(date.format('YYYY-MM-DD')).isSame(this.selectedEndWeek.format('YYYY-MM-DD'));
  }

  public isDayBeforeLastSat(date: moment.Moment): boolean {
    const lastSat = moment().weekday(-1);
    return moment(date).isSameOrBefore(lastSat);
  }

  public isSelectedMonth(date: moment.Moment): boolean {
    return moment(date).isSame(this.currentDate, 'month');
  }

  public selectDate(date: CalendarDate[]) {
    this.selectedStartWeek = moment(date[0].mDate);
    this.selectedEndWeek = moment(date[6].mDate);
    this.selectedDate = `${ this.selectedStartWeek.format('DD/MM/YYYY')} - ${this.selectedEndWeek.format('DD/MM/YYYY')}`;

    this.generateCalendar();
    this.show = !this.show;
  }
}
