import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainBannerComponent } from './components/main-banner/main-banner.component';
import { ShortenerComponent } from './components/shortener/shortener.component';
import { CardsComponent } from './components/cards/cards.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, MainBannerComponent, ShortenerComponent, CardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Frontendmentor-URL-shortening-API-landing-page';
}
