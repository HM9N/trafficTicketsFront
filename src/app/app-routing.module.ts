import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentRegisterComponent } from './components/agent-register/agent-register.component';
import { AgentSigninComponent } from './components/agent-signin/agent-signin.component';
import { WelcomeComponent } from './components/welcome/welcome.component';


const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: 'playground', loadChildren: () => import('./layouts/playground/playground.module').then(m => m.PlaygroundModule)  },
  { path: 'signin', component: AgentSigninComponent, pathMatch: 'full' },
  { path: 'register', component: AgentRegisterComponent, pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'main', loadChildren: () => import('./layouts/main/main.module').then(m => m.MainModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
