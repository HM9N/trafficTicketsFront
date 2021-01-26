import { TrafficTicketService } from './../../../../../../../../services/traffic-ticket-service/traffic-ticket.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-createTicketDialog',
  templateUrl: './CreateTicketDialog.component.html',
  styleUrls: ['./CreateTicketDialog.component.scss']
})
export class CreateTicketDialogComponent implements OnInit {

  ticketForm: FormGroup;

  constructor(
    private readonly dialogRef: MatDialogRef<CreateTicketDialogComponent>,
    private apiService: TrafficTicketService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.buildTicketForm();


  }

  buildTicketForm(): void {
    this.ticketForm = new FormGroup({
      name: new FormControl(''),
      cc: new FormControl(''),
      driver: new FormControl(''),
      location: new FormControl(''),
      description: new FormControl('')
    });
  }

  createTicket(): void {
    const formValue = this.ticketForm.getRawValue();

    console.log(this.ticketForm.value);
    this.apiService.createTicket$({
      description: formValue.description,
      driver: parseInt(formValue.cc, 10),
      location: formValue.location,
      agent: 0
    }).subscribe((d) => {
      console.log(d);
    });


  }

  closeDialog(): void {
    this.dialogRef.close(null);
  }

}
