import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { JurosComponent } from './juros/juros.component';
import { RouterModule } from '@angular/router';
import { JuroscComponent } from './jurosc/jurosc.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path: ' ', component: HomeComponent},
      {path: 'juros', component: JurosComponent},
      {path:  'jurosc', component:  JuroscComponent}
    ])
  ],
  declarations: [ AppComponent, 
    HelloComponent,
    HomeComponent,
    JurosComponent,
    JuroscComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
