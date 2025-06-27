import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'reactiveforms', component: ReactiveFormsComponent
  },
  {
    path: 'header', component: HeaderComponent
  },
  {
    path: 'footer', component: FooterComponent
  }
];
