import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from '@workspace/material';
import { RoutingModule } from './routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MaterialModule, RoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
