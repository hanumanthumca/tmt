import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styles: [
    `
      .page-header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
        padding: 1rem 2rem;
        background: #111827;
        color: #fff;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      }

      .page-header__brand {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      .page-header__logo {
        height: 56px;
        width: auto;
        display: block;
      }
    `
  ]
})
export class HeaderComponent {}
