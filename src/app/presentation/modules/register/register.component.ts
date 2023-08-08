import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {DEBUG} from "@angular/compiler-cli/src/ngtsc/logging/src/console_logger";
import {from} from "rxjs";
import {addYears, htmlToElement, validateDate} from "../../shared/functions/functions.shared";
import {ProductsEntity} from "../../../domain/entities/products/products.entity";
import {ProductsController} from "../../../infraestructure/controllers/products/products.controller";
import {Router} from "@angular/router";
import {GlobalService} from "../../shared/services/global.service";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  controlsGroup: any = {
    id: [{value: '', disabled: false}, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
    name: [{value: '', disabled: false}, [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
    description: [{
      value: '',
      disabled: false
    }, [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
    logo: [{value: '', disabled: false}, [Validators.required]],
    date_release: [{value: '', disabled: false}, [Validators.required]],
    date_revision: [{value: '', disabled: true}, [Validators.required]],
  }
  disabledSend = true

  public formDataComponent: any = this.formBuilder.group(this.controlsGroup)
  minDate = new Date()

  constructor(private formBuilder: FormBuilder, private router: Router, private globalService: GlobalService) {
    if(this.router.url.split('/')[2] === 'editar' && (Object.keys(this.globalService.rowEditData).length > 0)) {
      Object.keys(this.formDataComponent.controls).map((item: any)=>{
        let value = this.globalService.rowEditData[item]
        if(validateDate(new Date(value))){
          value = formatDate(value, 'yyyy-MM-dd','en')
        }
        this.formDataComponent.controls[item].setValue(value)
      })
      this.disabledSend = false
    }else {
      if(!this.router.url.split('/')[2]) return
      void this.router.navigate(['/'])
    }
  }

  validateValue(event: any) {
    const data = this.formDataComponent.controls[event]
    if (data.status === 'INVALID') {
      let txtError = ''
      if (data.errors.required) {
        txtError = 'Campo requerido'
      }
      if (data.errors.minlength) {
        txtError = `Longitud minima ${data.errors.minlength.requiredLength}`
      }

      if (data.errors.maxlength) {
        txtError = `Longitud maxima ${data.errors.maxlength.requiredLength}`
      }

      const element: any = document.getElementById(event)
      element.classList.add('invalidInput')

      const itemError: any = document.getElementById(
        event + 'Error'
      )
      if (!itemError) {
        element.insertAdjacentElement(
          'afterend',
          <Element>(
            htmlToElement(
              `<span id="${event}Error" class="txtError">${txtError}</span>`
            )
          )
        )
      }
    } else {
      const itemError: any = document.getElementById(
        event + 'Error'
      )
      itemError?.remove()
      const element: any = document.getElementById(event)
      element.classList.remove('invalidInput')
    }

    if (event === 'date_release') {
      const date = new Date(this.formDataComponent.controls['date_release'].value)
      const newDate = addYears(date, 1)
      this.formDataComponent.controls['date_revision'].setValue(newDate.toISOString().split('T')[0])
    }

    if (!this.formDataComponent.controls['date_revision'].value) {
      return
    }

    this.formDataComponent.status === 'INVALID' ? this.disabledSend = true : this.disabledSend = false

  }



  reset() {
    this.formDataComponent.reset()
    Object.keys(this.formDataComponent.controls).map((item: any) => {
      const itemError: any = document.getElementById(
        item + 'Error'
      )
      itemError.remove()
      const element: any = document.getElementById(item)
      element.classList.remove('invalidInput')
    })

  }


  async send() {
    const request: ProductsEntity = {
      date_release: this.formDataComponent.controls['date_release'].value,
      date_revision: this.formDataComponent.controls['date_revision'].value,
      description: this.formDataComponent.controls['description'].value,
      id: this.formDataComponent.controls['id'].value,
      logo: this.formDataComponent.controls['logo'].value,
      name: this.formDataComponent.controls['name'].value
    }
    let response: any = ''
    if(this.router.url.split('/')[2] === 'editar') {
      response = await ProductsController.updateProduct(request)
    }else {
      response = await ProductsController.setProduct(request)
    }

    if(response.data){
      void this.router.navigate(['/'])
    }
  }


}
