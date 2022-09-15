import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlternatePipe } from './alternate/alternate.pipe';



@NgModule({
  declarations: [
    AlternatePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlternatePipe
  ]
})
export class PipesModule { }
