import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {DEBUG} from "@angular/compiler-cli/src/ngtsc/logging/src/console_logger";
import {from} from "rxjs";
import {addYears} from "../../shared/functions/functions.shared";

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
    dateinit: [{value: '', disabled: false}, [Validators.required]],
    dateEnd: [{value: null, disabled: true}, [Validators.required]],
  }
  disabledSend = true

  public formDataComponent: any = this.formBuilder.group(this.controlsGroup)
  minDate = new Date()

  constructor(private formBuilder: FormBuilder) {}

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
            this.htmlToElement(
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

    if(event === 'dateinit'){
      const date = new Date(this.formDataComponent.controls['dateinit'].value)
      const newDate = addYears(date, 1)
      this.formDataComponent.controls['dateEnd'].setValue(newDate.toLocaleDateString('en-GB'))
    }

    if(!this.formDataComponent.controls['dateEnd'].value){
      return
    }

    this.formDataComponent.status ===  'INVALID'  ? this.disabledSend = true :  this.disabledSend = false

  }

  htmlToElement(html: string) {
    const template = document.createElement('template')
    html = html.trim()
    template.innerHTML = html
    return template.content.firstChild
  }

  reset() {
    this.formDataComponent.reset()
    Object.keys(this.formDataComponent.controls).map((item: any)=>{
      const itemError: any = document.getElementById(
        item + 'Error'
      )
      itemError.remove()
      const element: any = document.getElementById(item)
      element.classList.remove('invalidInput')
    })

  }


  send() {

  }

  onSubmit() {
  }

}
