import { Component } from '@angular/core';
import { ReactiveFormsComponent } from "../reactive-forms/reactive-forms.component";
import { RouterOutlet } from '@angular/router';
import { AppComponent } from "../../app.component";

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

}
