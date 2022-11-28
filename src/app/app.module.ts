import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ExponentialPipe } from './pipes/exponential.pipe';
import { SortproductPipe } from './pipes/sortproduct.pipe';
import { SearchproductsPipe } from './pipes/searchproducts.pipe';
import { HomeComponent } from './component/home/home.component';
import { HelpComponent } from './component/help/help.component';
import { ContactComponent } from './component/contact/contact.component';
import { DemoComponent } from './component/demo/demo.component';
import { LoginComponent } from './component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ExponentialPipe,
    SortproductPipe,
    SearchproductsPipe,
    HomeComponent,
    HelpComponent,
    ContactComponent,
    DemoComponent,
    LoginComponent
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
