import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-PayTicketDialog',
  templateUrl: './PayTicketDialog.component.html',
  styleUrls: ['./PayTicketDialog.component.scss']
})
export class PayTicketDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

  }

}
