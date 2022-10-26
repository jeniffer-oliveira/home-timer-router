import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MultiplicationTableComponent } from './components/multiplication-table/multiplication-table.component';
import { TimerComponent } from './components/timer/timer.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'timer', component: TimerComponent },
  { path: 'table', component: MultiplicationTableComponent },
];
