import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FoodComponent } from './pages/food/food.component';
import { IntroComponent } from './pages/intro/intro.component';
import { RemainderComponent } from './pages/remainder/remainder.component';
import { SportsComponent } from './pages/sports/sports.component';
import { TasksComponent } from './pages/tasks/tasks.component';

const routes: Routes = [
  { 
    path: '',
    component: AppComponent
  },
  { 
    path: 'intro', 
    component: IntroComponent 
  },
  { 
    path: 'tasks', 
    component: TasksComponent 
  },
  { 
    path: 'sports', 
    component: SportsComponent 
  },
  { 
    path: 'remainder', 
    component: RemainderComponent 
  },
  { 
    path: 'food', 
    component: FoodComponent 
  }
  
]

@NgModule({
  imports: [RouterTestingModule.withRoutes(routes)],
  exports: [RouterTestingModule],
})
export class AppRoutingModule {}
