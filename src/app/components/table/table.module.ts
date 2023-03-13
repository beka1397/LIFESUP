import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicRowComponent, TableComponent } from './index'

const components = [
  DynamicRowComponent,
  TableComponent
]

@NgModule({
  declarations: [
    ...components
  ], //componentes directivas y pipes que se quieres modularizar
  imports: [
    CommonModule 
  ],  //librerias y otros modules necesarios para que este module funcione 
  exports: [
    ...components
  ] //que quieres exportar de este modulo
})

export class TableModule { }