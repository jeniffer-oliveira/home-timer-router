import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TimerComponent } from './components/timer/timer.component';
import { HomeComponent } from './components/home/home.component';
import { RouterComponent } from './components/router/router.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    TimerComponent,
    HomeComponent,
    RouterComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
