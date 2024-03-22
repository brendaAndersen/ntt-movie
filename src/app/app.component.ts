import { Component } from '@angular/core';

  @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  template: `<input [formControl]="formControl" />`,
})
export class AppComponent {
  title = 'ntt-movie';
}
