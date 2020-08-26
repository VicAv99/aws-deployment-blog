import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreDataModule } from '@workspace/core-data';
import { MaterialModule } from '@workspace/material';
import { UiToolbarModule } from '@workspace/ui-toolbar';
import { RoutingModule } from './routing.module';

import { AppComponent } from './app.component';
import { RandomComponent } from './random/random.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [AppComponent, RandomComponent, SearchComponent],
  imports: [
    BrowserModule,
    CoreDataModule,
    MaterialModule,
    UiToolbarModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
