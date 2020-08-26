import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from '@workspace/material';
import { RoutingModule } from './routing.module';

import { AppComponent } from './app.component';
import { RandomComponent } from './random/random.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [AppComponent, RandomComponent, SearchComponent],
  imports: [BrowserModule, MaterialModule, RoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
