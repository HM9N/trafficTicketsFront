import { NgModule } from '@angular/core';
import { ContentComponent } from './components/layout/content/content.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MainRoutingModule } from './main-routing';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    ContentComponent
  ],
  imports: [ MainRoutingModule ],
  providers: []
})

export class MainModule { }
