import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule } from '@angular/material';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import localeDa from '@angular/common/locales/da';
import { PostListComponent } from './post-list/post-list.component';

registerLocaleData(localeDa);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'da' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
