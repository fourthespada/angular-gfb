import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';

import { BullspickerComponent } from './bullspicker/bullspicker.component';

import 'hammerjs';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule, MatFormFieldModule, MatInputModule, } from '@angular/material';
import { IntroComponent } from './intro/intro.component';
import { ViewEntriesComponent } from './view-entries/view-entries.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'entries/:userGUID/:dayId', component: ViewEntriesComponent },
      { path: 'intro', component: IntroComponent  }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    BullspickerComponent,
    IntroComponent,
    ViewEntriesComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/