import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  theme?: any = document.getElementById('theme');

  changeTheme(theme: string): void {
    this.theme.setAttribute('data-theme', theme);
  }
}
