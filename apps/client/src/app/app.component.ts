import { RouterModule } from '@angular/router';
import { Component, HostBinding } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { BooksService } from './books/books.service';

@Component({
  standalone: true,
  selector: 'ufw-root',
  template: `
    <ufw-header />
    <ufw-main class="flex-grow"> </ufw-main>
    <ufw-footer />
  `,
  styles: [],
  imports: [RouterModule, HeaderComponent, FooterComponent, MainComponent],
  providers: [BooksService],
})
export class AppComponent {
  title = 'client';
  @HostBinding('class') class = 'flex flex-col h-full p-2';

  constructor(private booksService: BooksService) {}
}
