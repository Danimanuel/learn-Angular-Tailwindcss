import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { Routes } from '@angular/router';
import { SobreComponent } from './components/sobre/sobre.component';
import { SectionComponent } from './components/section/section.component';


export const routes: Routes = [

  {
    path: '', loadComponent: () => import('./components/section/section.component').then(m => m.SectionComponent)
  },

  {
    path: 'reactiveforms', component: ReactiveFormsComponent
  },
  {
    path: 'header', component: HeaderComponent
  },
  {
    path: 'footer', component: FooterComponent
  },
  {
    path: 'contacto', component: ContactoComponent
  },
  {
    path: 'sobre', component: SobreComponent
  },

];
