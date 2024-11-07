import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-fieldvalidations',
  templateUrl: './fieldvalidations.component.html',
  styleUrls: ['./fieldvalidations.component.css']
})
export class FieldvalidationsComponent {
@Input() appControl:AbstractControl | any
  @Input() labelTest :string  =''
  get data() : string[]{
 return Object.keys(this.appControl?.errors)
  }
  getErrorMessage() : string | null{
if(this.appControl){
  return this.labelTest
}
return null
  }
}
