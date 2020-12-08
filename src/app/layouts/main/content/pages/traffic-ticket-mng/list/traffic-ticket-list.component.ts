import { ApiService } from './../../../../../../services/traffic-ticket-service/Api.service';

import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime, map, mergeMap, startWith, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-traffic-ticket-list',
  templateUrl: './traffic-ticket-list.component.html',
  styleUrls: ['./traffic-ticket-list.component.scss']
})
export class TrafficTicketListComponent implements OnInit {

  displayedColumns: string[] = ['state', 'driver', 'location', 'date', 'description' ];
  dataSource: any[] = [ ];

  filterForm: FormGroup;

  private stopSubscriptions = new Subject<boolean>();
  public dataIsLoading = true;


  constructor(
    private readonly apiService: ApiService
  ){

  }

  ngOnInit(): void {

    this.buildFilterForm();
  }

  buildFilterForm(): void{
    this.filterForm = new FormGroup({
      startDate: new FormControl(Date.now()),
      endDate: new FormControl(Date.now()),
      agent: new FormControl('')
    });

    this.filterForm.valueChanges.pipe(
      debounceTime(400),
      startWith(1),
      mergeMap(value => this.apiService.getTicketList$(value) ),
      takeUntil(this.stopSubscriptions),
    ).subscribe(
      (value: any) => {
        const list = value.tickets;
        console.log('FILTERS', list);
        this.dataIsLoading = false;
        this.dataSource = list;
      }
    );
  }

  submitFiltersForm(): void {
    console.log('form', this.filterForm.value);

  }



}
