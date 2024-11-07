import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldvalidationsComponent } from './fieldvalidations/fieldvalidations.component';



@NgModule({
  declarations: [
    FieldvalidationsComponent
  ],
  imports: [
    CommonModule
  ] ,
  exports:[
    FieldvalidationsComponent
  ]
})
export class SharedLibsModule { }
