import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'ufw-monorepo-root',
  template: ` <h1>Sup</h1> `,
  styles: [],
})
export class AppComponent {
  title = 'client';
}
