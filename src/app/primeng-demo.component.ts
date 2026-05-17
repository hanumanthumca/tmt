import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-primeng-demo',
  standalone: true,
  imports: [ButtonModule, CardModule, InputTextModule, FormsModule],
  template: `
    <div class="min-h-screen bg-surface-50 p-8">
      <div class="max-w-4xl mx-auto space-y-8">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-primary-600 mb-2">PrimeNG + Tailwind CSS</h1>
          <p class="text-lg text-text-color-secondary">Angular Project with Modern UI Components</p>
        </div>

        <!-- PrimeNG Button Examples -->
        <p-card styleClass="shadow-md">
          <ng-template pTemplate="header">
            <div class="bg-primary-500 text-white p-6 rounded-t-lg">
              <h2 class="text-2xl font-semibold">PrimeNG Buttons</h2>
            </div>
          </ng-template>
          
          <div class="space-y-4">
            <p class="text-text-color">Explore various PrimeNG button styles combined with Tailwind CSS:</p>
            <div class="flex flex-wrap gap-3">
              <p-button label="Primary" icon="pi pi-check"></p-button>
              <p-button label="Success" severity="success" icon="pi pi-check"></p-button>
              <p-button label="Help" severity="help" icon="pi pi-question-circle"></p-button>
              <p-button label="Danger" severity="danger" icon="pi pi-times"></p-button>
              <p-button label="Info" severity="info" icon="pi pi-info-circle"></p-button>
            </div>
          </div>
        </p-card>

        <!-- Input Example -->
        <p-card styleClass="shadow-md">
          <ng-template pTemplate="header">
            <div class="bg-primary-500 text-white p-6 rounded-t-lg">
              <h2 class="text-2xl font-semibold">Form Components</h2>
            </div>
          </ng-template>
          
          <div class="space-y-4">
            <div class="flex flex-col gap-2">
              <label for="email" class="font-semibold text-text-color">Email Address</label>
              <input pInputText 
                     id="email" 
                     [(ngModel)]="email" 
                     type="email"
                     placeholder="Enter your email"
                     class="w-full">
            </div>
            <div class="flex flex-col gap-2">
              <label for="message" class="font-semibold text-text-color">Message</label>
              <textarea pInputText 
                        id="message" 
                        [(ngModel)]="message"
                        placeholder="Enter your message"
                        rows="4"
                        class="w-full"></textarea>
            </div>
            <p-button label="Submit" icon="pi pi-send" (onClick)="onSubmit()"></p-button>
          </div>
        </p-card>

        <!-- Info Section -->
        <p-card styleClass="shadow-md border-l-4 border-primary-500">
          <ng-template pTemplate="header">
            <div class="bg-surface-100 p-6 rounded-t-lg">
              <h2 class="text-xl font-semibold text-primary-600">✅ Setup Complete!</h2>
            </div>
          </ng-template>
          
          <div class="space-y-3 text-text-color">
            <p><strong>PrimeNG v21.1.6</strong> is now integrated with your Angular project</p>
            <p><strong>Tailwind CSS v3.4.1</strong> provides utility-first styling</p>
            <p><strong>tailwindcss-primeui</strong> plugin enables seamless integration</p>
            <p class="pt-3 text-sm text-text-color-secondary">
              Start using PrimeNG components with Tailwind utilities for a powerful development experience!
            </p>
          </div>
        </p-card>
      </div>
    </div>
  `,
  styles: []
})
export class PrimeNGDemoComponent {
  email = '';
  message = '';

  onSubmit() {
    console.log('Form submitted:', { email: this.email, message: this.message });
    alert(`Email: ${this.email}\nMessage: ${this.message}`);
  }
}
