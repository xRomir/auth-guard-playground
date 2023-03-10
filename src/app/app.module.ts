import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserInterfaceModule } from './user-interface/user-interface.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, UserInterfaceModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
