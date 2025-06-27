import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ReactiveFormsComponent } from "./components/reactive-forms/reactive-forms.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent, FooterComponent, ReactiveFormsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formulario-app';
}
