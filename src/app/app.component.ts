import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],  // Le champ "Nom" est requis
      email: ['', [Validators.required, Validators.email]],  // Le champ "Email" est requis et doit être un email valide
      message: ['', Validators.required]  // Le champ "Message" est requis
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);  // Affiche les valeurs du formulaire
    } else {
      console.log('Le formulaire est invalide');
    }
  }
}
