import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { goToComponent } from './goTo/goTo.component';
import { TaskComponent } from './task/task.component';
import { DynamicRowComponent, TableComponent } from './table';
import { TableModule } from './table/table.module';

const components = [
  goToComponent,
  TaskComponent,
  //DynamicRowComponent,
  //TaskComponent
]

@NgModule({
  declarations: [
    ...components,
  ], //componentes directivas y pipes que se quieres modularizar
  imports: [
    CommonModule,
    TableModule
  ],  //librerias y otros modules necesarios para que este module funcione 
  exports: [
    ...components,
    TableModule
  ], //que quieres exportar de este modulo
  providers: [

  ],
})

export class ComponentModule { }