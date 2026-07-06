import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header.component';
import { FooterNavComponent } from './footer-nav.component';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, HeaderComponent, FooterNavComponent],
  template: `
    <div class="min-h-screen bg-gray-50">
      <!-- Header con Logo -->
      <app-header></app-header>

      <!-- Contenido Principal -->
      <main class="pt-14 pb-16">
        <div class="max-w-md mx-auto px-4 py-4">
          <router-outlet></router-outlet>
        </div>
      </main>

      <!-- Menú Inferior -->
      <app-footer-nav></app-footer-nav>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class MainLayoutComponent {}