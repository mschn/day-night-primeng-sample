import { DOCUMENT } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputSwitchModule, FormsModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  #document = inject(DOCUMENT);
  isDarkMode = false;

  constructor() {
    if (this.isSystemDark()) {
      this.toggleLightDark();
    }
  }
  
  isSystemDark(): boolean {
    return window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches;
  }

  toggleLightDark() {
    const linkElement = this.#document.getElementById('app-theme') as HTMLLinkElement;
    if (linkElement.href.includes('light')) {
      linkElement.href = 'theme-dark.css';
      this.isDarkMode = true;
    } else {
      linkElement.href = 'theme-light.css';
      this.isDarkMode = false;
    }
  }
}
