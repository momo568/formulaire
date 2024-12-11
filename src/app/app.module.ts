import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Nécessaire pour les formulaires réactifs
import { AppComponent } from './app.component';
import { FormulaireComponent } from './formulaire/formulaire.component'; // Importez ici

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent, // Ajoutez le composant ici
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
