import { Component } from '@angular/core';
import { ServeiAutenticarService } from './servei-autenticar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lesmevespelis';
  constructor(public serveiAutenticar: ServeiAutenticarService) {}
}
