import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ExponentialPipe } from './pipes/exponential.pipe';
import { SortproductPipe } from './pipes/sortproduct.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExponentialPipe,
    SortproductPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
