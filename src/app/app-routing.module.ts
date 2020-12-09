import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentSigninComponent } from './components/agent-signin/agent-signin.component';
import { WelcomeComponent } from './components/welcome/welcome.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  { path: 'signin',  component: AgentSigninComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'main', loadChildren: () => import('./layouts/main/main.module').then(m => m.MainModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
