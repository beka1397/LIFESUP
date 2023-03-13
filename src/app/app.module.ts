import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { ComponentModule } from './components/components.module';
import { RouterModule } from '@angular/router';
import { IntroComponent } from './pages/intro/intro.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { FoodComponent } from './pages/food/food.component';
import { RemainderComponent } from './pages/remainder/remainder.component';
import { SportsComponent } from './pages/sports/sports.component';


@NgModule({
  declarations: [
    AppComponent,
    
    IntroComponent,
    TasksComponent,
    RemainderComponent,
    FoodComponent,
    SportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
