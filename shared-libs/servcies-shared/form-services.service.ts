import { Injectable } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormServicesService {

  constructor() { }

  validForm(Form:FormGroup | FormArray) : boolean{
    Form.markAllAsTouched()
    Form.markAsDirty()
    return true

  }
}
