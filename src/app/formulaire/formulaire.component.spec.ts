import { Component } from '@angular/core';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent {
  onSubmit(form: any) {
    console.log('Formulaire soumis :', form.value);
  }
}
