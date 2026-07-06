import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-nav',
  template: `
    <nav class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 z-50">
      <div class="flex justify-around items-center h-16 max-w-md mx-auto">
        <!-- Inicio -->
        <button
          (click)="navigateTo('/home')"
          class="flex flex-col items-center justify-center w-full h-full"
          [class.text-blue-600]="isActive('/home')"
          [class.text-gray-500]="!isActive('/home')"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span class="text-xs mt-0.5">Inicio</span>
        </button>

        <!-- Buscar -->
        <button
          (click)="navigateTo('/search')"
          class="flex flex-col items-center justify-center w-full h-full"
          [class.text-blue-600]="isActive('/search')"
          [class.text-gray-500]="!isActive('/search')"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <span class="text-xs mt-0.5">Buscar</span>
        </button>

        <!-- Favoritos -->
        <button
          (click)="navigateTo('/favorites')"
          class="flex flex-col items-center justify-center w-full h-full"
          [class.text-blue-600]="isActive('/favorites')"
          [class.text-gray-500]="!isActive('/favorites')"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <span class="text-xs mt-0.5">Favoritos</span>
        </button>

        <!-- Perfil -->
        <button
          (click)="navigateTo('/profile')"
          class="flex flex-col items-center justify-center w-full h-full"
          [class.text-blue-600]="isActive('/profile')"
          [class.text-gray-500]="!isActive('/profile')"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <span class="text-xs mt-0.5">Perfil</span>
        </button>
      </div>
    </nav>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class FooterNavComponent {
  constructor(private router: Router) {}

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
