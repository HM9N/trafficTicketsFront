import { TrafficTicketService } from '../../../../../../services/traffic-ticket-service/traffic-ticket.service';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime, map, mergeMap, startWith, takeUntil, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as moment from 'moment';
import { MatDialog } from '@angular/material/dialog';
import { PayTicketDialogComponent } from './dialogs/pay-ticket-dialog/PayTicketDialog.component';
import { CreateTicketDialogComponent } from './dialogs/create-ticket-dialog/CreateTicketDialog.component';

@Component({
  selector: 'app-traffic-ticket-list',
  templateUrl: './traffic-ticket-list.component.html',
  styleUrls: ['./traffic-ticket-list.component.scss']
})
export class TrafficTicketListComponent implements OnInit {

  displayedColumns: string[] = ['state', 'driver', 'location', 'date', 'description', 'actions'];
  dataSource: any[] = [];

  filterForm: FormGroup;

  private stopSubscriptions = new Subject<boolean>();
  public dataIsLoading = true;


  constructor(
    private readonly apiService: TrafficTicketService,
    private readonly dialog: MatDialog
  ) {

  }

  ngOnInit(): void {

    this.buildFilterForm();
  }

  buildFilterForm(): void {
    // console.log(moment().startOf('day').valueOf());

    this.filterForm = new FormGroup({
      startDate: new FormControl( Date.now() ),
      endDate: new FormControl( moment().endOf('day') .valueOf()),
      driver: new FormControl('')
    });

    this.filterForm.valueChanges.pipe(
      debounceTime(400),
      startWith(this.filterForm.value),
      map(value => {
        return ({
          driver: parseInt(value.driver, 10),
          startDate: moment(value.startDate).valueOf(),
          endDate: moment(value.endDate).valueOf()
         });
      }),
      mergeMap(value => this.apiService.getTicketList$(value)),
      takeUntil(this.stopSubscriptions),
      tap(response => console.log({ response }))
    ).subscribe(
      (value: any) => {
        const list = (value || {}).tickets || [];
        console.log('DATA RESULT', list);
        this.dataIsLoading = false;
        this.dataSource = list;
      },
      (err) => {
        this.dataIsLoading = true;
      }
    );
  }


  payTicket(): void {
    this.dialog.open(PayTicketDialogComponent, {
      data: {
        animal: 'panda'
      }
    });
  }

  submitFiltersForm(): void {
    console.log('form', this.filterForm.value);

  }

  openDialogToCreateATicket(): void{

    this.dialog.open(CreateTicketDialogComponent, {
      minWidth: '40%',
      data: {

      }
    });

  }



}
