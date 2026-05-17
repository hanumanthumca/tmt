import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNGDemoComponent } from './primeng-demo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PrimeNGDemoComponent],
  template: '<router-outlet></router-outlet>',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tmt-angular-app');
}
