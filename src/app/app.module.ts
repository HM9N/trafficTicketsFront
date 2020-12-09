import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { CommonMaterialModule } from './common-material.module';
import { AgentSigninComponent } from './components/agent-signin/agent-signin.component';
import { InfoDialogComponent } from './components/info-dialog/info-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AgentSigninComponent,
    InfoDialogComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonMaterialModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
