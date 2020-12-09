import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {AgentService} from '../../services/agent-service/agent.service';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';

@Component({
  selector: 'app-agent-register',
  templateUrl: './agent-register.component.html',
  styleUrls: ['./agent-register.component.scss']
})
export class AgentRegisterComponent implements OnInit {

  text = '';

  agent = {
    name: '',
    cc: '',
    age: '',
    location:'',
    password:''
  };
  error = false;
  constructor(private agentService: AgentService, private router: Router, private readonly dialog: MatDialog) {
   
  }

  ngOnInit(): void {}

  signUp() {
    console.log(this.agent);
    this.agentService.signUp(this.agent).subscribe(
      (res) => {
        if (res.message == 'registrado') {
          this.router.navigate(['/signin']);
        } 
      },
      (err) => {this.error = true
        console.log(err.error.message);
           this.openDialog(err);    
      }
    );
  }

  openDialog(errors) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.minWidth = '350px';
    dialogConfig.maxWidth = '600px'; 
    dialogConfig.data = {

      msg: errors.error.message,
    };

    this.dialog.open(InfoDialogComponent, dialogConfig).afterClosed().subscribe((success) => {
  },
  (e) => {
      console.error(e);

  });
  }

}
