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

  text = "El token ha caducado";

  agent = {
    cc: '',
    password: ''
  };
  error = false;
  constructor(private agentService: AgentService, private router: Router, private readonly dialog: MatDialog) {
    alert("Está en proceso... Jhon");
  }

  ngOnInit(): void {}

  signUp() {
    console.log(this.agent);
    this.agentService.signUp(this.agent).subscribe(
      (res) => {
        if (res.message == 'accedido') {
          this.router.navigate(['/main/traffic-ticket-mng']);
        } else if(res.message == this.text){
          this.openDialog("");
        }
        else {
          this.error = true;
        }
      },
      (err) => {this.error = true
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
