import { RouterModule } from '@angular/router';
import { Component, HostBinding } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:3300', options: {} };
@Component({
  standalone: true,
  selector: 'ufw-root',
  template: `
    <ufw-header />
    <ufw-main class="flex-grow">
      <router-outlet></router-outlet>
    </ufw-main>
    <ufw-footer />
  `,
  styles: [],
  imports: [RouterModule, HeaderComponent, FooterComponent, MainComponent],
})
export class AppComponent {
  title = 'client';
  @HostBinding('class') class = 'flex flex-col h-full p-2';
}
