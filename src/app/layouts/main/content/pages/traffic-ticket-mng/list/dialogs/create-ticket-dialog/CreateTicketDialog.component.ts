import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-createTicketDialog',
  templateUrl: './CreateTicketDialog.component.html',
  styleUrls: ['./CreateTicketDialog.component.scss']
})
export class CreateTicketDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

  }

}
