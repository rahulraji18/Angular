import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { WarningMessages } from './warning-messages/warning.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningMessages,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
