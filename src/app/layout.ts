import { Component, inject, OnDestroy } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { HeaderComponent } from './header/header';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, RouterModule],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css']
})
export class LayoutComponent implements OnDestroy {
  private readonly router = inject(Router);
  activeTab = this.getActiveTabFromUrl();
  private readonly subscription = this.router.events
    .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
    .subscribe(() => {
      this.activeTab = this.getActiveTabFromUrl();
    });

  onTabChange(value: string | number | undefined): void {
    if (typeof value === 'string') {
      this.router.navigate([value]);
    }
  }

  get activeTabLabel(): string {
    return {
      login: 'Login',
      request: 'Request',
      portal: 'Portal',
      status: 'Status',
      'my-tasks': 'My Tasks'
    }[this.activeTab] ?? 'Login';
  }

  private getActiveTabFromUrl(): string {
    const segments = this.router.url.split('/').filter(Boolean);
    return segments.length ? segments[segments.length - 1] : 'login';
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
