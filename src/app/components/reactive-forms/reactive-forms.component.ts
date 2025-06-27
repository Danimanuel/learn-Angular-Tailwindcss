import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent implements OnInit, OnDestroy {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  formulario = this.fb.group({
    nome: [''],
    email: [''],
    telefone: [''],
  });

  constructor() {
    console.log('componente Carregado no construtor!!');
  }

  ngOnInit(): void {
    console.log('componente Carregado no ngonit!!');
  }


  enviar() {
    this.http.post('https://jsonplaceholder.typicode.com/posts', this.formulario.value)
      .subscribe(res => console.log('enviado!', res));
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('componente Destruido no ngONDESTROY!!');
  }


}
